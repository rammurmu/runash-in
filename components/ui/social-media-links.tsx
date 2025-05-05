import { Twitter, Facebook, Instagram, Linkedin, Youtube, Github } from "lucide-react"
import { cn } from "@/lib/utils"

interface SocialMediaLinksProps {
  variant?: "default" | "outline" | "gradient"
  className?: string
  iconSize?: number
}

export default function SocialMediaLinks({
  variant = "default",
  className = "",
  iconSize = 20,
}: SocialMediaLinksProps) {
  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/runashai" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/runashai" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/runashai" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/runashai" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/c/runashai" },
    { name: "GitHub", icon: Github, href: "https://github.com/runashai" },
  ]

  return (
    <div className={cn("flex items-center space-x-4", className)}>
      {socialLinks.map((link) => {
        const Icon = link.icon

        return (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("transition-all duration-200 flex items-center justify-center", {
              // Default variant
              "text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400":
                variant === "default",

              // Outline variant
              "w-10 h-10 rounded-full border border-orange-200 dark:border-orange-800/30 hover:border-orange-500/70 dark:hover:border-orange-500/70 text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400":
                variant === "outline",

              // Gradient variant
              "w-10 h-10 rounded-full bg-gradient-to-br from-orange-500/10 to-yellow-500/10 hover:from-orange-500/20 hover:to-yellow-500/20 dark:from-orange-500/20 dark:to-yellow-500/20 dark:hover:from-orange-500/30 dark:hover:to-yellow-500/30 text-orange-600 dark:text-orange-400":
                variant === "gradient",
            })}
            aria-label={`Visit RunAsh AI on ${link.name}`}
          >
            <Icon size={iconSize} />
          </a>
        )
      })}
    </div>
  )
}
