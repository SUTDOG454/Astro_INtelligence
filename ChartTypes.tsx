import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, BookOpen } from "lucide-react";

const chartCategories = [
  {
    name: "Foundation Charts",
    description: "Core charts that reveal fundamental personality and life patterns",
    charts: [
      {
        name: "Natal Chart",
        description: "The birth chart showing planetary positions at the exact moment of birth",
        purpose: "Reveals core personality, psychological drives, karmic patterns, and life purpose",
        calculation: "Requires exact birth date, time, and location",
        interpretation: "Analyze Sun, Moon, Ascendant, house placements, and planetary aspects"
      },
      {
        name: "Persona Charts",
        description: "Six different charts revealing different personality masks and facets",
        purpose: "Explores ego masks, shadow selves, and specific life area personalities",
        calculation: "Derived from natal chart using specialized formulas",
        interpretation: "Each persona chart reveals a different dimension of self-expression"
      },
      {
        name: "Draconic Chart",
        description: "Chart calculated from the lunar nodes, representing soul-level intentions",
        purpose: "Shows spiritual evolution, karmic purpose, and soul desires",
        calculation: "Uses lunar node as reference point instead of Aries",
        interpretation: "Reveals what the soul is trying to accomplish this lifetime"
      },
      {
        name: "Heliocentric Chart",
        description: "Chart with the Sun at center instead of Earth",
        purpose: "Shows true planetary positions from the Sun's perspective",
        calculation: "Adjusts all planetary positions relative to the Sun",
        interpretation: "Reveals objective planetary energies beyond personal perception"
      }
    ]
  },
  {
    name: "Relational Charts",
    description: "Charts for understanding relationships and interpersonal dynamics",
    charts: [
      {
        name: "Synastry Chart",
        description: "Overlay of two natal charts showing how they interact",
        purpose: "Reveals compatibility, challenges, and growth potential between people",
        calculation: "Compares planetary positions between two individuals",
        interpretation: "Analyze aspects between charts, Venus/Mars connections, and nodal contacts"
      },
      {
        name: "Composite Chart",
        description: "Midpoint chart representing the relationship as an entity",
        purpose: "Shows the combined identity and relationship dynamics as a whole",
        calculation: "Calculates midpoints between corresponding planets of two charts",
        interpretation: "Read as a natal chart but represents the relationship itself"
      },
      {
        name: "Davison Chart",
        description: "Chart calculated from the midpoint time and location of two births",
        purpose: "Alternative relationship chart emphasizing shared experience",
        calculation: "Uses midpoint of birth times and locations",
        interpretation: "Often more accurate for long-term relationship dynamics"
      }
    ]
  },
  {
    name: "Spiritual Charts",
    description: "Charts revealing spiritual resonance and higher consciousness",
    charts: [
      {
        name: "Harmonic Charts",
        description: "Charts created by dividing the natal chart by harmonic numbers",
        purpose: "Reveals spiritual resonance, karmic potentials, and soul ties",
        calculation: "Multiply all longitudes by harmonic number (2nd, 3rd, 5th, etc.)",
        interpretation: "Higher harmonics reveal more refined spiritual dimensions"
      },
      {
        name: "Coalescent Chart",
        description: "Chart combining multiple charts into a single unified chart",
        purpose: "Shows synthesis of different chart layers and integrated self",
        calculation: "Averages positions from multiple chart types",
        interpretation: "Reveals integrated wholeness and unified consciousness"
      }
    ]
  },
  {
    name: "Timing Charts",
    description: "Charts for understanding cycles, timing, and evolution",
    charts: [
      {
        name: "Solar Arc Directions",
        description: "Progresses all planets by the same arc as the progressed Sun",
        purpose: "Timing developmental triggers and significant life shifts",
        calculation: "Arc = progressed Sun position - natal Sun position",
        interpretation: "Aspects formed by directed planets trigger major life events"
      },
      {
        name: "Progressions",
        description: "Chart showing emotional and psychological evolution",
        purpose: "Reveals evolutionary emotional cycles and growth phases",
        calculation: "One day after birth = one year of life (secondary progression)",
        interpretation: "Progressed Moon cycles show emotional maturation"
      },
      {
        name: "Transits",
        description: "Current planetary positions relative to natal chart",
        purpose: "Shows present external influences and current timing insights",
        calculation: "Compare current planetary positions to natal positions",
        interpretation: "Transiting planets triggering natal aspects indicate timing"
      }
    ]
  },
  {
    name: "Esoteric Charts",
    description: "Advanced charts for specialized analysis and deeper insights",
    charts: [
      {
        name: "Fixed Stars",
        description: "Analysis of fixed star positions and their influence",
        purpose: "Reveals ancient wisdom and stellar influences on destiny",
        calculation: "Identify fixed stars conjunct natal planets and angles",
        interpretation: "Fixed stars carry ancient archetypal energies"
      },
      {
        name: "Antiscion Chart",
        description: "Chart showing mirror points across the solstice axis",
        purpose: "Reveals hidden connections and shadow patterns",
        calculation: "Mirror points across 0° Cancer and 0° Capricorn",
        interpretation: "Antiscia create secret aspects and hidden influences"
      },
      {
        name: "Arabic Parts",
        description: "Calculated points derived from planetary positions",
        purpose: "Provides specific life area insights and timing information",
        calculation: "Using formulas like: Part = Ascendant + Planet1 - Planet2",
        interpretation: "Each part governs specific life areas and themes"
      },
      {
        name: "Parans",
        description: "Planetary configurations based on latitude and altitude",
        purpose: "Shows planetary relationships independent of zodiac",
        calculation: "Analyze planets rising, culminating, or setting together",
        interpretation: "Reveals non-zodiacal planetary connections"
      }
    ]
  }
];

export default function ChartTypes() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent" />
        <div className="relative max-w-6xl mx-auto">
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40">
            <BookOpen className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Complete Guide</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 font-serif">
            Chart Types Encyclopedia
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Comprehensive guide to all 14+ astrological chart types with calculation methods, purposes, and interpretation frameworks
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="space-y-12">
          {chartCategories.map((category, categoryIdx) => (
            <div key={categoryIdx} className="space-y-6">
              <div className="border-b border-border/50 pb-4">
                <h2 className="text-2xl font-bold font-serif mb-2">{category.name}</h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.charts.map((chart, chartIdx) => (
                  <Card key={chartIdx} className="hover:border-accent/50 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg">{chart.name}</CardTitle>
                      <CardDescription>{chart.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-muted-foreground">Purpose</h4>
                        <p className="text-sm text-foreground">{chart.purpose}</p>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-border/50">
                        <h4 className="text-sm font-semibold text-muted-foreground">Calculation</h4>
                        <p className="text-sm text-foreground">{chart.calculation}</p>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-border/50">
                        <h4 className="text-sm font-semibold text-muted-foreground">Interpretation</h4>
                        <p className="text-sm text-foreground">{chart.interpretation}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 font-serif">Integration Workflow</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2">Step 1</Badge>
                <CardTitle className="text-base">Foundation Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Start with natal chart analysis to establish core personality and life patterns
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2">Step 2</Badge>
                <CardTitle className="text-base">Specialized Charts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Use relational, spiritual, or timing charts for specific analysis needs
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2">Step 3</Badge>
                <CardTitle className="text-base">Synthesis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Integrate findings from multiple charts into coherent interpretation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 font-serif">Ready to Calculate Your Charts?</h2>
          <p className="text-muted-foreground mb-6">
            Use our interactive calculator to compute planetary strengths and explore chart dynamics
          </p>
          <Button size="lg" className="gap-2">
            Open Calculator <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
