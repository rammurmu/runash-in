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
  gradient: string
}

export default function TeamMember({ name, role, image, bio, socialLinks, gradient }: TeamMemberProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative rounded-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient border */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-xl p-[1px]`}>
        <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-xl"></div>
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
        <div className="p-6 bg-gradient-to-br from-orange-50/30 via-yellow-50/30 to-white dark:from-orange-900/30 dark:via-yellow-900/30 dark:to-gray-900 rounded-b-lg">
          <h3 className="font-bold text-xl mb-1 text-gray-900 dark:text-white">{name}</h3>
          <p className="text-sm text-orange-600 dark:text-orange-400 mb-4">{role}</p>

          {/* Social links */}
          <div className="flex space-x-3">
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-orange-100 hover:bg-orange-200 dark:bg-orange-900/50 dark:hover:bg-orange-800/50 transition-colors"
              >
                <Twitter className="h-4 w-4 text-orange-600 dark:text-orange-400" />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-yellow-100 hover:bg-yellow-200 dark:bg-yellow-900/50 dark:hover:bg-yellow-800/50 transition-colors"
              >
                <Linkedin className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
      }
          
