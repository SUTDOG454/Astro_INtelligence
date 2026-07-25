import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ChevronRight } from "lucide-react";

const delineationStages = [
  {
    stage: 1,
    title: "Chart Overview",
    description: "Visual assessment of overall chart shape and distribution",
    steps: [
      "Identify chart shape (bowl, bucket, locomotive, seesaw, splash, bundle)",
      "Note element distribution (Fire, Earth, Air, Water)",
      "Assess mode distribution (Cardinal, Fixed, Mutable)",
      "Observe hemisphere emphasis (personal vs. social, conscious vs. unconscious)"
    ]
  },
  {
    stage: 2,
    title: "Big Three Analysis",
    description: "Sun, Moon, Ascendant interpretation",
    steps: [
      "Sun: Core identity, life purpose, conscious will",
      "Moon: Emotional nature, inner needs, subconscious patterns",
      "Ascendant: Personality mask, first impression, life direction",
      "Analyze aspects between Big Three for integration"
    ]
  },
  {
    stage: 3,
    title: "Chart Ruler Analysis",
    description: "Identify and interpret chart ruler significance",
    steps: [
      "Determine chart ruler from Ascendant sign",
      "Analyze chart ruler's sign, house, aspects",
      "Note chart ruler's strength and condition",
      "Interpret chart ruler as key to understanding entire chart"
    ]
  },
  {
    stage: 4,
    title: "Personal Planets",
    description: "Mercury, Venus, Mars, Jupiter, Saturn analysis",
    steps: [
      "Mercury: Communication, thinking style, learning approach",
      "Venus: Values, relationships, aesthetics, self-worth",
      "Mars: Motivation, sexuality, aggression, assertiveness",
      "Jupiter: Expansion, luck, beliefs, higher purpose",
      "Saturn: Limitations, responsibilities, maturation, karmic lessons"
    ]
  },
  {
    stage: 5,
    title: "House Analysis",
    description: "Identify house emphasis and life area focus",
    steps: [
      "Count planets in each house",
      "Identify house clusters and empty houses",
      "Analyze house rulers and their conditions",
      "Note angular, succedent, and cadent house emphasis"
    ]
  },
  {
    stage: 6,
    title: "Aspect Analysis",
    description: "Map and interpret all major aspects",
    steps: [
      "Identify all major aspects (conjunction, opposition, square, trine, sextile)",
      "Assess aspect strength by orb and planets involved",
      "Recognize aspect patterns (Grand Cross, T-Square, Grand Trine, Kite, Yod)",
      "Interpret aspects as dialogue between planetary energies"
    ]
  },
  {
    stage: 7,
    title: "Outer Planets",
    description: "Uranus, Neptune, Pluto interpretation",
    steps: [
      "Uranus: Innovation, rebellion, awakening, future orientation",
      "Neptune: Spirituality, illusion, compassion, transcendence",
      "Pluto: Transformation, power, regeneration, shadow work",
      "Consider generational influences and personal application"
    ]
  },
  {
    stage: 8,
    title: "Nodal Axis",
    description: "North/South Node and karmic purpose",
    steps: [
      "South Node: Past talents, comfort zone, karmic gifts",
      "North Node: Growth direction, life lessons, soul purpose",
      "Analyze nodal rulers and aspects to nodes",
      "Integrate nodal axis with chart's overall theme"
    ]
  },
  {
    stage: 9,
    title: "Synthesis",
    description: "Integrate findings into coherent narrative",
    steps: [
      "Identify core life themes and patterns",
      "Connect all chart elements into unified story",
      "Highlight key challenges and growth opportunities",
      "Provide actionable insights and recommendations"
    ]
  }
];

const interpretationTips = [
  {
    title: "Start with Strengths",
    description: "Begin interpretation with planets in dignity and strong positions to establish confidence and positive foundation"
  },
  {
    title: "Consider Context",
    description: "Always interpret planets within their house and sign context, never in isolation"
  },
  {
    title: "Aspect Hierarchy",
    description: "Conjunctions are strongest, followed by oppositions and squares, then trines and sextiles"
  },
  {
    title: "Orb Matters",
    description: "Tighter orbs indicate stronger aspects; consider orb size when assessing aspect strength"
  },
  {
    title: "Element Balance",
    description: "Excess or deficiency in elements reveals personality imbalances and growth areas"
  },
  {
    title: "House Emphasis",
    description: "Concentration of planets in certain houses indicates life area focus and primary concerns"
  },
  {
    title: "Planetary Rulers",
    description: "Always check planetary rulers to understand how energies flow through the chart"
  },
  {
    title: "Dignity System",
    description: "Use essential and accidental dignity to assess planetary strength and reliability"
  }
];

