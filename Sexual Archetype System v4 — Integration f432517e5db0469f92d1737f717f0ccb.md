# Sexual Archetype System v4 — Integration

## What this is

This page contains the canonical Sexual Archetype System v4 reference JSON plus the exact integration steps to use it with your local `dashboard.html` and your unified v6.1 chart JSON.

## Recommended file layout (local)

- `dashboard.html`
- `sexual_archetype_system_v4.json` (reference system)
- `your_unified_chart_v6.1.json` (per-couple/per-person data)

## Integration approach (browser-only, local file)

1. Add a second file input: “Load System JSON” (for `sexual_archetype_system_v4.json`).
2. Store it in `window.SEXUAL_SYSTEM` (or `currentSystem`).
3. On chart JSON load:
    - compute any missing sexual + tantric metrics (you already do)
    - enrich interpretation by looking up the dominant sign/archetype in the system file
4. Render:
    - Drives
    - Needs
    - Shadow expressions
    - Healing directions
    - Trauma markers (behind a UI toggle)

## Minimal JS wiring (pseudocode)

- `let systemData = null;`
- system uploader sets: `systemData = JSON.parse(fileText)`
- chart uploader sets: `currentData = merge(defaultData, json)` then `refreshAll()`
- in `renderSexual()` after computing:
    - `const domSign = ...`
    - `const signRec = systemData.archetypes.zodiac.find(z => z.name === domSign)`
    - render `signRec.domains.*`

## Canonical JSON (save as sexual_archetype_system_v4.json)

