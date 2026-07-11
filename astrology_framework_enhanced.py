"""
Enhanced Astrology Interpretation and Strength Calculation Framework
Integrates comprehensive chart scoring rubric with advanced techniques
Version 2.0 - Complete Natal Chart Interpretation System
"""

from typing import Dict, List, Tuple, Optional, Set
from dataclasses import dataclass, field
from enum import Enum
import json
from collections import defaultdict


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
    CHIRON = "Chiron"


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


class AspectType(Enum):
    """Major and minor aspect types"""
    CONJUNCTION = "Conjunction"
    OPPOSITION = "Opposition"
    TRINE = "Trine"
    SQUARE = "Square"
    SEXTILE = "Sextile"
    SEMI_SQUARE = "Semi-Square"
    SESQUIQUADRATE = "Sesquiquadrate"
    QUINCUNX = "Quincunx"
    SEMI_SEXTILE = "Semi-Sextile"


class HouseType(Enum):
    """House categories"""
    ANGULAR = "Angular"
    SUCCEDENT = "Succedent"
    CADENT = "Cadent"


@dataclass
class PlanetPosition:
    """Position of a planet in the chart"""
    planet: Planet
    sign: Sign
    degree: float
    house: House
    retrograde: bool = False
    speed: float = 0.0
    combust: bool = False
    out_of_bounds: bool = False
    stationary: bool = False


@dataclass
class Aspect:
    """Aspect between two planets"""
    planet1: Planet
    planet2: Planet
    angle: float
    orb: float
    aspect_type: AspectType
    applying: bool = True
    strength: float = 1.0


@dataclass
class AspectPattern:
    """Complex aspect patterns"""
    pattern_type: str  # Grand Cross, T-Square, Grand Trine, Kite, Yod, etc.
    planets: List[Planet]
    points: int


@dataclass
class ChartAnalysisScore:
    """Comprehensive chart analysis score"""
    chart_components_score: int = 0
    interpretation_stages_score: int = 0
    advanced_techniques_score: int = 0
    total_score: int = 0
    proficiency_level: str = ""
    breakdown: Dict = field(default_factory=dict)


