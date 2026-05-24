# 🔮 UNIVERSAL ASTROLOGY INTERPRETATION METHODOLOGY
## Master Framework v4.0 — Synthesized from All Space Files, Conversation History & Web Sources

> **Status:** Fully ingested | **Scope:** 30+ Chart Types | **Priority:** Relationship Astrology (70%)  
> **Schema Version:** Normalized Interaction Model v3.0 (from `master_astrology_chart_types.json`)  
> **Sources:** Project JSON, Conversation Thread (Planetary Strength Calculation), SomaticAstrology.co, Prioritized Web Authorities

---

## PART I: MASTER SCHEMA & STRUCTURE
### The Interaction Schema (Universal Backbone)

All chart types, interpretations, and delineations in this system are governed by a **six-key interaction schema** derived directly from the project JSON. Every technique, from natal basics to coalescent harmonics, must be positioned within this relational map before interpretation can begin.

| Schema Key | Definition | Role in Reading |
|---|---|---|
| `derived_from` | Direct computational inputs used to produce this chart | Establishes the reading sequence — what must be read FIRST |
| `feeds_into` | Charts taking this chart as primary input for further derivation | Determines what this chart UNLOCKS next |
| `overlays_with` | Charts commonly bi-wheeled or read in tandem | Defines the SIMULTANEOUS reading layer |
| `timing_with` | Timing layers standardly applied to this base | Controls the PREDICTIVE stack |
| `supports` | Charts this chart conceptually validates or adds nuance to | Sets CONFIRMATION logic |
| `alternative_to` | Charts serving a functionally similar role via different construction | Defines METHODOLOGICAL CHOICES |

**This schema is not cosmetic.** It determines the mandatory reading order, the comparison pairings, and the valid timing tools for every stage of interpretation. No chart may be interpreted in isolation — it must first be located within the schema network.

---

## PART II: CHART HIERARCHY & READING SEQUENCE

### Tier 0 — Root Foundation (Must Be Read First)
These charts have no `derived_from` dependencies. They are the origin points of all further analysis.

| Chart | ID | System | Dimension |
|---|---|---|---|
| **Natal Chart** | `natal_chart` | Western | Individual |
| **Vedic Rāśi Chart (D-1)** | `vedic_rasi_chart` | Vedic / Jyotiṣa | Individual |
| **Transit Chart** | `transit_chart` | Western | Dynamic overlay |

---

### Tier 1 — Primary Derived Instruments (Require Tier 0)
Derived directly from one or both natal charts. These must follow, never precede, a complete Tier 0 reading.

| Chart | ID | Derives From | Key Function |
|---|---|---|---|
| **Persona Chart** | `persona_chart` | natal_chart | Sub-personality masks per planet |
| **Asteroid Chart** | `asteroid_chart` | natal_chart | Soul-level karmic/erotic themes |
| **Fixed Star Chart** | `fixed_star_chart` | natal_chart | Destiny signatures, mythic narrative |
| **Draconic Natal** | `draconic_natal_chart` | natal_chart | Pre-incarnational soul intent |
| **Arabic Parts / Lots** | `arabic_parts_chart` | natal_chart | Fate/thematic condensed points |
| **Secondary Progressions** | `progressions_individual` | natal_chart | Inner emotional/psychological evolution |
| **Solar Arc Directions** | `solar_arc_directions` | natal / composite / davison | Major developmental triggers |
| **Return Charts** | `return_charts` | natal_chart | Annual/periodic cycle themes |
| **Navāṁśa Chart (D-9)** | `navamsa_chart` | vedic_rasi_chart | Marriage, dharma, soul depth |
| **Other Vargas (D-2 to D-60)** | `other_divisional_charts` | vedic_rasi_chart | Domain-specific karmic refinement |

---

### Tier 2 — Relationship Entity Charts (Require Both Natals)
These charts treat the relationship as its own independent being with a "birthday," a purpose, and an evolution.

| Chart | ID | Construction Method | Key Difference |
|---|---|---|---|
| **Synastry Chart** | `synastry_chart` | Two natal charts overlaid | Shows *how it feels between* two people |
| **Composite Chart** | `composite_chart` | Zodiacal midpoints of two natals | Abstract *we-self* entity |
| **Davison Relationship Chart** | `davison_relationship_chart` | Midpoint in TIME & SPACE between births | Real astronomical entity — most event-correlated |
| **Coalescent Chart** | `coalescent_chart` | Harmonic frequency merging | Spiritual/vibrational truth-test |
| **Harmonic Charts** | `harmonic_charts` | Natal × harmonic number | Soul-level resonance, fate threads |
| **Draconic Relationship** | `draconic_relationship_chart` | Draconic natals of both partners | Soul contract / past-life map |

