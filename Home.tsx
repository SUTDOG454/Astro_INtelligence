/* Celestial Modernism Design - Deep space colors, orbital composition, cosmic depth
   Typography: Cinzel for headings, Inter for data
   Colors: Deep indigo background with celestial gold accents */

import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Sparkles, BookOpen, Calculator, BarChart3, Zap, Moon, Sun, Star, Compass } from "lucide-react";
import { useState } from "react";

const chartTypes = [
  { name: "Natal Chart", description: "Core personality, psychological drives, karmic patterns", category: "Foundation" },
  { name: "Synastry Chart", description: "Interpersonal compatibilities, energetic exchanges", category: "Relational" },
  { name: "Composite Chart", description: "Couple's combined identity and relationship entity", category: "Relational" },
  { name: "Persona Charts", description: "Ego masks, shadow selves, specific life area personalities", category: "Foundation" },
  { name: "Harmonic Charts", description: "Spiritual resonance, karmic potentials, soul ties", category: "Spiritual" },
  { name: "Progressions", description: "Evolutionary emotional cycles, growth phases", category: "Timing" },
  { name: "Solar Arc Directions", description: "Timing developmental triggers, significant shifts", category: "Timing" },
  { name: "Transits", description: "Present external influences, current timing insights", category: "Timing" },
];

const frameworks = [
  {
    title: "Essential Dignity Scoring",
    description: "8-level dignity system with point values for planetary strength assessment",
    points: "0-10 points"
  },
  {
    title: "Accidental Strength Modifiers",
    description: "House placement, planetary motion, orb magnitude, and Avashta states",
    points: "0-20 points"
  },
  {
    title: "Aspect Analysis",
    description: "Major and minor aspects with orbs, power values, and interpretations",
    points: "0-15 points"
  },
  {
    title: "Arabic Parts Calculations",
    description: "6 major parts with formulas and interpretive meanings",
    points: "Varies"
  },
  {
    title: "Planetary Archetypes",
    description: "Detailed interpretations across 4 philosophical traditions",
    points: "Complete"
  },
  {
    title: "Quantitative Hierarchy",
    description: "Total Power calculation combining all strength factors",
    points: "0-60 points"
  }
];

