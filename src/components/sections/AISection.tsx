import { Bot, MessageCircle, TrendingUp, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const aiExamples = [
  {
    query: "Should I buy Bitcoin right now?",
    response: "Based on current market analysis, BTC is showing bullish momentum with RSI at 45 and breaking above the 50-day MA. Consider entering with stop-loss at $42,000. Risk: Medium 📈"
  },
  {
    query: "Analyze my portfolio risk",
    response: "Your portfolio has 70% crypto exposure. I recommend rebalancing with 20% stocks for better diversification. Current Sharpe ratio: 1.2. Suggested: Add MSFT or AAPL positions."
  },
  {
    query: "Find trending stocks today",
    response: "Top movers: NVDA (+8.5%), TSLA (+6.2%), AMZN (+4.1%). AI and EV sectors showing strong momentum. Volume above average. Consider swing trades with tight stops."
  }
];

export default function AISection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg gradient-primary">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-primary font-semibold">AI-Powered Intelligence</span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Your Personal{" "}
              <span className="text-gradient-primary">Trading Oracle</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Get instant market insights, trade analysis, and personalized recommendations 
              from our advanced AI assistant. It's like having a professional trader 
              available 24/7.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-success"></div>
                <span className="text-sm">Real-time market analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm">Personalized trade recommendations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-sm">Portfolio risk assessment</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-warning"></div>
                <span className="text-sm">Market sentiment analysis</span>
              </div>
            </div>

            <Button variant="command" size="lg">
              Try AI Assistant Free
              <Bot className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Right Chat Demo */}
          <div className="terminal-card p-6">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
              <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-semibold">TradePilot AI</div>
                <div className="text-xs text-success flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                  Online
                </div>
              </div>
            </div>

            <div className="space-y-6 max-h-96 overflow-y-auto">
              {aiExamples.map((example, index) => (
                <div key={index} className="space-y-3">
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="bg-primary/20 border border-primary/30 rounded-lg px-4 py-3 max-w-xs">
                      <p className="text-sm">{example.query}</p>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-3 h-3 text-white" />
                    </div>
                    <div className="bg-card border border-border rounded-lg px-4 py-3 flex-1">
                      <p className="text-sm leading-relaxed">{example.response}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex items-center gap-3 bg-input rounded-lg px-4 py-3">
                <MessageCircle className="w-4 h-4 text-muted-foreground" />
                <div className="flex-1 text-sm text-muted-foreground">
                  Ask about market trends, portfolio analysis...
                </div>
                <Button size="sm" variant="ghost">
                  <TrendingUp className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}