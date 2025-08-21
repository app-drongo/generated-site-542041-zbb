// Template-enhanced component (UNIQUE VERSION)
// Generated: 2025-08-21T18:55:28.715Z
// Section: features
// Category: features
// Template ID: features-c001
// Page: Home
// Component: Features

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  BarChart3, 
  Palette,
  Code2,
  Headphones,
  Lock
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Automated Bookkeeping",
      description: "Effortlessly track income, expenses, and transactions with our AI-powered accounting tools.",
      badge: "Efficiency"
    },
    {
      icon: Shield,
      title: "Secure Data Management",
      description: "Protect your financial data with enterprise-grade security and compliance measures.",
      badge: "Security"
    },
    {
      icon: Smartphone,
      title: "Mobile-Friendly Access",
      description: "Manage your finances on-the-go with our responsive, mobile-optimized platform.",
      badge: "Accessibility"
    },
    {
      icon: Globe,
      title: "Scalable Infrastructure",
      description: "Grow your business with a platform that can handle your evolving financial needs.",
      badge: "Scalability"
    },
    {
      icon: BarChart3,
      title: "Insightful Analytics",
      description: "Gain deep visibility into your financial performance with advanced reporting and analytics.",
      badge: "Insights"
    },
    {
      icon: Palette,
      title: "Branded Experience",
      description: "Customize the platform to seamlessly integrate with your brand and visual identity.",
      badge: "Branding"
    },
    {
      icon: Code2,
      title: "Developer-Friendly API",
      description: "Leverage our robust API to build custom integrations and automate financial workflows.",
      badge: "Extensibility"
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Receive personalized assistance from our team of accounting and finance experts.",
      badge: "Support"
    },
    {
      icon: Lock,
      title: "Privacy-Focused",
      description: "Your financial data is always secure and protected with our strict privacy policies.",
      badge: "Privacy"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Acme Accounting Solutions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Unlock the Power of
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              AI-Driven Accounting
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover the comprehensive suite of features that empower your business 
            to thrive with confidence and efficiency.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to transform your accounting with Acme?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Start Free Trial
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}