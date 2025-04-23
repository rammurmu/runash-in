import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Video, Users, MessageSquare, Settings } from "lucide-react"

export function QuickActions() {
  const actions = [
    {
      title: "New Stream",
      description: "Start a new live stream",
      icon: <Video className="h-4 w-4" />,
      href: "/dashboard/streams/new",
    },
    {
      title: "Invite Team",
      description: "Add team members",
      icon: <Users className="h-4 w-4" />,
      href: "/dashboard/team/invite",
    },
    {
      title: "Chat Settings",
      description: "Configure chat rules",
      icon: <MessageSquare className="h-4 w-4" />,
      href: "/dashboard/chat/settings",
    },
    {
      title: "Stream Settings",
      description: "Configure stream settings",
      icon: <Settings className="h-4 w-4" />,
      href: "/dashboard/streams/settings",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {actions.map((action) => (
            <Button key={action.title} variant="outline" className="h-auto justify-start gap-4 p-4 text-left" asChild>
              <a href={action.href}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                  {action.icon}
                </div>
                <div>
                  <div className="font-medium">{action.title}</div>
                  <div className="text-xs text-muted-foreground">{action.description}</div>
                </div>
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
  }
      
