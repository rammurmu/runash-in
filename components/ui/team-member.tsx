"use client"

import { useState } from "react"
import { Twitter, Linkedin } from "lucide-react"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  bio: string
  socialLinks: {
    twitter?: string
    linkedin?: string
  }
}

export default function TeamMember({ name, role, image, bio, socialLinks }: TeamMemberProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative rounded-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient border */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 rounded-xl p-[1px]">
        <div className="absolute inset-0 bg-black rounded-xl"></div>
      </div>

      <div className="relative p-1">
        {/* Image */}
        <div className="aspect-square overflow-hidden rounded-t-lg">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6`}
          >
            <p className="text-white text-sm">{bio}</p>
          </div>
        </div>

        {/* Info */}
        <div className="p-6 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-black rounded-b-lg">
          <h3 className="font-bold text-xl mb-1">{name}</h3>
          <p className="text-sm text-purple-300 mb-4">{role}</p>

          {/* Social links */}
          <div className="flex space-x-3">
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-purple-900/50 hover:bg-purple-700/50 transition-colors"
              >
                <Twitter className="h-4 w-4 text-purple-300" />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-900/50 hover:bg-blue-700/50 transition-colors"
              >
                <Linkedin className="h-4 w-4 text-blue-300" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
        }
          
