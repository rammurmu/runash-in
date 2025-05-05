"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { MessageSquare, X, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isUser: boolean; timestamp: Date }[]>([
    { text: "👋 Hi there! How can we help you today?", isUser: false, timestamp: new Date() },
  ])
  const [inputValue, setInputValue] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasStartedChat, setHasStartedChat] = useState(false)

  // Listen for custom event to open chat
  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true)
    document.addEventListener("openLiveChat", handleOpenChat)
    return () => document.removeEventListener("openLiveChat", handleOpenChat)
  }, [])

  const handleSubmitInfo = (e: React.FormEvent) => {
    e.preventDefault()
    setHasStartedChat(true)
    setMessages((prev) => [
      ...prev,
      {
        text: `Thanks ${name}! An agent will be with you shortly. How can we help you today?`,
        isUser: false,
        timestamp: new Date(),
      },
    ])
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { text: inputValue, isUser: true, timestamp: new Date() }])
    setIsSubmitting(true)

    // Simulate response delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: getAutoResponse(inputValue),
          isUser: false,
          timestamp: new Date(),
        },
      ])
      setIsSubmitting(false)
    }, 1000)

    setInputValue("")
  }

  // Simple auto-response function
  const getAutoResponse = (message: string) => {
    const lowerMessage = message.toLowerCase()

    if (lowerMessage.includes("pricing") || lowerMessage.includes("cost") || lowerMessage.includes("price")) {
      return "Our pricing starts at $29/month for the Basic plan. You can view all our pricing options at runash.ai/pricing."
    }

    if (lowerMessage.includes("feature") || lowerMessage.includes("can it do")) {
      return "RunAsh AI offers real-time video enhancement, audience analytics, multi-platform streaming, and AI-powered content generation. Would you like to know more about any specific feature?"
    }

    if (lowerMessage.includes("trial") || lowerMessage.includes("free")) {
      return "Yes! We offer a 14-day free trial with no credit card required. You can sign up at runash.ai/register."
    }

    return "Thanks for your message! Our team will get back to you shortly. Is there anything else you'd like to know about RunAsh AI?"
  }

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300",
          "bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700",
          "dark:from-orange-500 dark:to-yellow-500 dark:hover:from-orange-600 dark:hover:to-yellow-600",
        )}
        aria-label="Open live chat"
      >
        <MessageSquare className="h-6 w-6 text-white" />
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 rounded-xl shadow-xl bg-white dark:bg-gray-900 border border-orange-200 dark:border-orange-800/30 overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-yellow-600 dark:from-orange-500 dark:to-yellow-500 p-4 text-white flex justify-between items-center">
            <div>
              <h3 className="font-bold">RunAsh AI Support</h3>
              <p className="text-xs text-white/80">We typically reply in a few minutes</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat messages */}
          <div className="flex-1 p-4 overflow-y-auto max-h-80 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={cn("flex", message.isUser ? "justify-end" : "justify-start")}>
                <div
                  className={cn(
                    "max-w-[80%] rounded-lg p-3",
                    message.isUser
                      ? "bg-orange-100 dark:bg-orange-900/30 text-gray-900 dark:text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
                  )}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}
            {isSubmitting && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 flex items-center space-x-2">
                  <Loader2 className="h-4 w-4 text-orange-500 animate-spin" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">Typing...</p>
                </div>
              </div>
            )}
          </div>

          {/* Input area */}
          {!hasStartedChat ? (
            <form onSubmit={handleSubmitInfo} className="p-4 border-t border-gray-200 dark:border-gray-800">
              <h4 className="font-medium text-sm mb-3 text-gray-700 dark:text-gray-300">
                Please provide your information to start the chat
              </h4>
              <div className="space-y-3">
                <Input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 dark:from-orange-500 dark:to-yellow-500 dark:hover:from-orange-600 dark:hover:to-yellow-600"
                >
                  Start Chat
                </Button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-end space-x-2">
                <Textarea
                  placeholder="Type your message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-1 resize-none"
                  rows={1}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      if (inputValue.trim()) handleSendMessage(e)
                    }
                  }}
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={!inputValue.trim() || isSubmitting}
                  className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 dark:from-orange-500 dark:to-yellow-500 dark:hover:from-orange-600 dark:hover:to-yellow-600"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          )}
        </div>
      )}
    </>
  )
}
