"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Settings, Globe, Lock, Eye, Save } from "lucide-react"

interface StreamSettingsProps {
  streamTitle: string
  streamDescription: string
  onTitleChange: (title: string) => void
  onDescriptionChange: (description: string) => void
}

export default function StreamSettings({
  streamTitle,
  streamDescription,
  onTitleChange,
  onDescriptionChange,
}: StreamSettingsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Settings className="h-5 w-5 mr-2 text-orange-500" />
        <h3 className="text-lg font-medium">Stream Settings</h3>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="stream-title">Stream Title</Label>
          <Input
            id="stream-title"
            value={streamTitle}
            onChange={(e) => onTitleChange(e.target.value)}
            placeholder="Enter a title for your stream"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="stream-description">Description</Label>
          <Textarea
            id="stream-description"
            value={streamDescription}
            onChange={(e) => onDescriptionChange(e.target.value)}
            placeholder="Describe your stream"
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="stream-visibility">Visibility</Label>
          <Select defaultValue="public">
            <SelectTrigger id="stream-visibility">
              <SelectValue placeholder="Select visibility" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="public">
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-2" />
                  Public
                </div>
              </SelectItem>
              <SelectItem value="unlisted">
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-2" />
                  Unlisted
                </div>
              </SelectItem>
              <SelectItem value="private">
                <div className="flex items-center">
                  <Lock className="h-4 w-4 mr-2" />
                  Private
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="stream-quality">Stream Quality</Label>
          <Select defaultValue="1080p">
            <SelectTrigger id="stream-quality">
              <SelectValue placeholder="Select quality" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="720p">720p (HD)</SelectItem>
              <SelectItem value="1080p">1080p (Full HD)</SelectItem>
              <SelectItem value="1440p">1440p (QHD)</SelectItem>
              <SelectItem value="2160p">2160p (4K)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="ai-optimization" className="cursor-pointer">
            AI Bandwidth Optimization
          </Label>
          <Switch id="ai-optimization" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="auto-record" className="cursor-pointer">
            Auto-record Stream
          </Label>
          <Switch id="auto-record" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="ai-moderation" className="cursor-pointer">
            AI Content Moderation
          </Label>
          <Switch id="ai-moderation" defaultChecked />
        </div>
      </div>

      <Button className="w-full bg-gradient-to-r from-orange-600 to-yellow-500 hover:opacity-90 text-white">
        <Save className="mr-2 h-4 w-4" />
        Save Settings
      </Button>
    </div>
  )
}
