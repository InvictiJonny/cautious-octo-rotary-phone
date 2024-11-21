import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Alert {
  id: number
  message: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  timestamp: string
}

const severityColors = {
  low: 'bg-green-500',
  medium: 'bg-yellow-500',
  high: 'bg-orange-500',
  critical: 'bg-red-500'
}

export function RealTimeMonitoring() {
  const [alerts, setAlerts] = useState<Alert[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const newAlert: Alert = {
        id: Date.now(),
        message: `New security alert ${Math.floor(Math.random() * 1000)}`,
        severity: ['low', 'medium', 'high', 'critical'][Math.floor(Math.random() * 4)] as Alert['severity'],
        timestamp: new Date().toISOString()
      }
      setAlerts(prevAlerts => [newAlert, ...prevAlerts.slice(0, 9)])
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Real-Time Monitoring</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          {alerts.map(alert => (
            <div key={alert.id} className="mb-4 p-2 border rounded">
              <div className="flex justify-between items-center mb-2">
                <Badge className={severityColors[alert.severity]}>{alert.severity}</Badge>
                <span className="text-sm text-gray-500">{new Date(alert.timestamp).toLocaleTimeString()}</span>
              </div>
              <p>{alert.message}</p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

