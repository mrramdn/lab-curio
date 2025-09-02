"use client"

import { Button } from "@/components/ui/button"
import { Users, Calendar, Clock } from "lucide-react"


export default function RegisterPage() {
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
                <Users className="w-12 h-12 text-accent" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Registration <span className="text-accent">Coming Soon</span>
              </h1>
              
              <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                We&apos;re working hard to bring you an amazing registration experience. 
                Stay tuned for updates on when you can join the Lab Curio community!
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="glass-card p-6 rounded-2xl">
                  <Calendar className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Registration Opens</h3>
                  <p className="text-foreground/70 text-sm">TBA - Stay updated!</p>
                </div>
                
                <div className="glass-card p-6 rounded-2xl">
                  <Clock className="w-8 h-8 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Early Access</h3>
                  <p className="text-foreground/70 text-sm">Get notified first!</p>
                </div>
              </div>

              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="glass-button hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  Notify Me When Available
                </Button>
                
                <p className="text-sm text-foreground/50">
                  Follow us on social media for the latest updates
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="glass-card p-8 rounded-2xl max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6">What to Expect</h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h3 className="font-semibold mb-2 text-accent">Easy Registration</h3>
                  <p className="text-foreground/70 text-sm">
                    Simple and quick registration process with clear instructions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-accent">Team Selection</h3>
                  <p className="text-foreground/70 text-sm">
                    Choose your preferred team: Hipster, Hacker, or Hustler.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-accent">Welcome Package</h3>
                  <p className="text-foreground/70 text-sm">
                    Get access to resources, tools, and community guidelines.
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
