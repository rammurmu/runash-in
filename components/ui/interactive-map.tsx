"use client"

import { useState } from "react"
import { MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Location {
  id: string
  name: string
  lat: number
  lng: number
  address: string
  phone: string
  email: string
  hours?: string
}

interface InteractiveMapProps {
  locations: Location[]
  height?: string
  className?: string
}

export default function InteractiveMap({ locations, height = "500px", className = "" }: InteractiveMapProps) {
  const [activeLocation, setActiveLocation] = useState<Location>(locations[0])

  // Function to get map image URL based on location
  const getMapImageUrl = (location: Location) => {
    // Using OpenStreetMap static image as a placeholder
    // This doesn't require an API key
    return `/placeholder.svg?height=600&width=800&text=Map+of+${encodeURIComponent(location.name)}`
  }

  return (
    <div className={cn("rounded-xl overflow-hidden border border-orange-200 dark:border-orange-800/30", className)}>
      <div className="flex flex-col md:flex-row h-full">
        {/* Location list */}
        <div className="w-full md:w-1/3 bg-white dark:bg-gray-900 p-4 overflow-y-auto" style={{ maxHeight: height }}>
          <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Our Locations</h3>
          <div className="space-y-3">
            {locations.map((location) => (
              <div
                key={location.id}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  activeLocation?.id === location.id
                    ? "bg-orange-100 dark:bg-orange-900/30 border-l-4 border-orange-500"
                    : "bg-gray-50 dark:bg-gray-800/50 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                }`}
                onClick={() => setActiveLocation(location)}
              >
                <h4 className="font-medium text-gray-900 dark:text-white">{location.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{location.address}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Map and location details */}
        <div className="w-full md:w-2/3 flex flex-col">
          {/* Map visualization */}
          <div className="relative" style={{ height: `calc(${height} - 200px)`, minHeight: "250px" }}>
            {/* Map image */}
            <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800">
              <img
                src={getMapImageUrl(activeLocation) || "/placeholder.svg"}
                alt={`Map showing ${activeLocation.name} location`}
                className="w-full h-full object-cover"
              />

              {/* Location marker */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-6 h-6 rounded-full bg-orange-500 animate-ping absolute"></div>
                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center relative">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location details */}
          <div className="bg-white dark:bg-gray-900 p-6 border-t border-orange-200 dark:border-orange-800/30">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{activeLocation.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{activeLocation.address}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 dark:text-orange-400 dark:hover:bg-orange-950/50"
                onClick={() =>
                  window.open(
                    `https://www.openstreetmap.org/search?query=${encodeURIComponent(activeLocation.address)}`,
                    "_blank",
                  )
                }
              >
                View on Map <ExternalLink className="ml-1 h-3 w-3" />
              </Button>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</p>
                <p className="text-gray-900 dark:text-white">{activeLocation.phone}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
                <p className="text-gray-900 dark:text-white">{activeLocation.email}</p>
              </div>
              {activeLocation.hours && (
                <div className="sm:col-span-2">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Hours</p>
                  <p className="text-gray-900 dark:text-white">{activeLocation.hours}</p>
                </div>
              )}
            </div>

            <div className="mt-6 flex space-x-3">
              <Button
                className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 dark:from-orange-500 dark:to-yellow-500 dark:hover:from-orange-600 dark:hover:to-yellow-600 text-white"
                onClick={() => window.open(`tel:${activeLocation.phone.replace(/\D/g, "")}`)}
              >
                Call Office
              </Button>
              <Button
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 dark:text-orange-400 dark:hover:bg-orange-950/50"
                onClick={() => window.open(`mailto:${activeLocation.email}`)}
              >
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
