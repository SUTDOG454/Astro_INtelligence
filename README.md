# Complete Western Astrology Framework System
## Comprehensive JSON Schema Collection

**Version:** 1.0  
**Created:** February 21, 2026  
**System Type:** Tropical Western Astrology

---

## 📋 Overview

This is a complete, production-ready astrology framework system consisting of four integrated JSON schemas:

1. **Natal Chart Framework** - Individual birth chart analysis
2. **Synastry/Compatibility Framework** - Relationship analysis between two charts
3. **Predictive Techniques Framework** - Timing and forecasting methods
4. **Sexual Archetypes Framework** - Specialized intimate expression analysis

Plus a **Master Integration Framework** that shows how all components work together.

---

## 📦 Framework Components

### 1️⃣ Natal Chart Framework
**File:** `natal_chart_framework.json` *(previously created)*

**Purpose:** Foundation for all astrological analysis - the individual birth chart

**Key Features:**
- Complete planetary placements (Sun through Pluto)
- 12 houses with interpretations
- Major and minor aspects
- Aspect patterns (Grand Trine, T-Square, etc.)
- Elements and modalities analysis
- Chart synthesis and life purpose indicators
- 15 interpretive sections covering all life areas

**Use When:** Starting any astrological consultation or analysis

---

### 2️⃣ Synastry/Compatibility Framework
**File:** `synastry_framework.json`

**Purpose:** Analyze relationship dynamics between two people

**Key Features:**
- **Interaspects Analysis:** All planetary connections between charts
  - Major aspects (conjunction, trine, square, opposition, sextile)
  - Minor aspects (semisquare, sesquisquare, quincunx)
  - Double whammies (reciprocal aspects)
  
- **House Overlays:** How each person's planets fall in the other's houses
  - Person A's planets in Person B's houses
  - Person B's planets in Person A's houses
  - Special emphasis on 1st, 4th, 5th, 7th, 8th houses

- **Synastry Midpoints:** Sensitive relationship activation points
  - Sun/Moon midpoint contacts
  - Venus/Mars passion points
  - Jupiter/Saturn friendship vs commitment
  - Heartbreak and healing midpoints

- **Composite Chart:** The relationship itself as an entity

- **Special Indicators:**
  - Vertex contacts (fated encounters)
  - North/South Node connections (karmic ties)
  - Asteroid synastry (Juno, Eros, Psyche, Lilith, Chiron)
  - Angle contacts (Ascendant, Descendant, IC, MC)

- **Compatibility Scoring:**
  - Overall compatibility
  - Romantic, emotional, intellectual, sexual, spiritual scores
  - Long-term potential assessment

**Use When:** 
- Romantic compatibility analysis
- Business partnership evaluation
- Friendship dynamics
- Family relationship understanding

---

### 3️⃣ Predictive Techniques Framework
**File:** `predictive_framework.json`

**Purpose:** Forecast timing and themes for life events

**Key Features:**

**Transits:**
- Current planetary positions activating natal chart
- Fast transits (days-months): Sun, Moon, Mercury, Venus, Mars
- Social transits (months-years): Jupiter, Saturn
- Generational transits (years-decades): Uranus, Neptune, Pluto
- Eclipse impacts and lunar phases

**Secondary Progressions:**
- Day-for-year progression method
- Progressed Sun (life purpose evolution)
- Progressed Moon (emotional cycles, ~27-28 year cycle)
- Progressed planets and angles
- Progressed aspects to natal chart

**Solar Arc Directions:**
- Uniform symbolic movement (~1° per year)
- Major life event timing
- Outer planet activations

**Primary Directions:**
- Ancient precision timing method
- Right ascension calculations
- Mundane and zodiacal directions

**Returns:**
- Solar Return (annual birthday chart)
- Lunar Return (monthly emotional forecast)

**Time-Lord Systems:**
- **Profections:** Annual sign advancement (house activation)
- **Firdaria:** Medieval planetary period system (75-year cycle)
- **Zodiacal Releasing:** Hellenistic timing from Fortune/Spirit

**Additional Methods:**
- Fixed stars transits/directions
- Harmonics and midpoints
- Integrated timing synthesis

**Use When:**
- Life planning and decision timing
- Understanding current life phase
- Anticipating upcoming opportunities/challenges
- Long-term life pattern analysis

---