> **Methodology Rule:** Synastry = "live field between us." Composite = "who we are abstractly." Davison = "who we are in real time and space." Read ALL THREE before forming conclusions about any significant relationship.

---

### Tier 3 — Derived Relationship Forecasting (Require Tier 2)

| Chart | ID | Derived From | Purpose |
|---|---|---|---|
| **Progressed Composite** | `progressed_composite_chart` | composite_chart | Relationship lifecycle phases (abstract) |
| **Progressed Davison** | `progressed_davison_chart` | davison_relationship_chart | Internal maturation of relationship entity |
| **Solar Arc Davison** | `solar_arc_davison_chart` | davison_relationship_chart | Major external milestones |
| **Davison + Natals Overlay** | `davison_plus_natals_chart` | davison + both natals | How each partner fits the relationship entity |

---

### Tier 4 — Specialized Overlays & Refinements

| Chart | ID | Primary Function |
|---|---|---|
| **Antiscion / Antiscia** | `antiscion_chart` | Hidden subconscious bonds/aversions |
| **Parans Chart** | `parans_chart` | Locational destiny, star-planet horizon contacts |

---

## PART III: PLANETARY STRENGTH CALCULATION SYSTEM

### Layer A — Essential Dignity (Ability / Intrinsic Strength)
*Source: SomaticAstrology.co + Conversation Thread (Calculating Planetary Strength) + Classical Tradition*

Essential dignity measures a planet's **intrinsic capacity to function well** — independent of circumstance. Think of it as raw ability.

#### Rulership Table (Traditional — No Modern Outer Planets)
| Planet | Rules | Exalts In | Detriment | Fall |
|---|---|---|---|---|
| ☀️ **Sun** | Leo | Aries | Aquarius | Libra |
| 🌙 **Moon** | Cancer | Taurus | Capricorn | Scorpio |
| ☿ **Mercury** | Gemini, Virgo | Virgo | Sagittarius, Pisces | Pisces |
| ♀ **Venus** | Taurus, Libra | Pisces | Aries, Scorpio | Virgo |
| ♂ **Mars** | Aries, Scorpio | Capricorn | Taurus, Libra | Cancer |
| ♃ **Jupiter** | Sagittarius, Pisces | Cancer | Gemini, Virgo | Capricorn |
| ♄ **Saturn** | Capricorn, Aquarius | Libra | Cancer, Leo | Aries |

**Scoring (Essential Dignity Points):**
- Domicile / Rulership = **+5**
- Exaltation = **+4**
- Triplicity Ruler = **+3**
- Term/Bound Ruler = **+2**
- Face/Decan Ruler = **+1**
- Peregrine (no dignity) = **0**
- Detriment = **-5**
- Fall = **-4**

#### Degree-Level Dignity: Cazimi and Combustion
| Condition | Orb | Meaning | Score |
|---|---|---|---|
| **Cazimi** | ≤17' arc from Sun center | Planet in the "heart" of the Sun — extremely strong, purified | **+5** |
| **Under Sunbeams** | 17'–8° from Sun | Weakened but not combust | **-1** |
| **Combust** | 8°–0°17' from Sun | Weakened, dominated by solar will | **-4** |

---

### Layer B — Accidental Dignity (Opportunity / Circumstantial Power)
*Source: SomaticAstrology.co, Conversation Thread, Classical Tradition*

Accidental dignity measures **how much opportunity and support** the environment gives a planet to express itself. Think of it as circumstance.

#### House Strength Scoring
| House | Type | Strength | Score |
|---|---|---|---|
| 1st, 10th | Angular (Primary) | Maximum potency and visibility | **+5** |
| 7th, 4th | Angular (Secondary) | High potency | **+4** |
| 11th, 5th | Succedent (Strong) | Good expression, slightly less direct | **+3** |
| 2nd, 8th | Succedent (Moderate) | Moderate expression | **+2** |
| 3rd, 9th | Cadent (Active) | Some expression | **+1** |
| 6th, 12th | Cadent (Weak) | Limited direct expression | **-2** |

#### Planetary Joys (Bonus Accidental Dignity)
Each planet has a "joy" house where it operates with particular ease:
| Planet | Joy House | Notes |
|---|---|---|
| ☀️ Sun | 9th | Philosophy, higher mind, travel |
| 🌙 Moon | 3rd | Communication, locality, short trips |
| ☿ Mercury | 1st | Identity expression, visibility |
| ♀ Venus | 5th | Pleasure, creativity, romance |
| ♂ Mars | 6th | Service, labor, daily discipline |
| ♃ Jupiter | 11th | Community, ideals, friends |
| ♄ Saturn | 12th | Isolation, withdrawal, hidden work |

