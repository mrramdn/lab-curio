"use client"

import { Button } from "@/components/ui/button"
import { BookOpen, Download, FileText, Users, Lightbulb } from "lucide-react"


export default function GuidebookPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 animated-bg" />
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full fluid-morph blur-xl" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full fluid-morph blur-xl" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-20 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">

          {/* Coming Soon Content */}
          <div className="text-center space-y-8">
            <div className="glass-card p-12 rounded-3xl max-w-2xl mx-auto">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full glass-button flex items-center justify-center">
                <BookOpen className="w-12 h-12 text-accent" />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Guide Book <span className="text-accent">Coming Soon</span>
              </h1>

              <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                We&apos;re crafting a comprehensive guide that will help you navigate your journey
                with Lab Curio. Everything you need to know will be available soon!
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="glass-card p-6 rounded-2xl">
                  <FileText className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Complete Guide</h3>
                  <p className="text-foreground/70 text-sm">Everything you need to know</p>
                </div>

                <div className="glass-card p-6 rounded-2xl">
                  <Download className="w-8 h-8 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Downloadable PDF</h3>
                  <p className="text-foreground/70 text-sm">Available in multiple formats</p>
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  size="lg"
                  className="glass-button hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  Get Notified When Ready
                </Button>

                <p className="text-sm text-foreground/50">
                  We&apos;ll send you an email when the guide book is available
                </p>
              </div>
            </div>

            {/* What's Inside Preview */}
            <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6">What&apos;s Inside the Guide Book</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                <div>
                  <div className="w-12 h-12 rounded-xl glass-button flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2 text-accent">Getting Started</h3>
                  <p className="text-foreground/70 text-sm">
                    Introduction to Lab Curio, team structure, and how to get involved in projects.
                  </p>
                </div>

                <div>
                  <div className="w-12 h-12 rounded-xl glass-button flex items-center justify-center mb-4">
                    <Lightbulb className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2 text-accent">Best Practices</h3>
                  <p className="text-foreground/70 text-sm">
                    Guidelines for collaboration, project management, and professional development.
                  </p>
                </div>

                <div>
                  <div className="w-12 h-12 rounded-xl glass-button flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2 text-accent">Resources & Tools</h3>
                  <p className="text-foreground/70 text-sm">
                    Comprehensive list of tools, resources, and learning materials available to members.
                  </p>
                </div>

                <div>
                  <div className="w-12 h-12 rounded-xl glass-button flex items-center justify-center mb-4">
                    <Download className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2 text-accent">Templates & Examples</h3>
                  <p className="text-foreground/70 text-sm">
                    Ready-to-use templates for projects, presentations, and documentation.
                  </p>
                </div>

                <div>
                  <div className="w-12 h-12 rounded-xl glass-button flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2 text-accent">Community Guidelines</h3>
                  <p className="text-foreground/70 text-sm">
                    Code of conduct, communication protocols, and community standards.
                  </p>
                </div>

                <div>
                  <div className="w-12 h-12 rounded-xl glass-button flex items-center justify-center mb-4">
                    <Lightbulb className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2 text-accent">Career Development</h3>
                  <p className="text-foreground/70 text-sm">
                    Tips for building your portfolio, networking, and advancing your career.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
