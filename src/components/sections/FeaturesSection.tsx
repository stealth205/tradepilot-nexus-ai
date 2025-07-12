import { TrendingUp, Shield, Zap, Globe, MessageSquare, BarChart3, Bot, Smartphone } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Multi-Exchange Trading",
    description: "Connect Binance, Coinbase, and Alpaca in one unified dashboard. No more switching between platforms.",
    gradient: "from-primary to-primary/70"
  },
  {
    icon: TrendingUp,
    title: "Real-Time Portfolio",
    description: "Track all your crypto and stock positions with live P&L updates and performance analytics.",
    gradient: "from-success to-success/70"
  },
  {
    icon: Bot,
    title: "AI Trading Assistant",
    description: "Get personalized trade ideas, market summaries, and risk analysis powered by advanced AI.",
    gradient: "from-accent to-accent/70"
  },
  {
    icon: MessageSquare,
    title: "Telegram Integration",
    description: "Receive instant alerts, price updates, and market news directly in your Telegram.",
    gradient: "from-primary to-accent"
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Your API keys are encrypted and stored securely. We never hold your funds or execute trades without permission.",
    gradient: "from-success to-primary"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Powerful charts, technical indicators, and market analysis tools used by professional traders.",
    gradient: "from-accent to-success"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="text-gradient-primary">Dominate the Markets</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            TradePilot combines the power of multiple exchanges, AI intelligence, and real-time alerts 
            into one seamless trading experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="terminal-card hover-lift group p-8 relative overflow-hidden"
            >
              {/* Background Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.gradient} mb-6`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3">
            <Smartphone className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Mobile app coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}