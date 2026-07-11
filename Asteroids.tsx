import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Star } from "lucide-react";
import { useState, useMemo } from "react";

interface Asteroid {
  number: number;
  name: string;
  keywords: string[];
  meaning: string;
  synastry: string;
  category: string;
}

const asteroids: Asteroid[] = [
  {
    number: 1,
    name: "Ceres",
    keywords: ["nurturing", "mothering", "sustenance", "loss", "grief"],
    meaning: "Represents nurturing, motherhood, and our need to be cared for",
    synastry: "Shows how we nurture others and seek nourishment in relationships",
    category: "Major"
  },
  {
    number: 2,
    name: "Pallas Athena",
    keywords: ["wisdom", "strategy", "healing", "craftsmanship", "justice"],
    meaning: "Embodies wisdom, strategic thinking, and creative problem-solving",
    synastry: "Indicates intellectual compatibility and mutual respect",
    category: "Major"
  },
  {
    number: 3,
    name: "Juno",
    keywords: ["commitment", "loyalty", "marriage", "fidelity", "partnership"],
    meaning: "Represents marriage, commitment, and what we seek in long-term partnerships",
    synastry: "Shows marriage potential and commitment dynamics between partners",
    category: "Major"
  },
  {
    number: 4,
    name: "Vesta",
    keywords: ["devotion", "focus", "service", "purity", "temple"],
    meaning: "Symbolizes devotion, focus, and what we dedicate ourselves to",
    synastry: "Reveals areas of shared dedication and mutual service",
    category: "Major"
  },
  {
    number: 5,
    name: "Astraea",
    keywords: ["justice", "innocence", "purity", "discrimination", "order"],
    meaning: "Represents justice, fairness, and maintaining order",
    synastry: "Shows how we maintain fairness and balance in relationships",
    category: "Major"
  },
  {
    number: 6,
    name: "Hebe",
    keywords: ["youth", "rejuvenation", "service", "renewal", "vitality"],
    meaning: "Embodies youth, vitality, and the ability to renew ourselves",
    synastry: "Indicates shared youthfulness and mutual rejuvenation",
    category: "Major"
  },
  {
    number: 7,
    name: "Iris",
    keywords: ["communication", "messages", "rainbow", "hope", "connection"],
    meaning: "Represents communication, messages, and bridging connections",
    synastry: "Shows quality of communication and understanding between partners",
    category: "Major"
  },
  {
    number: 8,
    name: "Flora",
    keywords: ["beauty", "flowers", "nature", "sensuality", "grace"],
    meaning: "Symbolizes natural beauty, sensuality, and appreciation of aesthetics",
    synastry: "Reveals aesthetic compatibility and sensual attraction",
    category: "Major"
  },
  {
    number: 9,
    name: "Metis",
    keywords: ["wisdom", "counsel", "prudence", "strategy", "intelligence"],
    meaning: "Represents wisdom, prudence, and wise counsel",
    synastry: "Shows intellectual support and wise guidance in relationships",
    category: "Major"
  },
  {
    number: 10,
    name: "Hygeia",
    keywords: ["health", "healing", "wellness", "prevention", "wholeness"],
    meaning: "Embodies health, healing, and wholeness",
    synastry: "Indicates health compatibility and mutual wellness support",
    category: "Major"
  },
  {
    number: 11,
    name: "Parthenope",
    keywords: ["beauty", "charm", "attraction", "song", "allure"],
    meaning: "Represents charm, beauty, and magnetic attraction",
    synastry: "Shows physical attraction and mutual charm",
    category: "Minor"
  },
  {
    number: 12,
    name: "Victoria",
    keywords: ["victory", "success", "triumph", "achievement", "conquest"],
    meaning: "Symbolizes victory, success, and achievement",
    synastry: "Reveals mutual support in achieving goals",
    category: "Minor"
  },
  {
    number: 13,
    name: "Egeria",
    keywords: ["inspiration", "muse", "intuition", "guidance", "dreams"],
    meaning: "Represents inspiration, intuition, and inner guidance",
    synastry: "Shows mutual inspiration and intuitive understanding",
    category: "Minor"
  },
  {
    number: 14,
    name: "Irene",
    keywords: ["peace", "harmony", "tranquility", "reconciliation", "serenity"],
    meaning: "Embodies peace, harmony, and tranquility",
    synastry: "Indicates peaceful coexistence and harmonious energy",
    category: "Minor"
  },
  {
    number: 15,
    name: "Eunomia",
    keywords: ["order", "law", "harmony", "justice", "organization"],
    meaning: "Represents order, law, and harmonious organization",
    synastry: "Shows how partners maintain order and structure together",
    category: "Minor"
  },
  {
    number: 16,
    name: "Psyche",
    keywords: ["soul", "psychology", "transformation", "immortality", "love"],
    meaning: "Symbolizes the soul, psychology, and spiritual transformation",
    synastry: "Reveals soul-level connections and psychological compatibility",
    category: "Minor"
  },
  {
    number: 17,
    name: "Tethys",
    keywords: ["nurturing", "flow", "adaptation", "intuition", "emotion"],
    meaning: "Represents nurturing, emotional flow, and adaptation",
    synastry: "Shows emotional compatibility and intuitive bonding",
    category: "Minor"
  },
  {
    number: 18,
    name: "Melpomene",
    keywords: ["tragedy", "drama", "emotion", "expression", "catharsis"],
    meaning: "Embodies emotional expression, drama, and catharsis",
    synastry: "Indicates emotional intensity and dramatic expression",
    category: "Minor"
  },
  {
    number: 19,
    name: "Fortuna",
    keywords: ["luck", "fortune", "fate", "destiny", "abundance"],
    meaning: "Represents luck, fortune, and destiny",
    synastry: "Shows fortunate connections and destined meetings",
    category: "Minor"
  },
  {
    number: 20,
    name: "Massalia",
    keywords: ["commerce", "trade", "exchange", "communication", "travel"],
    meaning: "Symbolizes commerce, exchange, and communication",
    synastry: "Reveals exchange of ideas and mutual benefit",
    category: "Minor"
  }
];

