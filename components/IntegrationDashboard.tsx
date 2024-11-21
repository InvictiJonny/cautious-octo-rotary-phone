import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react'

const integrations = [
  { name: "GitHub", status: "connected", lastSync: "2 minutes ago" },
  { name: "Jira", status: "connected", lastSync: "5 minutes ago" },
  { name: "Slack", status: "disconnected", lastSync: "N/A" },
  { name: "Jenkins", status: "error", lastSync: "1 hour ago" },
  { name: "Bitbucket", status: "connected", lastSync: "10 minutes ago" },
]

export function IntegrationDashboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Integration Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {integrations.map((integration) => (
            <div key={integration.name} className="flex items-center justify-between p-2 border rounded">
              <div className="flex items-center space-x-2">
                {integration.status === "connected" && <CheckCircle className="text-green-500" />}
                {integration.status === "disconnected" && <XCircle className="text-red-500" />}
                {integration.status === "error" && <AlertCircle className="text-yellow-500" />}
                <span>{integration.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge
                  variant={
                    integration.status === "connected"
                      ? "default"
                      : integration.status === "disconnected"
                      ? "destructive"
                      : "warning"
                  }
                >
                  {integration.status}
                </Badge>
                <span className="text-sm text-gray-500">{integration.lastSync}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

