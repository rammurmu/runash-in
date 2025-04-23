import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Stream {
  id: string
  title: string
  date: string
  duration: string
  viewers: number
  status: "live" | "ended" | "scheduled"
  thumbnail?: string
}

interface RecentStreamsProps {
  streams: Stream[]
}

export function RecentStreams({ streams }: RecentStreamsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Streams</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-0 divide-y divide-border">
          {streams.map((stream) => (
            <div key={stream.id} className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="h-10 w-10 rounded-md">
                    {stream.thumbnail ? (
                      <AvatarImage src={stream.thumbnail || "/placeholder.svg"} alt={stream.title} />
                    ) : (
                      <AvatarFallback className="rounded-md bg-gradient-to-br from-orange-500 to-amber-300 text-white">
                        {stream.title.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  {stream.status === "live" && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium">{stream.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {stream.date} • {stream.duration}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-xs text-muted-foreground">{stream.viewers.toLocaleString()} viewers</div>
                <Badge
                  variant={
                    stream.status === "live" ? "destructive" : stream.status === "scheduled" ? "outline" : "secondary"
                  }
                  className="text-[10px] px-1 py-0 h-5"
                >
                  {stream.status === "live" ? "LIVE" : stream.status === "scheduled" ? "SCHEDULED" : "ENDED"}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
