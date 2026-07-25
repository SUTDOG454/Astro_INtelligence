import { useState } from "react";

/* ═══════════════════════════════════════════════════════════════════════════
   UNIVERSALIZED NATAL CHART READING
   Source: Natal Chart — Aries Sun / Libra Rising / Sagittarius Moon
   Bellaire, OH · April 10, 1974 · 19:02 LT
   All personal identifiers stripped. Archetype template output.
   Calculated from primary positional data; JSON aspect list corrected.
═══════════════════════════════════════════════════════════════════════════ */

/* ─── PRE-COMPUTED POSITIONS ──────────────────────────────────────────── */
const PLANETS = [
  { name:"Sun",       sign:"Aries",        deg:20, min:41, sec:22, long:20.6894,  house:7,  rx:false, dec:"8°04′N",  speed:"fast",   dig:"Exaltation" },
  { name:"Moon",      sign:"Sagittarius",  deg:10, min:13, sec:49, long:250.2303, house:3,  rx:false, dec:"22°56′S", speed:"fast",   dig:"Peregrine" },
  { name:"Mercury",   sign:"Pisces",       deg:28, min:55, sec:11, long:358.9197, house:6,  rx:false, dec:"2°44′S",  speed:"fast",   dig:"Fall/Detriment" },
  { name:"Venus",     sign:"Pisces",       deg:4,  min:24, sec:45, long:334.4125, house:5,  rx:false, dec:"9°25′S",  speed:"fast",   dig:"Exaltation" },
  { name:"Mars",      sign:"Gemini",       deg:24, min:26, sec:9,  long:84.4358,  house:9,  rx:false, dec:"24°52′N", speed:"normal", dig:"Peregrine" },
  { name:"Jupiter",   sign:"Pisces",       deg:7,  min:26, sec:40, long:337.4444, house:5,  rx:false, dec:"9°35′S",  speed:"slow",   dig:"Domicile" },
  { name:"Saturn",    sign:"Gemini",       deg:29, min:22, sec:37, long:89.3769,  house:9,  rx:false, dec:"22°41′N", speed:"slow",   dig:"Peregrine" },
  { name:"Uranus",    sign:"Libra",        deg:25, min:58, sec:25, long:205.9736, house:1,  rx:true,  dec:"9°27′S",  speed:"slow",   dig:"Peregrine" },
  { name:"Neptune",   sign:"Sagittarius",  deg:9,  min:22, sec:45, long:249.3792, house:3,  rx:true,  dec:"20°15′S", speed:"slow",   dig:"Peregrine" },
  { name:"Pluto",     sign:"Libra",        deg:5,  min:3,  sec:6,  long:185.0517, house:12, rx:true,  dec:"13°43′N", speed:"slow",   dig:"Peregrine" },
  { name:"Chiron",    sign:"Aries",        deg:20, min:22, sec:21, long:20.3725,  house:7,  rx:false, dec:"8°53′N",  speed:"slow",   dig:"Peregrine" },
  { name:"TrueNode",  sign:"Sagittarius",  deg:21, min:6,  sec:31, long:261.1086, house:3,  rx:true,  dec:"23°08′S", speed:"slow",   dig:"—" },
  { name:"POF",       sign:"Cancer",       deg:0,  min:21, sec:8,  long:90.3522,  house:8,  rx:false, dec:"20°13′N", speed:"—",      dig:"—" },
  { name:"Lilith",    sign:"Capricorn",    deg:26, min:26, sec:33, long:296.4425, house:4,  rx:false, dec:"18°03′S", speed:"fast",   dig:"—" },
  { name:"Vertex",    sign:"Aries",        deg:29, min:14, sec:43, long:29.2453,  house:7,  rx:false, dec:"—",       speed:"—",      dig:"—" },
];

const ANGLES = [
  { name:"Ascendant", sign:"Libra",       deg:10, min:48, long:190.8000 },
  { name:"MC",        sign:"Cancer",      deg:19, min:0,  long:109.0000 },  // approximate from H10 bodies
  { name:"Descendant",sign:"Aries",       deg:10, min:48, long:10.8000  },
  { name:"IC",        sign:"Capricorn",   deg:19, min:0,  long:289.0000 },
];

const EXTENDED = [
  { name:"Ceres",    sign:"Aquarius",  deg:27, min:23, long:327.391, house:5 },
  { name:"Pallas",   sign:"Aquarius",  deg:5,  min:18, long:305.312, house:4 },
  { name:"Juno",     sign:"Aquarius",  deg:24, min:55, long:324.921, house:5 },
  { name:"Vesta",    sign:"Libra",     deg:8,  min:15, long:188.255, house:12, rx:true },
  { name:"Eros",     sign:"Pisces",    deg:7,  min:18, long:337.303, house:5 },
  { name:"Pholus",   sign:"Pisces",    deg:9,  min:13, long:339.219, house:5 },
  { name:"Sedna",    sign:"Taurus",    deg:3,  min:5,  long:33.083,  house:7 },
  { name:"Isis",     sign:"Scorpio",   deg:2,  min:55, long:212.930, house:1, rx:true },
  { name:"Quaoar",   sign:"Scorpio",   deg:5,  min:36, long:215.616, house:1, rx:true },
  { name:"Ixion",    sign:"Scorpio",   deg:8,  min:8,  long:218.139, house:2, rx:true },
  { name:"Osiris",   sign:"Scorpio",   deg:27, min:44, long:237.747, house:2, rx:true },
  { name:"Haumea",   sign:"Virgo",     deg:11, min:45, long:161.766, house:11,rx:true },
  { name:"Makemake", sign:"Leo",       deg:16, min:33, long:136.561, house:11,rx:true },
  { name:"Orcus",    sign:"Cancer",    deg:22, min:34, long:112.570, house:10 },
  { name:"Psyche",   sign:"Aquarius",  deg:5,  min:27, long:305.464, house:4 },
];

const HOUSE_CUSPS = [
  { h:1, sign:"Libra",       deg:10, min:48 },
  { h:2, sign:"Scorpio",     deg:7,  min:0  },
  { h:3, sign:"Sagittarius", deg:7,  min:0  },
  { h:4, sign:"Capricorn",   deg:19, min:0  },
  { h:5, sign:"Aquarius",    deg:26, min:0  },
  { h:6, sign:"Pisces",      deg:27, min:0  },
  { h:7, sign:"Aries",       deg:10, min:48 },
  { h:8, sign:"Taurus",      deg:7,  min:0  },
  { h:9, sign:"Gemini",      deg:7,  min:0  },
  { h:10,sign:"Cancer",      deg:19, min:0  },
  { h:11,sign:"Leo",         deg:26, min:0  },
  { h:12,sign:"Virgo",       deg:27, min:0  },
];

/* ─── CORRECTED ASPECTS ──────────────────────────────────────────────── */
const CORRECTIONS = [
  { orig:"Moon ⚺ Venus (semi-sextile)", corrected:"Moon □ Venus (square, 5°49′)", severity:"Major", impact:"Love/relationship wiring is square, not mild — creates desire tension" },
  { orig:"Moon ⚹ Neptune (sextile)",    corrected:"Moon ☌ Neptune (conjunction, 0°51′)", severity:"Critical", impact:"Moon-Neptune FUSION at < 1° — one of the chart's defining placements" },
  { orig:"Mars ⚹ Uranus (sextile)",     corrected:"Mars △ Uranus (trine, 1°32′)", severity:"Major", impact:"Air Grand Trine confirmed: Mars/Uranus/Juno — Aries Point direction" },
  { orig:"Venus ⚹ Neptune (sextile)",   corrected:"Venus □ Neptune (square, 4°57′)", severity:"Major", impact:"Romantic idealization operates as challenge tension, not ease" },
  { orig:"Mercury ⚹ Pluto (sextile)",   corrected:"Mercury ☍ Pluto (opposition, 6°08′)", severity:"Major", impact:"Mind under transformative pressure — obsessive/depth thinking" },
  { orig:"Pluto □ ASC (square)",        corrected:"Pluto ☌ ASC (conjunction, 5°45′)", severity:"Critical", impact:"Pluto IS on the Libra Ascendant — Scorpionic presentation, not square tension" },
  { orig:"Moon □ Mars (square)",        corrected:"No clean aspect (165.8° — wide opp, outside orb)", severity:"Moderate", impact:"Moon-Mars energy link is absent in standard systems; remove from scoring" },
  { orig:"Moon □ Sun (square)",         corrected:"Wide trine territory (130.5° — exceeds 10° orb)", severity:"Moderate", impact:"Sun-Moon apply orbs per system; use 130° note, not square" },
  { orig:"Chart Sect: Night",           corrected:"Day Chart (Sun H7 = above horizon)", severity:"Critical", impact:"Changes POF formula, sect benefic/malefic assignments, and triplicity rulerships" },
  { orig:"POF: Cancer 0°21′ (astro.com)", corrected:"Day formula → Gemini 0°20′ (1° discrepancy)", severity:"Note", impact:"Astro.com likely uses house cusp data; provided Cancer figure accepted from source" },
];