class AdvancedAstrologyFramework:
    """Enhanced framework with comprehensive scoring rubric"""
    
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
    
    # Planetary strength factors
    STRENGTH_FACTORS_POSITIVE = {
        "angular_within_10_degrees": 5,
        "dignified_domicile_exaltation": 4,
        "direct_motion": 2,
        "above_horizon_sect_appropriate": 2,
        "many_supportive_aspects": 3,
        "beneficial_configuration": 3,
        "chart_ruler": 5,
        "singleton_status": 3,
        "final_dispositor": 4
    }
    
    STRENGTH_FACTORS_NEGATIVE = {
        "cadent_house": -2,
        "debilitated_detriment_fall": -4,
        "retrograde": -2,
        "combust_within_8_of_sun": -3,
        "below_horizon_against_sect": -2,
        "many_challenging_aspects": -2,
        "challenging_configuration": -1,
        "intercepted": -3
    }
    
    # Life area emphasis scoring
    LIFE_AREAS = {
        "self_identity": {"points": 50, "components": ["1st_house", "Sun", "Mars"]},
        "resources_values": {"points": 30, "components": ["2nd_house", "Venus", "Taurus"]},
        "communication": {"points": 30, "components": ["3rd_house", "Mercury", "Gemini"]},
        "home_family": {"points": 50, "components": ["4th_house", "Moon", "Cancer", "IC"]},
        "creativity_romance": {"points": 40, "components": ["5th_house", "Venus", "Leo"]},
        "work_health": {"points": 35, "components": ["6th_house", "Mercury", "Virgo"]},
        "relationships": {"points": 50, "components": ["7th_house", "Venus", "Libra", "DC"]},
        "transformation": {"points": 40, "components": ["8th_house", "Pluto", "Scorpio"]},
        "philosophy_travel": {"points": 35, "components": ["9th_house", "Jupiter", "Sagittarius"]},
        "career_public": {"points": 50, "components": ["10th_house", "Saturn", "Capricorn", "MC"]},
        "community": {"points": 30, "components": ["11th_house", "Uranus", "Aquarius"]},
        "spirituality": {"points": 40, "components": ["12th_house", "Neptune", "Pisces"]}
    }
    
    # Aspect patterns and their point values
    ASPECT_PATTERNS = {
        "grand_cross": 5,
        "t_square": 5,
        "grand_trine": 4,
        "kite": 4,
        "yod": 3,
        "mystic_rectangle": 3,
        "stellium": 3,
        "thor_hammer": 3
    }
    
    def __init__(self, chart_data: Dict):
        """Initialize framework with chart data"""
        self.chart_data = chart_data
        self.planets: List[PlanetPosition] = []
        self.aspects: List[Aspect] = []
        self.aspect_patterns: List[AspectPattern] = []
        self.is_diurnal = chart_data.get('is_diurnal', True)
        self.ascendant_sign = chart_data.get('ascendant_sign', Sign.ARIES)
        self.ascendant_degree = chart_data.get('ascendant_degree', 0.0)
        self.midheaven_sign = chart_data.get('midheaven_sign', Sign.CAPRICORN)
        self.chart_ruler = None
        self.final_dispositor = None
        self.singletons: Dict[Element, List[Planet]] = defaultdict(list)
        self.hemisphere_emphasis = {}
        self.chart_shape = ""
    
    def add_planet(self, planet: Planet, sign: Sign, degree: float, house: House,
                   retrograde: bool = False, speed: float = 0.0, combust: bool = False,
                   out_of_bounds: bool = False, stationary: bool = False):
        """Add a planet position to the chart"""
        planet_pos = PlanetPosition(
            planet=planet,
            sign=sign,
            degree=degree,
            house=house,
            retrograde=retrograde,
            speed=speed,
            combust=combust,
            out_of_bounds=out_of_bounds,
            stationary=stationary
        )
        self.planets.append(planet_pos)
    
    def calculate_planetary_strength(self, planet_pos: PlanetPosition) -> Dict:
        """Calculate comprehensive planetary strength score"""
        score = 0
        factors = {}
        
        # Angular placement
        if planet_pos.house in [House.FIRST, House.FOURTH, House.SEVENTH, House.TENTH]:
            if planet_pos.degree <= 10:
                score += self.STRENGTH_FACTORS_POSITIVE["angular_within_10_degrees"]
                factors["angular_within_10_degrees"] = 5
        
        # Dignity
        if self._is_dignified(planet_pos):
            score += self.STRENGTH_FACTORS_POSITIVE["dignified_domicile_exaltation"]
            factors["dignified"] = 4
        elif self._is_debilitated(planet_pos):
            score += self.STRENGTH_FACTORS_NEGATIVE["debilitated_detriment_fall"]
            factors["debilitated"] = -4
        
        # Motion
        if not planet_pos.retrograde and planet_pos.planet not in [Planet.SUN, Planet.MOON]:
            score += self.STRENGTH_FACTORS_POSITIVE["direct_motion"]
            factors["direct_motion"] = 2
        elif planet_pos.retrograde:
            score += self.STRENGTH_FACTORS_NEGATIVE["retrograde"]
            factors["retrograde"] = -2
        
        # Combustion
        if planet_pos.combust:
            score += self.STRENGTH_FACTORS_NEGATIVE["combust_within_8_of_sun"]
            factors["combust"] = -3
        
        # House type
        if planet_pos.house in [House.SIXTH, House.EIGHTH, House.TWELFTH]:
            score += self.STRENGTH_FACTORS_NEGATIVE["cadent_house"]
            factors["cadent_house"] = -2
        
        # Chart ruler bonus
        if self.chart_ruler == planet_pos.planet:
            score += self.STRENGTH_FACTORS_POSITIVE["chart_ruler"]
            factors["chart_ruler"] = 5
        
        # Final dispositor bonus
        if self.final_dispositor == planet_pos.planet:
            score += self.STRENGTH_FACTORS_POSITIVE["final_dispositor"]
            factors["final_dispositor"] = 4
        
        interpretation = self._interpret_planetary_strength(score)
        
        return {
            "total_score": score,
            "factors": factors,
            "interpretation": interpretation
        }
    
    def calculate_chart_components_score(self) -> int:
        """Calculate Part 1: Chart Components Score (300 points)"""
        score = 0
        
        # Luminaries (40 points)
        sun_planet = next((p for p in self.planets if p.planet == Planet.SUN), None)
        moon_planet = next((p for p in self.planets if p.planet == Planet.MOON), None)
        
        if sun_planet:
            score += 20  # Sun analysis
        if moon_planet:
            score += 20  # Moon analysis
        
        # Ascendant and Angles (60 points)
        score += 20  # Ascendant
        score += 15  # Midheaven
        score += 10  # Descendant
        score += 10  # IC
        score += 5   # Part of Fortune
        
        # Personal Planets (50 points)
        personal_planets = [Planet.MERCURY, Planet.VENUS, Planet.MARS, Planet.JUPITER, Planet.SATURN]
        for planet in personal_planets:
            if any(p.planet == planet for p in self.planets):
                score += 10
        
        # Outer Planets (30 points)
        outer_planets = [Planet.URANUS, Planet.NEPTUNE, Planet.PLUTO]
        for planet in outer_planets:
            if any(p.planet == planet for p in self.planets):
                score += 10
        
        # Nodal Axis (20 points)
        if any(p.planet == Planet.NORTH_NODE for p in self.planets):
            score += 10
        if any(p.planet == Planet.SOUTH_NODE for p in self.planets):
            score += 10
        
        # Houses (60 points)
        score += 32  # Angular houses
        score += 16  # Succedent houses
        score += 12  # Cadent houses
        
        # Aspects (40 points)
        score += 30  # Major aspects
        score += 10  # Minor aspects
        
        return min(score, 300)
    
    def calculate_interpretation_stages_score(self) -> int:
        """Calculate Part 3: Interpretation Stages Score (150 points)"""
        score = 0
        
        # Stage 1: Overview (30 points)
        score += 30
        
        # Stage 2: Big Three (20 points)
        score += 20
        
        # Stage 3: Chart Ruler (10 points)
        score += 10
        
        # Stage 4: Personal Planets (20 points)
        score += 20
        
        # Stage 5: Houses (10 points)
        score += 10
        
        # Stage 6: Aspects (20 points)
        score += 20
        
        # Stage 7: Outer Planets (10 points)
        score += 10
        
        # Stage 8: Nodes (20 points)
        score += 20
        
        # Stage 9: Synthesis (10 points)
        score += 10
        
        return score
    
    def calculate_advanced_techniques_score(self) -> int:
        """Calculate Part 7: Advanced Techniques Score (270 points)"""
        score = 0
        
        # Dignities (25 points)
        score += 25
        
        # Aspect Patterns (30 points)
        for pattern in self.aspect_patterns:
            score += pattern.points
        score = min(score, 30)
        
        # House Systems (20 points)
        score += 20
        
        # Planetary Conditions (25 points)
        score += 25
        
        # Arabic Parts (15 points)
        score += 15
        
        # Special Features (20 points)
        score += 20
        
        # Timing (20 points)
        score += 20
        
        # Specialized (25 points)
        score += 25
        
        # Synthesis Templates (30 points)
        score += 30
        
        # Advanced Scoring (30 points)
        score += 30
        
        # Integration Mastery (40 points)
        score += 40
        
        # Mastery Checklist (20 points)
        score += 20
        
        return min(score, 270)
    
    def calculate_life_area_emphasis(self) -> Dict[str, int]:
        """Calculate emphasis in each life area"""
        emphasis = {}
        
        for area, data in self.LIFE_AREAS.items():
            area_score = 0
            
            for component in data["components"]:
                # Check if component is present in chart
                if component.startswith("house_"):
                    house_num = int(component.split("_")[1])
                    if any(p.house.value == house_num for p in self.planets):
                        area_score += 5
                else:
                    # Check for planet
                    try:
                        planet = Planet[component.upper()]
                        if any(p.planet == planet for p in self.planets):
                            area_score += 5
                    except KeyError:
                        pass
            
            emphasis[area] = min(area_score, data["points"])
        
        return emphasis
    
    def generate_comprehensive_report(self) -> Dict:
        """Generate complete chart analysis report"""
        chart_components = self.calculate_chart_components_score()
        interpretation_stages = self.calculate_interpretation_stages_score()
        advanced_techniques = self.calculate_advanced_techniques_score()
        total_score = chart_components + interpretation_stages + advanced_techniques
        
        proficiency = self._determine_proficiency_level(total_score)
        
        report = {
            "chart_summary": {
                "sect": "Diurnal" if self.is_diurnal else "Nocturnal",
                "ascendant": self.ascendant_sign.name,
                "midheaven": self.midheaven_sign.name,
                "chart_ruler": self.chart_ruler.value if self.chart_ruler else "Not determined",
                "final_dispositor": self.final_dispositor.value if self.final_dispositor else "Not determined"
            },
            "scoring": {
                "chart_components": chart_components,
                "interpretation_stages": interpretation_stages,
                "advanced_techniques": advanced_techniques,
                "total_score": total_score,
                "maximum_possible": 750,
                "percentage": round((total_score / 750) * 100, 1)
            },
            "proficiency": {
                "level": proficiency,
                "score_range": f"{total_score}/750"
            },
            "planetary_strengths": [],
            "life_area_emphasis": self.calculate_life_area_emphasis(),
            "aspect_patterns": [
                {
                    "pattern": p.pattern_type,
                    "planets": [pl.value for pl in p.planets],
                    "points": p.points
                }
                for p in self.aspect_patterns
            ]
        }
        
        # Add planetary strength analysis
        for planet_pos in self.planets:
            strength = self.calculate_planetary_strength(planet_pos)
            report["planetary_strengths"].append({
                "planet": planet_pos.planet.value,
                "sign": planet_pos.sign.name,
                "house": planet_pos.house.value,
                "degree": planet_pos.degree,
                "retrograde": planet_pos.retrograde,
                "strength_score": strength["total_score"],
                "interpretation": strength["interpretation"]
            })
        
        return report
    
    def _is_dignified(self, planet_pos: PlanetPosition) -> bool:
        """Check if planet is dignified"""
        if planet_pos.planet in self.DOMICILE_RULERS.get(planet_pos.sign, []):
            return True
        if self.EXALTATION_RULERS.get(planet_pos.sign) == planet_pos.planet:
            return True
        return False
    
    def _is_debilitated(self, planet_pos: PlanetPosition) -> bool:
        """Check if planet is debilitated"""
        detriment_sign = self._get_opposite_sign(planet_pos.sign)
        if planet_pos.planet in self.DOMICILE_RULERS.get(detriment_sign, []):
            return True
        
        fall_signs = {v: k for k, v in self.EXALTATION_RULERS.items()}
        if planet_pos.planet in fall_signs:
            fall_sign = fall_signs[planet_pos.planet]
            opposite_fall = self._get_opposite_sign(fall_sign)
            if planet_pos.sign == opposite_fall:
                return True
        
        return False
    
    def _get_opposite_sign(self, sign: Sign) -> Sign:
        """Get the opposite sign in the zodiac"""
        opposite_value = ((sign.value + 5) % 12) + 1
        return Sign(opposite_value)
    
    def _interpret_planetary_strength(self, score: int) -> str:
        """Interpret planetary strength score"""
        if score >= 25:
            return "Exceptionally strong - natural talent, dominant theme"
        elif score >= 15:
            return "Strong - ease of expression, gift"
        elif score >= 5:
            return "Moderate - context-dependent"
        elif score >= -4:
            return "Neutral - forge own path"
        elif score >= -14:
            return "Challenged - requires conscious development"
        else:
            return "Significantly weak - major growth area"
    
    def _determine_proficiency_level(self, score: int) -> str:
        """Determine proficiency level based on score"""
        if score >= 551:
            return "Master (551-750)"
        elif score >= 401:
            return "Advanced (401-550)"
        elif score >= 201:
            return "Intermediate (201-400)"
        else:
            return "Beginner (0-200)"


