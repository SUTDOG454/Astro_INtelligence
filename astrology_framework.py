"""
Astrology Interpretation and Strength Calculation Framework
A comprehensive system for natal chart analysis combining Western and Vedic techniques
"""

from typing import Dict, List, Tuple, Optional
from dataclasses import dataclass
from enum import Enum
import json


class Planet(Enum):
    """Planetary bodies"""
    SUN = "Sun"
    MOON = "Moon"
    MERCURY = "Mercury"
    VENUS = "Venus"
    MARS = "Mars"
    JUPITER = "Jupiter"
    SATURN = "Saturn"
    URANUS = "Uranus"
    NEPTUNE = "Neptune"
    PLUTO = "Pluto"
    NORTH_NODE = "North Node"
    SOUTH_NODE = "South Node"


class Sign(Enum):
    """Zodiac signs"""
    ARIES = 1
    TAURUS = 2
    GEMINI = 3
    CANCER = 4
    LEO = 5
    VIRGO = 6
    LIBRA = 7
    SCORPIO = 8
    SAGITTARIUS = 9
    CAPRICORN = 10
    AQUARIUS = 11
    PISCES = 12


class House(Enum):
    """House numbers"""
    FIRST = 1
    SECOND = 2
    THIRD = 3
    FOURTH = 4
    FIFTH = 5
    SIXTH = 6
    SEVENTH = 7
    EIGHTH = 8
    NINTH = 9
    TENTH = 10
    ELEVENTH = 11
    TWELFTH = 12


class Quality(Enum):
    """Sign qualities"""
    CARDINAL = "Cardinal"
    FIXED = "Fixed"
    MUTABLE = "Mutable"


class Element(Enum):
    """Sign elements"""
    FIRE = "Fire"
    EARTH = "Earth"
    AIR = "Air"
    WATER = "Water"


@dataclass
class PlanetPosition:
    """Position of a planet in the chart"""
    planet: Planet
    sign: Sign
    degree: float
    house: House
    retrograde: bool = False
    speed: float = 0.0  # degrees per day


@dataclass
class Aspect:
    """Aspect between two planets"""
    planet1: Planet
    planet2: Planet
    angle: float
    orb: float
    aspect_type: str  # Conjunction, Opposition, Trine, Square, Sextile, etc.
    applying: bool = True


