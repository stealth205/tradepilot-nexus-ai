import { MessageCircle, Bell, TrendingUp, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const telegramMessages = [
  {
    time: "2:14 PM",
    type: "alert",
    message: "🚀 BTC just broke $45,000 resistance! Volume surge detected.",
    icon: TrendingUp,
    color: "text-success"
  },
  {
    time: "1:42 PM", 
    type: "trade",
    message: "✅ TSLA position closed: +12.3% gain ($2,450 profit)",
    icon: TrendingUp,
    color: "text-success"
  },
  {
    time: "12:55 PM",
    type: "warning",
    message: "⚠️ High volatility detected in crypto markets. Consider reducing position sizes.",
    icon: AlertTriangle,
    color: "text-warning"
  },
  {
    time: "11:30 AM",
    type: "signal",
    message: "📊 AI Signal: AAPL showing bullish divergence. Entry at $175 recommended.",
    icon: Bell,
    color: "text-primary"
  }
];

export default function TelegramSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-80 h-[600px] bg-gradient-to-b from-card to-muted/20 rounded-[3rem] border-8 border-muted/30 shadow-2xl overflow-hidden">
                {/* Phone Header */}
                <div className="bg-card border-b border-border p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">TradePilot Bot</div>
                    <div className="text-xs text-success flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-success"></div>
                      online
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="p-4 space-y-4 h-full overflow-y-auto">
                  {telegramMessages.map((msg, index) => (
                    <div key={index} className="bg-card/50 border border-border/50 rounded-xl p-3 hover-lift">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br from-${msg.color.split('-')[1]}/20 to-${msg.color.split('-')[1]}/10`}>
                          <msg.icon className={`w-4 h-4 ${msg.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-foreground leading-relaxed">{msg.message}</p>
                          <div className="text-xs text-muted-foreground mt-2">{msg.time}</div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  <div className="bg-primary/10 border border-primary/20 rounded-xl p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      <span className="text-xs text-primary ml-2">TradePilot is typing...</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-accent/20 rounded-[3rem] blur-xl -z-10"></div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg gradient-success">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-success font-semibold">Telegram Integration</span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Never Miss a{" "}
              <span className="text-gradient-primary">Market Move</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Get instant alerts, trade confirmations, and market updates directly 
              in your Telegram. Stay connected to your portfolio from anywhere in the world.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Bell className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Real-Time Alerts</h4>
                  <p className="text-sm text-muted-foreground">Price breakouts, volume spikes, and technical signals delivered instantly.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-success/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4 text-success" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Trade Updates</h4>
                  <p className="text-sm text-muted-foreground">Automatic notifications when trades are executed with P&L details.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">AI Insights</h4>
                  <p className="text-sm text-muted-foreground">Daily market summaries and personalized trading recommendations.</p>
                </div>
              </div>
            </div>

            <Button variant="command" size="lg">
              Connect Telegram
              <MessageCircle className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}