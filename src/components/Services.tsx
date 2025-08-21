// Template-enhanced component (UNIQUE VERSION)
// Generated: 2025-08-21T18:55:29.392Z
// Section: services
// Category: services
// Template ID: services-c001
// Page: Services
// Component: Services

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Briefcase,
  Calculator,
  ChartLine,
  CreditCard,
  FileText,
  Shield,
  Wallet,
  ArrowRight
} from "lucide-react"

export default function Accounting_ServicesCardGrid() {
  const services = [
    {
      id: "tax-preparation",
      title: "Tax Preparation",
      description: "Accurate and compliant tax filing services to ensure you maximize your deductions and minimize your tax liability.",
      icon: FileText,
      badge: "Popular",
      features: ["Individual Tax Returns", "Business Tax Returns", "Tax Planning"],
      link: "/services/tax-preparation"
    },
    {
      id: "bookkeeping",
      title: "Bookkeeping",
      description: "Streamline your financial records and gain real-time visibility into your business's financial health.",
      icon: Wallet,
      features: ["Accounts Payable/Receivable", "Bank Reconciliation", "Financial Reporting"],
      link: "/services/bookkeeping"
    },
    {
      id: "payroll",
      title: "Payroll Services",
      description: "Hassle-free payroll processing that ensures your employees are paid accurately and on time, every time.",
      icon: CreditCard,
      badge: "New",
      features: ["Direct Deposit", "Tax Filings", "Employee Self-Service"],
      link: "/services/payroll"
    },
    {
      id: "financial-planning",
      title: "Financial Planning",
      description: "Comprehensive financial strategies to help you achieve your personal and business goals.",
      icon: ChartLine,
      features: ["Retirement Planning", "Investment Management", "Wealth Preservation"],
      link: "/services/financial-planning"
    },
    {
      id: "business-consulting",
      title: "Business Consulting",
      description: "Expert guidance and strategic advice to help your business grow and thrive.",
      icon: Briefcase,
      features: ["Strategic Planning", "Process Optimization", "Performance Improvement"],
      link: "/services/business-consulting"
    },
    {
      id: "audit-assurance",
      title: "Audit & Assurance",
      description: "Rigorous auditing and assurance services to ensure the accuracy and integrity of your financial statements.",
      icon: Shield,
      features: ["Financial Statement Audits", "Internal Controls Review", "Compliance Audits"],
      link: "/services/audit-assurance"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Accounting Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Accounting Solutions
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              for Your Business
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Trusted by small and medium-sized businesses to manage their financial needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            
            return (
              <Card 
                key={service.id}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    {service.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="size-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Learn More Link */}
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn justify-between hover:bg-primary/10"
                    asChild
                  >
                    <a href={service.link}>
                      <span>Learn More</span>
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to take your business to the next level?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="outline">
              Explore All Services
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}