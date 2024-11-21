import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { mockVulnerabilityData } from "@/utils/mockData"

export function SummaryCard({ setSelectedData }: { setSelectedData: (data: any) => void }) {
  const totalVulnerabilities = mockVulnerabilityData.length
  const criticalVulnerabilities = mockVulnerabilityData.filter(v => v.severity === 'Critical').length
  const highVulnerabilities = mockVulnerabilityData.filter(v => v.severity === 'High').length

  const handleClick = (severity: string) => {
    const filteredData = mockVulnerabilityData.filter(v => v.severity === severity)
    setSelectedData(filteredData)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Vulnerability Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-2" onClick={() => setSelectedData(mockVulnerabilityData)}>
          Total: {totalVulnerabilities}
        </div>
        <div className="text-red-600 font-bold mb-2" onClick={() => handleClick('Critical')}>
          Critical: {criticalVulnerabilities}
        </div>
        <div className="text-orange-600 font-bold" onClick={() => handleClick('High')}>
          High: {highVulnerabilities}
        </div>
      </CardContent>
    </Card>
  )
}

