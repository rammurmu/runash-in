"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Wand2, Volume2, ImageIcon, Type, Smile, Lightbulb, RefreshCw } from "lucide-react"

export default function AIEnhancementPanel() {
  const [backgroundRemoval, setBackgroundRemoval] = useState(false)
  const [autoFraming, setAutoFraming] = useState(true)
  const [noiseReduction, setNoiseReduction] = useState(true)
  const [autoCaption, setAutoCaption] = useState(false)
  const [beautifyFilter, setBeautifyFilter] = useState(false)
  const [smartLighting, setSmartLighting] = useState(true)

  const [backgroundType, setBackgroundType] = useState("blur")
  const [captionLanguage, setCaptionLanguage] = useState("english")

  const [noiseReductionLevel, setNoiseReductionLevel] = useState([50])
  const [beautifyLevel, setBeautifyLevel] = useState([30])
  const [lightingLevel, setLightingLevel] = useState([60])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium flex items-center">
          <Wand2 className="mr-2 h-5 w-5 text-orange-500" />
          AI Enhancements
        </h3>
        <Badge
          variant="outline"
          className="bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400 border-orange-200 dark:border-orange-800"
        >
          <Sparkles className="mr-1 h-3 w-3" />
          AI Powered
        </Badge>
      </div>

      <div className="space-y-4">
        {/* Background */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ImageIcon className="h-4 w-4 text-gray-500" />
              <Label htmlFor="background-removal" className="text-sm font-medium">
                Background Removal
              </Label>
            </div>
            <Switch id="background-removal" checked={backgroundRemoval} onCheckedChange={setBackgroundRemoval} />
          </div>

          {backgroundRemoval && (
            <Select value={backgroundType} onValueChange={setBackgroundType}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Background Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="blur">Blur Background</SelectItem>
                <SelectItem value="office">Virtual Office</SelectItem>
                <SelectItem value="studio">Professional Studio</SelectItem>
                <SelectItem value="custom">Custom Image</SelectItem>
              </SelectContent>
            </Select>
          )}
        </div>

        <Separator />

        {/* Auto Framing */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Smile className="h-4 w-4 text-gray-500" />
            <Label htmlFor="auto-framing" className="text-sm font-medium">
              Smart Auto-Framing
            </Label>
          </div>
          <Switch id="auto-framing" checked={autoFraming} onCheckedChange={setAutoFraming} />
        </div>

        <Separator />

        {/* Noise Reduction */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Volume2 className="h-4 w-4 text-gray-500" />
              <Label htmlFor="noise-reduction" className="text-sm font-medium">
                AI Noise Reduction
              </Label>
            </div>
            <Switch id="noise-reduction" checked={noiseReduction} onCheckedChange={setNoiseReduction} />
          </div>

          {noiseReduction && (
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-xs text-gray-500">Level: {noiseReductionLevel}%</span>
                <span className="text-xs text-gray-500">
                  {noiseReductionLevel[0] < 30 ? "Subtle" : noiseReductionLevel[0] < 70 ? "Balanced" : "Aggressive"}
                </span>
              </div>
              <Slider
                value={noiseReductionLevel}
                onValueChange={setNoiseReductionLevel}
                max={100}
                step={1}
                className="[&>span:first-child]:bg-orange-500"
              />
            </div>
          )}
        </div>

        <Separator />

        {/* Auto Caption */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Type className="h-4 w-4 text-gray-500" />
              <Label htmlFor="auto-caption" className="text-sm font-medium">
                Live Captions
              </Label>
            </div>
            <Switch id="auto-caption" checked={autoCaption} onCheckedChange={setAutoCaption} />
          </div>

          {autoCaption && (
            <Select value={captionLanguage} onValueChange={setCaptionLanguage}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Caption Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="spanish">Spanish</SelectItem>
                <SelectItem value="french">French</SelectItem>
                <SelectItem value="german">German</SelectItem>
                <SelectItem value="japanese">Japanese</SelectItem>
                <SelectItem value="chinese">Chinese</SelectItem>
              </SelectContent>
            </Select>
          )}
        </div>

        <Separator />

        {/* Beautify Filter */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Smile className="h-4 w-4 text-gray-500" />
              <Label htmlFor="beautify-filter" className="text-sm font-medium">
                Beautify Filter
              </Label>
            </div>
            <Switch id="beautify-filter" checked={beautifyFilter} onCheckedChange={setBeautifyFilter} />
          </div>

          {beautifyFilter && (
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-xs text-gray-500">Intensity: {beautifyLevel}%</span>
                <span className="text-xs text-gray-500">
                  {beautifyLevel[0] < 30 ? "Natural" : beautifyLevel[0] < 70 ? "Enhanced" : "Maximum"}
                </span>
              </div>
              <Slider
                value={beautifyLevel}
                onValueChange={setBeautifyLevel}
                max={100}
                step={1}
                className="[&>span:first-child]:bg-orange-500"
              />
            </div>
          )}
        </div>

        <Separator />

        {/* Smart Lighting */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Lightbulb className="h-4 w-4 text-gray-500" />
              <Label htmlFor="smart-lighting" className="text-sm font-medium">
                Smart Lighting
              </Label>
            </div>
            <Switch id="smart-lighting" checked={smartLighting} onCheckedChange={setSmartLighting} />
          </div>

          {smartLighting && (
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-xs text-gray-500">Intensity: {lightingLevel}%</span>
                <span className="text-xs text-gray-500">
                  {lightingLevel[0] < 30 ? "Subtle" : lightingLevel[0] < 70 ? "Balanced" : "Bright"}
                </span>
              </div>
              <Slider
                value={lightingLevel}
                onValueChange={setLightingLevel}
                max={100}
                step={1}
                className="[&>span:first-child]:bg-orange-500"
              />
            </div>
          )}
        </div>
      </div>

      <Button
        variant="outline"
        className="w-full flex items-center justify-center border-orange-500 text-orange-600 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-950"
      >
        <RefreshCw className="mr-2 h-4 w-4" />
        Reset All Enhancements
      </Button>
    </div>
  )
}