### 4️⃣ Sexual Archetypes Framework
**File:** `sexual_archetypes_framework.json`

**Purpose:** Deep dive into sexual and intimate expression patterns

**Research Sources:**
- Jeffrey Wolf Green (zodiac sexual archetypes)
- Demetra George (asteroid sexual associations)
- Jason Holley (ongoing development)

**Key Features:**

**Zodiac Sexual Archetypes:**
- 12 signs with 10-15 sexual themes each
- Healthy vs shadow expressions
- Activation conditions and interpretation guides

**Asteroid Sexual Associations:**
- **Chiron:** Sexual wounding and healing
- **Eros:** Erotic desires and turn-ons
- **Ceres:** Nurturing through sexuality
- **Pallas:** Strategic wisdom in intimacy
- **Vesta:** Sacred sexuality, devotion, celibacy
- **Juno:** Marriage, fidelity, betrayal, sexual rage

**Activation Triggers:**
- Planets in 5th house (romance/pleasure)
- Planets in 8th house (deep intimacy/transformation)
- Venus/Mars/Pluto aspects
- Scorpio emphasis
- Lilith placements

**Analysis Components:**
- Sexual signature identification
- Activation strength assessment (strong/moderate/subtle)
- Healthy and shadow expression patterns
- Relationship sexual compatibility
- Healing and growth opportunities

**Ethical Guidelines:**
- Requires appropriate context and consent
- Sensitive trauma-aware interpretation
- Focus on growth and healing
- Privacy and boundary respect

**Use When:**
- Client requests intimacy/sexuality guidance
- Strong 5th/8th house emphasis in chart
- Relationship sexual compatibility questions
- Healing sexual wounds
- Understanding intimate expression patterns

⚠️ **Important:** Only apply when archetypes are clearly activated in the chart. Requires sensitivity and professional boundaries.

---

### 5️⃣ Master Integration Framework
**File:** `master_integration_framework.json`

**Purpose:** Shows how all frameworks connect and work together

**Key Features:**
- Complete system architecture
- Data flow between frameworks
- Comprehensive consultation workflow
- Technical implementation guide
- Database schema suggestions
- API endpoint structure
- Interpretation hierarchy and weighting
- Quality assurance standards
- Use case examples
- Ethical guidelines
- Future enhancement roadmap

**Use When:** 
- Setting up complete astrology system
- Understanding framework relationships
- Building software applications
- Planning consultations
- Training practitioners

---

## 🔄 How the Frameworks Connect

```
NATAL CHART (Foundation)
    ├── SYNASTRY (Relationship Analysis)
    │   └── SEXUAL ARCHETYPES (Intimate Compatibility)
    │
    └── PREDICTIVE (Timing & Forecasting)
        └── Relationship Timing (when synastry exists)
```

**Integration Flow:**

1. **Natal → Synastry:** Two natal charts compared for compatibility
2. **Natal → Predictive:** Natal chart + current time = forecast
3. **Natal → Sexual Archetypes:** Activated by specific natal placements
4. **Synastry → Sexual Compatibility:** Relationship dynamics inform intimacy
5. **Predictive → Synastry:** Timing relationship developments

---

## 🚀 Quick Start Guide

### For Individual Analysis:
1. Generate natal chart using `natal_chart_framework.json`
2. If timing question: Add `predictive_framework.json`
3. If sexual/intimate themes: Check activation, apply `sexual_archetypes_framework.json`

### For Relationship Analysis:
1. Generate both natal charts
2. Run synastry analysis using `synastry_framework.json`
3. If intimate relationship: Apply `sexual_archetypes_framework.json`
4. If timing question: Apply predictive to relationship points

### For Complete Consultation:
1. Natal charts for all parties
2. Synastry (if relationship question)
3. Predictive for current/upcoming periods
4. Specialized analysis as needed
5. Synthesize into comprehensive report

---

## 💻 Technical Implementation

### Recommended Calculation Libraries:
- **Swiss Ephemeris** - High-precision calculations (C library)
- **Astro.js** - JavaScript implementation
- **Kerykeion** - Modern Python library
- **Astropy** - Python astronomical calculations

### Database Schema:
```sql
users (user_id, name, birth_data, created_at)
natal_charts (chart_id, user_id, chart_json, calculated_at)
synastry_analyses (analysis_id, chart_a_id, chart_b_id, synastry_json)
predictive_analyses (analysis_id, chart_id, forecast_period, predictive_json)
```

