import { CheckCircle, Clock, Zap, Target, Users, Shield } from "lucide-react";
import Navigation from "@/components/layout/Navigation";

const roadmapItems = [
  {
    quarter: "Q1 2024",
    status: "completed",
    title: "Platform Foundation",
    items: [
      "Multi-exchange API integration (Binance, Coinbase)",
      "Real-time portfolio tracking",
      "Basic Telegram alert system",
      "Web application launch",
      "User authentication & security"
    ]
  },
  {
    quarter: "Q2 2024", 
    status: "completed",
    title: "AI & Analytics",
    items: [
      "AI trading assistant launch",
      "Advanced charting tools",
      "Market sentiment analysis",
      "Custom alert configuration",
      "Mobile-responsive design"
    ]
  },
  {
    quarter: "Q3 2024",
    status: "in-progress",
    title: "Advanced Trading",
    items: [
      "Alpaca Markets integration",
      "Options trading support",
      "Advanced order types",
      "Copy trading features",
      "Portfolio analytics dashboard"
    ]
  },
  {
    quarter: "Q4 2024",
    status: "planned",
    title: "Mobile & Automation",
    items: [
      "Native iOS/Android apps",
      "Automated trading strategies",
      "DeFi protocol integration",
      "Social trading features",
      "Advanced risk management"
    ]
  },
  {
    quarter: "Q1 2025",
    status: "planned", 
    title: "Enterprise & Scale",
    items: [
      "Institutional features",
      "White-label solutions",
      "Advanced compliance tools",
      "Team collaboration features",
      "Custom API marketplace"
    ]
  },
  {
    quarter: "Q2 2025",
    status: "planned",
    title: "Global Expansion",
    items: [
      "European exchange integration",
      "Multi-language support",
      "Regional compliance features",
      "Local payment methods",
      "24/7 global support"
    ]
  }
];

const upcomingFeatures = [
  {
    icon: Zap,
    title: "Lightning Fast Execution",
    description: "Sub-millisecond trade execution with co-located servers",
    eta: "Q4 2024"
  },
  {
    icon: Target,
    title: "Smart Portfolio Rebalancing",
    description: "AI-powered automatic portfolio rebalancing based on market conditions",
    eta: "Q1 2025"
  },
  {
    icon: Users,
    title: "Social Trading Network",
    description: "Follow and copy trades from top-performing traders in the community",
    eta: "Q1 2025"
  },
  {
    icon: Shield,
    title: "Insurance Protection",
    description: "Optional trade insurance for high-value positions and strategies",
    eta: "Q2 2025"
  }
];

const StatusBadge = ({ status }: { status: string }) => {
  const config = {
    completed: { color: "text-success", bg: "bg-success/20", text: "Completed" },
    "in-progress": { color: "text-warning", bg: "bg-warning/20", text: "In Progress" },
    planned: { color: "text-primary", bg: "bg-primary/20", text: "Planned" }
  };
  
  const { color, bg, text } = config[status as keyof typeof config];
  
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${bg} ${color}`}>
      {status === 'completed' && <CheckCircle className="w-4 h-4" />}
      {status === 'in-progress' && <Clock className="w-4 h-4" />}
      {status === 'planned' && <Target className="w-4 h-4" />}
      {text}
    </span>
  );
};

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Product <span className="text-gradient-primary">Roadmap</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            See what we're building next. Our roadmap is driven by user feedback and the latest 
            innovations in trading technology. Have a feature request? Let us know!
          </p>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            {roadmapItems.map((quarter, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index < roadmapItems.length - 1 && (
                  <div className="absolute left-6 top-16 w-px h-16 bg-border"></div>
                )}
                
                <div className="flex gap-6">
                  {/* Timeline Dot */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    quarter.status === 'completed' ? 'bg-success/20 border-2 border-success' :
                    quarter.status === 'in-progress' ? 'bg-warning/20 border-2 border-warning' :
                    'bg-primary/20 border-2 border-primary'
                  }`}>
                    {quarter.status === 'completed' && <CheckCircle className="w-6 h-6 text-success" />}
                    {quarter.status === 'in-progress' && <Clock className="w-6 h-6 text-warning" />}
                    {quarter.status === 'planned' && <Target className="w-6 h-6 text-primary" />}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="terminal-card p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-heading text-xl font-bold">{quarter.title}</h3>
                          <p className="text-muted-foreground text-sm">{quarter.quarter}</p>
                        </div>
                        <StatusBadge status={quarter.status} />
                      </div>
                      
                      <div className="space-y-2">
                        {quarter.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full ${
                              quarter.status === 'completed' ? 'bg-success' :
                              quarter.status === 'in-progress' ? 'bg-warning' :
                              'bg-primary'
                            }`}></div>
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Features Highlight */}
      <section className="py-16 px-6 bg-muted/10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-6">
              Exciting Features <span className="text-gradient-primary">Coming Soon</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get a sneak peek at some of the most anticipated features currently in development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {upcomingFeatures.map((feature, index) => (
              <div key={index} className="terminal-card p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-heading text-lg font-semibold">{feature.title}</h3>
                      <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">{feature.eta}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Request CTA */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="terminal-card p-8 text-center max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl font-bold mb-4">
              Have a Feature Request?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our roadmap is shaped by user feedback. Tell us what features would make 
              TradePilot even better for your trading needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
                Submit Feature Request
              </button>
              <button className="px-6 py-3 bg-card border border-border rounded-lg hover:bg-muted/50 transition-colors">
                Join Community Discord
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}