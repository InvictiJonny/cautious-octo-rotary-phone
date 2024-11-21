import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Next Week', predicted: 40, actual: 0 },
  { name: 'Next Month', predicted: 120, actual: 0 },
  { name: 'Next Quarter', predicted: 300, actual: 0 },
]

export function PredictiveAnalytics() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Predictive Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
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
            <Bar dataKey="predicted" fill="#8884d8" name="Predicted Vulnerabilities" />
            <Bar dataKey="actual" fill="#82ca9d" name="Actual Vulnerabilities" />
          </BarChart>
        </ResponsiveContainer>
        <p className="mt-4 text-sm text-gray-500">
          This chart shows predicted vulnerabilities for different time frames. As time progresses, 
          actual vulnerability data will be added for comparison.
        </p>
      </CardContent>
    </Card>
  )
}

