import { Users, Target, Shield, Globe, Award, TrendingUp } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Active Traders", value: "10,000+", icon: Users },
  { label: "Trades Executed", value: "$50M+", icon: TrendingUp },
  { label: "Exchanges Connected", value: "3", icon: Globe },
  { label: "Uptime", value: "99.9%", icon: Shield }
];

const team = [
  {
    name: "Alex Chen",
    role: "Founder & CEO", 
    bio: "Former quantitative trader at Goldman Sachs with 8 years of experience in algorithmic trading and fintech.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Sarah Kim",
    role: "CTO",
    bio: "Ex-Google engineer specializing in high-frequency trading systems and machine learning applications in finance.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b9d3cbc4?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Product",
    bio: "Product leader from Coinbase with deep expertise in crypto trading platforms and user experience design.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Emily Zhang",
    role: "Head of AI",
    bio: "PhD in Machine Learning from Stanford, previously led AI initiatives at hedge fund Two Sigma.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  }
];

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "Your funds and data security is our top priority. We employ bank-grade encryption and never hold custody of your assets."
  },
  {
    icon: Target,
    title: "User-Centric Design",
    description: "Every feature is built based on real trader feedback. We listen to our community and iterate rapidly."
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "We push the boundaries of what's possible in trading technology, from AI assistance to real-time execution."
  },
  {
    icon: Globe,
    title: "Transparency",
    description: "Open communication about our roadmap, pricing, and policies. No hidden fees or surprise changes."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Built by Traders, <span className="text-gradient-primary">for Traders</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            TradePilot was born from the frustration of switching between multiple platforms, 
            missing market opportunities, and the lack of intelligent trading tools. 
            We're building the trading platform we always wanted to use.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="terminal-card p-6 text-center hover-lift">
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gradient-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 bg-muted/10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-6">
                Our <span className="text-gradient-primary">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To democratize professional-grade trading tools and make sophisticated market analysis 
                accessible to every trader, regardless of their experience level or portfolio size.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that with the right tools and intelligence, any dedicated trader can compete 
                with institutional investors. Our platform combines cutting-edge AI, real-time data, 
                and institutional-grade security to level the playing field.
              </p>
            </div>
            <div className="terminal-card p-8">
              <h3 className="font-heading text-xl font-bold mb-6">Why We Started TradePilot</h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>Tired of juggling multiple trading platforms and missing opportunities</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>Frustrated by the lack of intelligent market analysis tools for retail traders</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>Concerned about the security and reliability of existing trading platforms</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p>Wanted to bring institutional-grade tools to individual traders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-6">
              Our <span className="text-gradient-primary">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every feature we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="terminal-card p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-muted/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-6">
              Meet Our <span className="text-gradient-primary">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A diverse team of traders, engineers, and AI experts united by a passion for financial technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="terminal-card p-6 text-center hover-lift">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-heading text-lg font-semibold mb-1">{member.name}</h3>
                <div className="text-primary text-sm font-medium mb-3">{member.role}</div>
                <p className="text-muted-foreground text-xs leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="terminal-card p-8 text-center max-w-2xl mx-auto">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-2xl font-bold mb-4">
              Ready to Join Our Community?
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether you're a seasoned trader or just getting started, we'd love to have you 
              as part of the TradePilot family. Join thousands of traders who are already 
              transforming their trading experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="command" size="lg">
                Start Your Journey
              </Button>
              <Button variant="terminal" size="lg">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}