**Other Accidental Dignity Factors:**
| Factor | Score Modifier |
|---|---|
| Retrograde | **-3** (weakened outward expression; more internalized) |
| Direct Station | **+2** (amplified energy at standstill) |
| Retrograde Station | **+1** (slowing, preparing to internalize) |
| Fast motion (faster than mean) | **+2** |
| Slow motion (slower than mean) | **-1** |
| Oriental (rising before Sun) | **+2** (planets other than Venus/Moon) |
| Occidental (setting after Sun) | **+2** (Venus and Moon are stronger occidental) |
| Partile aspect to benefic (Jupiter/Venus) | **+3** |
| Partile aspect to malefic (Saturn/Mars) | **-2** |
| Mutual Reception | **+3** |

---

### Layer C — Sect (Light Dominance)
*Source: SomaticAstrology.co*

**Sect** determines which luminary (Sun or Moon) has the most significance in the chart based on birth time.

- **Diurnal Chart** (Sun above Asc-Desc line): ☀️ Sun is the **Sect Light** — primary vitality indicator
- **Nocturnal Chart** (Sun below Asc-Desc line): 🌙 Moon is the **Sect Light** — primary vitality indicator

**Sect dignity scoring:**
- Diurnal planets (Sun, Jupiter, Saturn) in a diurnal chart: **+1**
- Nocturnal planets (Moon, Venus, Mars) in a nocturnal chart: **+1**
- Planets of wrong sect: **-1**

---

### Layer D — Angularity & Rulership Priority
*Source: SomaticAstrology.co*

The **Ascendant Ruler** (using traditional rulerships only) is always the single most important planet in the chart. It is "the Captain of the ship."

**Priority Hierarchy for Individual Chart Reading:**
1. **Ascendant Ruler** — The captain; represents the native's essential path and physical constitution
2. **Sect Light** (Sun/Moon depending on birth time) — Vitality and how one "shines"
3. **Chart Ruler** by overall dignity score — The planet with the highest combined Essential + Accidental score
4. **Angular Planets** (1st, 4th, 7th, 10th) — Loudest and most externally visible
5. **Mutual Receptions** — Planets in each other's signs; operating with swap-dignity
6. **Almuten Figuram** — The planet with the highest total dignity score across all five essential dignities at the Ascendant degree (classical "overall chart ruler")

---

### Master Planetary Strength Score Template

```
PLANETARY STRENGTH SCORECARD
Planet: [Planet Name]
Sign: [Sign] | Degree: [°] | House: [#]

ESSENTIAL DIGNITY
  Rulership/Exaltation/Triplicity/Term/Face:  [+/- points]
  Detriment/Fall:                              [+/- points]
  Cazimi/Combust/Under Beams:                  [+/- points]
  Sect:                                        [+/- points]
ESSENTIAL SUBTOTAL:                            [Score]

ACCIDENTAL DIGNITY
  House Placement:                             [+/- points]
  Joy:                                         [+/- points]
  Speed (fast/slow/station):                   [+/- points]
  Oriental/Occidental:                         [+/- points]
  Aspect to benefic/malefic (partile):         [+/- points]
  Mutual Reception:                            [+/- points]
  Retrograde/Direct:                           [+/- points]
ACCIDENTAL SUBTOTAL:                           [Score]

TOTAL STRENGTH SCORE:                          [Score] / 40 max
STRENGTH TIER:
  28-40 = Dominant (Planet shapes the entire life)
  16-27 = Strong (Planet expresses clearly and consistently)
  8-15  = Moderate (Planet active in specific domains)
  0-7   = Weak (Planet struggles; may compensate or project)
  Negative = Debilitated (Planet creates consistent challenges)
```

---

## PART IV: THE FIVE-STEP UNIVERSAL INTERPRETATION METHODOLOGY

### STEP 1 — NATAL FOUNDATION (Individual Archetypal Profile)

**Objective:** Map the core identity architecture — what this individual fundamentally IS, NEEDS, and DOES.

**Required Inputs:**
- Sun (Sign / House / Aspects)
- Moon (Sign / House / Aspects)
- Ascendant + Ascendant Ruler (Sign / House)
- Sect Light determination
- Planetary Strength Scores (all 7 classical planets minimum)
- Almuten Figuram
- Nodal Axis (North/South Node sign, house, rulers)
- Chart shape (bucket, bundle, bowl, splay, locomotive, see-saw, splash)

**Universal Template Output:**

