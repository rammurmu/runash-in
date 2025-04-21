import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ComparisonTable() {
  const features = [
    { name: "AI Video Enhancement", starter: true, pro: true, enterprise: true },
    { name: "Background Noise Reduction", starter: true, pro: true, enterprise: true },
    { name: "Smart Chat Moderation", starter: false, pro: true, enterprise: true },
    { name: "Virtual Backgrounds", starter: false, pro: true, enterprise: true },
    { name: "Multi-platform Streaming", starter: false, pro: true, enterprise: true },
    { name: "Live Translation", starter: false, pro: false, enterprise: true },
    { name: "Custom Branding", starter: false, pro: false, enterprise: true },
    { name: "Priority Support", starter: false, pro: false, enterprise: true },
    { name: "API Access", starter: false, pro: false, enterprise: true },
  ]

  return (
    <div className="relative overflow-x-auto">
      <div className="min-w-full rounded-xl overflow-hidden">
        <div className="grid grid-cols-4 text-sm text-left">
          {/* Header */}
          <div className="bg-black/50 p-6 border-b border-purple-900/30">
            <div className="font-medium text-gray-300">Features</div>
          </div>
          <div className="bg-black/50 p-6 border-b border-purple-900/30">
            <div className="font-bold text-xl text-white">Starter</div>
            <div className="mt-2 text-purple-400">
              <span className="text-2xl font-bold">$19</span>
              <span className="text-gray-400">/month</span>
            </div>
            <Button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Get Started
            </Button>
          </div>
          <div className="bg-gradient-to-b from-purple-900/30 to-black/80 p-6 border-b border-purple-500/30 relative">
            <div className="absolute top-0 right-0">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
            </div>
            <div className="font-bold text-xl text-white">Professional</div>
            <div className="mt-2 text-purple-400">
              <span className="text-2xl font-bold">$49</span>
              <span className="text-gray-400">/month</span>
            </div>
            <Button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Get Started
            </Button>
          </div>
          <div className="bg-black/50 p-6 border-b border-purple-900/30">
            <div className="font-bold text-xl text-white">Enterprise</div>
            <div className="mt-2 text-purple-400">
              <span className="text-2xl font-bold">$99</span>
              <span className="text-gray-400">/month</span>
            </div>
            <Button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Get Started
            </Button>
          </div>

          {/* Features */}
          {features.map((feature, index) => (
            <>
              <div
                key={`name-${index}`}
                className={`p-6 border-b border-purple-900/30 ${index % 2 === 0 ? "bg-black/80" : "bg-black/50"}`}
              >
                <div className="font-medium text-gray-300">{feature.name}</div>
              </div>
              <div
                key={`starter-${index}`}
                className={`p-6 border-b border-purple-900/30 ${index % 2 === 0 ? "bg-black/80" : "bg-black/50"}`}
              >
                {feature.starter ? (
                  <Check className="h-5 w-5 text-purple-400" />
                ) : (
                  <X className="h-5 w-5 text-gray-600" />
                )}
              </div>
              <div
                key={`pro-${index}`}
                className={`p-6 border-b border-purple-500/30 ${
                  index % 2 === 0 ? "bg-purple-900/20" : "bg-purple-900/10"
                }`}
              >
                {feature.pro ? <Check className="h-5 w-5 text-purple-400" /> : <X className="h-5 w-5 text-gray-600" />}
              </div>
              <div
                key={`enterprise-${index}`}
                className={`p-6 border-b border-purple-900/30 ${index % 2 === 0 ? "bg-black/80" : "bg-black/50"}`}
              >
                {feature.enterprise ? (
                  <Check className="h-5 w-5 text-purple-400" />
                ) : (
                  <X className="h-5 w-5 text-gray-600" />
                )}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
     }
    
