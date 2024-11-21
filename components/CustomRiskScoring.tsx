import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

const riskFactors = [
  { name: "Vulnerability Severity", defaultValue: 50 },
  { name: "Asset Criticality", defaultValue: 50 },
  { name: "Threat Likelihood", defaultValue: 50 },
  { name: "Business Impact", defaultValue: 50 },
]

export function CustomRiskScoring() {
  const [factors, setFactors] = useState(riskFactors.map(factor => ({ ...factor, value: factor.defaultValue })))
  const [riskScore, setRiskScore] = useState(0)

  const handleSliderChange = (index: number, newValue: number[]) => {
    const updatedFactors = [...factors]
    updatedFactors[index].value = newValue[0]
    setFactors(updatedFactors)
  }

  const calculateRiskScore = () => {
    const totalWeight = factors.reduce((sum, factor) => sum + factor.value, 0)
    const weightedScore = factors.reduce((sum, factor) => sum + (factor.value * factor.value / 100), 0)
    const normalizedScore = (weightedScore / totalWeight) * 100
    setRiskScore(Math.round(normalizedScore))
  }

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Custom Risk Scoring</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {factors.map((factor, index) => (
            <div key={factor.name} className="space-y-2">
              <Label>{factor.name}</Label>
              <Slider
                min={0}
                max={100}
                step={1}
                value={[factor.value]}
                onValueChange={(newValue) => handleSliderChange(index, newValue)}
              />
              <div className="text-right text-sm text-gray-500">{factor.value}%</div>
            </div>
          ))}
          <Button onClick={calculateRiskScore} className="w-full">Calculate Risk Score</Button>
          {riskScore > 0 && (
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold">Overall Risk Score</h3>
              <p className="text-3xl font-bold">{riskScore}</p>
              <p className="text-sm text-gray-500">
                {riskScore < 40 ? "Low Risk" : riskScore < 70 ? "Medium Risk" : "High Risk"}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

