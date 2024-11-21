import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { mockApplicationRisks, mockComponentRisks } from "@/utils/mockData"

export function RiskiestEntitiesChart({ setSelectedData }: { setSelectedData: (data: any) => void }) {
  const handleBarClick = (data: any) => {
    setSelectedData([data])
  }

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Riskiest Entities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Riskiest Applications</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={mockApplicationRisks}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="riskScore" fill="#8884d8" onClick={handleBarClick} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Riskiest Components</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={mockComponentRisks}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="riskScore" fill="#82ca9d" onClick={handleBarClick} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

