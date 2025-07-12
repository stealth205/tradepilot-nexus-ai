import { Check, Crown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for beginners exploring the markets",
    features: [
      "Basic portfolio tracking",
      "5 AI requests per day",
      "Telegram price alerts",
      "Single exchange connection",
      "Community support"
    ],
    buttonText: "Start Free",
    buttonVariant: "terminal" as const,
    popular: false
  },
  {
    name: "Pro",
    price: "$50",
    period: "per month",
    yearlyPrice: "$510",
    yearlyPeriod: "per year",
    description: "For serious traders who demand the best",
    features: [
      "Unlimited AI trade analysis",
      "Multi-exchange portfolio",
      "Advanced charts & indicators",
      "Real-time trade execution",
      "Priority Telegram alerts",
      "Custom trading strategies",
      "Advanced risk management",
      "Priority support"
    ],
    buttonText: "Upgrade to Pro",
    buttonVariant: "command" as const,
    popular: true
  }
];

export default function PricingSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Choose Your{" "}
            <span className="text-gradient-primary">Trading Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free and upgrade when you're ready to unlock the full power of professional trading.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`terminal-card p-8 relative ${
                plan.popular 
                  ? 'border-primary/40 glow-primary' 
                  : 'border-border'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="gradient-primary px-4 py-2 rounded-full text-white text-sm font-semibold flex items-center gap-2">
                    <Crown className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="font-heading text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-gradient-primary">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  {plan.yearlyPrice && (
                    <div className="text-sm text-success mt-2">
                      Or {plan.yearlyPrice}/{plan.yearlyPeriod} (15% savings)
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <Button 
                  variant={plan.buttonVariant} 
                  size="lg" 
                  className="w-full mb-8"
                >
                  {plan.buttonText}
                  {plan.popular && <Zap className="w-4 h-4 ml-2" />}
                </Button>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Background Effect for Popular Plan */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            All plans include secure API encryption and 99.9% uptime guarantee.{" "}
            <span className="text-primary">Cancel anytime.</span>
          </p>
        </div>
      </div>
    </section>
  );
}