### API Structure:
```
POST /api/natal/calculate
GET  /api/natal/{chart_id}
POST /api/synastry/analyze
POST /api/predictive/forecast
```

---

## 📊 Interpretation Hierarchy

**Priority Order:**
1. Sun, Moon, Ascendant (Core trinity)
2. Personal planets (Mercury, Venus, Mars)
3. Angular houses (1st, 4th, 7th, 10th)
4. Major aspects (especially exact <1° orb)
5. Social planets (Jupiter, Saturn)
6. Special points (Nodes, Vertex, Chiron)
7. Outer planets (Uranus, Neptune, Pluto)
8. Asteroids
9. Minor aspects and midpoints
10. Fixed stars (if prominent)

**Weight Multipliers:**
- Angular placement: ×2.0
- Exact aspect (<1° orb): ×1.5
- Dignity (domicile/exaltation): ×1.3
- Retrograde: ×1.2

---

## ✅ Quality Assurance

### Validation Rules:
- Birth time accuracy: ±5 minutes affects house cusps
- Orb limits: Major 8-10°, minor 2-3°
- House system consistency
- Note when birth time approximate

### Interpretation Standards:
- Balance positive and challenging aspects
- Avoid fatalistic language
- Emphasize growth potential
- Provide actionable guidance
- Respect free will

---

## 🎯 Use Case Examples

### Romantic Compatibility Consultation:
1. Generate both natal charts
2. Complete synastry analysis
3. Sexual archetype compatibility (if appropriate)
4. Current transits to relationship points
5. Relationship forecast

### Life Forecast Consultation:
1. Natal chart review
2. All predictive techniques for period
3. Identify converging themes
4. Integrated timeline
5. Recommendations with timing

### Personal Growth Consultation:
1. Deep natal chart analysis
2. Identify strengths and challenges
3. Current transits supporting growth
4. Progressed evolution
5. Timing recommendations

---

## ⚖️ Ethical Guidelines

### Consent & Privacy:
- Obtain consent for sexual analysis
- Protect birth data
- Never share synastry without both parties' consent

### Interpretation Ethics:
- Avoid predictions of death/catastrophe
- Frame challenges as growth opportunities
- Respect cultural context
- Acknowledge astrology's limitations
- Refer to professionals when needed

### Professional Boundaries:
- Not a substitute for medical/legal/therapeutic advice
- Maintain appropriate relationships
- Continuous learning
- Know your expertise limits

---

## 🔮 Future Enhancements

**Planned Additions:**
- Vedic/Sidereal integration
- Horary astrology framework
- Electional astrology
- Medical astrology indicators
- Mundane/political astrology
- Expanded asteroid database
- Arabic Parts/Lots
- Detailed fixed stars

---

## 📚 Framework Files

1. `natal_chart_framework.json` - Individual birth chart (previously created)
2. `synastry_framework.json` - Relationship compatibility
3. `predictive_framework.json` - Timing and forecasting
4. `sexual_archetypes_framework.json` - Intimate expression patterns
5. `master_integration_framework.json` - System architecture
6. `README.md` - This comprehensive guide

---

## 📖 Documentation Standards

Each framework includes:
- Detailed structure with all fields
- Field descriptions and data types
- Interpretation guidelines
- Usage conditions
- Ethical considerations
- Example data patterns

---

## 🤝 Support & Contact

For questions, suggestions, or contributions to this framework system, please refer to your project documentation.

---

## ⚡ Quick Reference Card

| Need | Use Framework | Key Features |
|------|---------------|--------------|
| Individual chart | Natal | Planets, houses, aspects |
| Compatibility | Synastry | Interaspects, overlays, composite |
| Timing/forecast | Predictive | Transits, progressions, returns |
| Intimacy themes | Sexual Archetypes | Zodiac + asteroid sexual themes |
| System overview | Master Integration | Architecture, workflow, ethics |

---

**System Status:** Production Ready ✅  
**Testing:** Recommended before deployment  
**License:** Specify your license terms  
**Version:** 1.0 (February 2026)

---

*This framework system represents comprehensive Western tropical astrology practice, integrating traditional and modern techniques into a unified, extensible structure suitable for professional consultation, software development, and educational purposes.*
