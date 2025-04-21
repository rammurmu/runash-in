"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Sparkles, Zap, Shield, Users, Layers, Globe } from "lucide-react"

export default function FeatureExplorer() {
  const [videoQuality, setVideoQuality] = useState(70)
  const [noiseReduction, setNoiseReduction] = useState(50)
  const [autoEnhance, setAutoEnhance] = useState(true)
  const [virtualBackground, setVirtualBackground] = useState(false)
  const [contentFilter, setContentFilter] = useState(true)
  const [multiPlatform, setMultiPlatform] = useState(false)

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-orange-200/50 dark:border-orange-800/30 overflow-hidden shadow-xl">
      <Tabs defaultValue="video" className="w-full">
        <div className="bg-orange-50 dark:bg-orange-950/30 p-4 border-b border-orange-200/50 dark:border-orange-800/30">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2 bg-white/50 dark:bg-gray-900/50">
            <TabsTrigger value="video" className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> Video
            </TabsTrigger>
            <TabsTrigger value="audio" className="flex items-center gap-2">
              <Zap className="h-4 w-4" /> Audio
            </TabsTrigger>
            <TabsTrigger value="moderation" className="flex items-center gap-2">
              <Shield className="h-4 w-4" /> Moderation
            </TabsTrigger>
            <TabsTrigger value="engagement" className="flex items-center gap-2">
              <Users className="h-4 w-4" /> Engagement
            </TabsTrigger>
            <TabsTrigger value="platforms" className="flex items-center gap-2">
              <Layers className="h-4 w-4" /> Platforms
            </TabsTrigger>
            <TabsTrigger value="translation" className="flex items-center gap-2">
              <Globe className="h-4 w-4" /> Translation
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="p-6">
          <TabsContent value="video" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Video Enhancement</h3>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label htmlFor="video-quality" className="text-gray-700 dark:text-gray-300">
                        Enhancement Level: {videoQuality}%
                      </Label>
                    </div>
                    <Slider
                      id="video-quality"
                      min={0}
                      max={100}
                      step={1}
                      value={[videoQuality]}
                      onValueChange={(value) => setVideoQuality(value[0])}
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label htmlFor="noise-reduction" className="text-gray-700 dark:text-gray-300">
                        Noise Reduction: {noiseReduction}%
                      </Label>
                    </div>
                    <Slider
                      id="noise-reduction"
                      min={0}
                      max={100}
                      step={1}
                      value={[noiseReduction]}
                      onValueChange={(value) => setNoiseReduction(value[0])}
                      className="w-full"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="auto-enhance" checked={autoEnhance} onCheckedChange={setAutoEnhance} />
                    <Label htmlFor="auto-enhance" className="text-gray-700 dark:text-gray-300">
                      Auto-enhance based on conditions
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="virtual-bg" checked={virtualBackground} onCheckedChange={setVirtualBackground} />
                    <Label htmlFor="virtual-bg" className="text-gray-700 dark:text-gray-300">
                      Enable virtual background
                    </Label>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-orange-200/50 dark:border-orange-800/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-gray-500 dark:text-gray-400">Video preview would appear here</div>
                    <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Enhancement Level: {videoQuality}% | Noise Reduction: {noiseReduction}%
                    </div>
                    <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {autoEnhance ? "Auto-enhance: ON" : "Auto-enhance: OFF"} |{" "}
                      {virtualBackground ? "Virtual Background: ON" : "Virtual Background: OFF"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="moderation" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Content Moderation</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Switch id="content-filter" checked={contentFilter} onCheckedChange={setContentFilter} />
                    <Label htmlFor="content-filter" className="text-gray-700 dark:text-gray-300">
                      Enable content filtering
                    </Label>
                  </div>
                  <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg">
                    <h4 className="font-medium mb-2 text-gray-900 dark:text-white">Content Filter Settings</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Our AI content filter helps ensure your streams comply with platform guidelines by detecting and
                      alerting you to potentially problematic content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-orange-200/50 dark:border-orange-800/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-gray-500 dark:text-gray-400">Content moderation preview would appear here</div>
                    <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      {contentFilter ? "Content Filter: ON" : "Content Filter: OFF"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="platforms" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Multi-platform Streaming</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Switch id="multi-platform" checked={multiPlatform} onCheckedChange={setMultiPlatform} />
                    <Label htmlFor="multi-platform" className="text-gray-700 dark:text-gray-300">
                      Enable multi-platform streaming
                    </Label>
                  </div>
                  <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg">
                    <h4 className="font-medium mb-2 text-gray-900 dark:text-white">Platform Selection</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Stream to multiple platforms simultaneously with optimized settings for each platform.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-orange-200/50 dark:border-orange-800/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-gray-500 dark:text-gray-400">Platform selection would appear here</div>
                    <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      {multiPlatform ? "Multi-platform: ON" : "Multi-platform: OFF"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="audio" className="mt-0">
            <div className="flex items-center justify-center h-64">
              <div className="text-center text-gray-500 dark:text-gray-400">
                Audio enhancement features would be displayed here
              </div>
            </div>
          </TabsContent>

          <TabsContent value="engagement" className="mt-0">
            <div className="flex items-center justify-center h-64">
              <div className="text-center text-gray-500 dark:text-gray-400">
                Audience engagement features would be displayed here
              </div>
            </div>
          </TabsContent>

          <TabsContent value="translation" className="mt-0">
            <div className="flex items-center justify-center h-64">
              <div className="text-center text-gray-500 dark:text-gray-400">
                Live translation features would be displayed here
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