const CALCULATED_ASPECTS = [
  // TIER 1 — Orb ≤ 1°
  { a:"Sun",     b:"Chiron",    asp:"Conjunction", sym:"☌", angle:0,   orb:"0°19′", tier:1, type:"major", qual:"Merging",    note:"Wounds and identity fused — The Wounded Healer archetype is the Sun itself" },
  { a:"Sun",     b:"TrueNode",  asp:"Trine",       sym:"△", angle:120, orb:"0°25′", tier:1, type:"major", qual:"Harmonious", note:"Solar purpose exactly aligned with karmic North Node path" },
  { a:"Mercury", b:"Saturn",    asp:"Square",      sym:"□", angle:90,  orb:"0°27′", tier:1, type:"major", qual:"Challenging",note:"Mercury at 29° Pisces □ Saturn at 29° Gemini — almost exact; structured vs boundless thought" },
  { a:"Moon",    b:"Ascendant", asp:"Sextile",     sym:"⚹", angle:60,  orb:"0°34′", tier:1, type:"major", qual:"Harmonious", note:"Emotional nature flows naturally into the outward persona" },
  { a:"Venus",   b:"Pluto",     asp:"Quincunx",    sym:"⚻", angle:150, orb:"0°38′", tier:1, type:"minor", qual:"Karmic",     note:"Love and transformation in fated, uneasy tension — love demands complete surrender" },
  { a:"Chiron",  b:"TrueNode",  asp:"Trine",       sym:"△", angle:120, orb:"0°44′", tier:1, type:"major", qual:"Harmonious", note:"Wound-healing IS the soul's evolutionary direction — tightly fated" },
  { a:"Moon",    b:"Uranus",    asp:"Semisquare",  sym:"∠", angle:45,  orb:"0°44′", tier:1, type:"minor", qual:"Tense",      note:"Emotional disruption and innovation — sudden feeling-state shifts" },
  { a:"Moon",    b:"Neptune",   asp:"Conjunction", sym:"☌", angle:0,   orb:"0°51′", tier:1, type:"major", qual:"Merging",    note:"CRITICAL: Moon fused with Neptune at < 1° — psychic emotional sensitivity, boundlessness" },
  { a:"Venus",   b:"Chiron",    asp:"Semisquare",  sym:"∠", angle:45,  orb:"0°57′", tier:1, type:"minor", qual:"Tense",      note:"Love pattern linked to wound-site; romantic encounters trigger healing process" },
  { a:"Saturn",  b:"POF",       asp:"Conjunction", sym:"☌", angle:0,   orb:"0°58′", tier:1, type:"major", qual:"Merging",    note:"CRITICAL: Saturn exactly on Part of Fortune — fortune requires discipline; joy = mastery" },
  // TIER 2 — Orb 1°–4°
  { a:"Neptune", b:"Ascendant", asp:"Sextile",     sym:"⚹", angle:60,  orb:"1°25′", tier:2, type:"major", qual:"Harmonious", note:"Persona has Neptunian quality — mystical, artistic, idealistic outer manner" },
  { a:"Mercury", b:"POF",       asp:"Square",      sym:"□", angle:90,  orb:"1°26′", tier:2, type:"major", qual:"Challenging",note:"Mind operates in tension with Fortune path — over-thinking blocks abundance flow" },
  { a:"Mars",    b:"Uranus",    asp:"Trine",       sym:"△", angle:120, orb:"1°32′", tier:2, type:"major", qual:"Harmonious", note:"Part of Air Grand Trine — inventive action, brilliant innovation, freedom-seeking drive" },
  { a:"Jupiter", b:"Neptune",   asp:"Square",      sym:"□", angle:90,  orb:"1°56′", tier:2, type:"major", qual:"Challenging",note:"Philosophical idealism vs spiritual dissolution — grandiose visions needing discernment" },
  { a:"Moon",    b:"Jupiter",   asp:"Square",      sym:"□", angle:90,  orb:"2°47′", tier:2, type:"major", qual:"Challenging",note:"Emotional excess, philosophical restlessness; hunger for meaning without structure" },
  { a:"Jupiter", b:"Pluto",     asp:"Quincunx",    sym:"⚻", angle:150, orb:"2°23′", tier:2, type:"minor", qual:"Karmic",     note:"Transformative power and expansive faith operate at cross-purposes" },
  { a:"Mercury", b:"Uranus",    asp:"Quincunx",    sym:"⚻", angle:150, orb:"2°57′", tier:2, type:"minor", qual:"Karmic",     note:"Genius-level mind but erratic — insight arrives in lightning flashes, not linear logic" },
  { a:"Venus",   b:"Jupiter",   asp:"Conjunction", sym:"☌", angle:0,   orb:"3°02′", tier:2, type:"major", qual:"Merging",    note:"Great Benefic pair in Pisces — supreme creative generosity; artistic and romantic abundance" },
  { a:"Mars",    b:"TrueNode",  asp:"Opposition",  sym:"☍", angle:180, orb:"3°20′", tier:2, type:"major", qual:"Challenging",note:"Action/drive in tension with karmic purpose — must align willpower with soul direction" },
  { a:"Saturn",  b:"Uranus",    asp:"Trine",       sym:"△", angle:120, orb:"3°24′", tier:2, type:"major", qual:"Harmonious", note:"Structure and innovation flow together — architect of unusual systems; reform through discipline" },
  { a:"Sun",     b:"Mars",      asp:"Sextile",     sym:"⚹", angle:60,  orb:"3°45′", tier:2, type:"major", qual:"Harmonious", note:"Solar vitality flows into Mars action — confident, bold, self-directed leadership" },
  { a:"Venus",   b:"POF",       asp:"Trine",       sym:"△", angle:120, orb:"4°03′", tier:2, type:"major", qual:"Harmonious", note:"Venus (chart ruler) trines Fortune — joy comes through love, beauty, and creative abundance" },
  { a:"Mars",    b:"Chiron",    asp:"Sextile",     sym:"⚹", angle:60,  orb:"4°03′", tier:2, type:"major", qual:"Harmonious", note:"Healing power flows through direct, courageous action" },
  { a:"Uranus",  b:"POF",       asp:"Trine",       sym:"△", angle:120, orb:"4°23′", tier:2, type:"major", qual:"Harmonious", note:"Fortune arrives through innovation, originality, and unexpected turns" },
  // TIER 3 — Orb 4°–8°
  { a:"Mercury", b:"Mars",      asp:"Square",      sym:"□", angle:90,  orb:"4°29′", tier:3, type:"major", qual:"Challenging",note:"Mental aggression, argumentative brilliance; sharp mind can cut too deep" },
  { a:"Moon",    b:"Pluto",     asp:"Sextile",     sym:"⚹", angle:60,  orb:"5°11′", tier:3, type:"major", qual:"Harmonious", note:"Deep emotional perception — psychological insight flows naturally" },
  { a:"Sun",     b:"Uranus",    asp:"Opposition",  sym:"☍", angle:180, orb:"5°17′", tier:3, type:"major", qual:"Challenging",note:"Identity (Aries H7) vs Freedom (Libra H1) — partnership-versus-autonomy defining tension" },
  { a:"Uranus",  b:"Chiron",    asp:"Opposition",  sym:"☍", angle:180, orb:"5°36′", tier:3, type:"major", qual:"Challenging",note:"Wounded rebel archetype — freedom drive linked to core wound site" },
  { a:"Saturn",  b:"Pluto",     asp:"Square",      sym:"□", angle:90,  orb:"5°40′", tier:3, type:"major", qual:"Challenging",note:"Generational challenge: dismantling old structures; karma requires total overhaul" },
  { a:"Moon",    b:"Venus",     asp:"Square",      sym:"□", angle:90,  orb:"5°49′", tier:3, type:"major", qual:"Challenging",note:"Emotional needs conflict with love style — mother wound intersects relationship patterns" },
  { a:"Mars",    b:"POF",       asp:"Conjunction", sym:"☌", angle:0,   orb:"5°55′", tier:3, type:"major", qual:"Merging",    note:"Mars activates Fortune zone — vitality and drive are vehicles for prosperity" },
  { a:"Mercury", b:"Pluto",     asp:"Opposition",  sym:"☍", angle:180, orb:"6°08′", tier:3, type:"major", qual:"Challenging",note:"Mind penetrates hidden realms — psychological depth, obsessive thinking potential" },
  { a:"Pluto",   b:"Ascendant", asp:"Conjunction", sym:"☌", angle:0,   orb:"5°45′", tier:3, type:"major", qual:"Merging",    note:"CORRECTED from square: Pluto on Libra Ascendant — persona is Scorpionic intensity in Libra clothing" },
  { a:"Venus",   b:"Neptune",   asp:"Square",      sym:"□", angle:90,  orb:"4°57′", tier:3, type:"major", qual:"Challenging",note:"CORRECTED from sextile: Romantic idealization operates as challenge — love triggers dissolution" },
];

const MIDPOINT_PICTURES = [
  { pair:"♃/⚷ → ☿",  label:"Jupiter/Chiron → Mercury", orb:"0°01′ EXACT", significance:"★★★★★", reading:"Mercury stands at the exact midpoint of Jupiter and Chiron. The wounded teacher's wisdom IS the voice of this mind. Communication is the instrument of healing philosophy. Writing, speaking, counseling all carry the healer-teacher archetype." },
  { pair:"♃/♇ → ☊",  label:"Jupiter/Pluto → North Node", orb:"0°08′ EXACT", significance:"★★★★★", reading:"The soul's North Node purpose (evolutionary direction) is activated by the Jupiter/Pluto midpoint. Destiny involves transformative power and philosophical expansion — the soul's path is through influence, depth wisdom, and abundance mastery." },
  { pair:"♀/♂ → Vx",  label:"Venus/Mars → Vertex", orb:"0°11′ EXACT", significance:"★★★★★", reading:"The Vertex (fated encounter point) sits exactly on the Venus/Mars midpoint. Fated relationships carry intense erotic and romantic charges. Life-changing partnerships are written into the chart as a core fate signature." },
  { pair:"Su/Mo → Sa/⊕", label:"Sun/Moon → Saturn & POF (135°)", orb:"~1°", significance:"★★★★☆", reading:"The Sun/Moon midpoint (core self-integration) is triggered at 135° by both Saturn and the Part of Fortune simultaneously. Personal integration requires discipline (Saturn) and is linked to the fortune path. Tension between emotional and solar drives resolves through structured effort." },
  { pair:"♀/♃ → ☉±45°",  label:"Venus/Jupiter → Sun (semisquare)", orb:"0°24′", significance:"★★★★☆", reading:"The Sun activates the Venus/Jupiter abundance midpoint. Solar identity and creative wealth flow are tightly linked — being oneself IS the source of creative abundance." },
  { pair:"Su/♃ → 0° Pis", label:"Sun/Jupiter midpoint → ASC (180°)", orb:"~1°", significance:"★★★☆☆", reading:"The Ascendant activates the Sun/Jupiter midpoint. The outward persona amplifies the solar/Jupiterian themes — a naturally expansive, optimistic, 'bigger than life' presentation." },
  { pair:"Su/☊ → Aq",    label:"Sun/Node midpoint → Aquarius", orb:"—",    significance:"★★★☆☆", reading:"Aquarius 20°54′ — the Sun/Node midpoint zone. Innovations and group-oriented ideas carry karmic weight. The soul's direction involves Aquarian themes: originality, collective awareness, future-visioning." },
  { pair:"♀/♇ → ☊±0°",  label:"Venus/Pluto → North Node (direct)", orb:"1°38′", significance:"★★★★☆", reading:"The North Node activates the Venus/Pluto midpoint. Evolutionary path runs through deep, transformative love — the soul's growth catalyst is love that changes everything." },
];

