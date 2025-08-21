// Template-enhanced component (UNIQUE VERSION)
// Generated: 2025-08-21T18:55:29.058Z
// Section: about
// Category: about
// Template ID: about-c001
// Page: About
// Component: About

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  Users, 
  Award, 
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Briefcase,
  Clipboard
} from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Precision Accounting",
      description: "We're committed to delivering accurate, reliable financial services to help your business thrive."
    },
    {
      icon: Briefcase,
      title: "Trusted Expertise",
      description: "Our team of certified public accountants and financial advisors bring decades of industry experience to the table."
    },
    {
      icon: Clipboard,
      title: "Compliance Focused",
      description: "We stay up-to-date with the latest tax laws and regulations to ensure your business remains compliant."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "With clients in over 25 countries, we have the resources and knowledge to support businesses of all sizes, anywhere in the world."
    }
  ]

  const stats = [
    { value: "2015", label: "Founded", icon: Award },
    { value: "5K+", label: "Clients Served", icon: Users },
    { value: "99.9%", label: "Client Satisfaction", icon: TrendingUp },
    { value: "25+", label: "Countries", icon: Globe }
  ]

  const team = [
    {
      name: "John Doe",
      role: "CEO & Co-Founder",
      image: "JD",
      bio: "Certified Public Accountant with over 20 years of experience in the finance industry."
    },
    {
      name: "Jane Smith",
      role: "CFO & Co-Founder",
      image: "JS",
      bio: "Former financial analyst at a Fortune 500 company. Passionate about helping businesses achieve their financial goals."
    },
    {
      name: "Michael Johnson",
      role: "Head of Tax Services",
      image: "MJ",
      bio: "Recognized expert in tax planning and compliance. Helps clients navigate complex tax regulations."
    },
    {
      name: "Emily Chen",
      role: "Director of Accounting",
      image: "EC",
      bio: "Skilled in financial reporting, budgeting, and auditing. Ensures accurate and timely financial statements."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Acme Accounting
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Empowering Businesses
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              with Exceptional Accounting Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Acme Accounting, we're dedicated to providing small and medium-sized businesses 
            with the financial expertise and support they need to succeed.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2015, Acme Accounting was born out of a desire to simplify the complex world of finance 
                for small business owners. We saw firsthand the challenges entrepreneurs faced in managing their 
                books, filing taxes, and navigating the ever-changing regulatory landscape.
              </p>
              <p>
                Our mission was to provide a one-stop-shop for all of their accounting and financial needs, 
                empowering them to focus on what they do best: running and growing their businesses.
              </p>
              <p>
                Today, we're proud to serve over 5,000 clients across 25+ countries, helping them achieve their 
                financial goals and stay compliant with the latest tax laws and regulations.
              </p>
            </div>
            <Button className="group">
              Read Our Full Story
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Acme Accounting has been a game-changer for our business. Their expertise and attention to detail have been invaluable."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Jane Smith, CFO</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Values</h3>
            <p className="text-muted-foreground">
              The principles that guide everything we do at Acme Accounting.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our Team</h3>
            <p className="text-muted-foreground">
              The experienced professionals behind Acme Accounting's success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              View All Team Members
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Acme Accounting has been an invaluable partner for our business. Their attention to detail and proactive approach have helped us stay compliant and make informed financial decisions."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  JD
                </div>
                <div className="text-left">
                  <div className="font-semibold">John Doe</div>
                  <div className="text-sm text-muted-foreground">CEO, Startup Co.</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}