```json
{
  "meta": {
    "title": "Sexual Archetype System with Integrated Relational Mapping",
    "version": "4.0",
    "date_last_updated": "2026-03-30",
    "description": "Reference + computation templates for sexual signature, synastry chemistry, and transit/progression activation using chained mappings (planet → sign → house → aspects) and a weights registry.",
    "sources_and_lineage": [
      "Jeffrey Wolf Green (zodiac archetypes / evolutionary astrology framing)",
      "Demetra George (asteroid archetypes)",
      "Jason Holley (psychodynamic elaboration; ongoing research)",
      "Compiled and structured for browser-first dashboards"
    ],
    "content_warnings": [
      "Contains explicit sexual/trauma-related archetypal keywords (e.g., incest/rape/violence). Recommended UI gating."
    ],
    "license": "Internal / personal research use"
  },
  "weights_registry": {
    "planetary_influence": {
      "Sun": 0.9,
      "Moon": 0.85,
      "Mercury": 0.7,
      "Venus": 0.8,
      "Mars": 0.8,
      "Jupiter": 0.75,
      "Saturn": 0.7,
      "Uranus": 0.65,
      "Neptune": 0.65,
      "Pluto": 0.9,
      "Chiron": 0.7,
      "Eros": 0.85,
      "Psyche": 0.8,
      "Kaali": 0.9,
      "Lilith": 0.8,
      "Juno": 0.75,
      "Vesta": 0.7,
      "Ceres": 0.65,
      "Pallas": 0.65
    },
    "house_weighting": {
      "1": 1.0,
      "2": 0.6,
      "3": 0.5,
      "4": 0.8,
      "5": 1.0,
      "6": 0.4,
      "7": 1.0,
      "8": 1.0,
      "9": 0.6,
      "10": 0.9,
      "11": 0.7,
      "12": 0.5
    },
    "aspect_weighting": {
      "conjunction": 1.0,
      "opposition": 0.9,
      "trine": 0.8,
      "square": 0.7,
      "sextile": 0.6,
      "quincunx": 0.5,
      "parallel": 0.9,
      "contraParallel": 0.8
    },
    "elemental_balance_range": {
      "Fire": 1.05,
      "Earth": 0.95,
      "Air": 1.0,
      "Water": 1.1
    },
    "karmic_modifier_rules": {
      "planets_or_points_triggering": ["Pluto", "Chiron", "Juno", "SouthNode", "NorthNode", "Lilith"],
      "default_bonus": 0.1
    }
  },
  "reference_taxonomies": {
    "elements": ["Fire", "Earth", "Air", "Water"],
    "modalities": ["Cardinal", "Fixed", "Mutable"],
    "polarities": ["Masculine", "Feminine"],
    "houses": {
      "1": "Self / body / instinct / identity",
      "2": "Value / sensual security / possession / self-worth",
      "3": "Curiosity / talk / flirtation / mental foreplay",
      "4": "Bonding / family imprint / safety needs",
      "5": "Romance / play / erotic creativity",
      "6": "Service / routines / improvement / control",
      "7": "Partnering / mirroring / projection field",
      "8": "Merging / taboo / power exchange / trauma-healing axis",
      "9": "Adventure / meaning / freedom / belief",
      "10": "Status / authority / reputation / shame-pride axis",
      "11": "Experimentation / groups / novelty / liberation",
      "12": "Fantasy / dissolution / secrecy / transcendence"
    }
  },
  "archetypes": {
    "zodiac": [
      {
        "id": "zodiac:aries",
        "type": "zodiac",
        "name": "Aries",
        "number": 1,
        "ruler": "Mars",
        "element": "Fire",
        "modality": "Cardinal",
        "polarity": "Masculine",
        "domains": {
          "drives": ["passion / ignition / initiation", "direct pursuit of desire", "orgasm-oriented intensity", "wants fireworks / stimulation"],
          "needs": ["permission to want", "clean, honest directness", "somatic aliveness", "challenge without humiliation"],
          "shadow_expressions": ["domineering", "impulsiveness", "narcissism", "begins/ends quickly", "body obsession"],
          "trauma_markers": ["eroticized rage", "sexualized violence"],
          "healing_directions": ["Slow the ignition: practice pacing and consent check-ins", "Transform anger into vitality (movement, breathwork, strength training)", "Differentiate conquest from contact: name feelings, not just urges", "Practice receiving (not only initiating)"],
          "somatic_correspondences": ["head/face", "adrenal system", "heat and circulation"]
        },
        "keywords": ["ignite", "pursue", "heat", "directness", "conquest-to-contact"],
        "prompts": ["What do you want most right now, without apology?", "Where does impatience show up in intimacy?", "What does ‘slowing down’ feel like in your body?"]
      },
      {
        "id": "zodiac:taurus",
        "type": "zodiac",
        "name": "Taurus",
        "number": 2,
        "ruler": "Venus",
        "element": "Earth",
        "modality": "Fixed",
        "polarity": "Feminine",
        "domains": {
          "drives": ["sensation oriented", "touch, scent, rhythm", "slow-building pleasure", "body aware sensuality"],
          "needs": ["safety and predictability", "time to warm up", "trust through consistency", "permission to enjoy without guilt"],
          "shadow_expressions": ["possessiveness", "stagnancy / ‘in a rut’", "isolation", "role stereotypes", "boundary containment"],
          "trauma_markers": ["money for sex (transactional bonding patterns)"],
          "healing_directions": ["Reintroduce novelty gently (new contexts, not new people)", "Somatic attunement practices (massage, slow dance, mindful eating)", "Work with attachment/possessiveness: name fears underneath", "Practice generosity: share pleasure rather than hoard it"],
          "somatic_correspondences": ["throat/neck", "skin", "sensory system"]
        },
        "keywords": ["sensual", "slow", "steady", "embodiment", "comfort"],
        "prompts": ["What sensations make you feel safest?", "What would make pleasure feel less ‘routine’ and more sacred?", "Where do you equate love with ownership?"]
      }
    ],
    "asteroids_planetoids": [
      {
        "id": "asteroid:chiron",
        "type": "asteroid",
        "name": "Chiron",
        "domains": {
          "drives": ["sexual healing", "mentorship", "meaning through wound"],
          "needs": ["safety to be seen in imperfection", "repair and witnessing", "integration of pain and pleasure"],
          "shadow_expressions": ["shame about the body", "avoidance of intimacy due to wound sensitivity"],
          "trauma_markers": ["deformities / injury imprint (symbolic)", "re-enactment loops"],
          "healing_directions": ["Trauma-informed intimacy and pacing", "Somatic therapy/bodywork; titration of sensation", "Mentorship: learning/teaching without power misuse", "Reframing vulnerability as erotic truth"],
          "somatic_correspondences": ["wound site sensitivity", "threshold regulation"]
        },
        "keywords": ["wound", "mentor", "medicine", "repair", "integration"],
        "prompts": ["What part of your sexuality feels tender or hard to show?", "Where does healing show up as desire?", "What kind of repair do you need after rupture?"]
      }
    ]
  },
  "mapping_templates": {
    "natal_point_map": {
      "description": "Defines the interpretive + scoring chain for each chart point used in sexual signature computation.",
      "required_fields": {"planet": "string", "sign": "string", "house_number": "number", "aspects": "array"},
      "aspect_shape": {"aspect_type": "string", "aspect_target": "string", "orb_degrees": "number"},
      "derived_fields": ["element", "modality", "polarity", "ruler"],
      "weight_chain": [
        {"name": "planetary_weight", "lookup": "weights_registry.planetary_influence[planet]", "default": 0.5},
        {"name": "house_weight", "lookup": "weights_registry.house_weighting[String(house_number)]", "default": 0.4},
        {"name": "aspect_weight", "lookup": "average(weights_registry.aspect_weighting[aspect_type] for each aspect)", "default": 0.5},
        {"name": "elemental_modifier", "lookup": "weights_registry.elemental_balance_range[element]", "default": 1.0}
      ],
      "score_formula": {
        "point_score": "planetary_weight * house_weight * aspect_weight * elemental_modifier * 100",
        "profile_intensity": "average(point_score over all included points)",
        "elemental_distribution_vector": "count(elements)/total_points (or weighted sum optional)",
        "shadow_polarity_index": "aggregate polarity differences across opposing sign pairs (0..1)",
        "coherence_index": "max(sign_count)/total_points (0..1)"
      }
    }
  },
  "computed_outputs_spec": {
    "sexual_signature_profile": {
      "fields": {
        "dominant_element": "Fire|Earth|Air|Water",
        "dominant_archetype": "string (e.g. zodiac:aries or asteroid:eros)",
        "overall_intensity_score": "0..100",
        "integration_index": "0..1",
        "shadow_polarity_index": "0..1",
        "coherence_index": "0..1",
        "archetypal_distribution": {"Fire": "0..1", "Earth": "0..1", "Air": "0..1", "Water": "0..1"},
        "top_contributors": "array of {planet, sign, house_number, score}"
      }
    }
  }
}
```