def create_example_advanced_chart():
    """Create an advanced example chart"""
    chart_data = {
        'is_diurnal': True,
        'ascendant_sign': Sign.LEO,
        'ascendant_degree': 15.5,
        'midheaven_sign': Sign.TAURUS
    }
    
    framework = AdvancedAstrologyFramework(chart_data)
    
    # Add planets
    framework.add_planet(Planet.SUN, Sign.LEO, 15.5, House.FIRST, False, 1.0)
    framework.add_planet(Planet.MOON, Sign.TAURUS, 22.3, House.TENTH, False, 13.2)
    framework.add_planet(Planet.MERCURY, Sign.VIRGO, 8.7, House.SECOND, False, 1.5)
    framework.add_planet(Planet.VENUS, Sign.CANCER, 18.2, House.TWELFTH, False, 1.2)
    framework.add_planet(Planet.MARS, Sign.ARIES, 25.8, House.NINTH, False, 0.5)
    framework.add_planet(Planet.JUPITER, Sign.SAGITTARIUS, 12.4, House.FIFTH, True, -0.1)
    framework.add_planet(Planet.SATURN, Sign.CAPRICORN, 5.9, House.SIXTH, False, 0.1)
    framework.add_planet(Planet.URANUS, Sign.AQUARIUS, 18.2, House.SEVENTH, False, 0.05)
    framework.add_planet(Planet.NEPTUNE, Sign.PISCES, 22.1, House.EIGHTH, False, 0.03)
    framework.add_planet(Planet.PLUTO, Sign.SCORPIO, 28.5, House.FOURTH, False, 0.02)
    framework.add_planet(Planet.NORTH_NODE, Sign.GEMINI, 10.3, House.ELEVENTH, False, 0.0)
    framework.add_planet(Planet.SOUTH_NODE, Sign.SAGITTARIUS, 10.3, House.FIFTH, False, 0.0)
    
    # Set chart ruler (Leo Ascendant = Sun ruler)
    framework.chart_ruler = Planet.SUN
    framework.final_dispositor = Planet.SUN
    
    # Add aspect pattern
    pattern = AspectPattern(
        pattern_type="T-Square",
        planets=[Planet.SUN, Planet.SATURN, Planet.URANUS],
        points=5
    )
    framework.aspect_patterns.append(pattern)
    
    return framework


if __name__ == "__main__":
    # Create example chart
    framework = create_example_advanced_chart()
    
    # Generate comprehensive report
    report = framework.generate_comprehensive_report()
    
    # Print report as JSON
    print(json.dumps(report, indent=2))
