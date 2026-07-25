import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calculator as CalculatorIcon, BarChart3, Zap } from "lucide-react";
import { useState } from "react";

interface PlanetaryStrength {
  planet: string;
  sign: string;
  house: number;
  essentialDignity: number;
  accidentalStrength: number;
  aspectSupport: number;
  angularPosition: number;
  harmonicResonance: number;
  totalPower: number;
  proficiency: string;
}

const planets = ["Sun", "Moon", "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];
const signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
const houses = Array.from({ length: 12 }, (_, i) => i + 1);

const dignityRules: Record<string, Record<string, number>> = {
  "Sun": { "Leo": 10, "Aries": 8, "Sagittarius": 8, "Libra": -10, "Aquarius": -8, "Virgo": -8 },
  "Moon": { "Cancer": 10, "Taurus": 8, "Pisces": 8, "Capricorn": -10, "Scorpio": -8, "Virgo": -8 },
  "Mercury": { "Virgo": 10, "Gemini": 8, "Pisces": -10, "Sagittarius": -8 },
  "Venus": { "Libra": 10, "Taurus": 8, "Pisces": 8, "Virgo": -10, "Scorpio": -8, "Aries": -8 },
  "Mars": { "Aries": 10, "Scorpio": 8, "Capricorn": 8, "Libra": -10, "Cancer": -8, "Taurus": -8 },
  "Jupiter": { "Sagittarius": 10, "Pisces": 8, "Leo": 8, "Gemini": -10, "Virgo": -8 },
  "Saturn": { "Capricorn": 10, "Aquarius": 8, "Libra": 8, "Cancer": -10, "Leo": -8, "Aries": -8 },
  "Uranus": { "Aquarius": 10, "Scorpio": 8, "Leo": -10, "Taurus": -8 },
  "Neptune": { "Pisces": 10, "Cancer": 8, "Virgo": -10, "Gemini": -8 },
  "Pluto": { "Scorpio": 10, "Aries": 8, "Taurus": -10, "Libra": -8 }
};

export default function Calculator() {
  const [selectedPlanet, setSelectedPlanet] = useState("Sun");
  const [selectedSign, setSelectedSign] = useState("Leo");
  const [selectedHouse, setSelectedHouse] = useState(1);
  const [accidentalStrength, setAccidentalStrength] = useState(10);
  const [aspectSupport, setAspectSupport] = useState(8);
  const [angularPosition, setAngularPosition] = useState(10);
  const [harmonicResonance, setHarmonicResonance] = useState(5);
  const [results, setResults] = useState<PlanetaryStrength | null>(null);

  const calculateStrength = () => {
    const essentialDignity = dignityRules[selectedPlanet]?.[selectedSign] || 0;
    const totalPower = essentialDignity + accidentalStrength + aspectSupport + angularPosition + harmonicResonance;
    
    let proficiency = "Beginner";
    if (totalPower >= 40) proficiency = "Master";
    else if (totalPower >= 30) proficiency = "Advanced";
    else if (totalPower >= 20) proficiency = "Intermediate";

    setResults({
      planet: selectedPlanet,
      sign: selectedSign,
      house: selectedHouse,
      essentialDignity,
      accidentalStrength,
      aspectSupport,
      angularPosition,
      harmonicResonance,
      totalPower,
      proficiency
    });
  };

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case "Master": return "bg-accent";
      case "Advanced": return "bg-blue-500";
      case "Intermediate": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent" />
        <div className="relative max-w-6xl mx-auto">
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40">
            <CalculatorIcon className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Interactive Tool</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 font-serif">
            Planetary Strength Calculator
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Calculate comprehensive planetary strength scores combining essential dignity, accidental factors, and aspect support
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <Card>
            <CardHeader>
              <CardTitle>Input Planetary Data</CardTitle>
              <CardDescription>Select planet, sign, and strength factors</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Planet Selection */}
              <div className="space-y-3">
                <label className="text-sm font-semibold">Select Planet</label>
                <div className="grid grid-cols-2 gap-2">
                  {planets.map((planet) => (
                    <button
                      key={planet}
                      onClick={() => setSelectedPlanet(planet)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        selectedPlanet === planet
                          ? "bg-accent text-accent-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {planet}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sign Selection */}
              <div className="space-y-3">
                <label className="text-sm font-semibold">Select Sign</label>
                <div className="grid grid-cols-3 gap-2">
                  {signs.map((sign) => (
                    <button
                      key={sign}
                      onClick={() => setSelectedSign(sign)}
                      className={`px-2 py-2 rounded-md text-xs font-medium transition-colors ${
                        selectedSign === sign
                          ? "bg-accent text-accent-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {sign}
                    </button>
                  ))}
                </div>
              </div>

              {/* House Selection */}
              <div className="space-y-3">
                <label className="text-sm font-semibold">Select House</label>
                <div className="grid grid-cols-4 gap-2">
                  {houses.map((house) => (
                    <button
                      key={house}
                      onClick={() => setSelectedHouse(house)}
                      className={`px-2 py-2 rounded-md text-sm font-medium transition-colors ${
                        selectedHouse === house
                          ? "bg-accent text-accent-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      H{house}
                    </button>
                  ))}
                </div>
              </div>

              {/* Strength Sliders */}
              <div className="space-y-4 pt-4 border-t border-border/50">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-semibold">Accidental Strength</label>
                    <span className="text-sm font-medium text-accent">{accidentalStrength}/20</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    value={accidentalStrength}
                    onChange={(e) => setAccidentalStrength(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-semibold">Aspect Support</label>
                    <span className="text-sm font-medium text-accent">{aspectSupport}/15</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="15"
                    value={aspectSupport}
                    onChange={(e) => setAspectSupport(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-semibold">Angular Position</label>
                    <span className="text-sm font-medium text-accent">{angularPosition}/10</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={angularPosition}
                    onChange={(e) => setAngularPosition(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-semibold">Harmonic Resonance</label>
                    <span className="text-sm font-medium text-accent">{harmonicResonance}/5</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="5"
                    value={harmonicResonance}
                    onChange={(e) => setHarmonicResonance(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>

              <Button onClick={calculateStrength} size="lg" className="w-full gap-2">
                <CalculatorIcon className="w-4 h-4" />
                Calculate Strength
              </Button>
            </CardContent>
          </Card>

          {/* Results Panel */}
          <div className="space-y-4">
            {results ? (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{results.planet} in {results.sign}</span>
                      <Badge className={getProficiencyColor(results.proficiency)}>
                        {results.proficiency}
                      </Badge>
                    </CardTitle>
                    <CardDescription>House {results.house}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Essential Dignity</span>
                          <span className="text-sm font-semibold text-accent">{results.essentialDignity}</span>
                        </div>
                        <Progress value={Math.max(0, (results.essentialDignity + 10) * 5)} className="h-2" />
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Accidental Strength</span>
                          <span className="text-sm font-semibold text-accent">{results.accidentalStrength}/20</span>
                        </div>
                        <Progress value={(results.accidentalStrength / 20) * 100} className="h-2" />
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Aspect Support</span>
                          <span className="text-sm font-semibold text-accent">{results.aspectSupport}/15</span>
                        </div>
                        <Progress value={(results.aspectSupport / 15) * 100} className="h-2" />
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Angular Position</span>
                          <span className="text-sm font-semibold text-accent">{results.angularPosition}/10</span>
                        </div>
                        <Progress value={(results.angularPosition / 10) * 100} className="h-2" />
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Harmonic Resonance</span>
                          <span className="text-sm font-semibold text-accent">{results.harmonicResonance}/5</span>
                        </div>
                        <Progress value={(results.harmonicResonance / 5) * 100} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-accent/10 border-accent/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-accent" />
                      Total Power Score
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-5xl font-bold text-accent mb-2">{results.totalPower}</div>
                      <div className="text-sm text-muted-foreground">out of 60 possible points</div>
                      <Progress value={(results.totalPower / 60) * 100} className="h-3 mt-4" />
                      <p className="text-sm font-semibold mt-4 text-foreground">
                        {results.proficiency} Level Interpretation
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {results.proficiency === "Master" && "Exceptional planetary strength with major life influence"}
                        {results.proficiency === "Advanced" && "Strong planetary influence with significant life impact"}
                        {results.proficiency === "Intermediate" && "Moderate planetary strength with noticeable effects"}
                        {results.proficiency === "Beginner" && "Developing planetary influence with subtle effects"}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card className="h-full flex items-center justify-center min-h-96">
                <CardContent className="text-center">
                  <BarChart3 className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                  <p className="text-muted-foreground">Select planetary data and click Calculate to see results</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 font-serif">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Essential Dignity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Planetary strength based on sign placement. Ranges from -10 (detriment) to +10 (rulership).
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Accidental Factors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  House placement, planetary motion, orb magnitude, and Avashta states. Maximum 20 points.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Total Power</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Combined score of all factors. Higher scores indicate stronger planetary influence and life impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