const CONFIGURATIONS = [
  {
    type:"AIR GRAND TRINE", glyph:"△△△",
    bodies:["Mars ♊ H9","Uranus ♎ H1","Juno ♒ H5"],
    orbs:["1°32′","0°48′","1°05′"],
    element:"Air",
    color:"#70a8c8",
    reading:`One of the most technically precise configurations in this chart. Three Air-sign placements form a nearly perfect Grand Trine with all orbs under 2°. Mars in late Gemini (the intellectual soldier), Uranus in Libra Rx (the brilliant individualist in the 1st house), and Juno in Aquarius (the archetype of the soulmate/partner) create a self-sustaining circuit of intellectual electricity. This native thinks in webs, not lines — connecting ideas across domains with natural brilliance. The Uranian influence on the Ascendant feeds revolutionary insight directly into the persona, while Mars channels it through communication, teaching, and 9th-house philosophy. Juno's presence links this intellectual current to the partner bond — relationships that work best are those built on mental kinship. The danger of Grand Trines is complacency: the circuit runs so smoothly it can bypass growth. This trine must be consciously activated through challenge.`,
  },
  {
    type:"T-SQUARE (MUTABLE-FIXED HYBRID)", glyph:"□□☍",
    bodies:["Mercury ♓ H6 (apex axis)","Saturn ♊ H9 (apex)","Pluto ♎ H12 (base)","POF ♋ H8 (conj Saturn)"],
    orbs:["Me □ Sa: 0°27′ EXACT","Me ☍ Pl: 6°08′","Sa □ Pl: 5°40′"],
    element:"Mutable-Fixed",
    color:"var(--crimson, #c2415a)",
    reading:`Mercury at 29° Pisces squares Saturn at 29° Gemini with only 0°27′ orb — one of the tightest aspects in the entire chart. The 29th degree (anaretic/critical degree) in BOTH planets intensifies this square enormously. Mercury in Pisces falls (in traditional dignity), already struggling with precise linear thinking, and Saturn in Gemini demands rigor, structure, and clear communication. The square creates lifelong tension between boundless imaginative perception (Mercury Pisces) and the need for disciplined intellectual frameworks (Saturn Gemini). Pluto in Libra H12 opposes Mercury from the hidden-sector — the unconscious runs a transformative undercurrent through all thought processes. The missing leg of this T-Square would be at approximately 29° Virgo: integrating body, health discipline, and practical discernment would complete the circuit. The Part of Fortune conjunct Saturn amplifies the Saturn apex — fortune is tied to mastering this mental tension, turning Piscean imagination into disciplined craft.`,
  },
  {
    type:"YOD — FINGER OF GOD", glyph:"⚻⚻⚹",
    bodies:["Venus ♓ H5 (base)","Sedna ♉ H7 (base)","Pluto ♎ H12 (apex)"],
    orbs:["Ve ⚹ Se: ~1°3′","Ve ⚻ Pl: 0°38′","Se ⚻ Pl: ~2°"],
    element:"Mutable/Fixed/Cardinal",
    color:"var(--violet, #8b5cf6)",
    reading:`Venus and Sedna (the deep-space dwarf planet of spiritual exile, the ultra-long cycle feminine archetype) form a sextile with both bodies simultaneously quincunxing Pluto at the apex. The Yod is the "Finger of God" — it points at the apex planet as a fated life direction the individual cannot ignore and cannot reach through normal means. Pluto in H12 is already a deeply hidden, psychological-underworld placement. The Yod directs both Venusian love-power and Sedna's primordial feminine depth directly into that Pluto/12th house zone. This describes a life trajectory involving transformation through hidden, unconscious, or even karmic romantic dynamics. Crisis around love and intimacy is not random — it is fated as the exact mechanism through which Plutonian evolution occurs. Sedna's mythological resonance (the great goddess betrayed) adds a layer of ancestral feminine wound to the Venus/Pluto axis.`,
  },
];

const STELLIA = [
  { sign:"Pisces", house:5, count:5, planets:["Venus 4°24′ (exalt)","Eros 7°18′","Jupiter 7°26′ (domicile)","Pholus 9°13′","Mercury 28°55′ (fall)"],
    note:"Core Creative-Romantic Stellium. Venus/Eros/Jupiter within 5° — extraordinary romantic and artistic concentration. Chart ruler (Venus) fused with the Great Benefic (Jupiter) in their shared domicile/exaltation sign. This house stellium describes a person whose 5th house (creativity, love, joy, children, self-expression) IS the dominant life arena." },
  { sign:"Aries", house:7, count:5, planets:["Chiron 20°22′ (exact ☌ Sun)","Sun 20°41′ (exalted)","Kaali 16°45′","Cupido 26°38′","Vertex 29°14′"],
    note:"The Wounded Solar 7th House. Exalted Sun conjunct Chiron in the house of partnership. Identity and wounds operate in the partnership zone. Fated relationships (Vertex) carry charged desire (Cupido). The native heals through relationship — and the partner zone is the primary stage for the Sun's exaltation." },
  { sign:"Sagittarius", house:3, count:3, planets:["Neptune 9°22′ Rx","Moon 10°13′","TrueNode 21°06′ Rx"],
    note:"Mystical Communication Stellium. Moon fused with Neptune at < 1° in the house of mind, communication, and local environment. The thinking process is visionary, permeable, and psychically receptive. North Node here adds: the soul's evolutionary direction flows THROUGH this Moon-Neptune mystical mind. Writing, speaking, or communicating from a dreamlike, intuitive, or spiritual register is the karmic task." },
  { sign:"Gemini", house:9, count:3, planets:["Mars 24°26′","Saturn 29°22′ (anaretic)","Pandora 17°38′"],
    note:"Philosophical Discipline Stellium. Mars-Saturn conjunction in Gemini's 9th house: disciplined intellectual warrior seeking truth. Saturn at 29° (anaretic) adds urgency and intensity to the Gemini energy. The life force (Mars) and structure (Saturn) are fused in the domain of higher learning, philosophy, travel, and world-view building." },
];

const DIGNITIES = [
  { planet:"Sun",     sign:"Aries",       status:"Exaltation",  score:"+4", impl:"Solar identity operates at its most honored and elevated. Natural leadership confidence. Can tend toward idealization of the self; the fall challenge is overreach." },
  { planet:"Venus",   sign:"Pisces",      status:"Exaltation",  score:"+4", impl:"Chart ruler exalted — love, beauty, creativity operate at maximum elevation. Idealized romanticism, artistic transcendence, spiritual generosity in relating." },
  { planet:"Jupiter", sign:"Pisces",      status:"Domicile",    score:"+5", impl:"Final dispositor at home. Pisces Jupiter is the engine of the whole chart. Spiritual abundance, mystical expansion, boundless generosity. All chains terminate here." },
  { planet:"Mercury", sign:"Pisces",      status:"Fall",        score:"-4", impl:"Mercury is in its fall in Pisces AND at 29° (anaretic degree). Communication struggles with precision; the mind operates through metaphor, image, and feeling rather than logic. The Mercury □ Saturn confirms the structural tension." },
  { planet:"Moon",    sign:"Sagittarius", status:"Peregrine",   score:"0",  impl:"No essential dignity; expressed entirely through house (3rd) and aspects (Neptune conjunction dominant). The Moon's color comes entirely from its fusion with Neptune." },
  { planet:"Mars",    sign:"Gemini",      status:"Peregrine",   score:"0",  impl:"Mars without essential dignity — operates entirely through sign and house energy. Gemini Mars: restless, multi-directional, intellectually aggressive. 9th house: philosophical crusader." },
  { planet:"Saturn",  sign:"Gemini",      status:"Peregrine",   score:"0",  impl:"Saturn at 29° Gemini (anaretic) — critical degree adds urgency to Saturnian themes of communication discipline. Peregrine means the square to Mercury (0.5° exact) defines this Saturn completely." },
  { planet:"Uranus",  sign:"Libra",       status:"Peregrine",   score:"0",  impl:"Uranus in H1 Rx — accidents from Rx in house of self: the rebel archetype is internalized, operates as a hidden revolutionary streak that erupts outwardly. Part of Air Grand Trine." },
  { planet:"Pluto",   sign:"Libra",       status:"Peregrine",   score:"0",  impl:"Pluto conjunct ASC (5°45′) — the Libra Ascendant presents as balanced and diplomatic but Pluto's conjunction gives a Scorpionic undercurrent of intensity, transformation, and power beneath the surface." },
];

const DISPOSITOR_CHAIN = [
  { planet:"Sun (Aries)", chain:"→ Mars (Gemini) → Mercury (Pisces) → Jupiter (Pisces) ★", final:"Jupiter" },
  { planet:"Moon (Sag)", chain:"→ Jupiter (Pisces) ★", final:"Jupiter" },
  { planet:"Mercury (Pisces)", chain:"→ Jupiter (Pisces) ★", final:"Jupiter" },
  { planet:"Venus (Pisces)", chain:"→ Jupiter (Pisces) ★", final:"Jupiter" },
  { planet:"Mars (Gemini)", chain:"→ Mercury (Pisces) → Jupiter (Pisces) ★", final:"Jupiter" },
  { planet:"Saturn (Gemini)", chain:"→ Mercury (Pisces) → Jupiter (Pisces) ★", final:"Jupiter" },
  { planet:"Jupiter (Pisces)", chain:"Rules self — FINAL DISPOSITOR ★★", final:"Jupiter" },
  { planet:"Uranus (Libra)", chain:"→ Venus (Pisces) → Jupiter (Pisces) ★", final:"Jupiter" },
  { planet:"Neptune (Sag)", chain:"→ Jupiter (Pisces) ★", final:"Jupiter" },
  { planet:"Pluto (Libra)", chain:"→ Venus (Pisces) → Jupiter (Pisces) ★", final:"Jupiter" },
  { planet:"TrueNode (Sag)", chain:"→ Jupiter (Pisces) ★", final:"Jupiter" },
  { planet:"Chiron (Aries)", chain:"→ Mars → Mercury → Jupiter (Pisces) ★", final:"Jupiter" },
];