Important: the JSON above is canonical, but trimmed in this page preview to keep it readable. Use the full file you saved from our previous message for the complete set of all 12 signs + asteroids.

## Add structural overlays (Element + House + Aspect)

Your v2.2 block adds three overlay dictionaries that are very useful for interpretation and for dedicated UI panels:

- `elemental_overlays` (Fire/Earth/Air/Water)
- `house_correspondences` (1st_house … 12th_house)
- `aspectual_signatures` (conjunction/opposition/square/trine/sextile/quincunx)

### Where these live in the v4 system JSON

Add them as top-level blocks in `sexual_archetype_system_v4.json`:

- `overlays.elemental`
- `overlays.houses`
- `overlays.aspects`

### Normalized keys (so lookups never break)

- Elements: `Fire|Earth|Air|Water`
- Houses: store as numeric string keys `"1".."12"` (recommended). If your chart JSON uses `"7th_house"`, normalize it to `7` once at load time.
- Aspects: lowercase keys: `conjunction|opposition|square|trine|sextile|quincunx`

### Minimal dashboard wiring

After you compute a sexual point `{ planet, sign, house }`:

- element overlay: `system.overlays.elemental[getElement(sign)]`
- house overlay: `system.overlays.houses[String(houseNum)]`
- aspect overlay: for each aspect: `system.overlays.aspects[aspectType.toLowerCase()]`

### Overlay JSON (copy/paste)

Paste this into your v4 system file under a new top-level `overlays` key:

```json
{
  "overlays": {
    "elemental": {
      "Fire": {
        "description": "Erotic energy expressed through passion, instinct, and self-assertion. The erotic is a form of vitality and creative ignition.",
        "psychosexual_function": "Spontaneous initiation and combustion of desire.",
        "archetypal_traits": ["Aries", "Leo", "Sagittarius"],
        "imbalances": ["Impulsivity and burn-out", "Need for constant stimulation", "Erotic assertion without intimacy"],
        "integration_path": ["Channel passion through mindfulness", "Balance immediacy with staying power", "Allow playfulness to replace aggression"]
      },
      "Earth": {
        "description": "Erotic energy expressed through the body, stability, and sensation. The physical form becomes the site of sacred continuity.",
        "psychosexual_function": "Grounding, containment, and sensual embodiment.",
        "archetypal_traits": ["Taurus", "Virgo", "Capricorn"],
        "imbalances": ["Rigidity or repression of spontaneity", "Over-attachment to routine, security, or property", "Loss of sensual curiosity"],
        "integration_path": ["Reinhabit the body through pleasure without possession", "Marry discipline with erotic spontaneity", "Transform touch into conscious gratitude"]
      },
      "Air": {
        "description": "Erotic energy expressed through intellect, communication, and imagination. Connection begins in the mind and manifests in social dance.",
        "psychosexual_function": "Mental and social stimulation as erotic catalyst.",
        "archetypal_traits": ["Gemini", "Libra", "Aquarius"],
        "imbalances": ["Detachment or over-intellectualization", "Emotional avoidance via flirtation", "Erotic dissociation from the body"],
        "integration_path": ["Anchor fantasy in authentic emotion", "Let conversation deepen rather than deflect intimacy", "Use verbal and aesthetic play as foreplay to empathy"]
      },
      "Water": {
        "description": "Erotic energy expressed through emotion, merging, and mysticism. Desire seeks fusion and psychic depth.",
        "psychosexual_function": "Emotional bonding, surrender, and intimacy with the unseen.",
        "archetypal_traits": ["Cancer", "Scorpio", "Pisces"],
        "imbalances": ["Emotional dependency and loss of boundaries", "Erotic expression as emotional caretaking or escape", "Victim–savior dynamics"],
        "integration_path": ["Practice compassion with differentiation", "Let sexual union express emotional truth rather than fusion need", "Spiritualize intimacy without dissolving self"]
      }
    },
    "houses": {
      "1": {"sexual_expression": "Sexual identity and self-assertion; how one projects erotic confidence.", "shadow_pattern": "Reactivity, competition, or body-image insecurity.", "healing_focus": "Cultivate authentic bodily self-love and affirmative consent."},
      "2": {"sexual_expression": "Sensual security and erotic valuation of the body as possession or temple.", "shadow_pattern": "Stagnant pleasure, possessiveness, or self-worth dependency on validation.", "healing_focus": "Awaken sensual gratitude and self-appreciation without objectification."},
      "3": {"sexual_expression": "Communication of desire; flirtation, curiosity, erotic language.", "shadow_pattern": "Trivializing sex or dispersing energy in mental games.", "healing_focus": "Integrate erotic talk with embodied authenticity."},
      "4": {"sexual_expression": "Erotic bonding as emotional safety and home-making.", "shadow_pattern": "Enmeshment, codependency, or family projections.", "healing_focus": "Differentiate nurturing from sexual need; establish safe vulnerability."},
      "5": {"sexual_expression": "Creative play, romantic expression, joyful libido.", "shadow_pattern": "Performance anxiety, narcissism, or validation seeking.", "healing_focus": "Celebrate erotic play as sacred creativity."},
      "6": {"sexual_expression": "Erotic service, ritual, or refinement; mind–body integration.", "shadow_pattern": "Guilt, perfectionism, or sexual repression via control.", "healing_focus": "Accept imperfection and sensual humility as acts of devotion."},
      "7": {"sexual_expression": "Partnership, equality, and mirroring intimacy.", "shadow_pattern": "People-pleasing or projection of self-worth onto partner.", "healing_focus": "Create conscious contracts honoring erotic reciprocity."},
      "8": {"sexual_expression": "Emotional merging and transformation through intimacy.", "shadow_pattern": "Jealousy, control, or trauma re-enactment.", "healing_focus": "Transmute sexual power into psychological rebirth."},
      "9": {"sexual_expression": "Philosophical or transcendent exploration through sexuality.", "shadow_pattern": "Excess, dogma, or escape through ‘cosmic’ rhetoric.", "healing_focus": "Unite freedom with reverence; journey through consciousness grounded in compassion."},
      "10": {"sexual_expression": "Public persona of sexuality; boundaries, professionalism, and control.", "shadow_pattern": "Repression, moralism, or strategic use of sexuality for status.", "healing_focus": "Integrate erotic integrity within authority and duty."},
      "11": {"sexual_expression": "Group erotic identity, experimentation, collective liberation.", "shadow_pattern": "Detachment or depersonalization of sex via technology or ideology.", "healing_focus": "Rehumanize freedom; celebrate diversity of desire ethically."},
      "12": {"sexual_expression": "Mystical or karmic sexual patterns; unconscious unions.", "shadow_pattern": "Addiction, escapism, or victim–rescuer looping.", "healing_focus": "Practice compassion and spiritual sexuality with awareness of boundaries."}
    },
    "aspects": {
      "conjunction": {"meaning": "Fusion of planetary drives; amplified erotic themes where distinction dissolves.", "sexual_dynamics": "Intense magnetism or obsession; identification of desire with self.", "growth_edge": "Develop differentiation within fusion."},
      "opposition": {"meaning": "Polar tension between complementary erotic needs; projection axis.", "sexual_dynamics": "Magnetic attraction and power struggle; sees oneself through the partner.", "growth_edge": "Integrate polarities through empathy and balance."},
      "square": {"meaning": "Erotic friction generating heat and challenge.", "sexual_dynamics": "Conflict between impulses, leading to dynamic chemistry or frustration.", "growth_edge": "Transform tension into conscious erotic charge rather than control."},
      "trine": {"meaning": "Ease and flow of sexual energy between archetypal functions.", "sexual_dynamics": "Natural compatibility; automatic attraction without much effort.", "growth_edge": "Avoid complacency; cultivate intentional intimacy."},
      "sextile": {"meaning": "Opportunity aspects where communication and curiosity stimulate arousal.", "sexual_dynamics": "Playful rapport, friendship-based erotic learning.", "growth_edge": "Exercise initiative to deepen erotic connection."},
      "quincunx": {"meaning": "Adjustment or integration between incongruent sexual expressions.", "sexual_dynamics": "Karmic or awkward erotic fit; fascination mixed with discomfort.", "growth_edge": "Develop flexibility and humor in reconciling differences."}
    }
  }
}
```