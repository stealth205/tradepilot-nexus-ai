import { ArrowRight, Twitter, Github, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FooterSection() {
  return (
    <footer className="bg-gradient-to-b from-muted/20 to-background border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-2xl font-bold mb-4 text-gradient-primary">
              TradePilot
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              The all-in-one platform that empowers traders with AI intelligence, 
              multi-exchange support, and real-time alerts. Command your trading universe.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-card border border-border hover:border-primary/40 flex items-center justify-center hover-lift">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card border border-border hover:border-primary/40 flex items-center justify-center hover-lift">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card border border-border hover:border-primary/40 flex items-center justify-center hover-lift">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card border border-border hover:border-primary/40 flex items-center justify-center hover-lift">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <div className="space-y-3">
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Features</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Pricing</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">API Docs</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Roadmap</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Changelog</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-3">
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Blog</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Careers</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-12">
          <div className="terminal-card p-8 text-center">
            <h3 className="font-heading text-3xl font-bold mb-4">
              Ready to <span className="text-gradient-primary">Take Control</span>?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of traders who have already upgraded their trading experience. 
              Start free and scale as you grow.
            </p>
            <Button variant="command" size="xl">
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 TradePilot. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}