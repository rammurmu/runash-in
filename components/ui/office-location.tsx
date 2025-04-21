import { MapPin, Phone, Mail, Clock } from "lucide-react"

interface OfficeLocationProps {
  city: string
  address: string
  phone: string
  email: string
  image: string
  hours: string
}

export default function OfficeLocation({ city, address, phone, email, image, hours }: OfficeLocationProps) {
  return (
    <div className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-5px]">
      {/* Gradient border */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 via-blue-500/50 to-teal-500/50 rounded-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative bg-black/80 backdrop-blur-sm rounded-xl border border-purple-500/10 group-hover:border-purple-500/30 transition-colors duration-300 h-full">
        {/* Image */}
        <div className="h-40 overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={city}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-0 left-0 right-0 p-4">
            <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-900/80 to-blue-900/80 backdrop-blur-sm border border-purple-500/30">
              <span className="text-sm font-semibold text-white">{city}</span>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="p-6 space-y-4">
          <div className="flex items-start space-x-3">
            <MapPin className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300">{address}</span>
          </div>
          <div className="flex items-start space-x-3">
            <Phone className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300">{phone}</span>
          </div>
          <div className="flex items-start space-x-3">
            <Mail className="h-5 w-5 text-teal-400 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300">{email}</span>
          </div>
          <div className="flex items-start space-x-3">
            <Clock className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300">{hours}</span>
          </div>
        </div>
      </div>
    </div>
  )
      }
              
