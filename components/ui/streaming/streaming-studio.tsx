"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Settings, Users, MessageSquare, BarChart3, Wand2, Layers, ChevronRight, ChevronLeft } from "lucide-react"

import VideoPreview from "./video-preview"
import StreamChat from "./stream-chat"
import AIEnhancementPanel from "./ai-enhancement-panel"
import StreamAnalytics from "./stream-analytics"
import StreamControls from "./stream-controls"
import SourceSelector from "./source-selector"
import StreamSettings from "./stream-settings"
import StreamStatusBar from "./stream-status-bar"

export default function StreamingStudio() {
  const [isStreaming, setIsStreaming] = useState(false)
  const [isPanelCollapsed, setIsPanelCollapsed] = useState(false)
  const [isChatCollapsed, setIsChatCollapsed] = useState(false)
  const [activeTab, setActiveTab] = useState("enhance")
  const [streamTitle, setStreamTitle] = useState("My AI-Enhanced Stream")
  const [streamDescription, setStreamDescription] = useState("Live streaming with RunAsh AI enhancements")
  const [selectedCamera, setSelectedCamera] = useState("")
  const [selectedMicrophone, setSelectedMicrophone] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading of resources
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Simulate available devices
  const [devices, setDevices] = useState({
    videoDevices: [],
    audioDevices: [],
  })

  useEffect(() => {
    // In a real app, we would use the Media Devices API
    // navigator.mediaDevices.enumerateDevices()
    setDevices({
      videoDevices: [
        { deviceId: "camera1", label: "Webcam HD" },
        { deviceId: "camera2", label: "External Camera" },
      ],
      audioDevices: [
        { deviceId: "mic1", label: "Built-in Microphone" },
        { deviceId: "mic2", label: "USB Microphone" },
        { deviceId: "mic3", label: "Headset Microphone" },
      ],
    })

    setSelectedCamera("camera1")
    setSelectedMicrophone("mic1")
  }, [])

  const toggleStreaming = () => {
    setIsStreaming(!isStreaming)
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-orange-100 dark:border-orange-900/20 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-yellow-500 dark:from-orange-400 dark:to-yellow-300 text-transparent bg-clip-text mr-4">
              RunAsh Studio
            </h1>
            <Badge variant="outline" className="border-orange-500 text-orange-600 dark:text-orange-400">
              Beta
            </Badge>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className={`h-2 w-2 rounded-full ${isStreaming ? "bg-red-500 animate-pulse" : "bg-gray-400"}`}></div>
              <span className="text-sm font-medium">{isStreaming ? "Live" : "Offline"}</span>
            </div>
            <Button
              onClick={toggleStreaming}
              className={
                isStreaming
                  ? "bg-red-500 hover:bg-red-600 text-white"
                  : "bg-gradient-to-r from-orange-600 to-yellow-500 hover:opacity-90 text-white"
              }
            >
              {isStreaming ? "End Stream" : "Go Live"}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel - Controls */}
        <div
          className={`bg-white dark:bg-gray-900 border-r border-orange-100 dark:border-orange-900/20 flex flex-col ${isPanelCollapsed ? "w-12" : "w-80"} transition-all duration-300`}
        >
          {isPanelCollapsed ? (
            <div className="flex flex-col items-center py-4 space-y-6">
              <Button variant="ghost" size="icon" onClick={() => setIsPanelCollapsed(false)}>
                <ChevronRight className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setActiveTab("enhance")}>
                <Wand2 className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setActiveTab("sources")}>
                <Layers className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setActiveTab("settings")}>
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center p-4 border-b border-orange-100 dark:border-orange-900/20">
                <h2 className="font-semibold">Stream Controls</h2>
                <Button variant="ghost" size="icon" onClick={() => setIsPanelCollapsed(true)}>
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
                <TabsList className="grid grid-cols-3 mx-4 mt-4">
                  <TabsTrigger value="enhance">Enhance</TabsTrigger>
                  <TabsTrigger value="sources">Sources</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                <div className="flex-1 overflow-y-auto p-4">
                  <TabsContent value="enhance" className="mt-0">
                    <AIEnhancementPanel />
                  </TabsContent>

                  <TabsContent value="sources" className="mt-0">
                    <SourceSelector
                      videoDevices={devices.videoDevices}
                      audioDevices={devices.audioDevices}
                      selectedCamera={selectedCamera}
                      selectedMicrophone={selectedMicrophone}
                      onCameraChange={setSelectedCamera}
                      onMicrophoneChange={setSelectedMicrophone}
                    />
                  </TabsContent>

                  <TabsContent value="settings" className="mt-0">
                    <StreamSettings
                      streamTitle={streamTitle}
                      streamDescription={streamDescription}
                      onTitleChange={setStreamTitle}
                      onDescriptionChange={setStreamDescription}
                    />
                  </TabsContent>
                </div>
              </Tabs>

              <div className="p-4 border-t border-orange-100 dark:border-orange-900/20">
                <StreamControls isStreaming={isStreaming} onToggleStream={toggleStreaming} />
              </div>
            </>
          )}
        </div>

        {/* Center - Video Preview */}
        <div className="flex-1 flex flex-col bg-gray-100 dark:bg-gray-950">
          {isLoading ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-gray-700 dark:text-gray-300">Loading studio...</p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 flex items-center justify-center p-4">
                <VideoPreview isStreaming={isStreaming} selectedCamera={selectedCamera} />
              </div>

              <StreamStatusBar
                isStreaming={isStreaming}
                streamDuration={isStreaming ? "00:15:42" : "00:00:00"}
                viewerCount={isStreaming ? 42 : 0}
                streamHealth="Excellent"
              />
            </>
          )}
        </div>

        {/* Right Panel - Chat & Analytics */}
        <div
          className={`bg-white dark:bg-gray-900 border-l border-orange-100 dark:border-orange-900/20 flex flex-col ${isChatCollapsed ? "w-12" : "w-80"} transition-all duration-300`}
        >
          {isChatCollapsed ? (
            <div className="flex flex-col items-center py-4 space-y-6">
              <Button variant="ghost" size="icon" onClick={() => setIsChatCollapsed(false)}>
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <MessageSquare className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Users className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <BarChart3 className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center p-4 border-b border-orange-100 dark:border-orange-900/20">
                <h2 className="font-semibold">Engagement</h2>
                <Button variant="ghost" size="icon" onClick={() => setIsChatCollapsed(true)}>
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>

              <Tabs defaultValue="chat" className="flex-1 flex flex-col">
                <TabsList className="grid grid-cols-3 mx-4 mt-4">
                  <TabsTrigger value="chat">Chat</TabsTrigger>
                  <TabsTrigger value="viewers">Viewers</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                </TabsList>

                <div className="flex-1 overflow-y-auto">
                  <TabsContent value="chat" className="h-full mt-0">
                    <StreamChat isStreaming={isStreaming} />
                  </TabsContent>

                  <TabsContent value="viewers" className="h-full mt-0">
                    <div className="p-4">
                      <div className="text-center py-8">
                        <Users className="h-12 w-12 mx-auto text-gray-400 mb-2" />
                        <h3 className="text-lg font-medium mb-1">No viewers yet</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Viewers will appear here when they join your stream
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="analytics" className="h-full mt-0">
                    <StreamAnalytics isStreaming={isStreaming} />
                  </TabsContent>
                </div>
              </Tabs>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
