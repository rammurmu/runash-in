"use client"

import type React from "react"

import { useState } from "react"
import { Search, Loader2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { searchWithAI } from "@/app/actions/ai-actions"
import Link from "next/link"

export function AISearch() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setIsSearching(true)
    try {
      const searchResults = await searchWithAI(query)
      setResults(searchResults)
    } catch (error) {
      console.error("Search error:", error)
    } finally {
      setIsSearching(false)
    }
  }

  const clearSearch = () => {
    setQuery("")
    setResults([])
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full md:w-auto flex items-center gap-2 text-gray-500 dark:text-gray-400">
          <Search className="h-4 w-4" />
          <span className="hidden md:inline">Search with AI...</span>
          <span className="inline md:hidden">Search</span>
          <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 px-1.5 font-mono text-xs text-gray-600 dark:text-gray-400">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center">AI-Powered Search</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                type="search"
                placeholder="Ask anything about RunAsh..."
                className="pl-9 pr-10 bg-white dark:bg-gray-950"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {query && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1 h-7 w-7"
                  onClick={clearSearch}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Clear</span>
                </Button>
              )}
            </div>
            <Button
              type="submit"
              disabled={isSearching || !query.trim()}
              className="bg-gradient-to-r from-orange-600 to-yellow-500 hover:from-orange-700 hover:to-yellow-600 text-white"
            >
              {isSearching ? <Loader2 className="h-4 w-4 animate-spin" /> : "Search"}
            </Button>
          </form>

          {isSearching && (
            <div className="flex justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
            </div>
          )}

          {results.length > 0 && !isSearching && (
            <div className="space-y-4 mt-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Results</h3>
              <div className="space-y-2">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:border-orange-300 dark:hover:border-orange-700 transition-colors"
                  >
                    <Link href={result.url} onClick={() => setOpen(false)}>
                      <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">{result.title}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{result.description}</p>
                      <div className="mt-2 text-xs text-orange-600 dark:text-orange-400">{result.category}</div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {query && results.length === 0 && !isSearching && (
            <div className="text-center py-8">
              <p className="text-gray-500 dark:text-gray-400">No results found. Try a different search term.</p>
            </div>
          )}

          {!query && !isSearching && (
            <div className="text-center py-8">
              <p className="text-gray-500 dark:text-gray-400">
                Try searching for features, tutorials, or questions about RunAsh.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuery("How to set up streaming?")}
                  className="border-orange-200 dark:border-orange-800/30 text-orange-600 dark:text-orange-400"
                >
                  How to set up streaming?
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuery("AI features explained")}
                  className="border-orange-200 dark:border-orange-800/30 text-orange-600 dark:text-orange-400"
                >
                  AI features explained
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuery("Pricing comparison")}
                  className="border-orange-200 dark:border-orange-800/30 text-orange-600 dark:text-orange-400"
                >
                  Pricing comparison
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