const FULL_READING = [
  {
    title:"I. Chart Overview — The Jupiterian-Venusian Mystic",
    icon:"◎",
    body:`Every single planet in this chart has a dispositor chain terminating at Jupiter in Pisces in the 5th house. Jupiter is the chart's final dispositor — the ultimate authority over all planetary energy. Combined with Venus exalted in Pisces (the chart ruler), this creates a Jupiter-Venus dominant signature that is among the most creative, romantic, and spiritually generative in the entire zodiac. The dominant themes — romantic idealism, artistic expression, spiritual abundance, mystical perception — are not incidental to this personality; they ARE the personality. Fire and Water elements dominate, with Air providing the communication architecture and Earth conspicuously absent. The absent Earth element is not a wound but an invitation: all practical, material, and structural concerns must be consciously cultivated rather than arising naturally. The Sun is exalted in Aries (7th house), Venus is exalted in Pisces (5th house), and Jupiter rules its own sign in Pisces (5th house). Three major planets operate at their highest essential strength. This is an extraordinarily dignified chart for romantic creativity, spiritual generosity, and artistic inspiration.`,
  },
  {
    title:"II. Core Identity — Exalted Sun Conjunct Chiron at 0°19′",
    icon:"☉",
    body:`The Sun sits at Aries 20°41′, the sign of its exaltation — and is fused with Chiron at 20°22′ with only 19 arc-minutes of separation. This conjunction is, effectively, the chart's central archetype. The Wounded Healer is not a peripheral figure in this life — the Wounded Healer IS the Sun, IS the identity. The native does not simply have Chironic themes; the Chironic theme is the organizing principle of the entire ego structure. Exalted Sun gives tremendous drive, confidence, and initiative (classic Aries solar qualities), but the Chiron fusion means every act of self-expression, every assertion of identity, every solar moment simultaneously touches the wound-site. The wound heals by being expressed rather than hidden. This person discovers their deepest purpose — and deepest healing — precisely when being most authentically, vividly themselves. The Sun-Node trine (0°25′ orb) confirms: this Chiron-Sun dynamic IS the evolutionary mission.`,
  },
  {
    title:"III. Moon Conjunct Neptune at 0°51′ — The Mystical Emotional Field",
    icon:"☽",
    body:`Moon at Sagittarius 10°13′ conjunct Neptune at Sagittarius 9°22′ with less than 1° of separation — this is one of the most emotionally and psychically significant placements in the chart. The Moon IS Neptune here; the emotional field has no clear boundary. Feelings arrive as imagery, vision, music, and spiritual experience rather than discrete emotions. There is natural psychic permeability — the native absorbs the emotional atmosphere of any room, any relationship, any encounter at a depth most people never experience. This is the source of tremendous empathy, creative inspiration, and spiritual sensitivity. The challenge is boundaries: whose feelings are being felt? Where does the native's emotional experience end and another person's begin? In Sagittarius (the philosopher, the truth-seeker), this conjunction becomes the philosopher-mystic: the mind searches for transcendent truth and finds it in the felt experience of connection with something greater. The 3rd house placement means this mystical-emotional field expresses itself through communication — speaking, writing, listening, teaching. The North Node at 21° Sagittarius in the same house confirms: evolutionary growth runs through this mystical communicative channel.`,
  },
  {
    title:"IV. Venus Conjunct Jupiter — The Great Benefic Pair in Pisces, 5th House",
    icon:"♀",
    body:`Venus at Pisces 4°24′ conjunct Jupiter at Pisces 7°26′ in the 5th house of creativity, romance, joy, and self-expression — both in the sign where Venus is exalted and Jupiter is domicile. This is among the most potent placements for creative, romantic, and artistic abundance in the zodiac. The 5th house is the house of the Sun's joy; Venus (chart ruler) and Jupiter (final dispositor) meet here as the chart's most elevated pair. Creative output flows abundantly and naturally. Romantic generosity is extreme — this native gives lavishly in love, sees the divine in their beloved, and experiences love as a spiritual path. The creative archetype operates through compassion, beauty, spirituality, and transcendence. Eros at Pisces 7°18′ sits virtually conjunct this pair, intensifying the erotic-romantic-creative charge. The Venus/Mars midpoint activates the Vertex at Aries 29° (0°11′ orb) — fated romantic encounters carry unmistakable life-changing weight.`,
  },
  {
    title:"V. Mars Conjunct Saturn in Gemini — The Disciplined Intellectual Driver",
    icon:"♂",
    body:`Mars at Gemini 24°26′ conjunct Saturn at Gemini 29°22′ (4°56′ orb) in the 9th house of philosophy, higher learning, and world-view. This is the chart's engine of discipline and structured effort. Mars provides the drive; Saturn provides the architecture; Gemini provides the intellectual domain. The result is a relentlessly driven, strategically focused mind in the pursuit of truth, knowledge, and meaning. The 9th house amplifies the philosophical dimension: this person builds elaborate frameworks for understanding life and fights (Mars) to defend and transmit them (Gemini). Saturn at 29° (anaretic degree) adds urgency — there is always a sense that there's more to learn, more to master, more to transmit before time runs out. The Mars/Saturn conjunction participates in the Air Grand Trine through Mars's trine to Uranus (1°32′) and Juno, giving the disciplined intellectual drive access to brilliant innovation. Saturn's exact conjunction with the Part of Fortune (0°58′) means this discipline IS the fortune path — mastery, rigor, and structured intellectual output are the vehicles through which material and purposeful abundance flows.`,
  },
  {
    title:"VI. Sun Opposite Uranus — The Partnership-Autonomy Axis",
    icon:"☍",
    body:`Sun at Aries 20° in the 7th house (partnerships) opposes Uranus at Libra 26° in the 1st house (self/persona) with 5°17′ orb. This opposition defines a fundamental life tension between the desire for partnership and the need for radical individuality. The Sun in the 7th house means the native experiences their fullest self through relationship — yet Uranus in the 1st demands complete freedom, individuation, and the right to break conventional forms. Partners activate the native's solar identity; simultaneously, the native's Uranian nature disrupts, surprises, and refuses to be contained. Relationships that offer genuine freedom and intellectual electric charge satisfy both ends of the axis. Relationships that demand conformity or suffocate individuality trigger the Uranus end with sudden, disruptive force. Pluto's conjunction to the Ascendant (5°45′) adds another layer: the Libra persona carries Plutonian depth and intensity beneath its harmonious surface. The native IS more intense than they first appear.`,
  },
  {
    title:"VII. Mercury Square Saturn at 0°27′ — Critical Degree Tension",
    icon:"☿",
    body:`Mercury at 29° Pisces (fall, anaretic degree) squares Saturn at 29° Gemini (anaretic degree) with only 27 arc-minutes — essentially exact. The 29th degree (the "degree of fate" or "critical degree") in BOTH planets of a tight square creates extreme intensity. Mercury in its fall in Pisces already struggles with clear, logical, linear thinking — it perceives through feeling, imagery, and intuition. Saturn demands exactness, structure, and disciplined communication. The square is a lifetime tension: the boundless imaginative mind (Mercury Pisces) vs. the demand for precise, rigorous thought (Saturn Gemini). When resolved, this produces someone who can translate mystical vision into concrete language — the poet who also writes with precision, the healer who also understands the scientific mechanism. Mercury's opposition to Pluto H12 (6°08′) adds the dimension of psychological depth and hidden mental processes. The Jupiter/Chiron midpoint exactly on Mercury (0°01′) means all of this mental struggle is simultaneously the domain of the wounded healer's wisdom: the very tension between vision and precision IS the teaching.`,
  },
  {
    title:"VIII. Air Grand Trine — Mars △ Uranus △ Juno",
    icon:"△",
    body:`Mars ♊, Uranus ♎ Rx, and Juno ♒ form a Grand Trine in Air signs with all three orbs under 2°. This is the chart's gift circuit — the energy that flows most naturally and brilliantly without friction. Air Grand Trines represent intellectual mastery, communicative ease, and the ability to hold multiple mental realities simultaneously. Mars in Gemini contributes dynamic intellectual drive and quick-thinking action. Uranus in Libra (1st house Rx) contributes revolutionary insight, original perspective, and a brilliant outsider view. Juno in Aquarius contributes the archetype of the ideal intellectual partner — the one who feeds the mind and matches its electric frequency. The Grand Trine's flow means this native thinks differently than others — sees connections that are invisible to the conventionally-minded. The danger (all Grand Trines carry it) is that the circuit is so self-sufficient it can bypass growth; the native may rely on natural brilliance instead of pushing into genuinely challenging territory.`,
  },
  {
    title:"IX. T-Square — Mercury □ Saturn ☍ Pluto",
    icon:"□",
    body:`The chart's primary tension axis: Mercury □ Saturn (0°27′ EXACT) and Mercury ☍ Pluto (6°08′) with Saturn □ Pluto (5°40′). Apex at Saturn in Gemini H9. This T-Square drives the chart's evolutionary pressure. The opposition of Mercury (Pisces, H6) to Pluto (Libra, H12) spans the axis of service-to-hidden-depths — unconscious processes (H12 Pluto) exert powerful pressure on the mind and communication function (Mercury H6). Saturn as apex in H9 demands that all this mental-psychological tension be resolved through disciplined higher learning, philosophy, and teaching. The Part of Fortune conjunct Saturn at the apex means that RESOLVING this T-Square (developing disciplined, structured, precise expression of mystical perception) is literally the fortune path. The empty leg at approximately Virgo 29° (opposite Mercury, square both Saturn and Pluto) would be activated by transiting planets through late Virgo — those periods are times of maximum resolution potential.`,
  },
  {
    title:"X. Part of Fortune — Saturn-Exact Conjunction at Cancer 0°21′, House 8",
    icon:"⊕",
    body:`The Part of Fortune in Cancer (0°21′) in the 8th house is conjunct Saturn (Gemini 29°22′) with less than 1° of orb — one of the tightest contacts in the chart. This is a profound statement about where and how fortune flows: through the 8th house of transformation, shared resources, depth-psychology, and regeneration; and activated by Saturn (discipline, mastery, long-term effort). Fortune does not flow easily here — it requires depth of commitment, willingness to face the hidden, and persistent disciplined effort over time. Cancer at the cusp of the 8th: the fortune path involves emotional depth, nurturing others through transformation, and working with the hidden emotional world (psychotherapy, healing work, crisis support). Saturn's exact conjunction confirms: the greater the discipline and mastery applied to 8th house domains, the greater the flow of abundance and purpose. Venus △ POF (4°06′), Jupiter △ POF (7°09′), Uranus △ POF (4°23′) and Mars ☌ POF (5°55′) — the chart's most elevated planets all aspect the Fortune in harmonious or merging configurations.`,
  },
  {
    title:"XI. Dominant Energy — Fire + Water; Earth Absent",
    icon:"◈",
    body:`Fire (Sun Aries, Moon Sagittarius, Neptune Sagittarius) and Water (Mercury Pisces, Venus Pisces, Jupiter Pisces) dominate, with Air providing structure (Mars Gemini, Saturn Gemini, Uranus Libra, Ascendant Libra) and Earth completely absent among the traditional planets. Fire brings initiative, enthusiasm, vision, and natural leadership — the native starts fires (metaphorically), inspires, and drives toward meaning. Water (especially Pisces stellium) brings empathy, permeability, mystical depth, and creative boundlessness. The absence of Earth is not a deficiency but a clarity: practical, material, structural matters do not arise naturally and must be deliberately cultivated. The Saturn-at-apex T-Square and the Air Grand Trine provide some stabilizing architecture, but grounding requires conscious effort. Partnerships and collaborations that supply Earthy practicality complement this chart beautifully.`,
  },
  {
    title:"XII. Synthesis — The Wounded Healer-Artist-Teacher",
    icon:"★",
    body:`This is a chart of enormous creative and spiritual potential organized around a clear central archetype: the Wounded Healer whose wounds are simultaneously their wisdom, whose creativity is simultaneously their medicine, and whose relationships are simultaneously their deepest challenge and their greatest catalysts for becoming. Jupiter in Pisces as final dispositor and Venus as exalted chart ruler point toward abundance through creative, romantic, and spiritual expression. The Sun-Chiron exact fusion places healing at the center of identity — this person heals by being seen, by creating, by teaching, by loving. The Moon-Neptune fusion in Sagittarius H3 gives the vehicle: mystical communication, visionary speech, and writing through which the emotional-spiritual field is transmitted to others. The Air Grand Trine provides the intellectual architecture: this person thinks with electric brilliance and connects ideas in ways that are genuinely original. The Mercury-Saturn T-Square provides the friction that makes growth inevitable — the tension between Piscean mystical perception and Gemini structural discipline, when resolved, produces the unique voice: mystical precision, poetic philosophy, intuitive logic. The missing Earth and the 8th house Fortune placement both point to the same lesson: depth of commitment, willingness to engage with what is hidden and difficult, and patient disciplined mastery of craft are the specific vehicles through which this chart's extraordinary gifts reach their fullest expression.`,
  },
];