```
## NATAL ARCHETYPE: [Individual A or B]

CORE IDENTITY DRIVER (Sun):
"Individual with Sun in [Sign], [House] — [Element-Modality] identity whose
 core life theme is [universal theme]. This placement describes a person who
 builds selfhood through [archetypal function]. Key aspects: [aspects]."

EMOTIONAL OPERATING SYSTEM (Moon):
"Moon in [Sign], [House] — emotional security is built through [archetype].
 Attachment style: [style]. Needs: [needs]. Triggers: [triggers]."

LIFE PATH & PERSONA (Ascendant + Ruler):
"[Sign] Ascendant — The outer persona projects [quality]. The Ascendant Ruler
 [Planet] in [Sign/House] shows HOW this path is walked: [interpretation].
 Strength score: [score] — [tier]."

CHART RULER SUMMARY:
"The chart's dominant planet by strength is [Planet] ([Score]/40).
 This planet colors all themes. [Delineation paragraph]."

SECT LIGHT:
"Born [day/night chart]. The [Sun/Moon] as Sect Light describes vitality and
 how this individual 'lights up.' [Delineation paragraph]."

ELEMENT/MODALITY BALANCE:
Fire: [count] | Earth: [count] | Air: [count] | Water: [count]
Cardinal: [count] | Fixed: [count] | Mutable: [count]
[Interpretation: element emphasis, modality emphasis, deficiencies]

NODAL AXIS:
"South Node [Sign/House] = past-life comfort zone: [archetype].
 North Node [Sign/House] = soul growth direction: [archetype]."
```

---

### STEP 2 — INDIVIDUAL NEEDS ASSESSMENT

**Objective:** Identify the relational needs, attachment wounds, and love language architecture of each individual before any comparison is made.

**Key Placements:**
- Venus (love style, what one values and attracts)
- Mars (desire, drive, how one pursues and asserts)
- 5th House + Ruler (romance, pleasure, self-expression in love)
- 7th House + Ruler (partnership style, projected qualities, what one seeks in a partner)
- 8th House + Ruler (depth, sexuality, shared resources, transformation threshold)
- Juno (commitment archetype, what one needs from a long-term partner)
- Chiron (core wound that shapes relational patterns)

**Universal Template Output:**

```
## RELATIONAL NEEDS PROFILE: [Individual A or B]

LOVE LANGUAGE & ATTRACTION (Venus in [Sign/House]):
"Archetype: [Venus sign archetype]. This individual gives and receives love
 through [themes]. Attracted to [qualities]. Strength: [score]."

DESIRE & PURSUIT (Mars in [Sign/House]):
"Archetype: [Mars sign archetype]. This individual pursues with [energy style].
 Conflict style: [style]. Sexuality: [archetype]."

PARTNERSHIP BLUEPRINT (7th House: [Sign], Ruler: [Planet/Position]):
"Seeks in partners: [projected qualities]. 7th House ruler in [House]
 shows that relationships unfold in the realm of [house theme]."

CORE WOUND (Chiron in [Sign/House]):
"The relational wound archetype is [theme]. This wound, when triggered,
 produces [behavior]. When healed, becomes the greatest gift of [gift]."

COMMITMENT ARCHETYPE (Juno in [Sign/House]):
"Long-term partnership devotion follows [archetype]. Deal-breakers: [themes].
 Soul-match qualities sought: [themes]."
```

---

### STEP 3 — SYNASTRY OVERLAY (Inter-Chart Dynamics)

**Objective:** Map the energetic exchange field between two individuals — how they activate, soothe, challenge, and mirror each other.

