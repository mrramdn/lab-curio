"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  ArrowRight,
  Sparkles,
  Code,
  Palette,
  Zap,
  Github,
  Linkedin,
  Mail,
  Download,
  ChevronDown,
  Users,
  Trophy,
  Target,
  Lightbulb,
  Briefcase,
  Award,
  Star,
  CheckCircle
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  
  // Scroll animation refs
  const aboutRef = useScrollAnimation()
  const teamsRef = useScrollAnimation()
  const milestonesRef = useScrollAnimation()
  const benefitsRef = useScrollAnimation()

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Hide scroll indicator when near bottom (within 100px)
      setShowScrollIndicator(scrollTop + windowHeight < documentHeight - 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen relative">

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center">
          <div className="container mx-auto">
            <div className="text-center space-y-8">
              {/* Main Title */}
              <div className={cn(
                "space-y-6 transition-all duration-1000",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}>
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                  <span className="text-accent ml-4">Lab Curiosity</span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed px-4">
                  Where creativity meets innovation. A collaborative space for students to explore,
                  create, and transform ideas into extraordinary digital experiences.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className={cn(
                "flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-300 px-4",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}>
                <Button
                  size="lg"
                  className="group glass-button hover:scale-105 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                >
                  Join Our Community
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="group glass-card hover:scale-105 transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                >
                  <Download className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Guide Book (Coming Soon)
                </Button>
              </div>

              {/* Social Links */}
              <div className={cn(
                "flex gap-6 justify-center pt-8 transition-all duration-1000 delay-500",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}>
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Mail, href: "#", label: "Email" },
                ].map(({ icon: Icon, label }) => (
                  <Button
                    key={label}
                    variant="ghost"
                    size="icon"
                    className="glass-card hover:scale-110 transition-all duration-300 w-12 h-12"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} id="about" className="py-20 px-4 opacity-0 translate-y-10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-accent">Lab Curio</span>
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Lab Curio is a student-driven innovation laboratory that serves as a creative hub for aspiring developers, designers, and entrepreneurs.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="glass-card p-8 rounded-2xl">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                    <Lightbulb className="w-6 h-6 text-accent" />
                    Our Mission
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    To foster a collaborative environment where students can explore cutting-edge technologies,
                    develop innovative solutions, and build meaningful connections that extend beyond the classroom.
                  </p>
                </div>

                <div className="glass-card p-8 rounded-2xl">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                    <Target className="w-6 h-6 text-primary" />
                    Our Vision
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    To become the leading student innovation lab that bridges the gap between academic learning
                    and real-world application, producing graduates who are ready to make a significant impact in the tech industry.
                  </p>
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <Users className="w-6 h-6 text-secondary" />
                  What We Do
                </h3>
                <div className="space-y-4">
                  {[
                    "Collaborative project development",
                    "Technology workshops and training",
                    "Industry mentorship programs",
                    "Competition preparation and participation",
                    "Open source contributions",
                    "Startup incubation support"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Teams Section */}
        <section ref={teamsRef} id="teams" className="py-20 px-4 bg-gradient-to-b from-transparent to-background/50 opacity-0 translate-y-10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-accent">Teams</span>
              </h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Three specialized teams working together to create extraordinary digital experiences
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Hipster",
                  subtitle: "Design & Creative",
                  icon: Palette,
                  color: "text-pink-500",
                  bgColor: "bg-pink-500/10",
                  description: "The creative minds behind beautiful and intuitive user experiences. We focus on UI/UX design, branding, and visual storytelling.",
                  skills: ["UI/UX Design", "Branding", "Visual Design", "Prototyping", "User Research", "Design Systems"]
                },
                {
                  name: "Hacker",
                  subtitle: "Development & Tech",
                  icon: Code,
                  color: "text-blue-500",
                  bgColor: "bg-blue-500/10",
                  description: "The technical architects who bring ideas to life. We specialize in software development, system architecture, and cutting-edge technologies.",
                  skills: ["Full-Stack Development", "Mobile Development", "DevOps", "Cloud Computing", "AI/ML", "System Architecture"]
                },
                {
                  name: "Hustler",
                  subtitle: "Business & Strategy",
                  icon: Briefcase,
                  color: "text-green-500",
                  bgColor: "bg-green-500/10",
                  description: "The strategic thinkers who understand market needs and business opportunities. We focus on business development, strategy, and innovation.",
                  skills: ["Business Strategy", "Market Research", "Product Management", "Entrepreneurship", "Project Management", "Innovation"]
                }
              ].map((team, index) => (
                <div
                  key={team.name}
                  className={cn(
                    "glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-500 group",
                    "hover:shadow-2xl hover:shadow-primary/10"
                  )}
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className={cn("w-16 h-16 rounded-2xl glass-button flex items-center justify-center mb-6 group-hover:scale-110 transition-transform", team.bgColor)}>
                    <team.icon className={cn("w-8 h-8", team.color)} />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{team.name}</h3>
                  <p className="text-accent font-medium mb-4">{team.subtitle}</p>
                  <p className="text-foreground/70 leading-relaxed mb-6">{team.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground/80 mb-3">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {team.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 text-xs rounded-full glass-button text-foreground/70"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones Section */}
        <section ref={milestonesRef} id="milestones" className="py-20 px-4 opacity-0 translate-y-10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-accent">Achievements</span>
              </h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Celebrating our victories and milestones in various competitions and projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "National Hackathon Winner",
                  year: "2024",
                  description: "First place in the National Student Innovation Challenge with our AI-powered learning platform",
                  icon: Trophy,
                  color: "text-yellow-500"
                },
                {
                  title: "Best UI/UX Design",
                  year: "2024",
                  description: "Awarded for exceptional user experience design in the Digital Innovation Awards",
                  icon: Award,
                  color: "text-purple-500"
                },
                {
                  title: "Startup Pitch Winner",
                  year: "2023",
                  description: "Won the regional startup competition with our sustainable tech solution",
                  icon: Star,
                  color: "text-orange-500"
                },
                {
                  title: "Open Source Contribution",
                  year: "2023",
                  description: "Recognized for significant contributions to major open source projects",
                  icon: Github,
                  color: "text-gray-500"
                },
                {
                  title: "Innovation Excellence",
                  year: "2023",
                  description: "Awarded for outstanding innovation in educational technology solutions",
                  icon: Sparkles,
                  color: "text-pink-500"
                },
                {
                  title: "Community Impact",
                  year: "2022",
                  description: "Recognized for positive impact on the local tech community and student development",
                  icon: Users,
                  color: "text-blue-500"
                }
              ].map((milestone, index) => (
                <div
                  key={milestone.title}
                  className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-500 group"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className={cn("w-12 h-12 rounded-xl glass-button flex items-center justify-center flex-shrink-0", milestone.color)}>
                      <milestone.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold">{milestone.title}</h3>
                        <span className="text-sm text-accent font-medium">{milestone.year}</span>
                      </div>
                      <p className="text-foreground/70 text-sm leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section ref={benefitsRef} id="benefits" className="py-20 px-4 bg-gradient-to-b from-transparent to-background/50 opacity-0 translate-y-10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Join <span className="text-accent">Lab Curio?</span>
              </h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Discover the advantages of being part of our innovative community
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  {
                    icon: Users,
                    title: "Collaborative Environment",
                    description: "Work with like-minded peers in a supportive and creative atmosphere that encourages knowledge sharing and teamwork."
                  },
                  {
                    icon: Zap,
                    title: "Hands-on Experience",
                    description: "Gain real-world experience through practical projects, industry partnerships, and cutting-edge technology exposure."
                  },
                  {
                    icon: Target,
                    title: "Career Development",
                    description: "Access mentorship programs, networking opportunities, and career guidance from industry professionals and alumni."
                  },
                  {
                    icon: Trophy,
                    title: "Competition Opportunities",
                    description: "Participate in hackathons, design competitions, and innovation challenges to showcase your skills and win recognition."
                  }
                ].map((benefit, index) => (
                  <div
                    key={benefit.title}
                    className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-500 group"
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl glass-button flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <benefit.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-accent" />
                  Additional Perks
                </h3>
                <div className="space-y-4">
                  {[
                    "Access to premium development tools and software licenses",
                    "Exclusive workshops and training sessions",
                    "Networking events with industry leaders",
                    "Portfolio development and review sessions",
                    "Internship and job placement assistance",
                    "Access to our extensive resource library",
                    "Participation in research projects",
                    "Recognition and awards for outstanding contributions"
                  ].map((perk, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground/70">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll Indicator */}
        {showScrollIndicator && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-opacity duration-300">
            <div className="flex flex-col items-center gap-2 text-foreground/50">
              <span className="text-sm">Scroll to explore</span>
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