class AstrologyFramework:
    """Main framework for astrology calculations and interpretations"""
    
    # Essential Dignity Tables
    DOMICILE_RULERS = {
        Sign.ARIES: [Planet.MARS],
        Sign.TAURUS: [Planet.VENUS],
        Sign.GEMINI: [Planet.MERCURY],
        Sign.CANCER: [Planet.MOON],
        Sign.LEO: [Planet.SUN],
        Sign.VIRGO: [Planet.MERCURY],
        Sign.LIBRA: [Planet.VENUS],
        Sign.SCORPIO: [Planet.MARS, Planet.PLUTO],
        Sign.SAGITTARIUS: [Planet.JUPITER],
        Sign.CAPRICORN: [Planet.SATURN],
        Sign.AQUARIUS: [Planet.SATURN, Planet.URANUS],
        Sign.PISCES: [Planet.JUPITER, Planet.NEPTUNE]
    }
    
    EXALTATION_RULERS = {
        Sign.ARIES: Planet.SUN,
        Sign.TAURUS: Planet.MOON,
        Sign.CANCER: Planet.JUPITER,
        Sign.VIRGO: Planet.MERCURY,
        Sign.LIBRA: Planet.SATURN,
        Sign.CAPRICORN: Planet.MARS,
        Sign.PISCES: Planet.VENUS
    }
    
    TRIPLICITY_RULERS = {
        Element.FIRE: {
            'day': Planet.SUN,
            'night': Planet.JUPITER,
            'participating': Planet.SATURN
        },
        Element.EARTH: {
            'day': Planet.VENUS,
            'night': Planet.MOON,
            'participating': Planet.MARS
        },
        Element.AIR: {
            'day': Planet.SATURN,
            'night': Planet.MERCURY,
            'participating': Planet.JUPITER
        },
        Element.WATER: {
            'day': Planet.VENUS,
            'night': Planet.MARS,
            'participating': Planet.MOON
        }
    }
    
    SIGN_QUALITIES = {
        Sign.ARIES: Quality.CARDINAL,
        Sign.TAURUS: Quality.FIXED,
        Sign.GEMINI: Quality.MUTABLE,
        Sign.CANCER: Quality.CARDINAL,
        Sign.LEO: Quality.FIXED,
        Sign.VIRGO: Quality.MUTABLE,
        Sign.LIBRA: Quality.CARDINAL,
        Sign.SCORPIO: Quality.FIXED,
        Sign.SAGITTARIUS: Quality.MUTABLE,
        Sign.CAPRICORN: Quality.CARDINAL,
        Sign.AQUARIUS: Quality.FIXED,
        Sign.PISCES: Quality.MUTABLE
    }
    
    SIGN_ELEMENTS = {
        Sign.ARIES: Element.FIRE,
        Sign.TAURUS: Element.EARTH,
        Sign.GEMINI: Element.AIR,
        Sign.CANCER: Element.WATER,
        Sign.LEO: Element.FIRE,
        Sign.VIRGO: Element.EARTH,
        Sign.LIBRA: Element.AIR,
        Sign.SCORPIO: Element.WATER,
        Sign.SAGITTARIUS: Element.FIRE,
        Sign.CAPRICORN: Element.EARTH,
        Sign.AQUARIUS: Element.AIR,
        Sign.PISCES: Element.WATER
    }
    
    # Shadbala minimum required strengths (in Virupas)
    SHADBALA_MINIMUM = {
        Planet.SUN: 390,
        Planet.MOON: 360,
        Planet.MARS: 300,
        Planet.MERCURY: 420,
        Planet.JUPITER: 390,
        Planet.VENUS: 330,
        Planet.SATURN: 300
    }
    
    # Natural strength order (Naisargika Bala)
    NATURAL_STRENGTH = {
        Planet.SUN: 60,
        Planet.MOON: 51.43,
        Planet.VENUS: 42.86,
        Planet.JUPITER: 34.29,
        Planet.MERCURY: 25.71,
        Planet.MARS: 17.14,
        Planet.SATURN: 8.57
    }
    
    def __init__(self, chart_data: Dict):
        """Initialize framework with chart data"""
        self.chart_data = chart_data
        self.planets: List[PlanetPosition] = []
        self.aspects: List[Aspect] = []
        self.is_diurnal = chart_data.get('is_diurnal', True)
        self.ascendant_sign = chart_data.get('ascendant_sign', Sign.ARIES)
        
    def calculate_western_dignity_score(self, planet_pos: PlanetPosition) -> Dict[str, any]:
        """Calculate Western dignity score (Lilly system)"""
        score = 0
        breakdown = {}
        
        # Essential Dignities
        if planet_pos.planet in self.DOMICILE_RULERS.get(planet_pos.sign, []):
            score += 5
            breakdown['domicile'] = 5
        
        if self.EXALTATION_RULERS.get(planet_pos.sign) == planet_pos.planet:
            score += 4
            breakdown['exaltation'] = 4
        
        # Check triplicity
        element = self.SIGN_ELEMENTS[planet_pos.sign]
        triplicity = self.TRIPLICITY_RULERS[element]
        if self.is_diurnal and triplicity['day'] == planet_pos.planet:
            score += 3
            breakdown['triplicity'] = 3
        elif not self.is_diurnal and triplicity['night'] == planet_pos.planet:
            score += 3
            breakdown['triplicity'] = 3
        
        # Essential Debilities
        detriment_sign = self._get_opposite_sign(planet_pos.sign)
        if planet_pos.planet in self.DOMICILE_RULERS.get(detriment_sign, []):
            score -= 5
            breakdown['detriment'] = -5
        
        fall_signs = {v: k for k, v in self.EXALTATION_RULERS.items()}
        if planet_pos.planet in fall_signs:
            fall_sign = fall_signs[planet_pos.planet]
            opposite_fall = self._get_opposite_sign(fall_sign)
            if planet_pos.sign == opposite_fall:
                score -= 4
                breakdown['fall'] = -4
        
        # Accidental Dignities - House Placement
        house_scores = {
            House.FIRST: 5, House.TENTH: 5,
            House.SEVENTH: 4, House.FOURTH: 4, House.ELEVENTH: 4,
            House.SECOND: 3, House.FIFTH: 3,
            House.NINTH: 2,
            House.THIRD: 1
        }
        if planet_pos.house in house_scores:
            house_score = house_scores[planet_pos.house]
            score += house_score
            breakdown['house_placement'] = house_score
        
        # Accidental Debilities - House Placement
        if planet_pos.house == House.TWELFTH:
            score -= 5
            breakdown['12th_house'] = -5
        elif planet_pos.house in [House.EIGHTH, House.SIXTH]:
            score -= 2
            breakdown['difficult_house'] = -2
        
        # Motion
        if not planet_pos.retrograde and planet_pos.planet not in [Planet.SUN, Planet.MOON]:
            score += 4
            breakdown['direct_motion'] = 4
        elif planet_pos.retrograde:
            score -= 5
            breakdown['retrograde'] = -5
        
        # Speed
        if planet_pos.speed > 0:  # Swift
            score += 2
            breakdown['swift'] = 2
        elif planet_pos.speed < 0:  # Slow
            score -= 2
            breakdown['slow'] = -2
        
        return {
            'total_score': score,
            'breakdown': breakdown,
            'interpretation': self._interpret_western_score(score)
        }
    
    def calculate_shadbala(self, planet_pos: PlanetPosition) -> Dict[str, any]:
        """Calculate Shadbala (six-fold strength) for a planet"""
        
        # This is a simplified version - full Shadbala requires complex astronomical calculations
        shadbala_components = {}
        
        # 1. Sthana Bala (Positional Strength)
        sthana_bala = self._calculate_sthana_bala(planet_pos)
        shadbala_components['sthana_bala'] = sthana_bala
        
        # 2. Dig Bala (Directional Strength)
        dig_bala = self._calculate_dig_bala(planet_pos)
        shadbala_components['dig_bala'] = dig_bala
        
        # 3. Kala Bala (Temporal Strength)
        kala_bala = self._calculate_kala_bala(planet_pos)
        shadbala_components['kala_bala'] = kala_bala
        
        # 4. Chesta Bala (Motional Strength)
        chesta_bala = self._calculate_chesta_bala(planet_pos)
        shadbala_components['chesta_bala'] = chesta_bala
        
        # 5. Naisargika Bala (Natural Strength)
        naisargika_bala = self.NATURAL_STRENGTH.get(planet_pos.planet, 0)
        shadbala_components['naisargika_bala'] = naisargika_bala
        
        # 6. Drik Bala (Aspectual Strength) - requires aspect calculation
        drik_bala = 0  # Placeholder
        shadbala_components['drik_bala'] = drik_bala
        
        total_shadbala = sum(shadbala_components.values())
        
        # Convert to Rupas (1 Rupa = 60 Virupas)
        total_rupas = total_shadbala / 60
        
        minimum_required = self.SHADBALA_MINIMUM.get(planet_pos.planet, 0)
        
        return {
            'total_virupas': total_shadbala,
            'total_rupas': total_rupas,
            'components': shadbala_components,
            'minimum_required': minimum_required,
            'is_strong': total_shadbala >= minimum_required,
            'interpretation': self._interpret_shadbala(total_shadbala, minimum_required)
        }
    
    def _calculate_sthana_bala(self, planet_pos: PlanetPosition) -> float:
        """Calculate Sthana Bala (Positional Strength)"""
        strength = 0.0
        
        # Uccha Bala (Exaltation strength)
        if self.EXALTATION_RULERS.get(planet_pos.sign) == planet_pos.planet:
            strength += 60  # Full exaltation strength
        
        # Kendradi Bala (Angular house strength)
        if planet_pos.house in [House.FIRST, House.FOURTH, House.SEVENTH, House.TENTH]:
            strength += 60  # Full strength in Kendra
        elif planet_pos.house in [House.SECOND, House.FIFTH, House.EIGHTH, House.ELEVENTH]:
            strength += 30  # Half strength in Panapara
        else:
            strength += 15  # Quarter strength in Apoklima
        
        return strength
    
    def _calculate_dig_bala(self, planet_pos: PlanetPosition) -> float:
        """Calculate Dig Bala (Directional Strength)"""
        dig_bala_houses = {
            Planet.JUPITER: House.FIRST,
            Planet.MERCURY: House.FIRST,
            Planet.SUN: House.TENTH,
            Planet.MARS: House.TENTH,
            Planet.VENUS: House.FOURTH,
            Planet.MOON: House.FOURTH,
            Planet.SATURN: House.SEVENTH
        }
        
        if planet_pos.planet in dig_bala_houses:
            if planet_pos.house == dig_bala_houses[planet_pos.planet]:
                return 60  # Full directional strength
        
        return 30  # Partial strength
    
    def _calculate_kala_bala(self, planet_pos: PlanetPosition) -> float:
        """Calculate Kala Bala (Temporal Strength)"""
        strength = 0.0
        
        # Natonnata Bala (Day/Night strength)
        day_planets = [Planet.SUN, Planet.JUPITER, Planet.VENUS]
        night_planets = [Planet.MOON, Planet.MARS, Planet.SATURN]
        
        if self.is_diurnal and planet_pos.planet in day_planets:
            strength += 30
        elif not self.is_diurnal and planet_pos.planet in night_planets:
            strength += 30
        elif planet_pos.planet == Planet.MERCURY:
            strength += 30  # Mercury strong both day and night
        
        return strength
    
    def _calculate_chesta_bala(self, planet_pos: PlanetPosition) -> float:
        """Calculate Chesta Bala (Motional Strength)"""
        if planet_pos.planet in [Planet.SUN, Planet.MOON]:
            return 0  # Not applicable
        
        if planet_pos.retrograde:
            return 60  # Retrograde planets have full Chesta Bala
        elif planet_pos.speed > 1.0:
            return 40  # Fast motion
        else:
            return 20  # Normal motion
    
    def _get_opposite_sign(self, sign: Sign) -> Sign:
        """Get the opposite sign in the zodiac"""
        opposite_value = ((sign.value + 5) % 12) + 1
        return Sign(opposite_value)
    
    def _interpret_western_score(self, score: int) -> str:
        """Interpret Western dignity score"""
        if score >= 20:
            return "Extremely dignified and powerful"
        elif score >= 10:
            return "Strongly dignified"
        elif score >= 5:
            return "Moderately dignified"
        elif score >= 0:
            return "Neutral to slightly dignified"
        elif score >= -5:
            return "Slightly debilitated"
        elif score >= -10:
            return "Moderately debilitated"
        else:
            return "Severely debilitated"
    
    def _interpret_shadbala(self, total: float, minimum: float) -> str:
        """Interpret Shadbala score"""
        if total >= minimum * 1.5:
            return "Exceptionally strong - capable of producing excellent results"
        elif total >= minimum * 1.2:
            return "Very strong - well-positioned to fulfill its significations"
        elif total >= minimum:
            return "Strong enough - capable of producing positive results"
        elif total >= minimum * 0.8:
            return "Moderately weak - may struggle to produce results"
        else:
            return "Weak - limited capacity to fulfill its significations"
    
    def generate_chart_report(self) -> Dict:
        """Generate comprehensive chart analysis report"""
        report = {
            'chart_info': {
                'sect': 'Diurnal' if self.is_diurnal else 'Nocturnal',
                'ascendant': self.ascendant_sign.name
            },
            'planetary_strengths': []
        }
        
        # Analyze each planet
        for planet_pos in self.planets:
            western_score = self.calculate_western_dignity_score(planet_pos)
            shadbala_score = self.calculate_shadbala(planet_pos)
            
            planet_analysis = {
                'planet': planet_pos.planet.value,
                'sign': planet_pos.sign.name,
                'house': planet_pos.house.value,
                'degree': planet_pos.degree,
                'retrograde': planet_pos.retrograde,
                'western_dignity': western_score,
                'shadbala': shadbala_score
            }
            
            report['planetary_strengths'].append(planet_analysis)
        
        return report
    
    def add_planet(self, planet: Planet, sign: Sign, degree: float, house: House, 
                   retrograde: bool = False, speed: float = 0.0):
        """Add a planet position to the chart"""
        planet_pos = PlanetPosition(
            planet=planet,
            sign=sign,
            degree=degree,
            house=house,
            retrograde=retrograde,
            speed=speed
        )
        self.planets.append(planet_pos)


