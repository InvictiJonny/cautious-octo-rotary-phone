import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const complianceFrameworks = [
  { name: "GDPR", compliance: 85 },
  { name: "HIPAA", compliance: 92 },
  { name: "PCI DSS", compliance: 78 },
  { name: "ISO 27001", compliance: 88 },
  { name: "SOC 2", compliance: 95 },
]

export function ComplianceDashboard() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Compliance Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {complianceFrameworks.map((framework) => (
            <div key={framework.name} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{framework.name}</span>
                <span className="text-sm text-gray-500">{framework.compliance}%</span>
              </div>
              <Progress value={framework.compliance} className="h-2" />
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-500">
          This dashboard shows the current compliance levels for various security frameworks. 
          Regularly review and update your compliance strategies to maintain high standards.
        </p>
      </CardContent>
    </Card>
  )
}

