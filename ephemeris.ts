import swisseph from "swisseph";

/**
 * Initialize Swiss Ephemeris
 * This sets up the ephemeris data path and initializes the library
 */
export function initializeEphemeris() {
  try {
    // Set the ephemeris path to use bundled data
    swisseph.swe_set_ephe_path("./");
  } catch (error) {
    console.warn("Ephemeris initialization warning:", error);
  }
}

/**
 * Planetary positions for astrological calculations
 */
export interface PlanetaryPosition {
  name: string;
  longitude: number; // 0-360 degrees
  latitude: number;
  distance: number; // AU (Astronomical Units)
  speed: number; // degrees per day
  retrograde: boolean;
  sign: string;
  signDegrees: number; // 0-30 degrees within sign
  house?: number;
}

/**
 * Calculate planetary positions for a given date and time
 * @param year - Year (e.g., 1990)
 * @param month - Month (1-12)
 * @param day - Day (1-31)
 * @param hour - Hour (0-23)
 * @param minute - Minute (0-59)
 * @param second - Second (0-59)
 * @param timezone - Timezone offset from UTC (e.g., -5 for EST)
 * @returns Array of planetary positions
 */
export function calculatePlanetaryPositions(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  second: number,
  timezone: number = 0
): PlanetaryPosition[] {
  try {
    initializeEphemeris();

    // Convert local time to UTC
    const utcHour = hour - timezone;
    const julianDay = swisseph.swe_utc_to_jd(year, month, day, utcHour, minute, second, 1)[1];

    // Define planets to calculate (0=Sun, 1=Moon, 2=Mercury, etc.)
    const planets = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const planetNames = [
      "Sun",
      "Moon",
      "Mercury",
      "Venus",
      "Mars",
      "Jupiter",
      "Saturn",
      "Uranus",
      "Neptune",
      "Pluto",
    ];

    const positions: PlanetaryPosition[] = [];

    for (let i = 0; i < planets.length; i++) {
      const result = swisseph.swe_calc(julianDay, planets[i], 0);

      if (result && result.longitude !== undefined) {
        const longitude = result.longitude;
        const signIndex = Math.floor(longitude / 30);
        const signDegrees = longitude % 30;
        const retrograde = result.speed < 0;

        positions.push({
          name: planetNames[i],
          longitude: longitude,
          latitude: result.latitude || 0,
          distance: result.distance || 0,
          speed: result.speed || 0,
          retrograde: retrograde,
          sign: getZodiacSign(signIndex),
          signDegrees: signDegrees,
        });
      }
    }

    return positions;
  } catch (error) {
    console.error("Error calculating planetary positions:", error);
    return [];
  }
}

/**
 * Calculate house cusps using Placidus system
 * @param julianDay - Julian day number
 * @param latitude - Geographic latitude
 * @param longitude - Geographic longitude
 * @returns House cusps (1-12)
 */
export function calculateHouseCusps(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  second: number,
  latitude: number,
  longitude: number,
  timezone: number = 0
): number[] {
  try {
    initializeEphemeris();

    // Convert local time to UTC
    const utcHour = hour - timezone;
    const julianDay = swisseph.swe_utc_to_jd(year, month, day, utcHour, minute, second, 1)[1];

    // Calculate house cusps using Placidus system (1 = Placidus)
    const result = swisseph.swe_houses(julianDay, latitude, longitude, "P");

    if (result && result.house) {
      return result.house;
    }

    return [];
  } catch (error) {
    console.error("Error calculating house cusps:", error);
    return [];
  }
}

/**
 * Get zodiac sign name from index (0-11)
 */
function getZodiacSign(index: number): string {
  const signs = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ];
  return signs[index % 12];
}

/**
 * Determine which house a planet is in
 * @param longitude - Planet's longitude
 * @param cusps - House cusps array
 * @returns House number (1-12)
 */
export function getPlanetHouse(longitude: number, cusps: number[]): number {
  if (!cusps || cusps.length < 12) return 1;

  for (let i = 0; i < 12; i++) {
    const current = cusps[i];
    const next = cusps[(i + 1) % 12];

    // Handle wraparound at 0/360 degrees
    if (next < current) {
      if (longitude >= current || longitude < next) {
        return i + 1;
      }
    } else {
      if (longitude >= current && longitude < next) {
        return i + 1;
      }
    }
  }

  return 1;
}

/**
 * Calculate aspects between two planets
 * @param planet1Longitude - First planet's longitude
 * @param planet2Longitude - Second planet's longitude
 * @returns Aspect object or null if no major aspect
 */
export interface Aspect {
  type: string;
  angle: number;
  orb: number;
  power: number; // 0-100
}

export function calculateAspect(planet1Longitude: number, planet2Longitude: number): Aspect | null {
  const diff = Math.abs(planet1Longitude - planet2Longitude);
  const angle = diff > 180 ? 360 - diff : diff;

  // Major aspects with orbs
  const aspects = [
    { type: "Conjunction", angle: 0, orb: 8, power: 100 },
    { type: "Sextile", angle: 60, orb: 6, power: 60 },
    { type: "Square", angle: 90, orb: 8, power: 80 },
    { type: "Trine", angle: 120, orb: 8, power: 80 },
    { type: "Opposition", angle: 180, orb: 8, power: 100 },
  ];

  for (const aspect of aspects) {
    const diff = Math.abs(angle - aspect.angle);
    if (diff <= aspect.orb) {
      return {
        type: aspect.type,
        angle: angle,
        orb: diff,
        power: Math.round(aspect.power * (1 - diff / aspect.orb)),
      };
    }
  }

  return null;
}
