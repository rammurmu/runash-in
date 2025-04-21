"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2 } from "lucide-react"

export default function ContactsForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="p-6 rounded-lg bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-black border border-purple-500/30 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 mb-6">
          <svg
            className="h-8 w-8 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
        <p className="text-gray-300 mb-6">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
        <Button
          variant="outline"
          className="border-purple-500 text-purple-400 hover:bg-purple-950/50"
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-gray-300">
            Name
          </Label>
          <Input
            id="name"
            placeholder="Your name"
            required
            className="bg-black/50 border-purple-500/30 focus:border-purple-500/70 text-white placeholder:text-gray-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-300">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            required
            className="bg-black/50 border-purple-500/30 focus:border-purple-500/70 text-white placeholder:text-gray-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject" className="text-gray-300">
          Subject
        </Label>
        <Select>
          <SelectTrigger className="bg-black/50 border-purple-500/30 focus:border-purple-500/70 text-white">
            <SelectValue placeholder="Select a subject" />
          </SelectTrigger>
          <SelectContent className="bg-black/90 border-purple-500/30 text-white">
            <SelectItem value="general">General Inquiry</SelectItem>
            <SelectItem value="support">Technical Support</SelectItem>
            <SelectItem value="sales">Sales Question</SelectItem>
            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-gray-300">
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="How can we help you?"
          required
          rows={6}
          className="bg-black/50 border-purple-500/30 focus:border-purple-500/70 text-white placeholder:text-gray-500 resize-none"
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="newsletter"
          className="rounded border-purple-500/30 bg-black/50 text-purple-500 focus:ring-purple-500"
        />
        <Label htmlFor="newsletter" className="text-gray-300 text-sm">
          Subscribe to our newsletter for updates and tips
        </Label>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 hover:from-purple-700 hover:via-blue-700 hover:to-teal-700"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  )
      }
        
