import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-trading-terminal.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-terminal">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl float-animation"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-accent/20 rounded-full blur-xl float-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-secondary/20 rounded-full blur-xl float-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient-primary">Command</span> Your{" "}
            <span className="text-white">Trading</span>{" "}
            <span className="text-gradient-primary">Universe</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            The all-in-one platform that unifies crypto and stock trading with AI-powered insights, 
            multi-exchange support, and instant Telegram alerts. 
            <span className="text-primary font-semibold"> Trade smarter, not harder.</span>
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2">
              <Shield className="w-4 h-4 text-success" />
              <span className="text-sm font-medium">Bank-Grade Security</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Real-Time Trading</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">AI Market Intelligence</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="command" size="xl" className="group">
              Start Building Your Million
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="terminal" size="xl">
              Watch Demo
            </Button>
          </div>

          {/* Social Proof */}
          <div className="text-center text-muted-foreground">
            <p className="mb-4">Trusted by 10,000+ traders worldwide</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-sm">Binance Compatible</div>
              <div className="w-px h-4 bg-border"></div>
              <div className="text-sm">Coinbase Pro</div>
              <div className="w-px h-4 bg-border"></div>
              <div className="text-sm">Alpaca Markets</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="TradePilot Trading Terminal" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
      </div>
    </section>
  );
}