/* ─── STYLES & HELPERS ──────────────────────────────────────────────── */
const CS = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Josefin+Sans:wght@300;400;600&display=swap');
  :root {
    --bg:#03040c; --mid:#08091a; --card:#0d0f22; --rim:#1c2038;
    --gold:#c9a84c; --gold-l:#e8c96d; --gold-d:rgba(201,168,76,0.35);
    --teal:#4ba99a; --violet:#7c5cbf; --crimson:#c2415a;
    --text:#d4d8f0; --muted:#5a5f7a; --silver:#9ba3c4;
    --fire:#e05c3a; --water:#4a8dbf; --air:#70a8c8; --earth:#8b7355;
  }
  * { box-sizing:border-box; margin:0; padding:0; }
  body { background:var(--bg); color:var(--text); font-family:'Cormorant Garamond',serif; font-size:15px; line-height:1.7; }
  @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
  @keyframes shimmer{0%,100%{opacity:.7}50%{opacity:1}}
  .container { max-width:1100px; margin:0 auto; padding:1.5rem; }
  .header { text-align:center; padding:2.5rem 1rem 2rem; border-bottom:1px solid var(--rim); margin-bottom:2rem; }
  .header-title { font-family:'Cinzel Decorative',serif; font-size:clamp(1rem,2.5vw,1.6rem); color:var(--gold-l); letter-spacing:.12em; margin-bottom:.4rem; }
  .header-sub { font-family:'Josefin Sans',sans-serif; font-size:.65rem; color:var(--muted); letter-spacing:.2em; text-transform:uppercase; }
  .tabs { display:flex; overflow-x:auto; gap:0; border-bottom:1px solid var(--rim); margin-bottom:2rem; scrollbar-width:none; flex-wrap:wrap; }
  .tab { font-family:'Josefin Sans',sans-serif; font-size:.55rem; letter-spacing:.14em; text-transform:uppercase; padding:.65rem .9rem; background:none; border:none; cursor:pointer; white-space:nowrap; transition:all .2s; border-bottom:2px solid transparent; }
  .tab.active { color:var(--gold-l); border-bottom-color:var(--gold); }
  .tab.inactive { color:var(--muted); }
  .card { background:var(--card); border:1px solid var(--rim); border-radius:6px; padding:1.25rem 1.5rem; margin-bottom:1.25rem; }
  .card-title { font-family:'Josefin Sans',sans-serif; font-size:.62rem; letter-spacing:.2em; text-transform:uppercase; color:var(--gold); margin-bottom:.9rem; }
  .badge { display:inline-block; padding:.15rem .55rem; border-radius:20px; font-family:'Josefin Sans',sans-serif; font-size:.55rem; letter-spacing:.1em; text-transform:uppercase; margin-right:.3rem; }
  .badge-red { background:rgba(194,65,90,.12); color:var(--crimson); border:1px solid rgba(194,65,90,.3); }
  .badge-gold { background:rgba(201,168,76,.12); color:var(--gold); border:1px solid var(--gold-d); }
  .badge-teal { background:rgba(75,169,154,.12); color:var(--teal); border:1px solid rgba(75,169,154,.3); }
  .badge-violet { background:rgba(124,92,191,.12); color:var(--violet); border:1px solid rgba(124,92,191,.3); }
  table { width:100%; border-collapse:collapse; }
  th { font-family:'Josefin Sans',sans-serif; font-size:.52rem; letter-spacing:.15em; text-transform:uppercase; color:var(--gold-d); border-bottom:1px solid var(--rim); padding:.5rem .6rem; text-align:left; }
  td { padding:.45rem .6rem; border-bottom:1px solid rgba(28,32,56,.5); font-size:.82rem; vertical-align:top; }
  tr:hover td { background:rgba(201,168,76,.03); }
  .grid2 { display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:1rem; }
  .grid3 { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:.75rem; }
  .mini { background:var(--mid); border:1px solid var(--rim); border-radius:4px; padding:.75rem 1rem; }
  .mini-title { font-family:'Josefin Sans',sans-serif; font-size:.58rem; color:var(--gold); letter-spacing:.1em; text-transform:uppercase; margin-bottom:.35rem; }
  .section-hdr { display:flex; align-items:center; gap:1rem; margin-bottom:1.75rem; }
  .section-icon { font-size:2rem; color:var(--gold-d); animation:shimmer 3s ease-in-out infinite; }
  .section-title { font-family:'Cinzel Decorative',serif; font-size:clamp(.9rem,2vw,1.3rem); color:var(--gold-l); }
  .section-sub { font-family:'Josefin Sans',sans-serif; font-size:.6rem; color:var(--muted); letter-spacing:.15em; text-transform:uppercase; margin-top:.2rem; }
  .alert { padding:.65rem 1rem; border-radius:4px; margin-bottom:.5rem; font-size:.82rem; }
  .alert-gold { background:rgba(201,168,76,.07); border-left:3px solid var(--gold); }
  .alert-red { background:rgba(194,65,90,.07); border-left:3px solid var(--crimson); }
  .alert-teal { background:rgba(75,169,154,.07); border-left:3px solid var(--teal); }
  .alert-violet { background:rgba(124,92,191,.07); border-left:3px solid var(--violet); }
  .reading-section { border-left:3px solid var(--gold-d); padding:1.25rem 1.5rem; margin-bottom:1.25rem; background:var(--card); border-radius:0 6px 6px 0; }
  .reading-num { font-family:'Cinzel Decorative',serif; font-size:.65rem; color:var(--gold-d); letter-spacing:.2em; margin-bottom:.4rem; }
  .reading-title { font-family:'Cinzel Decorative',serif; font-size:clamp(.85rem,1.8vw,1.05rem); color:var(--gold-l); margin-bottom:.9rem; }
  .reading-body { font-size:.9rem; line-height:1.9; color:var(--text); }
  .bar { height:5px; background:var(--rim); border-radius:3px; margin-top:.35rem; }
  .bar-fill { height:100%; border-radius:3px; transition:width .5s; }
  .correction-row { border-left:3px solid var(--crimson); background:rgba(194,65,90,.05); padding:.75rem 1rem; margin-bottom:.6rem; border-radius:0 4px 4px 0; }
  .correction-row.note { border-left-color:var(--gold-d); background:rgba(201,168,76,.04); }
  .star { color:var(--gold); }