const interpretationStages = [
  { stage: 1, title: "Chart Overview", description: "Visual assessment of overall chart shape and distribution" },
  { stage: 2, title: "Big Three Analysis", description: "Sun, Moon, Ascendant interpretation" },
  { stage: 3, title: "Chart Ruler Analysis", description: "Identify and interpret chart ruler significance" },
  { stage: 4, title: "Personal Planets", description: "Mercury, Venus, Mars, Jupiter, Saturn analysis" },
  { stage: 5, title: "House Analysis", description: "Identify house emphasis and life area focus" },
  { stage: 6, title: "Aspect Analysis", description: "Map and interpret all major aspects" },
  { stage: 7, title: "Outer Planets", description: "Uranus, Neptune, Pluto interpretation" },
  { stage: 8, title: "Nodal Axis", description: "North/South Node and karmic purpose" },
  { stage: 9, title: "Synthesis", description: "Integrate findings into coherent narrative" },
];

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent" />
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Professional Astrological Framework</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 font-serif">
            Astrology Interpretation Framework
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            A comprehensive, quantitative system for natal chart delineation combining traditional wisdom with modern computational analysis. 14+ chart types, 750-point scoring system, and complete interpretation methodologies.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="gap-2">
              Explore Framework <ChevronRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="charts">Chart Types</TabsTrigger>
            <TabsTrigger value="calculations">Calculations</TabsTrigger>
            <TabsTrigger value="methodology">Methodology</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent" />
                  Framework Overview
                </CardTitle>
                <CardDescription>Complete system for astrological interpretation and analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">Core Components</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2"><span className="text-accent">•</span> 750-Point Scoring System</li>
                      <li className="flex gap-2"><span className="text-accent">•</span> 14+ Chart Types</li>
                      <li className="flex gap-2"><span className="text-accent">•</span> 90+ Asteroids with Keywords</li>
                      <li className="flex gap-2"><span className="text-accent">•</span> Essential Dignity System</li>
                      <li className="flex gap-2"><span className="text-accent">•</span> Quantitative Hierarchy</li>
                      <li className="flex gap-2"><span className="text-accent">•</span> 9-Stage Delineation Process</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">Key Features</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2"><span className="text-accent">•</span> Planetary Strength Ranking</li>
                      <li className="flex gap-2"><span className="text-accent">•</span> Aspect Pattern Recognition</li>
                      <li className="flex gap-2"><span className="text-accent">•</span> Harmonic Analysis</li>
                      <li className="flex gap-2"><span className="text-accent">•</span> Transit Strength Calculation</li>
                      <li className="flex gap-2"><span className="text-accent">•</span> Karmic Mandate Analysis</li>
                      <li className="flex gap-2"><span className="text-accent">•</span> Multi-Tradition Synthesis</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Comprehensive
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Complete coverage of all astrological systems, traditions, and techniques</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Calculator className="w-4 h-4" />
                    Quantitative
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Precise computational methodologies with measurable strength values</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Professional
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Production-ready framework for professional astrological practice</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Chart Types Tab */}
          <TabsContent value="charts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>14+ Astrological Chart Types</CardTitle>
                <CardDescription>Complete system of charts for multi-dimensional analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {chartTypes.map((chart, idx) => (
                    <Card key={idx} className="border-border/50">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between gap-2">
                          <CardTitle className="text-base">{chart.name}</CardTitle>
                          <Badge variant="secondary" className="text-xs">{chart.category}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{chart.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Calculations Tab */}
          <TabsContent value="calculations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-accent" />
                  Strength Calculation Frameworks
                </CardTitle>
                <CardDescription>Quantitative methodologies for planetary and chart strength assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {frameworks.map((framework, idx) => (
                    <div key={idx} className="border-l-2 border-accent/50 pl-4 py-2">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="font-semibold">{framework.title}</h4>
                        <Badge variant="outline" className="text-xs">{framework.points}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{framework.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Methodology Tab */}
          <TabsContent value="methodology" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>9-Stage Systematic Delineation Process</CardTitle>
                <CardDescription>Donna Cunningham's comprehensive interpretation methodology</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {interpretationStages.map((item) => (
                    <div key={item.stage} className="flex gap-4 pb-3 border-b border-border/50 last:border-0">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent/20 text-accent font-semibold text-sm">
                          {item.stage}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{item.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5 border-y border-border/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-serif">Complete Framework Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <Sun className="w-5 h-5 text-accent" />
                <h3 className="font-semibold">Planetary Analysis</h3>
              </div>
              <p className="text-sm text-muted-foreground">Complete planetary strength calculations with essential and accidental dignity scoring</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <Moon className="w-5 h-5 text-accent" />
                <h3 className="font-semibold">Harmonic Resonance</h3>
              </div>
              <p className="text-sm text-muted-foreground">Harmonic and coalescent chart analysis for spiritual resonance and soul-level connections</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-accent" />
                <h3 className="font-semibold">Timing Analysis</h3>
              </div>
              <p className="text-sm text-muted-foreground">Solar arc directions, progressions, and transit strength calculations for precise timing</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="w-5 h-5 text-accent" />
                <h3 className="font-semibold">Quantitative Scoring</h3>
              </div>
              <p className="text-sm text-muted-foreground">750-point comprehensive scoring system with hierarchical strength ranking</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-accent" />
                <h3 className="font-semibold">Multi-Tradition Synthesis</h3>
              </div>
              <p className="text-sm text-muted-foreground">Integration of Arroyo, Magi, Traditional, and Transits philosophies</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5 text-accent" />
                <h3 className="font-semibold">Asteroid Integration</h3>
              </div>
              <p className="text-sm text-muted-foreground">90+ asteroids with keywords, interpretations, and relationship dynamics</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-serif">Ready to Explore the Framework?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Access comprehensive documentation, interactive calculators, and detailed interpretation guides
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="gap-2">
              View Full Documentation <ChevronRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              Download PDF Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
