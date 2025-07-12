import { TrendingUp, Shield, Zap, Globe, MessageSquare, BarChart3, Bot, Smartphone, Brain, Target, LineChart, Settings } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import { Button } from "@/components/ui/button";

const mainFeatures = [
  {
    category: "Trading & Execution",
    icon: TrendingUp,
    color: "from-primary to-primary/70",
    features: [
      {
        icon: Globe,
        title: "Multi-Exchange Integration",
        description: "Connect and trade across Binance, Coinbase Pro, and Alpaca Markets from a single interface. Unified portfolio view across all your positions."
      },
      {
        icon: Zap,
        title: "Real-Time Trade Execution",
        description: "Execute trades with institutional-grade speed and reliability. Direct API connections ensure minimal latency and maximum uptime."
      },
      {
        icon: BarChart3,
        title: "Advanced Charting Tools",
        description: "Professional-grade charts with 50+ technical indicators, drawing tools, and customizable timeframes. Built for serious technical analysis."
      },
      {
        icon: Target,
        title: "Smart Order Management",
        description: "Advanced order types including stop-loss, take-profit, trailing stops, and conditional orders. Automated risk management built-in."
      }
    ]
  },
  {
    category: "AI & Intelligence",
    icon: Brain,
    color: "from-accent to-accent/70",
    features: [
      {
        icon: Bot,
        title: "AI Trading Assistant",
        description: "Get personalized trade ideas, market analysis, and risk assessments powered by advanced machine learning algorithms."
      },
      {
        icon: LineChart,
        title: "Market Sentiment Analysis",
        description: "Real-time sentiment analysis from news, social media, and market data to identify emerging trends and opportunities."
      },
      {
        icon: Brain,
        title: "Predictive Analytics",
        description: "AI-powered price predictions and trend analysis based on historical patterns, market conditions, and technical indicators."
      },
      {
        icon: Target,
        title: "Risk Assessment",
        description: "Intelligent portfolio risk analysis with personalized recommendations for optimal position sizing and diversification."
      }
    ]
  },
  {
    category: "Communication & Alerts",
    icon: MessageSquare,
    color: "from-success to-success/70",
    features: [
      {
        icon: MessageSquare,
        title: "Telegram Integration",
        description: "Receive instant alerts, trade confirmations, and market updates directly in Telegram. Control your trading from anywhere."
      },
      {
        icon: Settings,
        title: "Custom Alert System",
        description: "Set up sophisticated alerts based on price, volume, technical indicators, or AI signals. Never miss important market moves."
      },
      {
        icon: Smartphone,
        title: "Mobile Notifications",
        description: "Push notifications to your mobile device for critical market events, trade executions, and portfolio changes."
      },
      {
        icon: Globe,
        title: "Multi-Channel Delivery",
        description: "Choose how and when to receive alerts across email, SMS, Telegram, and in-app notifications."
      }
    ]
  },
  {
    category: "Security & Compliance",
    icon: Shield,
    color: "from-warning to-warning/70",
    features: [
      {
        icon: Shield,
        title: "Bank-Grade Security",
        description: "Military-grade AES-256 encryption for all data. SOC 2 compliant infrastructure with regular security audits."
      },
      {
        icon: Settings,
        title: "API Key Management",
        description: "Secure, encrypted storage of exchange API keys. Granular permission controls and automatic key rotation available."
      },
      {
        icon: Target,
        title: "Non-Custodial Trading",
        description: "We never hold your funds. All trades execute through your own exchange accounts with full transparency."
      },
      {
        icon: LineChart,
        title: "Audit Trail",
        description: "Complete transaction history and audit logs for compliance. Export data for tax reporting and portfolio analysis."
      }
    ]
  }
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Professional Trading <span className="text-gradient-primary">Arsenal</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Everything you need to trade like a pro. From multi-exchange connectivity to AI-powered insights, 
            TradePilot provides institutional-grade tools for individual traders.
          </p>
          
          <Button variant="command" size="lg">
            Explore All Features
          </Button>
        </div>
      </section>

      {/* Feature Categories */}
      {mainFeatures.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-16 px-6 ${categoryIndex % 2 === 0 ? 'bg-muted/10' : ''}`}>
          <div className="container mx-auto">
            {/* Category Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <span className="font-semibold text-lg">{category.category}</span>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {category.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="terminal-card hover-lift p-8 group">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} flex-shrink-0`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Integration Showcase */}
      <section className="py-16 px-6 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-6">
              Seamless <span className="text-gradient-primary">Integrations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with your favorite platforms and tools for a unified trading experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="terminal-card p-8 text-center hover-lift">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-3">Exchange APIs</h3>
              <p className="text-sm text-muted-foreground mb-4">Direct integration with major exchanges for real-time data and trading.</p>
              <div className="text-xs text-muted-foreground">Binance • Coinbase • Alpaca</div>
            </div>

            <div className="terminal-card p-8 text-center hover-lift">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-success/20 to-success/10 flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-success" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-3">Communication</h3>
              <p className="text-sm text-muted-foreground mb-4">Stay connected with alerts and updates across all your devices.</p>
              <div className="text-xs text-muted-foreground">Telegram • Email • SMS • Push</div>
            </div>

            <div className="terminal-card p-8 text-center hover-lift">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-3">AI & Analytics</h3>
              <p className="text-sm text-muted-foreground mb-4">Advanced AI models and data sources for intelligent trading decisions.</p>
              <div className="text-xs text-muted-foreground">OpenAI • TradingView • CoinGecko</div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="terminal-card p-8 text-center max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl font-bold mb-4">
              More Features <span className="text-gradient-primary">Coming Soon</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              We're constantly improving TradePilot with new features and integrations. 
              Check our roadmap to see what's next.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="terminal">
                View Roadmap
              </Button>
              <Button variant="command">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}