export default function Guides() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent" />
        <div className="relative max-w-6xl mx-auto">
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40">
            <BookOpen className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Learning Resources</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 font-serif">
            Interpretation Guides
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Step-by-step methodologies, interpretation tips, and best practices for professional astrological analysis
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <Tabs defaultValue="delineation" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="delineation">9-Stage Process</TabsTrigger>
            <TabsTrigger value="tips">Interpretation Tips</TabsTrigger>
            <TabsTrigger value="reference">Quick Reference</TabsTrigger>
          </TabsList>

          {/* 9-Stage Delineation Tab */}
          <TabsContent value="delineation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Donna Cunningham's 9-Stage Delineation Process</CardTitle>
                <CardDescription>Systematic methodology for comprehensive chart interpretation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {delineationStages.map((stage) => (
                    <div key={stage.stage} className="border-l-4 border-accent/50 pl-4 py-2">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent/20 text-accent font-semibold text-sm flex-shrink-0">
                          {stage.stage}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{stage.title}</h3>
                          <p className="text-sm text-muted-foreground">{stage.description}</p>
                        </div>
                      </div>
                      <div className="ml-11 space-y-2">
                        {stage.steps.map((step, idx) => (
                          <div key={idx} className="flex gap-2 text-sm text-foreground">
                            <span className="text-accent">•</span>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Interpretation Tips Tab */}
          <TabsContent value="tips" className="space-y-4">
            {interpretationTips.map((tip, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-lg">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Quick Reference Tab */}
          <TabsContent value="reference" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Planetary Keywords</CardTitle>
                <CardDescription>Quick reference for planetary meanings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { planet: "Sun", keywords: "Identity, will, consciousness, vitality" },
                    { planet: "Moon", keywords: "Emotions, instincts, needs, subconscious" },
                    { planet: "Mercury", keywords: "Communication, thinking, learning, logic" },
                    { planet: "Venus", keywords: "Love, values, aesthetics, relationships" },
                    { planet: "Mars", keywords: "Action, desire, sexuality, aggression" },
                    { planet: "Jupiter", keywords: "Expansion, luck, beliefs, growth" },
                    { planet: "Saturn", keywords: "Limits, responsibility, maturity, karma" },
                    { planet: "Uranus", keywords: "Innovation, rebellion, awakening, change" },
                    { planet: "Neptune", keywords: "Spirituality, illusion, compassion, dreams" },
                    { planet: "Pluto", keywords: "Transformation, power, regeneration, shadow" }
                  ].map((item, idx) => (
                    <div key={idx} className="border border-border/50 rounded-lg p-3">
                      <h4 className="font-semibold text-sm mb-1">{item.planet}</h4>
                      <p className="text-xs text-muted-foreground">{item.keywords}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sign Keywords</CardTitle>
                <CardDescription>Quick reference for sign characteristics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { sign: "Aries", keywords: "Initiative, courage, passion" },
                    { sign: "Taurus", keywords: "Stability, sensuality, persistence" },
                    { sign: "Gemini", keywords: "Communication, curiosity, adaptability" },
                    { sign: "Cancer", keywords: "Nurturing, emotion, protection" },
                    { sign: "Leo", keywords: "Creativity, confidence, generosity" },
                    { sign: "Virgo", keywords: "Analysis, service, discrimination" },
                    { sign: "Libra", keywords: "Balance, harmony, relationships" },
                    { sign: "Scorpio", keywords: "Intensity, transformation, depth" },
                    { sign: "Sagittarius", keywords: "Expansion, optimism, exploration" },
                    { sign: "Capricorn", keywords: "Ambition, discipline, responsibility" },
                    { sign: "Aquarius", keywords: "Innovation, idealism, detachment" },
                    { sign: "Pisces", keywords: "Spirituality, compassion, transcendence" }
                  ].map((item, idx) => (
                    <div key={idx} className="border border-border/50 rounded-lg p-2">
                      <h4 className="font-semibold text-xs mb-1">{item.sign}</h4>
                      <p className="text-xs text-muted-foreground">{item.keywords}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Best Practices Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 font-serif">Professional Best Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Before You Begin</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Verify birth data accuracy (date, time, location)</p>
                <p>• Calculate chart with accurate ephemeris data</p>
                <p>• Check for daylight saving time adjustments</p>
                <p>• Note any uncertain time factors</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">During Interpretation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Follow systematic 9-stage process</p>
                <p>• Consider multiple perspectives and traditions</p>
                <p>• Note contradictions and tensions</p>
                <p>• Look for themes and patterns</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Quality Control</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Verify all calculations and aspects</p>
                <p>• Cross-check with multiple chart systems</p>
                <p>• Test interpretations against known facts</p>
                <p>• Seek feedback and validation</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Ethical Considerations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Maintain client confidentiality</p>
                <p>• Avoid making definitive predictions</p>
                <p>• Respect free will and personal agency</p>
                <p>• Provide empowering interpretations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 font-serif">Ready to Practice?</h2>
          <p className="text-muted-foreground mb-6">
            Use our calculator to apply these methodologies to real charts
          </p>
          <Button size="lg" className="gap-2">
            Try the Calculator <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
