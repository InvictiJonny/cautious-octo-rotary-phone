import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', vulnerabilities: 65 },
  { name: 'Feb', vulnerabilities: 59 },
  { name: 'Mar', vulnerabilities: 80 },
  { name: 'Apr', vulnerabilities: 81 },
  { name: 'May', vulnerabilities: 56 },
  { name: 'Jun', vulnerabilities: 55 },
  { name: 'Jul', vulnerabilities: 40 },
]

export function TrendAnalysis() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Vulnerability Trend Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="vulnerabilities" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

