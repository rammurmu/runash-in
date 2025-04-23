import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface Activity {
  id: string
  user: {
    name: string
    avatar?: string
  }
  action: string
  target: string
  time: string
  type: "comment" | "follow" | "subscription" | "donation"
}

interface ActivityFeedProps {
  activities: Activity[]
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-0">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-4 p-4 hover:bg-muted/50 transition-colors border-t border-border first:border-t-0"
            >
              <Avatar className="h-8 w-8">
                {activity.user.avatar ? (
                  <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
                ) : (
                  <AvatarFallback className="bg-gradient-to-br from-orange-500 to-amber-300 text-white">
                    {activity.user.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                )}
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm">
                  <span className="font-medium">{activity.user.name}</span>{" "}
                  <span className="text-muted-foreground">{activity.action}</span>{" "}
                  <span className="font-medium">{activity.target}</span>
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
              <div>
                <span
                  className={cn(
                    "flex h-2 w-2 rounded-full",
                    activity.type === "comment" && "bg-blue-500",
                    activity.type === "follow" && "bg-green-500",
                    activity.type === "subscription" && "bg-purple-500",
                    activity.type === "donation" && "bg-amber-500",
                  )}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
  }
                    
