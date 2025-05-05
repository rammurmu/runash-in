"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Send, X, Minimize, Maximize, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { chatWithAI } from "@/app/actions/ai-actions"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface Message {
  role: "user" | "assistant"
  content: string
}

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi there! I'm RunAsh AI assistant. How can I help you with your streaming needs today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    try {
      const response = await chatWithAI(userMessage, messages)
      setMessages((prev) => [...prev, { role: "assistant", content: response }])
    } catch (error) {
      console.error("Chat error:", error)
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I encountered an error. Please try again later." },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const toggleChat = () => {
    if (isMinimized) {
      setIsMinimized(false)
    } else {
      setIsOpen(!isOpen)
    }
  }

  const minimizeChat = () => {
    setIsMinimized(true)
  }

  return (
    <>
      {isOpen && !isMinimized && (
        <Card className="fixed bottom-20 right-4 w-80 md:w-96 shadow-xl border border-orange-200 dark:border-orange-900/30 z-50">
          <CardHeader className="bg-gradient-to-r from-orange-600 to-yellow-500 text-white p-3 flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              RunAsh AI Assistant
            </CardTitle>
            <div className="flex items-center gap-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 text-white hover:bg-white/20"
                      onClick={minimizeChat}
                    >
                      <Minimize className="h-3 w-3" />
                      <span className="sr-only">Minimize</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="left">
                    <p>Minimize</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 text-white hover:bg-white/20"
                      onClick={toggleChat}
                    >
                      <X className="h-3 w-3" />
                      <span className="sr-only">Close</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="left">
                    <p>Close</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </CardHeader>
          <ScrollArea className="h-80">
            <CardContent className="p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn("flex", {
                    "justify-end": message.role === "user",
                    "justify-start": message.role === "assistant",
                  })}
                >
                  <div
                    className={cn("flex gap-3 max-w-[80%]", {
                      "flex-row-reverse": message.role === "user",
                    })}
                  >
                    {message.role === "assistant" && (
                      <Avatar className="h-8 w-8 border-2 border-orange-100 dark:border-orange-900/30">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI Assistant" />
                        <AvatarFallback className="bg-gradient-to-r from-orange-600 to-yellow-500 text-white text-xs">
                          AI
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={cn("rounded-lg px-3 py-2 text-sm", {
                        "bg-gradient-to-r from-orange-600 to-yellow-500 text-white": message.role === "user",
                        "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100": message.role === "assistant",
                      })}
                    >
                      {message.content}
                    </div>
                    {message.role === "user" && (
                      <Avatar className="h-8 w-8 border-2 border-orange-100 dark:border-orange-900/30">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs">
                          YOU
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-3 max-w-[80%]">
                    <Avatar className="h-8 w-8 border-2 border-orange-100 dark:border-orange-900/30">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI Assistant" />
                      <AvatarFallback className="bg-gradient-to-r from-orange-600 to-yellow-500 text-white text-xs">
                        AI
                      </AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg px-3 py-2 text-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </CardContent>
          </ScrollArea>
          <CardFooter className="p-3 border-t border-gray-200 dark:border-gray-800">
            <form onSubmit={handleSendMessage} className="flex w-full gap-2">
              <Textarea
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="min-h-[40px] max-h-[120px] resize-none flex-1"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSendMessage(e)
                  }
                }}
              />
              <Button
                type="submit"
                size="icon"
                disabled={!input.trim() || isLoading}
                className="bg-gradient-to-r from-orange-600 to-yellow-500 hover:from-orange-700 hover:to-yellow-600 text-white h-10 w-10"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}

      {isMinimized && (
        <Button
          onClick={() => setIsMinimized(false)}
          className="fixed bottom-20 right-4 bg-gradient-to-r from-orange-600 to-yellow-500 hover:from-orange-700 hover:to-yellow-600 text-white shadow-lg z-50 flex items-center gap-2"
        >
          <MessageSquare className="h-4 w-4" />
          <span>RunAsh AI Assistant</span>
          <Maximize className="h-4 w-4 ml-1" />
        </Button>
      )}

      <Button
        onClick={toggleChat}
        className={cn(
          "fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg z-50 bg-gradient-to-r from-orange-600 to-yellow-500 hover:from-orange-700 hover:to-yellow-600 text-white",
          {
            hidden: isOpen && !isMinimized,
          },
        )}
      >
        <MessageSquare className="h-5 w-5" />
        <span className="sr-only">Chat with AI</span>
      </Button>
    </>
  )
}
