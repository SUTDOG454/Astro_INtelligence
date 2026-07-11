import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { useState } from "react";
import { Calculator, Sparkles } from "lucide-react";

interface PlanetaryStrength {
  planet: string;
  essentialDignity: number;
  accidentalStrength: number;
  aspectSupport: number;
  angularPosition: number;
  totalPower: number;
  percentage: number;
  sign: string;
  house: number;
  dignity: string;
}

const PLANETS = [
  "Sun", "Moon", "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"
];

const SIGNS = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

const DIGNITIES = {
  "Domicile": 10,
  "Exaltation": 8,
  "Triplicity": 5,
  "Term": 3,
  "Face": 1,
  "Peregrine": -5,
  "Detriment": -8,
  "Fall": -8
};

const COLORS = ["#d4af37", "#c9a961", "#bf838b", "#b56d7e", "#ab5771", "#a14164", "#972b57", "#8d154a", "#83003d", "#790030"];

export default function ChartDelineation() {
  const [birthDate, setBirthDate] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [birthLocation, setBirthLocation] = useState("");
  const [planetaryData, setPlanetaryData] = useState<PlanetaryStrength[]>([]);
  const [showResults, setShowResults] = useState(false);

  const calculateStrength = () => {
    if (!birthDate || !birthTime || !birthLocation) {
      alert("Please fill in all fields");
      return;
    }

    // Generate sample planetary strength data for demonstration
    const mockData: PlanetaryStrength[] = [
      {
        planet: "Venus",
        essentialDignity: 8,
        accidentalStrength: 8,
        aspectSupport: 4,
        angularPosition: 5,
        totalPower: 114.9,
        percentage: 8.73,
        sign: "Pisces",
        house: 5,
        dignity: "Exaltation"
      },
      {
        planet: "Jupiter",
        essentialDignity: 10,
        accidentalStrength: 8,
        aspectSupport: 3,
        angularPosition: 5,
        totalPower: 111.0,
        percentage: 8.43,
        sign: "Pisces",
        house: 5,
        dignity: "Domicile"
      },
      {
        planet: "Mars",
        essentialDignity: -5,
        accidentalStrength: 5,
        aspectSupport: 2,
        angularPosition: 3,
        totalPower: 88.9,
        percentage: 6.75,
        sign: "Gemini",
        house: 9,
        dignity: "Peregrine"
      },
      {
        planet: "Sun",
        essentialDignity: 8,
        accidentalStrength: 5,
        aspectSupport: 4,
        angularPosition: 5,
        totalPower: 88.3,
        percentage: 6.71,
        sign: "Aries",
        house: 7,
        dignity: "Exaltation"
      },
      {
        planet: "Moon",
        essentialDignity: -5,
        accidentalStrength: 5,
        aspectSupport: 3,
        angularPosition: 2,
        totalPower: 79.3,
        percentage: 6.02,
        sign: "Sagittarius",
        house: 3,
        dignity: "Peregrine"
      },
      {
        planet: "Mercury",
        essentialDignity: -8,
        accidentalStrength: 2,
        aspectSupport: 2,
        angularPosition: 1,
        totalPower: 77.6,
        percentage: 5.90,
        sign: "Pisces",
        house: 6,
        dignity: "Detriment"
      },
      {
        planet: "Saturn",
        essentialDignity: -5,
        accidentalStrength: 2,
        aspectSupport: 1,
        angularPosition: 1,
        totalPower: 74.0,
        percentage: 5.62,
        sign: "Gemini",
        house: 9,
        dignity: "Peregrine"
      },
      {
        planet: "Uranus",
        essentialDignity: 5,
        accidentalStrength: 8,
        aspectSupport: 2,
        angularPosition: 3,
        totalPower: 79.5,
        percentage: 6.04,
        sign: "Libra",
        house: 1,
        dignity: "Triplicity"
      },
      {
        planet: "Neptune",
        essentialDignity: 10,
        accidentalStrength: 5,
        aspectSupport: 2,
        angularPosition: 2,
        totalPower: 75.7,
        percentage: 5.75,
        sign: "Sagittarius",
        house: 3,
        dignity: "Domicile"
      },
      {
        planet: "Pluto",
        essentialDignity: -5,
        accidentalStrength: 2,
        aspectSupport: 1,
        angularPosition: 1,
        totalPower: 65.0,
        percentage: 4.94,
        sign: "Scorpio",
        house: 2,
        dignity: "Peregrine"
      }
    ];

    setPlanetaryData(mockData);
    setShowResults(true);
  };

  const houseData = [
    { name: "5th House", value: 21.77, fill: "#d4af37" },
    { name: "7th House", value: 15.39, fill: "#c9a961" },
    { name: "3rd House", value: 14.72, fill: "#bf838b" },
    { name: "9th House", value: 12.04, fill: "#b56d7e" },
    { name: "1st House", value: 11.94, fill: "#ab5771" },
    { name: "Other", value: 24.14, fill: "#972b57" }
  ];

  const signData = [
    { name: "Pisces", value: 18.60, fill: "#d4af37" },
    { name: "Libra", value: 15.48, fill: "#c9a961" },
    { name: "Aries", value: 12.97, fill: "#bf838b" },
    { name: "Aquarius", value: 12.30, fill: "#b56d7e" },
    { name: "Sagittarius", value: 11.00, fill: "#ab5771" },
    { name: "Other", value: 29.65, fill: "#972b57" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent" />
        <div className="relative max-w-6xl mx-auto">
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40">
            <Calculator className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Interactive Tool</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 font-serif">
            Chart Delineation & Strength Calculator
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Calculate planetary strength, analyze chart signature, and generate comprehensive delineation reports
          </p>
        </div>
      </section>

      {/* Input Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Birth Data Input</CardTitle>
            <CardDescription>Enter your birth information to calculate chart strength</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="birth-date">Birth Date</Label>
                <Input
                  id="birth-date"
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="bg-background border-border/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="birth-time">Birth Time</Label>
                <Input
                  id="birth-time"
                  type="time"
                  value={birthTime}
                  onChange={(e) => setBirthTime(e.target.value)}
                  className="bg-background border-border/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="birth-location">Birth Location</Label>
                <Input
                  id="birth-location"
                  placeholder="City, Country"
                  value={birthLocation}
                  onChange={(e) => setBirthLocation(e.target.value)}
                  className="bg-background border-border/50"
                />
              </div>
            </div>

            <Button onClick={calculateStrength} size="lg" className="w-full gap-2">
              <Sparkles className="w-4 h-4" />
              Calculate Strength & Generate Report
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Results Section */}
      {showResults && planetaryData.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8">
          <Tabs defaultValue="ranking" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="ranking">Strength Ranking</TabsTrigger>
              <TabsTrigger value="visualization">Visualization</TabsTrigger>
              <TabsTrigger value="analysis">Analysis</TabsTrigger>
              <TabsTrigger value="delineation">Delineation</TabsTrigger>
            </TabsList>

            {/* Strength Ranking Tab */}
            <TabsContent value="ranking" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Planetary Strength Ranking</CardTitle>
                  <CardDescription>Total Power by Planet</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {planetaryData.map((planet, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-3 rounded-lg border border-border/50">
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-sm font-bold text-accent flex-shrink-0">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold">{planet.planet}</span>
                            <Badge variant="outline" className="text-xs">{planet.sign} {planet.house}H</Badge>
                            <Badge className="text-xs">{planet.dignity}</Badge>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-2 bg-border/50 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-accent"
                                style={{ width: `${planet.percentage * 1.5}%` }}
                              />
                            </div>
                            <span className="text-sm font-mono text-muted-foreground">{planet.totalPower.toFixed(1)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Visualization Tab */}
            <TabsContent value="visualization" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Planetary Strength Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={planetaryData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="planet" stroke="rgba(255,255,255,0.5)" />
                      <YAxis stroke="rgba(255,255,255,0.5)" />
                      <Tooltip contentStyle={{ backgroundColor: "rgba(0,0,0,0.8)", border: "1px solid #d4af37" }} />
                      <Bar dataKey="totalPower" fill="#d4af37" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">House Emphasis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={houseData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, value }) => `${name}: ${value}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {houseData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Sign Emphasis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={signData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, value }) => `${name}: ${value}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {signData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Analysis Tab */}
            <TabsContent value="analysis" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Strength Component Breakdown</CardTitle>
                  <CardDescription>Essential Dignity, Accidental Strength, Aspect Support, Angular Position</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {planetaryData.slice(0, 5).map((planet, idx) => (
                      <div key={idx} className="border border-border/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-3">{planet.planet}</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          <div className="bg-accent/10 rounded p-2">
                            <div className="text-xs text-muted-foreground">Essential Dignity</div>
                            <div className="text-lg font-bold text-accent">{planet.essentialDignity > 0 ? "+" : ""}{planet.essentialDignity}</div>
                          </div>
                          <div className="bg-accent/10 rounded p-2">
                            <div className="text-xs text-muted-foreground">Accidental Strength</div>
                            <div className="text-lg font-bold text-accent">{planet.accidentalStrength > 0 ? "+" : ""}{planet.accidentalStrength}</div>
                          </div>
                          <div className="bg-accent/10 rounded p-2">
                            <div className="text-xs text-muted-foreground">Aspect Support</div>
                            <div className="text-lg font-bold text-accent">{planet.aspectSupport > 0 ? "+" : ""}{planet.aspectSupport}</div>
                          </div>
                          <div className="bg-accent/10 rounded p-2">
                            <div className="text-xs text-muted-foreground">Angular Position</div>
                            <div className="text-lg font-bold text-accent">{planet.angularPosition > 0 ? "+" : ""}{planet.angularPosition}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Delineation Tab */}
            <TabsContent value="delineation" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Chart Signature Interpretation</CardTitle>
                  <CardDescription>Based on Top 3 Strongest Planets</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-accent">Primary Signature (Ranks 1-3)</h4>
                    <p className="text-sm text-muted-foreground">
                      Your chart is dominated by Venus, Jupiter, and Mars. This indicates a strong emphasis on relationships, expansion, and assertive action. Venus in Pisces (5th House) suggests idealistic love and creative expression. Jupiter in Pisces (5th House) amplifies this with spiritual depth and optimistic outlook. Mars in Gemini (9th House) brings intellectual curiosity and philosophical exploration.
                    </p>
                  </div>

                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-accent">Life Themes</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• <strong>Relationships & Creativity:</strong> Strong 5th House emphasis suggests focus on romantic partnerships and creative self-expression</li>
                      <li>• <strong>Spiritual Growth:</strong> Pisces dominance indicates intuitive, compassionate nature with spiritual aspirations</li>
                      <li>• <strong>Intellectual Exploration:</strong> 9th House Mars brings philosophical inquiry and love of learning</li>
                      <li>• <strong>Idealism & Vision:</strong> Jupiter-Venus conjunction suggests optimistic worldview and aesthetic appreciation</li>
                    </ul>
                  </div>

                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-accent">Evolutionary Mandate</h4>
                    <p className="text-sm text-muted-foreground">
                      Your soul's primary task involves developing authentic emotional expression, balancing idealism with practical reality, and using your natural gifts for creativity and communication to inspire others. Growth comes through grounding spiritual insights into tangible creative work.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Download Report Button */}
          <div className="flex justify-center">
            <Button size="lg" variant="outline" className="gap-2">
              <span>📄</span>
              Download Full Delineation Report (PDF)
            </Button>
          </div>
        </section>
      )}

      {/* Information Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 font-serif">How This Calculator Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Total Power Calculation</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>Total Power = Essential Dignity + Accidental Strength + Aspect Support + Angular Position</p>
                <p>This quantitative approach provides objective measurement of planetary influence in your chart.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Strength Components</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p><strong>Essential Dignity:</strong> Planet's inherent authority in its sign</p>
                <p><strong>Accidental Strength:</strong> House placement, motion, and proximity to angles</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Hierarchical Ranking</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p><strong>Ranks 1-3:</strong> Primary life signature and core psychological drives</p>
                <p><strong>Ranks 4-7:</strong> Secondary themes and supporting influences</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Chart Signature</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>Your unique psychological fingerprint revealed through quantitative analysis of planetary positions and relationships.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