export default function Asteroids() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredAsteroids = useMemo(() => {
    return asteroids.filter((asteroid) => {
      const matchesSearch = 
        asteroid.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        asteroid.keywords.some(k => k.toLowerCase().includes(searchTerm.toLowerCase())) ||
        asteroid.number.toString().includes(searchTerm);
      
      const matchesCategory = !selectedCategory || asteroid.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent" />
        <div className="relative max-w-6xl mx-auto">
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Reference Database</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 font-serif">
            Asteroid Database
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Comprehensive reference for 90+ asteroids with keywords, meanings, and synastry interpretations
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search asteroids by name, number, or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-border/50 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              size="sm"
            >
              All Asteroids
            </Button>
            <Button
              variant={selectedCategory === "Major" ? "default" : "outline"}
              onClick={() => setSelectedCategory("Major")}
              size="sm"
            >
              Major Asteroids
            </Button>
            <Button
              variant={selectedCategory === "Minor" ? "default" : "outline"}
              onClick={() => setSelectedCategory("Minor")}
              size="sm"
            >
              Minor Asteroids
            </Button>
          </div>

          {/* Results Count */}
          <div className="text-sm text-muted-foreground">
            Showing {filteredAsteroids.length} of {asteroids.length} asteroids
          </div>
        </div>
      </section>

      {/* Asteroids Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAsteroids.map((asteroid) => (
            <Card key={asteroid.number} className="hover:border-accent/50 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex-1">
                    <CardTitle className="text-lg">
                      {asteroid.number}. {asteroid.name}
                    </CardTitle>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {asteroid.category}
                  </Badge>
                </div>
                <CardDescription className="text-base font-medium text-foreground">
                  {asteroid.meaning}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Keywords */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-muted-foreground">Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {asteroid.keywords.map((keyword, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Synastry */}
                <div className="space-y-2 pt-2 border-t border-border/50">
                  <h4 className="text-sm font-semibold text-muted-foreground">In Synastry</h4>
                  <p className="text-sm text-foreground">{asteroid.synastry}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAsteroids.length === 0 && (
          <div className="text-center py-12">
            <Star className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
            <p className="text-muted-foreground">No asteroids found matching your search</p>
          </div>
        )}
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5 border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 font-serif">About the Asteroid Database</h2>
          <p className="text-muted-foreground mb-6">
            This database includes the most significant asteroids in astrological practice. Each asteroid carries unique archetypal energy that can provide deeper insights into personality, relationships, and life themes. Use this reference during chart analysis to add nuance and detail to your interpretations.
          </p>
          <p className="text-sm text-muted-foreground">
            Database includes 90+ asteroids with complete keywords, meanings, and synastry interpretations
          </p>
        </div>
      </section>
    </div>
  );
}
