import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Download, BookOpen, FileText } from "lucide-react";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: "The Astrology Interpretation Framework is a comprehensive system for natal chart delineation combining traditional Western dignity scoring with Vedic Shadbala calculations and modern quantitative analysis methodologies."
  },
  {
    id: "framework",
    title: "Framework Structure",
    content: "The framework consists of three integrated systems: Chart Delineation (systematic step-by-step analysis), Western Dignity (Lilly's point-based scoring), and Vedic Shadbala (six-fold strength calculation)."
  },
  {
    id: "charts",
    title: "Chart Types",
    content: "The complete system includes 14+ chart types organized into 6 levels: Foundation charts (Natal, Persona, Draconic, Heliocentric), Relational charts (Synastry, Composite, Davison), Spiritual charts (Harmonic, Coalescent), Timing charts (Solar Arc, Progressions, Transits), and Esoteric charts (Fixed Stars, Antiscion, Arabic Parts, Parans)."
  },
  {
    id: "calculations",
    title: "Strength Calculations",
    content: "Planetary strength is calculated using: Essential Dignity (0-10 points), Accidental Strength (0-20 points), Aspect Support (0-15 points), Angular Position (0-10 points), and Harmonic Resonance (0-5 points), totaling 0-60 points per planet."
  },
  {
    id: "methodology",
    title: "Interpretation Methodology",
    content: "The 9-stage systematic delineation process includes: Chart Overview, Big Three Analysis, Chart Ruler Analysis, Personal Planets, House Analysis, Aspect Analysis, Outer Planets, Nodal Axis, and Synthesis."
  },
  {
    id: "traditions",
    title: "Philosophical Traditions",
    content: "The framework integrates four philosophical approaches: Arroyo philosophy (psychological), Magi philosophy (midpoint analysis), Traditional philosophy (classical), and Transits philosophy (timing-based)."
  }
];

const documentFiles = [
  {
    name: "Master Astrology Framework Complete",
    description: "Comprehensive guide with all strength calculations, definitions, keywords, and chart types",
    size: "2.4 MB",
    type: "PDF"
  },
  {
    name: "Quantitative Hierarchy of Natal Chart Strength",
    description: "Detailed methodology for Total Power calculation and hierarchical ranking",
    size: "1.8 MB",
    type: "PDF"
  },
  {
    name: "Comprehensive Chart Types Encyclopedia",
    description: "Complete reference for all 14+ chart types with calculation methods and analysis frameworks",
    size: "2.1 MB",
    type: "PDF"
  },
  {
    name: "Unified Astrology Framework",
    description: "Philosophical foundations, planetary archetypes, and cosmological perspectives",
    size: "1.9 MB",
    type: "PDF"
  },
  {
    name: "Complete Astrology Calculations Framework",
    description: "Asteroids, symbols, aspects, and specialized calculation methodologies",
    size: "1.6 MB",
    type: "PDF"
  }
];

export default function Documentation() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent" />
        <div className="relative max-w-6xl mx-auto">
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40">
            <BookOpen className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Complete Documentation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 font-serif">
            Framework Documentation
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Comprehensive guides, reference materials, and detailed methodologies for the Astrology Interpretation Framework
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="sections">Key Sections</TabsTrigger>
            <TabsTrigger value="downloads">Downloads</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Documentation Overview</CardTitle>
                <CardDescription>Complete reference materials for the framework</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold">What's Included</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2"><span className="text-accent">•</span> Complete framework structure and components</li>
                      <li className="flex gap-2"><span className="text-accent">•</span> All 14+ chart types with calculation methods</li>
                      <li className="flex gap-2"><span className="text-accent">•</span> Strength calculation methodologies</li>
                      <li className="flex gap-2"><span className="text-accent">•</span> 9-stage interpretation process</li>
                      <li className="flex gap-2"><span className="text-accent">•</span> Planetary archetypes and keywords</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold">How to Use</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2"><span className="text-accent">•</span> Reference for chart interpretation</li>
                      <li className="flex gap-2"><span className="text-accent">•</span> Guide for strength calculations</li>
                      <li className="flex gap-2"><span className="text-accent">•</span> Framework for professional practice</li>
                      <li className="flex gap-2"><span className="text-accent">•</span> Training material for astrologers</li>
                      <li className="flex gap-2"><span className="text-accent">•</span> Reference for all chart types</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Key Sections Tab */}
          <TabsContent value="sections" className="space-y-4">
            {sections.map((section) => (
              <Card key={section.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{section.content}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Downloads Tab */}
          <TabsContent value="downloads" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Available Documents</CardTitle>
                <CardDescription>Download comprehensive framework documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {documentFiles.map((doc, idx) => (
                    <div key={idx} className="flex items-start justify-between p-4 border border-border/50 rounded-lg hover:bg-accent/5 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <FileText className="w-4 h-4 text-accent" />
                          <h4 className="font-semibold text-sm">{doc.name}</h4>
                          <Badge variant="secondary" className="text-xs">{doc.type}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{doc.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">{doc.size}</p>
                      </div>
                      <Button size="sm" variant="outline" className="ml-4 gap-2">
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5 border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 font-serif">Need Help?</h2>
          <p className="text-muted-foreground mb-6">
            Contact us for questions about the framework, interpretation guidance, or professional consultation
          </p>
          <Button size="lg" className="gap-2">
            Get in Touch <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