def create_example_chart():
    """Create an example chart for demonstration"""
    chart_data = {
        'is_diurnal': True,
        'ascendant_sign': Sign.LEO
    }
    
    framework = AstrologyFramework(chart_data)
    
    # Add example planets
    framework.add_planet(Planet.SUN, Sign.LEO, 15.5, House.FIRST, False, 1.0)
    framework.add_planet(Planet.MOON, Sign.TAURUS, 22.3, House.TENTH, False, 13.2)
    framework.add_planet(Planet.MERCURY, Sign.VIRGO, 8.7, House.SECOND, False, 1.5)
    framework.add_planet(Planet.VENUS, Sign.CANCER, 18.2, House.TWELFTH, False, 1.2)
    framework.add_planet(Planet.MARS, Sign.ARIES, 25.8, House.NINTH, False, 0.5)
    framework.add_planet(Planet.JUPITER, Sign.SAGITTARIUS, 12.4, House.FIFTH, True, -0.1)
    framework.add_planet(Planet.SATURN, Sign.CAPRICORN, 5.9, House.SIXTH, False, 0.1)
    
    return framework


if __name__ == "__main__":
    # Create example chart
    framework = create_example_chart()
    
    # Generate report
    report = framework.generate_chart_report()
    
    # Print report as JSON
    print(json.dumps(report, indent=2))