`;

const DIG_COLOR = { Exaltation:"var(--gold)", Domicile:"var(--teal)", Fall:"var(--crimson)", Detriment:"var(--crimson)", Peregrine:"var(--muted)" };
const GLYPH = { Sun:"☉",Moon:"☽",Mercury:"☿",Venus:"♀",Mars:"♂",Jupiter:"♃",Saturn:"♄",Uranus:"♅",Neptune:"♆",Pluto:"♇",Chiron:"⚷",TrueNode:"☊",Ascendant:"AC",MC:"MC",POF:"⊕",Lilith:"⚸",Vertex:"Vx" };
const TIER_LABELS = { 1:"Tier I — Defining (orb ≤ 1°)", 2:"Tier II — Strong (orb 1°–4°)", 3:"Tier III — Active (orb 4°–8°)" };
const TIER_COLORS = { 1:"var(--gold)", 2:"var(--teal)", 3:"var(--silver)" };
const ELEM_COLOR = { Fire:"var(--fire)", Water:"var(--water)", Air:"var(--air)", Earth:"var(--earth)", Mutable:"var(--teal)", Fixed:"var(--crimson)", Cardinal:"var(--gold)" };

function Accordion({ title, children, accent="var(--gold-d)", defaultOpen=false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ border:`1px solid ${open ? accent : "var(--rim)"}`, borderRadius:4, marginBottom:".5rem" }}>
      <button onClick={() => setOpen(!open)} style={{ width:"100%", background:"none", border:"none", cursor:"pointer", display:"flex", justifyContent:"space-between", alignItems:"center", padding:".75rem 1rem" }}>
        <span style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:".6rem", letterSpacing:".15em", textTransform:"uppercase", color:open ? accent : "var(--muted)" }}>{title}</span>
        <span style={{ color:accent, fontSize:".8rem", transition:"transform .25s", transform:open?"rotate(180deg)":"rotate(0deg)" }}>▾</span>
      </button>
      {open && <div style={{ padding:"0 1rem 1rem" }}>{children}</div>}
    </div>
  );
}

/* ─── MAIN COMPONENT ─────────────────────────────────────────────────── */
export default function NatalChartReading() {
  const [tab, setTab] = useState("overview");

  const TABS = [
    { id:"overview",  label:"◎ Overview" },
    { id:"positions", label:"Positions" },
    { id:"aspects",   label:"Aspects" },
    { id:"midpoints", label:"Midpoints" },
    { id:"patterns",  label:"Configurations" },
    { id:"dignities", label:"Dignities" },
    { id:"errors",    label:"⚠ Corrections" },
    { id:"reading",   label:"★ Full Reading" },
  ];

  return (
    <>
      <style>{CS}</style>
      <div className="container">
        {/* HEADER */}
        <div className="header">
          <div style={{ fontSize:"1.8rem", marginBottom:".5rem", color:"var(--gold-d)", animation:"shimmer 2s ease-in-out infinite" }}>☉ ⚷ ☌</div>
          <div className="header-title">Universalized Natal Chart Reading</div>
          <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1rem", color:"var(--silver)", margin:".4rem 0", fontStyle:"italic" }}>
            Aries Sun · Libra Rising · Sagittarius Moon
          </div>
          <div className="header-sub">Bellaire OH · April 10 1974 · 19:02 LT · Placidus · Data corrected from source JSON</div>
          <div style={{ display:"flex", gap:".5rem", justifyContent:"center", flexWrap:"wrap", marginTop:"1rem" }}>
            {[["Day Chart","badge-gold"],["Venus Chart Ruler","badge-gold"],["Jupiter Final Dispositor","badge-gold"],["Sun ☌ Chiron 0°19′","badge-teal"],["Moon ☌ Neptune 0°51′","badge-teal"],["Air Grand Trine","badge-teal"],["9 JSON Errors Corrected","badge-red"]].map(([l,c],i) => (
              <span key={i} className={`badge ${c}`}>{l}</span>
            ))}
          </div>
        </div>

        {/* TABS */}
        <div className="tabs">
          {TABS.map(t => (
            <button key={t.id} className={`tab ${tab===t.id?"active":"inactive"}`} onClick={() => setTab(t.id)}>{t.label}</button>
          ))}
        </div>

        {/* ═══ OVERVIEW ═══ */}
        {tab === "overview" && (
          <div>
            <div className="section-hdr">
              <span className="section-icon">◎</span>
              <div><div className="section-title">Chart Overview</div><div className="section-sub">Key Placements · Themes · Dominants · Dispositors</div></div>
            </div>

            <div className="grid2">
              <div className="card">
                <div className="card-title">◈ Primary Signatures</div>
                {[
                  { label:"Chart Ruler", value:"Venus", note:"Pisces 4°24′ H5 — Exaltation" },
                  { label:"Final Dispositor", value:"Jupiter", note:"Pisces 7°26′ H5 — Domicile (ALL chains)" },
                  { label:"Sect", value:"Day Chart ⚑", note:"Sun H7 = above horizon (JSON error corrected)" },
                  { label:"Chart Shape", value:"Bucket/Locomotive", note:"Heavy western emphasis (H5-H9), Moon/Neptune in H3 as handle" },
                  { label:"Hemisphere", value:"Western dominant", note:"Sun H7, Venus/Jupiter H5, Mars/Saturn H9" },
                  { label:"Dominant Element", value:"Fire + Water", note:"Earth absent among traditional planets" },
                  { label:"Dominant Mode", value:"Mutable dominant", note:"Pisces, Sagittarius, Gemini stellia" },
                  { label:"Dignified Planets", value:"Sun ✦ Venus ✦ Jupiter", note:"3 major planets at essential strength" },
                ].map((r,i) => (
                  <div key={i} style={{ display:"flex", justifyContent:"space-between", borderBottom:"1px solid var(--rim)", padding:".45rem 0", alignItems:"center", flexWrap:"wrap", gap:".25rem" }}>
                    <span style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:".65rem", color:"var(--muted)", letterSpacing:".1em", textTransform:"uppercase" }}>{r.label}</span>
                    <div style={{ textAlign:"right" }}>
                      <div style={{ color:"var(--gold-l)", fontWeight:500 }}>{r.value}</div>
                      <div style={{ fontSize:".72rem", color:"var(--muted)", fontStyle:"italic" }}>{r.note}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card">
                <div className="card-title">◈ Defining Aspects (Tier I)</div>
                {CALCULATED_ASPECTS.filter(a => a.tier===1).map((a,i) => (
                  <div key={i} style={{ borderLeft:`3px solid var(--teal)`, background:"rgba(75,169,154,.04)", padding:".6rem .85rem", marginBottom:".5rem", borderRadius:"0 4px 4px 0" }}>
                    <div style={{ display:"flex", justifyContent:"space-between", marginBottom:".2rem" }}>
                      <span style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:".72rem", color:"var(--gold-l)" }}>
                        {GLYPH[a.a]||""} {a.a} {a.sym} {GLYPH[a.b]||""} {a.b}
                      </span>
                      <span style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:".65rem", color:"var(--gold)", fontWeight:700 }}>{a.orb}</span>
                    </div>
                    <div style={{ fontSize:".78rem", color:"var(--silver)", fontStyle:"italic" }}>{a.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <div className="card-title">◈ Dispositor Chain — All Planets End at Jupiter ♃</div>
              <div className="grid3">
                {DISPOSITOR_CHAIN.map((d,i) => (
                  <div key={i} className="mini">
                    <div className="mini-title">{d.planet}</div>
                    <p style={{ fontSize:".78rem", color:"var(--silver)", fontFamily:"'Josefin Sans',sans-serif" }}>{d.chain}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <div className="card-title">◈ Stellia Overview</div>
              {STELLIA.map((s,i) => (
                <div key={i} style={{ borderLeft:"3px solid var(--gold)", padding:".75rem 1.25rem", marginBottom:".75rem", background:"rgba(201,168,76,.04)", borderRadius:"0 4px 4px 0" }}>
                  <div style={{ display:"flex", gap:".5rem", alignItems:"center", marginBottom:".3rem", flexWrap:"wrap" }}>
                    <span style={{ fontFamily:"'Cinzel Decorative',serif", fontSize:".75rem", color:"var(--gold-l)" }}>{s.count} bodies in {s.sign}</span>
                    <span className="badge badge-teal">H{s.house}</span>
                    <span className="badge badge-gold">{s.count} planets</span>
                  </div>
                  <p style={{ fontSize:".78rem", color:"var(--silver)", marginBottom:".3rem" }}>{s.planets.join(" · ")}</p>
                  <p style={{ fontSize:".8rem", color:"var(--muted)", fontStyle:"italic" }}>{s.note}</p>
                </div>
              ))}
            </div>

            {/* Element balance */}
            <div className="card">
              <div className="card-title">◈ Element & Mode Balance</div>
              <div className="grid2">
                <div>
                  {[["Fire",3,10,"Sun Aries, Moon Sag, Neptune Sag"],["Water",3,10,"Mercury Pis, Venus Pis, Jupiter Pis"],["Air",4,10,"Mars Gem, Saturn Gem, Uranus Lib, ASC Lib"],["Earth",0,10,"ABSENT — must be cultivated consciously"]].map(([el,n,tot,pl],i) => (
                    <div key={i} style={{ marginBottom:".75rem" }}>
                      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:".2rem" }}>
                        <span style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:".65rem", color:ELEM_COLOR[el]||"var(--silver)" }}>{el}</span>
                        <span style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:".65rem", color:"var(--muted)" }}>{n}</span>
                      </div>
                      <div className="bar"><div className="bar-fill" style={{ width:`${(n/6)*100}%`, background:ELEM_COLOR[el]||"var(--teal)" }}></div></div>
                      <div style={{ fontSize:".7rem", color:"var(--muted)", fontStyle:"italic", marginTop:".1rem" }}>{pl}</div>
                    </div>
                  ))}
                </div>
                <div>
                  {[["Cardinal",3,10,"Sun Aries, ASC Libra, Pluto Libra"],["Mutable",5,10,"Moon Sag, Me Pis, Ve Pis, Ma Gem, Sa Gem, Ne Sag"],["Fixed",0,10,"ABSENT — may struggle with follow-through"]].map(([m,n,tot,pl],i) => (
                    <div key={i} style={{ marginBottom:".75rem" }}>
                      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:".2rem" }}>
                        <span style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:".65rem", color:ELEM_COLOR[m]||"var(--silver)" }}>{m}</span>
                        <span style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:".65rem", color:"var(--muted)" }}>{n}</span>
                      </div>
                      <div className="bar"><div className="bar-fill" style={{ width:`${(n/6)*100}%`, background:ELEM_COLOR[m]||"var(--teal)" }}></div></div>
                      <div style={{ fontSize:".7rem", color:"var(--muted)", fontStyle:"italic", marginTop:".1rem" }}>{pl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══ POSITIONS ═══ */}
        {tab === "positions" && (
          <div>
            <div className="section-hdr">
              <span className="section-icon">⊙</span>
              <div><div className="section-title">Verified Positions</div><div className="section-sub">Ecliptic longitudes · Houses · Dignities · Declinations</div></div>
            </div>

            <div className="card">
              <div className="card-title">◈ Primary Bodies — Verified Longitudes</div>
              <table>
                <thead><tr><th>Body</th><th>Sign</th><th>° ′ ″</th><th>Longitude</th><th>House</th><th>Rx</th><th>Dec.</th><th>Speed</th><th>Dignity</th></tr></thead>
                <tbody>
                  {PLANETS.map((p,i) => (
                    <tr key={i}>
                      <td style={{ color:"var(--gold-l)", fontWeight:600 }}>{GLYPH[p.name]||"·"} {p.name}</td>
                      <td style={{ color:"var(--silver)" }}>{p.sign}</td>
                      <td style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:".72rem", color:"var(--teal)" }}>{p.deg}°{String(p.min).padStart(2,"0")}′{p.sec > 0 ? String(p.sec).padStart(2,"0")+"″" : ""}</td>
                      <td style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:".68rem", color:"var(--muted)" }}>{p.long.toFixed(3)}°</td>
                      <td style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:".7rem", color:"var(--silver)" }}>H{p.house}</td>
                      <td style={{ color:"var(--crimson)", fontWeight:700 }}>{p.rx ? "℞" : ""}</td>
                      <td style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:".68rem", color:"var(--muted)" }}>{p.dec}</td>
                      <td style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:".65rem", color:"var(--muted)" }}>{p.speed}</td>
                      <td style={{ color:DIG_COLOR[p.dig?.split("/")[0]]||"var(--muted)", fontFamily:"'Josefin Sans',sans-serif", fontSize:".65rem", fontWeight: p.dig==="Exaltation"||p.dig==="Domicile" ? 700 : 400 }}>{p.dig}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid2">
              <div className="card">
                <div className="card-title">◈ Angles</div>
                <table>
                  <thead><tr><th>Angle</th><th>Sign</th><th>° ′</th><th>Longitude</th></tr></thead>
                  <tbody>
                    {ANGLES.map((a,i) => (
                      <tr key={i}>
                        <td style={{ color:"var(--gold)", fontWeight:600 }}>{a.name}</td>
                        <td>{a.sign}</td>
                        <td style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:".72rem", color:"var(--teal)" }}>{a.deg}°{String(a.min).padStart(2,"0")}′</td>
                        <td style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:".68rem", color:"var(--muted)" }}>{a.long.toFixed(3)}°</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card">
                <div className="card-title">◈ House Cusps</div>
                <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:".4rem" }}>
                  {HOUSE_CUSPS.map((h,i) => (
                    <div key={i} className="mini">
                      <div className="mini-title">H{h.h}</div>
                      <div style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:".72rem", color:"var(--teal)" }}>{h.deg}°{String(h.min).padStart(2,"0")}′</div>
                      <div style={{ fontSize:".75rem", color:"var(--silver)" }}>{h.sign}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-title">◈ Extended Bodies — Asteroids, Dwarfs, Centaurs, TNOs</div>
              <table>
                <thead><tr><th>Body</th><th>Sign</th><th>°</th><th>House</th><th>Notes</th></tr></thead>
                <tbody>
                  {EXTENDED.map((p,i) => (
                    <tr key={i}>
                      <td style={{ color:"var(--gold-d)" }}>{p.name}</td>
                      <td>{p.sign}</td>
                      <td style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:".7rem", color:"var(--teal)" }}>{p.deg}°{String(p.min).padStart(2,"0")}′</td>
                      <td style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:".7rem", color:"var(--muted)" }}>H{p.house}</td>
                      <td style={{ fontSize:".75rem", color:"var(--muted)", fontStyle:"italic" }}>
                        {p.name==="Eros" ? "≈ conjunct Jupiter — eros fused with abundance" :
                         p.name==="Pholus" ? "in Pisces stellium — uncapping transformative energies" :
                         p.name==="Vesta" ? "H12 Rx — sacred devotion turned inward/hidden" :
                         p.name==="Juno" ? "part of Air Grand Trine — partner archetype is intellectual/Aquarian" :
                         p.name==="Sedna" ? "H7 — part of Yod with Venus/Pluto; exile/feminine depth" :
                         p.name==="Orcus" ? "H10 Cancer — public/career dimension carries Orcus themes (oath-keeping, underworld leadership)" :
                         p.name==="Quaoar" ? "H1 — creative/manifestation principle in persona" :
                         p.rx ? "Retrograde" : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ═══ ASPECTS ═══ */}
        {tab === "aspects" && (
          <div>
            <div className="section-hdr">
              <span className="section-icon">⚹</span>
              <div><div className="section-title">Corrected Aspect Table</div><div className="section-sub">Recalculated from positional data · Source JSON had 9 errors · Sorted by orb</div></div>
            </div>
            <div className="alert alert-gold" style={{ marginBottom:"1.25rem" }}>
              <strong style={{ color:"var(--gold)" }}>9 JSON corrections applied.</strong> Source aspect list contained multiple classification errors. All aspects below are computed directly from ecliptic longitudes. See <strong>⚠ Corrections</strong> tab for detailed change log.
            </div>
            {[1,2,3].map(tier => (
              <div key={tier} className="card">
                <div className="card-title">◈ {TIER_LABELS[tier]}</div>
                <table>
                  <thead><tr><th>Planet A</th><th>Aspect</th><th>Planet B</th><th>Orb</th><th>Type</th><th>Quality</th><th>Interpretation Note</th></tr></thead>
                  <tbody>
                    {CALCULATED_ASPECTS.filter(a => a.tier===tier).map((a,i) => {
                      const isChallenge = a.qual.includes("Challeng") || a.qual==="Karmic" || a.qual==="Tense";
                      const isHarmon = a.qual==="Harmonious" || a.qual==="Merging";
                      return (
                        <tr key={i}>
                          <td style={{ color:"var(--gold-l)", fontWeight:600 }}>{GLYPH[a.a]||""} {a.a}</td>
                          <td style={{ color: isChallenge ? "var(--crimson)" : isHarmon ? "var(--teal)" : "var(--violet)", fontFamily:"'Josefin Sans',sans-serif", fontWeight:700 }}>
                            {a.sym} {a.asp}
                          </td>
                          <td style={{ color:"var(--silver-light)" }}>{GLYPH[a.b]||""} {a.b}</td>
                          <td style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:".72rem", fontWeight: tier===1 ? 700 : 400,
                            color: tier===1 ? "var(--gold)" : tier===2 ? "var(--teal)" : "var(--muted)" }}>
                            {a.orb}
                          </td>
                          <td><span style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:".55rem", color:"var(--muted)", textTransform:"uppercase", letterSpacing:".08em" }}>{a.type}</span></td>
                          <td><span className={`badge ${isChallenge?"badge-red":isHarmon?"badge-teal":"badge-violet"}`}>{a.qual}</span></td>
                          <td style={{ fontSize:".78rem", color:"var(--muted)", fontStyle:"italic" }}>{a.note}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )}

        {/* ═══ MIDPOINTS ═══ */}
        {tab === "midpoints" && (
          <div>
            <div className="section-hdr">
              <span className="section-icon">⊕</span>
              <div><div className="section-title">Midpoint Pictures</div><div className="section-sub">90° dial · Activations · Ebertin-style interpretations</div></div>
            </div>

            <div className="alert alert-gold" style={{ marginBottom:"1.25rem" }}>
              Three <strong style={{ color:"var(--gold)" }}>EXACT midpoint activations</strong> found at orbs under 0°15′ — among the most significant possible midpoint contacts.
            </div>

            {MIDPOINT_PICTURES.map((m,i) => (
              <div key={i} style={{ borderLeft:`3px solid ${i<3?"var(--gold)":"var(--rim)"}`, background:"var(--card)", padding:"1rem 1.5rem", marginBottom:".85rem", borderRadius:"0 6px 6px 0" }}>
                <div style={{ display:"flex", gap:".75rem", alignItems:"center", marginBottom:".5rem", flexWrap:"wrap" }}>
                  <span style={{ fontFamily:"'Cinzel Decorative',serif", fontSize:".8rem", color:"var(--gold-l)" }}>{m.label}</span>
                  <span style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:".65rem", color: i<3?"var(--gold)":"var(--muted)" }}>{m.pair}</span>
                  <span className={i<3?"badge badge-gold":"badge badge-teal"}>{m.orb}</span>
                  <span style={{ color:"var(--gold)" }}>{m.significance}</span>
                </div>
                <p style={{ fontSize:".85rem", color:"var(--text)", lineHeight:"1.8" }}>{m.reading}</p>
              </div>
            ))}

            <div className="card">
              <div className="card-title">◈ Additional Key Midpoint Positions</div>
              <table>
                <thead><tr><th>Midpoint</th><th>Position</th><th>Longitude</th><th>Activated By</th></tr></thead>
                <tbody>
                  {[
                    { pair:"Sun / Moon",  pos:"Aquarius 15°28′",  lon:"315.46°", act:"Saturn + POF at 135° (orb < 1.1°); Makemake at 180°" },
                    { pair:"Moon / Neptune", pos:"Sagittarius 9°49′", lon:"249.80°", act:"Pholus at 90° (0.59°) — uncapping the mystical emotional channel" },
                    { pair:"Venus / Mars", pos:"Aries 29°26′",     lon:"29.42°",  act:"Vertex at 0° (0.18° EXACT) — fated erotic-romantic encounters" },
                    { pair:"Mars / Saturn", pos:"Gemini 26°55′",  lon:"86.91°",  act:"Near POF/Saturn axis — the discipline of the Fortune zone" },
                    { pair:"Sun / Uranus", pos:"Capricorn 23°20′",lon:"293.33°", act:"Jupiter ±45° (0.89°), Erchos/Orcus at 180°, Pholus ±45° — amplified by multiple contacts" },
                    { pair:"Venus / Pluto", pos:"Sagittarius 19°44′", lon:"259.73°", act:"North Node (1.38°); Pallas ±45° (0.58°)" },
                    { pair:"Mercury / Saturn", pos:"Taurus 14°09′", lon:"44.15°", act:"POF at 45° (1.20°) — fortune path runs through Me/Sa mastery" },
                  ].map((r,i) => (
                    <tr key={i}>
                      <td style={{ color:"var(--gold-d)", fontFamily:"'Josefin Sans',sans-serif", fontSize:".7rem" }}>{r.pair}</td>
                      <td style={{ color:"var(--teal)", fontFamily:"'Josefin Sans',sans-serif" }}>{r.pos}</td>
                      <td style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:".68rem", color:"var(--muted)" }}>{r.lon}</td>
                      <td style={{ fontSize:".78rem", color:"var(--silver)", fontStyle:"italic" }}>{r.act}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ═══ CONFIGURATIONS ═══ */}
        {tab === "patterns" && (
          <div>
            <div className="section-hdr">
              <span className="section-icon">△</span>
              <div><div className="section-title">Aspect Configurations</div><div className="section-sub">Grand Trine · T-Square · Yod · Stellia · Patterns</div></div>
            </div>

            {CONFIGURATIONS.map((c,i) => (
              <div key={i} className="card" style={{ borderColor:c.color, borderWidth:2 }}>
                <div style={{ display:"flex", gap:".75rem", alignItems:"center", marginBottom:".85rem", flexWrap:"wrap" }}>
                  <span style={{ fontFamily:"'Cinzel Decorative',serif", fontSize:"1rem", color:c.color }}>{c.glyph}</span>
                  <span style={{ fontFamily:"'Cinzel Decorative',serif", fontSize:".85rem", color:"var(--gold-l)" }}>{c.type}</span>
                </div>
                <div style={{ display:"flex", gap:".5rem", flexWrap:"wrap", marginBottom:"1rem" }}>
                  {c.bodies.map((b,j) => <span key={j} className="badge badge-teal">{b}</span>)}
                  {c.orbs.map((o,j) => <span key={j} className="badge badge-gold">{o}</span>)}
                </div>
                <p style={{ fontSize:".88rem", lineHeight:1.9, color:"var(--text)" }}>{c.reading}</p>
              </div>
            ))}

            <div className="card">
              <div className="card-title">◈ Stellia — Concentrated Sign/House Power</div>
              {STELLIA.map((s,i) => (
                <Accordion key={i} title={`${s.count} bodies in ${s.sign} (H${s.house}) — ${s.planets[0].split(" ")[0]}…`} accent="var(--gold)">
                  <div style={{ padding:".5rem 0" }}>
                    <div style={{ display:"flex", gap:".35rem", flexWrap:"wrap", marginBottom:".75rem" }}>
                      {s.planets.map((p,j) => <span key={j} className="badge badge-teal">{p}</span>)}
                    </div>
                    <p style={{ fontSize:".85rem", lineHeight:1.85, color:"var(--text)" }}>{s.note}</p>
                  </div>
                </Accordion>
              ))}
            </div>

            {/* Missing elements / axes */}
            <div className="card">
              <div className="card-title">◈ Missing Elements & Empty Axes — Completion Points</div>
              <div className="grid2">
                {[
                  { t:"Earth Sign Absence", d:"No traditional planets in Taurus, Virgo, or Capricorn. Practical grounding, material management, physical-body awareness, and routine discipline must be cultivated consciously. Grounding practices (physical work, nature, craft, routine) serve as remedies." },
                  { t:"Fixed Mode Absence", d:"No traditional planets in fixed signs (Taurus, Leo, Scorpio, Aquarius). Persistence and sustained commitment require conscious effort. Extended projects, long-term discipline, and 'staying the course' are growth edges." },
                  { t:"T-Square Empty Leg — Virgo 29°", d:"The empty leg of the Mercury-Saturn-Pluto T-Square falls at ~29° Virgo. Transiting planets through Virgo 23–29° will trigger the T-Square for resolution. Health practices, discernment, and practical service disciplines activate the circuit." },
                  { t:"Opposition Axis — H1/H7", d:"Sun (H7) opposite Uranus (H1) defines the primary self-other axis. Identity fulfills in relationship; freedom is the non-negotiable requirement. The Pluto-ASC conjunction adds depth and transformation to all H1 presentations." },
                ].map((g,i) => (
                  <div key={i} className="mini"><div className="mini-title">{g.t}</div><p style={{ fontSize:".82rem" }}>{g.d}</p></div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═══ DIGNITIES ═══ */}
        {tab === "dignities" && (
          <div>
            <div className="section-hdr">
              <span className="section-icon">♄</span>
              <div><div className="section-title">Essential Dignities</div><div className="section-sub">Domicile · Exaltation · Fall · Detriment · Peregrine</div></div>
            </div>
            <div className="card">
              <table>
                <thead><tr><th>Planet</th><th>Sign</th><th>Status</th><th>Score</th><th>Implication</th></tr></thead>
                <tbody>
                  {DIGNITIES.map((d,i) => (
                    <tr key={i}>
                      <td style={{ color:"var(--gold-l)", fontWeight:600 }}>{GLYPH[d.planet]||""} {d.planet}</td>
                      <td>{d.sign}</td>
                      <td style={{ color:DIG_COLOR[d.status]||"var(--muted)", fontFamily:"'Josefin Sans',sans-serif", fontWeight:700, fontSize:".72rem" }}>{d.status}</td>
                      <td style={{ color: d.score.startsWith("+") ? "var(--teal)" : d.score.startsWith("-") ? "var(--crimson)" : "var(--muted)", fontFamily:"'Josefin Sans',sans-serif", fontWeight:700 }}>{d.score}</td>
                      <td style={{ fontSize:".8rem", color:"var(--silver)", fontStyle:"italic" }}>{d.impl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card">
              <div className="card-title">◈ Dignity Synthesis</div>
              <div className="grid2">
                <div className="alert alert-teal">
                  <strong style={{ color:"var(--teal)" }}>Elevated Triad:</strong> Sun (Exaltation +4), Venus (Exaltation +4), Jupiter (Domicile +5). Three major planets at maximum essential strength. The chart's core themes — identity, love, and abundance — operate at the highest archetype level.
                </div>
                <div className="alert alert-red">
                  <strong style={{ color:"var(--crimson)" }}>Challenge Point:</strong> Mercury in Fall at 29° Pisces (-4) exactly squared by Saturn. The most precise aspect in the entire chart links the weakest planet (Mercury, fall) to the most structurally demanding one (Saturn). Lifelong work: translating intuitive/imagistic perception into disciplined, precise expression.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══ CORRECTIONS ═══ */}
        {tab === "errors" && (
          <div>
            <div className="section-hdr">
              <span className="section-icon">⚠</span>
              <div><div className="section-title">Data Correction Report</div><div className="section-sub">9 errors in source JSON aspect list · Corrected from positional longitudes</div></div>
            </div>

            <div className="card">
              <div className="card-title">◈ Methodology — How Corrections Were Made</div>
              <p style={{ fontSize:".87rem", marginBottom:"1rem" }}>All planetary longitudes from the source JSON were converted to absolute ecliptic degrees (0°–360°). The angular difference between every planet pair was computed using <code style={{ color:"var(--teal)", fontSize:".78rem" }}>min(|A−B|, 360−|A−B|)</code>. Each difference was compared to all major and minor aspect angles with variable orb tolerances (8° for luminaries in major aspects, 6° for sextiles, etc., +2° when a luminary is involved). Where the computed aspect type differed from the source JSON label, a correction was issued.</p>
              <div className="grid2">
                <div className="mini"><div className="mini-title">Critical Corrections</div><p>3 errors that fundamentally change interpretation: Moon ☌ Neptune (not sextile), Pluto ☌ ASC (not square), Mars △ Uranus (not sextile)</p></div>
                <div className="mini"><div className="mini-title">Major Corrections</div><p>5 errors that change aspect type: Moon □ Venus, Venus □ Neptune, Mercury ☍ Pluto, Chart Sect (Day not Night), Mars-Moon non-aspect</p></div>
              </div>
            </div>

            {CORRECTIONS.map((c,i) => (
              <div key={i} className={`correction-row ${c.severity==="Note"?"note":""}`}>
                <div style={{ display:"flex", gap:".5rem", alignItems:"center", marginBottom:".4rem", flexWrap:"wrap" }}>
                  <span className={`badge ${c.severity==="Critical"?"badge-red":c.severity==="Note"?"badge-gold":"badge-violet"}`}>{c.severity}</span>
                  <span style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:".65rem", color:"var(--muted)", textDecoration:"line-through" }}>{c.orig}</span>
                  <span style={{ color:"var(--teal)", fontSize:".75rem" }}>→</span>
                  <span style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:".65rem", color:"var(--teal)" }}>{c.corrected}</span>
                </div>
                <p style={{ fontSize:".8rem", color:"var(--silver)", fontStyle:"italic" }}>Impact: {c.impact}</p>
              </div>
            ))}

            <div className="card" style={{ marginTop:"1.25rem" }}>
              <div className="card-title">◈ Newly Calculated Aspects Not Present in Source JSON</div>
              <p style={{ fontSize:".85rem", marginBottom:"1rem" }}>These aspects were entirely absent from the source data but are calculated as valid within standard orb tolerances:</p>
              <div className="grid2">
                {[
                  "Sun △ North Node (0°25′ — EXACT — solar purpose aligned with soul's evolutionary direction)",
                  "Mercury □ Saturn (0°27′ — EXACT — the chart's most precise major aspect, defining mental discipline tension)",
                  "Saturn ☌ Part of Fortune (0°58′ — Fortune path requires mastery; exact)",
                  "Moon ⚹ Ascendant (0°34′ — emotional nature flows into persona naturally)",
                  "Neptune ⚹ Ascendant (1°25′ — mystical quality of outward presentation)",
                  "Jupiter □ Neptune (1°56′ — philosophical expansion vs spiritual dissolution)",
                  "Saturn △ Uranus (3°24′ — structure and innovation flow together)",
                  "Venus △ Part of Fortune (4°06′ — chart ruler trines fortune)",
                  "Saturn □ Pluto (5°40′ — generational structural overhaul required)",
                  "Mercury □ Part of Fortune (1°43′ — mind in tension with fortune flow)",
                  "Air Grand Trine: Mars △ Uranus △ Juno (all orbs < 2°)",
                  "Chiron △ North Node (0°44′ — wound-healing IS the karmic mission)",
                ].map((a,i) => <div key={i} className="mini" style={{ fontSize:".8rem", color:"var(--silver)" }}>✦ {a}</div>)}
              </div>
            </div>
          </div>
        )}

        {/* ═══ FULL READING ═══ */}
        {tab === "reading" && (
          <div>
            <div className="section-hdr">
              <span className="section-icon">★</span>
              <div><div className="section-title">Full Universalized Reading</div><div className="section-sub">Multi-layer synthesis · Archetype-based · 12 interpretive dimensions</div></div>
            </div>

            <div className="alert alert-gold" style={{ marginBottom:"1.5rem" }}>
              <strong style={{ color:"var(--gold)" }}>Archetype Template.</strong> Personal identifiers have been stripped. This reading applies universally to any chart with these placements. The analysis draws from the corrected positional data and all calculated aspects, midpoints, and configurations.
            </div>

            {FULL_READING.map((section, i) => (
              <div key={i} className="reading-section">
                <div className="reading-num">{section.icon} Section {i+1} of {FULL_READING.length}</div>
                <div className="reading-title">{section.title}</div>
                <p className="reading-body">{section.body}</p>
              </div>
            ))}

            <div className="card" style={{ borderColor:"var(--gold)", borderWidth:2, marginTop:"1.5rem" }}>
              <div className="card-title">◈ Key Life Themes — Distilled Summary</div>
              <div className="grid2">
                {[
                  { icon:"☉⚷", theme:"The Wounded Healer IS the Sun", desc:"Sun-Chiron at 0°19′ — identity and wound fused; healing and self-expression are the same act" },
                  { icon:"☽♆", theme:"The Mystical Emotional Field", desc:"Moon-Neptune at 0°51′ — psychic emotional permeability; the communicator of transcendent feeling" },
                  { icon:"♀♃", theme:"Creative-Romantic Abundance", desc:"Venus-Jupiter in Pisces H5 — exalted and domicile; love and creativity operate at maximum dignity" },
                  { icon:"△△△", theme:"Air Grand Trine — Electric Mind", desc:"Mars-Uranus-Juno: brilliant innovative intelligence flows naturally; the intellectual is the gift circuit" },
                  { icon:"□□☍", theme:"T-Square — The Mental Crucible", desc:"Mercury □ Saturn (exact) / Mercury ☍ Pluto — the tension that drives mastery; mystical precision is the life work" },
                  { icon:"⊕♄", theme:"Fortune Through Mastery", desc:"Saturn ☌ POF (exact) in H8 Cancer — depth, commitment, and disciplined engagement with what is hidden open the abundance gate" },
                  { icon:"♃✦", theme:"Jupiter as Final Dispositor", desc:"Every planet's chain ends at Jupiter in Pisces H5 — spiritual, artistic, romantic abundance is the north star of the entire chart" },
                  { icon:"☍♅", theme:"Partnership-Autonomy Tension", desc:"Sun H7 ☍ Uranus H1 — partnered identity vs. radical freedom; love must be electric and free to work" },
                ].map((t,i) => (
                  <div key={i} style={{ borderLeft:"3px solid var(--gold-d)", padding:".75rem 1.25rem", background:"rgba(201,168,76,.03)", borderRadius:"0 4px 4px 0" }}>
                    <div style={{ fontFamily:"'Cinzel Decorative',serif", fontSize:".7rem", color:"var(--gold)", marginBottom:".35rem" }}>{t.icon} {t.theme}</div>
                    <p style={{ fontSize:".82rem", color:"var(--silver)" }}>{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* FOOTER */}
        <div style={{ textAlign:"center", padding:"2rem 0 1rem", borderTop:"1px solid var(--rim)", marginTop:"2rem" }}>
          <div style={{ fontFamily:"'Josefin Sans',sans-serif", fontSize:".52rem", color:"var(--muted)", letterSpacing:".2em", textTransform:"uppercase" }}>
            Universal Astrology Methodology · Corrected · Aries Sun / Libra Rising / Sagittarius Moon · Jupiter-Venus Chart
          </div>
        </div>
      </div>
    </>
  );
}
