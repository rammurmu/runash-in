import { Play } from "lucide-react"

interface FeatureVideoProps {
  title: string
  description: string
  videoThumbnail: string
  duration: string
}

export default function FeatureVideo({ title, description, videoThumbnail, duration }: FeatureVideoProps) {
  return (
    <div className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-5px]">
      {/* Video thumbnail */}
      <div className="relative aspect-video rounded-xl overflow-hidden">
        <img
          src={videoThumbnail || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-orange-600/90 dark:bg-orange-500/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Play className="h-8 w-8 text-white ml-1" />
          </div>
        </div>

        {/* Duration */}
        <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/70 rounded-md text-white text-xs">{duration}</div>
      </div>

      {/* Video info */}
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  )
  }
          
