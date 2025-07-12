import { Check, ArrowRight, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/layout/Navigation";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with professional trading tools",
    features: [
      "Portfolio tracking across 1 exchange",
      "5 AI market insights per day", 
      "Basic Telegram alerts",
      "Real-time price monitoring",
      "Community support",
      "Mobile app access"
    ],
    limitations: [
      "Limited to 1 exchange connection",
      "Basic charting tools only",
      "Standard support response time"
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "outline" as const,
    popular: false
  },
  {
    name: "Professional",
    price: "$50",
    period: "per month",
    yearlyPrice: "$510",
    yearlyPeriod: "per year",
    description: "Complete trading arsenal for serious traders",
    features: [
      "Unlimited AI trade analysis & insights",
      "Multi-exchange portfolio (Binance, Coinbase, Alpaca)",
      "Advanced technical indicators & charting",
      "Real-time trade execution capabilities",
      "Priority Telegram alerts & notifications",
      "Custom trading strategy automation",
      "Advanced risk management tools",
      "Portfolio performance analytics",
      "Priority customer support",
      "API access for custom integrations",
      "Advanced market sentiment analysis",
      "Institutional-grade security features"
    ],
    buttonText: "Upgrade to Professional",
    buttonVariant: "command" as const,
    popular: true
  },
  {
    name: "Enterprise", 
    price: "Custom",
    period: "pricing",
    description: "Tailored solutions for institutional traders and hedge funds",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom API rate limits",
      "White-label trading interface",
      "Advanced compliance reporting",
      "Custom integrations & webhooks",
      "24/7 phone support",
      "On-premise deployment options",
      "Advanced user management",
      "Custom training & onboarding"
    ],
    buttonText: "Contact Sales",
    buttonVariant: "terminal" as const,
    popular: false
  }
];

const faqs = [
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. You'll continue to have access to Pro features until the end of your billing period."
  },
  {
    question: "Do you store my API keys securely?",
    answer: "Yes, all API keys are encrypted using AES-256 encryption and stored in secure vaults. We never have access to your funds - only trading data."
  },
  {
    question: "What exchanges do you support?",
    answer: "We currently support Binance, Coinbase Pro, and Alpaca Markets, with more exchanges being added regularly."
  },
  {
    question: "Is there a free trial for the Professional plan?",
    answer: "Yes, we offer a 14-day free trial of the Professional plan. No credit card required to start."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day money-back guarantee for annual subscriptions. Monthly subscriptions can be cancelled anytime."
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Simple, <span className="text-gradient-primary">Transparent</span> Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Choose the plan that fits your trading needs. Start free, upgrade when you're ready 
            to unlock the full power of professional trading tools.
          </p>
          
          {/* Annual Discount Banner */}
          <div className="inline-flex items-center gap-2 bg-success/10 border border-success/20 rounded-full px-4 py-2 mb-12">
            <Crown className="w-4 h-4 text-success" />
            <span className="text-sm font-medium text-success">Save 15% with annual billing</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`terminal-card p-8 relative ${
                  plan.popular 
                    ? 'border-primary/40 glow-primary scale-105' 
                    : 'border-border'
                } ${plan.name === 'Enterprise' ? 'bg-gradient-to-br from-accent/5 to-accent/10' : ''}`}
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
                <div className="mb-8">
                  <h3 className="font-heading text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{plan.description}</p>
                  
                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-gradient-primary">{plan.price}</span>
                      {plan.period !== "pricing" && (
                        <span className="text-muted-foreground">/{plan.period}</span>
                      )}
                    </div>
                    {plan.yearlyPrice && (
                      <div className="text-sm text-success">
                        Or {plan.yearlyPrice}/{plan.yearlyPeriod} (Save 15%)
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant={plan.buttonVariant} 
                    size="lg" 
                    className="w-full"
                  >
                    {plan.buttonText}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <div className="text-sm font-semibold mb-4">Everything included:</div>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-success/20 flex items-center justify-center mt-0.5">
                        <Check className="w-2.5 h-2.5 text-success" />
                      </div>
                      <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.limitations && (
                    <div className="pt-4 mt-4 border-t border-border">
                      <div className="text-sm font-semibold mb-3 text-muted-foreground">Limitations:</div>
                      {plan.limitations.map((limitation, limitIndex) => (
                        <div key={limitIndex} className="flex items-start gap-3 mb-2">
                          <div className="flex-shrink-0 w-4 h-4 rounded-full bg-muted/20 flex items-center justify-center mt-0.5">
                            <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
                          </div>
                          <span className="text-xs text-muted-foreground leading-relaxed">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Get answers to common questions about our pricing and features.</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="terminal-card p-6">
                <h3 className="font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <div className="terminal-card p-8 max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl font-bold mb-4">
              Ready to Start Trading Smarter?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of traders who have upgraded their trading experience with TradePilot.
            </p>
            <Button variant="command" size="lg">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}