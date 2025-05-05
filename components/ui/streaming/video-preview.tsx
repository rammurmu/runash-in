"use client"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Mic, MicOff, Camera, CameraOff, Maximize2 } from "lucide-react"

interface VideoPreviewProps {
  isStreaming: boolean
  selectedCamera: string
}

export default function VideoPreview({ isStreaming, selectedCamera }: VideoPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isMuted, setIsMuted] = useState(false)
  const [isCameraOff, setIsCameraOff] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // In a real implementation, we would use the actual camera stream
  // This is a simplified version for demonstration purposes
  useEffect(() => {
    if (isCameraOff) {
      if (videoRef.current) {
        videoRef.current.srcObject = null
      }
      return
    }

    // Simulate camera stream with a placeholder
    const getVideoStream = async () => {
      try {
        // In a real app, we would use:
        // const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        // videoRef.current.srcObject = stream

        // For demo purposes, we'll just play a video element
        if (videoRef.current) {
          videoRef.current.play().catch((error) => {
            console.error("Error playing video:", error)
          })
        }
      } catch (error) {
        console.error("Error accessing camera:", error)
      }
    }

    getVideoStream()
  }, [isCameraOff, selectedCamera])

  // Apply AI effects to the video stream
  useEffect(() => {
    if (isCameraOff || !videoRef.current || !canvasRef.current) return

    const video = videoRef.current
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    if (!ctx) return

    let animationFrame: number

    const drawVideoFrame = () => {
      if (video.paused || video.ended) return

      // Set canvas dimensions to match video
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight

      // Draw the current video frame
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

      // Apply AI effects here (simplified for demo)
      // In a real app, we would use WebGL or WASM-based libraries for effects

      // Request next frame
      animationFrame = requestAnimationFrame(drawVideoFrame)
    }

    video.addEventListener("play", () => {
      drawVideoFrame()
    })

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [isCameraOff, selectedCamera])

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
    }
  }

  const toggleCamera = () => {
    setIsCameraOff(!isCameraOff)
  }

  const toggleFullscreen = () => {
    if (!containerRef.current) return

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`)
      })
    } else {
      document.exitFullscreen()
    }
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-xl"
    >
      {/* Hidden video element for source */}
      <video
        ref={videoRef}
        className="hidden"
        muted={isMuted}
        loop
        playsInline
        src="/placeholder.svg?height=720&width=1280"
      />

      {/* Canvas for rendering with effects */}
      <canvas ref={canvasRef} className={`w-full h-full object-cover ${isCameraOff ? "hidden" : "block"}`} />

      {/* Camera off placeholder */}
      {isCameraOff && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="text-center">
            <CameraOff className="h-16 w-16 mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400 text-lg">Camera is turned off</p>
          </div>
        </div>
      )}

      {/* Stream indicator */}
      {isStreaming && (
        <div className="absolute top-4 left-4 flex items-center space-x-2 bg-black/50 text-white px-3 py-1 rounded-full">
          <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
          <span className="text-sm font-medium">Live</span>
        </div>
      )}

      {/* Controls overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={toggleMute}>
              {isMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={toggleCamera}>
              {isCameraOff ? <CameraOff className="h-5 w-5" /> : <Camera className="h-5 w-5" />}
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={toggleFullscreen}>
            <Maximize2 className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
