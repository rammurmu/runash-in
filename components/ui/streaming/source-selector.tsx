"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { RefreshCw, Camera, Mic } from "lucide-react"

interface SourceSelectorProps {
  videoDevices: Array<{ deviceId: string; label: string }>
  audioDevices: Array<{ deviceId: string; label: string }>
  selectedCamera: string
  selectedMicrophone: string
  onCameraChange: (deviceId: string) => void
  onMicrophoneChange: (deviceId: string) => void
}

export default function SourceSelector({
  videoDevices,
  audioDevices,
  selectedCamera,
  selectedMicrophone,
  onCameraChange,
  onMicrophoneChange,
}: SourceSelectorProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Input Sources</h3>
        <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-500">
          <RefreshCw className="h-4 w-4 mr-1" />
          Refresh
        </Button>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="camera-select" className="flex items-center">
            <Camera className="h-4 w-4 mr-2 text-orange-500" />
            Camera Source
          </Label>
          <Select value={selectedCamera} onValueChange={onCameraChange}>
            <SelectTrigger id="camera-select">
              <SelectValue placeholder="Select camera" />
            </SelectTrigger>
            <SelectContent>
              {videoDevices.map((device) => (
                <SelectItem key={device.deviceId} value={device.deviceId}>
                  {device.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="mic-select" className="flex items-center">
            <Mic className="h-4 w-4 mr-2 text-orange-500" />
            Microphone Source
          </Label>
          <Select value={selectedMicrophone} onValueChange={onMicrophoneChange}>
            <SelectTrigger id="mic-select">
              <SelectValue placeholder="Select microphone" />
            </SelectTrigger>
            <SelectContent>
              {audioDevices.map((device) => (
                <SelectItem key={device.deviceId} value={device.deviceId}>
                  {device.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="pt-4 border-t border-orange-100 dark:border-orange-900/20">
        <h4 className="text-sm font-medium mb-2">Additional Sources</h4>
        <div className="space-y-2">
          <Button variant="outline" className="w-full justify-start text-gray-700 dark:text-gray-300">
            + Add Screen Share
          </Button>
          <Button variant="outline" className="w-full justify-start text-gray-700 dark:text-gray-300">
            + Add Media File
          </Button>
        </div>
      </div>
    </div>
  )
}