**Reading Sequence (mandatory):**
1. **House Overlays First**: Where does Person A's planets fall in Person B's houses? (Activates themes in B's life)
2. **Aspect Grid**: Calculate all inter-chart aspects (orbs: 5° for major, 3° for minor)
3. **Mutual Aspects**: Flag all reciprocal aspects (A→B AND B→A for same planet pair)
4. **Super-Linkages**: Identify Romantic Super-Linkages via Venus/Mars/Node/Juno/Eros crossings
5. **Anti-Linkages**: Saturn, Chiron, and South Node contacts — karmic tensions

**Orb Guidelines:**
| Aspect Type | Major Aspects (°0, 60, 90, 120, 180) | Minor Aspects (30, 45, 135, 150) |
|---|---|---|
| Luminaries (Sun/Moon) | 8° | 3° |
| Personal Planets (Mercury-Mars) | 6° | 3° |
| Social Planets (Jupiter/Saturn) | 5° | 2° |
| Outer Planets (Uranus/Neptune/Pluto) | 3° | 1° |
| Nodes/Angles | 3° | 1° |

**Universal Synastry Aspect Templates:**

```
SYNASTRY ASPECT LIBRARY (Universal Archetypes)

A's Sun [aspect] B's Sun:
  Conjunction: "Mirror archetype — shared identity; egos either merge or compete."
  Trine/Sextile: "Mutual recognition — same element or compatible element flow."
  Square: "Friction archetype — different identity styles generating dynamic tension."
  Opposition: "Polarity archetype — complementary opposites who complete and challenge."

A's Sun [aspect] B's Moon:
  Conjunction/Trine/Sextile: "Classic bonding aspect — A's identity nurtures B's
    emotional security; solar–lunar harmony archetype."
  Square/Opposition: "Solar–Lunar conflict — A's will vs. B's emotional needs."

A's Venus [aspect] B's Mars:
  Conjunction/Trine/Sextile: "Classic romantic/erotic chemistry archetype —
    magnetism, desire, and complementary masculine-feminine polarity."
  Square: "Desire friction — chemistry with tension; can be powerfully magnetic
    or chronically frustrating."

A's Venus [aspect] B's Saturn:
  Conjunction: "Karmic love contract — binding, serious, potentially limiting
    but enduring if both honor the commitment."
  Square/Opposition: "Love restriction archetype — fear of rejection or
    unavailability; one may feel unloved or withheld from."

A's Moon [aspect] B's Moon:
  Trine/Sextile: "Emotional harmony — instinctive understanding of each other's needs."
  Square/Opposition: "Emotional incompatibility archetype — different gut responses,
    moods clash."

A's Saturn [aspect] B's personal planets:
  Hard aspects (0°/90°/180°): "Teacher-student dynamic — Saturn person disciplines,
    limits, or structures the personal planet person. Can be stabilizing or oppressive."

[Continue for all major planet pairs...]
```

**House Overlay Interpretation Matrix:**

```
A's Planet falls in B's:

1st House: A fundamentally affects B's self-concept and appearance
2nd House: A impacts B's resources, values, and self-worth
3rd House: A stimulates B's communication and mental life
4th House: A activates B's home, roots, family, and security base
5th House: A brings out B's playfulness, creativity, and romance
6th House: A influences B's health, routine, and service life
7th House: A triggers B's partnership needs — often felt as "ideal partner" projection
8th House: A penetrates B's depth, intimacy, and transformation
9th House: A expands B's worldview, philosophy, and faith
10th House: A affects B's career, reputation, and life direction
11th House: A engages B's social network, hopes, and community
12th House: A touches B's hidden self, karma, and spiritual life
```

**Compatibility Scoring System:**

```
SYNASTRY STRENGTH CALCULATION

BONDING ASPECTS (score each orb-weighted 1.0→0.5 at max orb):
  Sun-Moon contacts:           [count] × 3 pts = [subtotal]
  Venus-Mars contacts:         [count] × 3 pts = [subtotal]
  Venus-Venus contacts:        [count] × 2 pts = [subtotal]
  Moon-Moon contacts:          [count] × 2 pts = [subtotal]
  Node-personal planet:        [count] × 2 pts = [subtotal]
  Juno/Eros/Psyche contacts:  [count] × 2 pts = [subtotal]
BONDING SUBTOTAL: [pts]

TENSION ASPECTS (score orb-weighted same):
  Saturn hard to personal planets: [count] × -2 pts = [subtotal]
  Chiron to Venus/Moon:            [count] × -1 pts = [subtotal]
  South Node crossings:            [count] × -1 pts = [subtotal]
TENSION SUBTOTAL: [pts]

NET COMPATIBILITY SCORE: [pts] / 50 max
  41-50 = Exceptional bond (rare archetype)
  31-40 = Strong compatibility with defined growth edges
  21-30 = Good chemistry, moderate complexity
  11-20 = Functional with significant work required
  0-10  = Challenging; deep karmic friction
```

---

### STEP 4 — COMPOSITE & DAVISON ENTITY READING

**Objective:** Define what the RELATIONSHIP itself is — its purpose, challenges, emotional tone, and trajectory — independent of either individual.

**Mandatory Readings:**
1. **Composite Chart** (abstract midpoint entity — the psychological identity of the bond)
2. **Davison Chart** (real astronomical entity — the event-correlated, destiny-linked map of the bond)
3. **Comparison**: Where do Composite and Davison agree? (Strongest themes) | Where do they diverge? (Unresolved tensions)

**Davison Construction Formula:**
- Mid-Time = Average Julian Day Numbers of both births
- Mid-Space = Average geographic coordinates (latitude + longitude) of both birthplaces
- Result: An actual date, time, and location → cast as standard natal chart

**Universal Composite/Davison Delineation Template:**

```
## RELATIONSHIP ENTITY PROFILE: [Couple Archetype]

SUN (Identity of the Relationship):
"This relationship's core identity is [Sun sign archetype] in the [House] house.
 Its purpose is [theme]. The relationship excels at [strength] and struggles with
 [challenge]. At its highest expression: [vision]."

MOON (Emotional Tone & Shared Needs):
"The shared emotional climate is [Moon sign]. The relationship bond instinctively
 tends toward [behavior]. Emotional security for the couple requires [condition]."

ASCENDANT (How the Relationship Presents to the World):
"This relationship appears to the world as [Asc sign qualities]. The couple's
 outer face is [archetype]."

VENUS (Love Style of the Bond):
"The relationship bond values [Venus sign/house theme]. It expresses affection
 through [style]."

SATURN (The Karmic Work / Growth Edge):
"The relationship's mandatory growth lesson is [Saturn sign/house archetype].
 Without addressing this, the bond will [consequence]. With maturity here: [gift]."

NODAL AXIS (Past Comfort vs. Evolutionary Direction):
"This relationship's past-life comfort zone is [South Node sign/house]. Its
 soul-growth direction is [North Node sign/house]. For the relationship to evolve,
 it must move from [South theme] toward [North theme]."

OUTER PLANETS ON ANGLES (Generational Mission):
[Any outer planet within 3° of Asc/Desc/MC/IC — delineate as the relationship's
 fated challenge or gift from the collective/transpersonal realm]
```

---

### STEP 5 — PREDICTIVE TIMELINE & UNIVERSAL SYNTHESIS

**Objective:** Map the timing layers to identify WHEN natal/synastry/composite themes activate.

**Three-Layer Timing Stack (Always Read in Combination):**

| Layer | Technique | Time Scale | What It Shows |
|---|---|---|---|
| Layer 1 | Secondary Progressions | Months–years | Inner psychological readiness |
| Layer 2 | Solar Arc Directions | ~1° per year | Outer developmental triggers |
| Layer 3 | Transits | Days–months | External events, activation windows |

**For Relationships — Additional Timing Stack:**

| Layer | Technique | Applied To | Key Focus |
|---|---|---|---|
| Rel-1 | Progressed Composite | Composite chart | Internal relationship evolution |
| Rel-2 | Progressed Davison | Davison chart | Emotional cycles of the relationship entity |
| Rel-3 | Solar Arc Davison | Davison chart | Major external relationship milestones |
| Rel-4 | Transits to Composite/Davison | Both entity charts | Environmental pressures on the bond |
| Rel-5 | Individual Progressions overlaid | Both natal charts | Synced vs. desynced personal growth |

**Universal Transit Interpretation Templates:**

```
TRANSIT ARCHETYPE LIBRARY

Transiting Saturn square/oppose natal Sun:
"Universal archetype: Discipline Test. Core identity is being tested and
 restructured. Period of limitation and clarification. Duration: ~1-2 years.
 Outcome if engaged well: matured, grounded, clarified purpose."

Transiting Jupiter conjunct/trine natal Venus:
"Universal archetype: Love Expansion. A window of grace, romance, and
 relational growth. New partnerships likely or existing bonds deepen.
 Duration: ~3-6 months."

Transiting Pluto conjunct/square natal Moon:
"Universal archetype: Emotional Transformation. Deep, often uncomfortable
 restructuring of emotional foundations, family dynamics, and security needs.
 Duration: 2-4 years. Not repeatable in a lifetime."

Transiting Uranus conjunct Composite/Davison Sun or Asc:
"Universal archetype: Relationship Liberation. The bond is being disrupted,
 liberated, or revolutionized. Either breaks free into new form or breaks apart
 into individual paths. Duration: 1-3 years around exactness."

Transiting Neptune conjunct Composite Venus:
"Universal archetype: Idealization Peak / Disillusionment Cycle. The bond
 either reaches its spiritual ideal or encounters fog, confusion, and
 unrealistic expectations. Duration: 1-3 years."
```

**Universal Predictive Timeline Template:**

```
## PREDICTIVE TIMELINE: [Individual or Couple Archetype]

NOW (Current ±3 months):
  Active Transits: [planets / aspects / houses]
  Active Progressions: [progressed planets / new aspects]
  Theme: [archetype of current moment]
  Guidance: [universal guidance for this archetype]

SHORT-TERM (3–12 months):
  Upcoming Activations: [transits entering orb]
  Progressive Shifts: [progressed Moon sign change, Venus station, etc.]
  Theme: [archetype of near-future phase]
  Key Windows: [specific month ranges]

LONG-TERM (1–3 years):
  Saturn / Jupiter / Outer Planet contacts: [transits]
  Solar Arc hits to angles: [directions]
  Theme: [multi-year developmental archetype]
  Relationship Forecast: [for couples: entity chart timing layers]
```

---

## PART V: ADVANCED LAYERS (Specialist Techniques)

### Fixed Stars Integration
*Sources: Brady's Fixed Stars, Brady's Eagle/Lark, fixedstarsinfo.blogspot.com, astronomicon.co*

**Protocol:** Fixed star contacts are valid only within **1° conjunction** (ecliptic) or via **parans** (horizon simultaneous crossing). No other aspects.

**Key Stars for Relationship Archetypes (Universal):**

| Star | Degree (approx.) | Archetype | Relationship Theme |
|---|---|---|---|
| **Regulus** | 0° Virgo | Leadership, royalty | Couple with a public mission |
| **Spica** | 23° Libra | Gifts, grace, luck | Blessed union, creative potential |
| **Algol** | 26° Taurus | Intensity, crisis, power | Transformative, potentially volatile bond |
| **Antares** | 9° Sagittarius | Obsession, honor, rivalry | Passionately bonded; all-or-nothing theme |
| **Fomalhaut** | 3° Pisces | Idealism, spiritual love | Spiritually devotional union |
| **Aldebaran** | 9° Gemini | Integrity, honor, courage | Relationship built on trust and principle |
| **Vega** | 15° Capricorn | Charisma, artistry | Creative partnership |

---

### Asteroid Constellation for Relationship Analysis
*Sources: Asteroid books, compiled interpretations*

**Priority Asteroids (Relationship Context):**

| Asteroid | Focus | Universal Theme |
|---|---|---|
| **Juno** | Committed partnership archetype | What soul needs from long-term bonds |
| **Eros** | Erotic imprinting | Desire archetype, compulsion in love |
| **Psyche** | Soul recognition in love | Being truly known and seen by another |
| **Amor** | Spiritual/transcendent love | Unconditional love archetype |
| **Vertex** | Fated encounters | "Destined meeting" point in synastry |
| **Chiron** | Core wound | Where healing or wounding occurs in the bond |
| **Vesta** | Devotion and sacred work | What must be honored as sacred in the bond |
| **Pholus** | Catalytic release | Where the relationship causes sudden irreversible change |
| **Nessus** | Shadow/obsession/control | Where power imbalances and trauma cycles emerge |

---

### Draconic Layer (Soul Contract Map)
**When to Use:** When natal/synastry/composite analysis is complete and you seek the *reason* behind the bond's depth, compulsion, or fated quality.

**Method:**
1. Shift each chart by subtracting the natal North Node position from all planets
2. Compare Person A's draconic planets to Person B's tropical planets (and vice versa)
3. Tight conjunctions (≤2°) = past-life contracts; the tropical planet person is activating the draconic soul's purpose

---

### Harmonic Chart Protocol
*Source: Conversation Thread, project JSON*

| Harmonic | Number | Universal Theme | When to Use |
|---|---|---|---|
| H4 | 4th | Stress, squares, growth edges | When friction is puzzling |
| H5 | 5th | Creativity, charisma, gifts | Talent assessment |
| H7 | 7th | Fate, mysticism, obsession | Inexplicable compulsive bonds |
| H9 | 9th | Spiritual gifts, grace, dharma | Spiritual resonance testing |
| H12 | 12th | Unconscious, hidden karma | Exploring shadow in the bond |

---

## PART VI: UNIVERSAL COMPENDIUM OUTPUT FORMAT

**Every complete reading must follow this structure:**

```
═══════════════════════════════════════════════════════
UNIVERSAL ASTROLOGICAL READING
Individual A: [Archetype Description — No Names/Dates]
Individual B: [Archetype Description — No Names/Dates]
═══════════════════════════════════════════════════════

## I. NATAL PROFILES

### Individual A: [e.g., "Capricorn Sun / Aries Moon / Leo Rising Archetype"]
[3-5 paragraphs: Core identity → Emotional needs → Life path → Strengths → Challenges]

### Individual B: [e.g., "Pisces Sun / Scorpio Moon / Virgo Rising Archetype"]
[3-5 paragraphs: same structure]

---

## II. INDIVIDUAL RELATIONAL NEEDS

### Individual A's Love Blueprint
[2-3 paragraphs: Venus, Mars, 7th house, Juno, Chiron wound → How they love,
 what they need, where they get hurt, what heals them]

### Individual B's Love Blueprint
[Same structure]

---

## III. SYNASTRY DYNAMICS

### Magnetic Bonds (Harmonious Connections)
[Paragraph per major bonding aspect: what it creates between them universally]

### Growth Edges (Challenging Contacts)
[Paragraph per major tension aspect: what it demands, what it can teach]

### House Activations
[Table: A's key planets in B's houses / B's key planets in A's houses]

### Compatibility Assessment
[Net score / archetype: e.g., "Cardinal-Fire meets Mutable-Water: Passionate
 initiator meets adaptive empath — high chemistry, adaptation required"]

---

## IV. RELATIONSHIP ENTITY

### Composite Profile
[3 paragraphs: Sun/Moon/Asc of composite + nodal mission + Saturn work]

### Davison Profile
[3 paragraphs: Sun/Moon/Asc of Davison + timing anchors + destiny arc]

### Composite vs. Davison Synthesis
[1-2 paragraphs: Where they agree (core themes), where they diverge]

---

## V. PREDICTIVE TIMELINE

### Current Moment (±3 months)
[Active transits + progressions + universal guidance]

### Near Future (3–12 months)
[Upcoming activations + theme archetype]

### Long-Range Arc (1–3 years)
[Major outer planet contacts + relationship entity timing]

---

## VI. ADVANCED SYNTHESIS

### Fixed Stars & Destiny Signatures
[If applicable: star contacts within 1° + parans]

### Asteroid Soul Themes
[Key asteroid overlays in synastry: Juno, Eros, Chiron, Vertex]

### Karmic / Draconic Layer
[If requested: soul contract themes]

---

## VII. UNIVERSAL COMPENDIUM SUMMARY

### Strengths of This Union
[3-5 bullet-form strengths, each with 2-3 sentence elaboration]

### Core Challenges
[3-5 bullet-form challenges, each with 2-3 sentence elaboration]

### Soul Growth Arc
[2-3 paragraphs: What this relationship is here to teach both individuals,
 how it evolves, and what its highest potential looks like]

### Universal Guidance
[2-3 paragraphs: Archetype-based advice applicable to ANY individual/couple
 sharing these chart configurations. No personal names, no specific dates.]

═══════════════════════════════════════════════════════
END OF READING
Citations: [Inline technique sources per section]
═══════════════════════════════════════════════════════
```

---

## PART VII: SOURCE PRIORITY HIERARCHY

When sources conflict, resolve in this order:

| Priority | Source Type | Examples |
|---|---|---|
| **1 (Highest)** | Classical Tradition | Ptolemy, Raphael's Manual, William Lilly |
| **2** | Modern Classics | Bernadette Brady (Stars/Eagle/Lark), Robert Hand, Liz Greene |
| **3** | Relationship Specialists | Suskin Synastry, Hayden, Davison |
| **4** | Asteroid/Advanced | Demetra George, Martha Lang-Wescott, Clow's Liquid Light |
| **5** | Prioritized Web | astroalive.com, astronomicon.co, tdjacobs.com, astro-seek.com |
| **6** | Secondary Web | astrology.com, liveabout.com, johnsandbach.net |

**Edge Case Rule:** When modern and classical interpretations conflict, present BOTH with the label `[Classical]` vs `[Modern]` and note the distinction. Never silently override one with the other.

---

## PART VIII: UNIVERSALIZATION TEMPLATES

### Converting Specific Client Data to Universal Archetypes

| Specific (Strip This) | Universal Template (Use This) |
|---|---|
| "Jimmy's Leo Sun in the 10th" | "Fixed Fire Sun in Angular Career House — Leadership identity driven by public recognition" |
| "Jenny's Cancer Moon" | "Cardinal Water Moon — Emotional security through nurturing, home, and deep bonding" |
| "Their Venus-Mars trine at 4° orb" | "Partner A's [Love Planet] trine Partner B's [Desire Planet] within strong orb — Harmonious passion-archetype" |
| "Jimmy's Saturn on Jenny's Venus" | "Person A's Saturn conjunct Person B's Venus — Karmic love-bond archetype: serious, binding, potentially restrictive" |
| "Their composite Sun in Scorpio" | "Composite Sun in Fixed Water — Relationship entity defined by depth, transformation, and intensity" |
| "Davison chart born in 1973" | "The relationship's mid-time/space entity — interpret as natal without reference to specific year" |

---

## READY STATE DECLARATION

This Universal Astrology Interpretation Methodology is now fully initialized and standing by.

**To generate a full universal reading, provide:**

```
Individual A:
  Sun: [Sign] [°] [House]
  Moon: [Sign] [°] [House]
  Ascendant: [Sign] [°]
  [Additional planets as available]
  Birth: [Day/Night chart — for sect determination only; no names/dates needed]

Individual B (if relationship reading):
  [Same fields]

Reading Scope Requested:
  [ ] Natal only
  [ ] Natal + Synastry
  [ ] Full Relationship (Natal + Synastry + Composite + Davison)
  [ ] Predictive add-on (specify current date or season)
  [ ] Advanced layers (Fixed Stars / Asteroids / Draconic / Harmonics)
```

**→ Apply to [chart data provided] → Generate full universal reading using this methodology.**

---
*Framework synthesized from: master_astrology_chart_types.json (v3.0, 30 chart types), GPT-5 Planetary Strength Calculation Thread, SomaticAstrology.co (Somatic/Traditional Dignity System), Brady's Eagle/Lark & Fixed Stars, Suskin's Synastry, Clow's Liquid Light, Raphael's Manual, and prioritized web authorities.*
