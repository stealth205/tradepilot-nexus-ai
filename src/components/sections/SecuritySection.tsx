import { Shield, Lock, Key, Eye, CheckCircle } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Bank-Grade Encryption",
    description: "Your API keys are encrypted using AES-256 encryption, the same standard used by banks and governments."
  },
  {
    icon: Lock,
    title: "Non-Custodial Trading",
    description: "We never hold your funds. All trades are executed through your own exchange accounts."
  },
  {
    icon: Key,
    title: "Secure Key Storage",
    description: "API keys are stored in encrypted vaults with multi-layer security and regular audits."
  },
  {
    icon: Eye,
    title: "Read-Only by Default",
    description: "Most features work with read-only permissions. Trading permissions are optional and controlled by you."
  }
];

export default function SecuritySection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-lg gradient-success">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-success font-semibold">Military-Grade Security</span>
          </div>

          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Your Security is{" "}
            <span className="text-gradient-primary">Our Priority</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Trade with confidence knowing your funds and data are protected by enterprise-grade 
            security measures. We never have access to your money, only your trading data.
          </p>
        </div>

        {/* Security Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-success/20 to-success/10 mb-6">
                <feature.icon className="w-8 h-8 text-success" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Security Badges */}
        <div className="terminal-card p-8 text-center">
          <h3 className="font-heading text-2xl font-bold mb-6">Security Certifications</h3>
          
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mb-3">
                <CheckCircle className="w-8 h-8 text-success" />
              </div>
              <div className="font-semibold">SOC 2 Compliant</div>
              <div className="text-sm text-muted-foreground">Audited security controls</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <div className="font-semibold">ISO 27001</div>
              <div className="text-sm text-muted-foreground">Information security standard</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                <Lock className="w-8 h-8 text-accent" />
              </div>
              <div className="font-semibold">GDPR Ready</div>
              <div className="text-sm text-muted-foreground">Privacy protection compliant</div>
            </div>
          </div>

          <div className="mt-8 text-sm text-muted-foreground">
            <p>
              Regular security audits by third-party firms ensure your data remains safe. 
              Read our{" "}
              <span className="text-primary hover:underline cursor-pointer">Security Whitepaper</span> for 
              technical details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}