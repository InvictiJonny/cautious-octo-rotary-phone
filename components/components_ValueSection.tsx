import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ValueSection({ setSelectedData }: { setSelectedData: (data: any) => void }) {
  const mockValues = [
    { name: 'Total Assets', value: 1000 },
    { name: 'Protected Assets', value: 850 },
    { name: 'Risk Score', value: 75 },
    { name: 'Compliance Score', value: 92 },
  ]

  const handleClick = (value: any) => {
    setSelectedData([value])
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Key Values</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {mockValues.map((item) => (
            <Button
              key={item.name}
              variant="outline"
              className="flex flex-col items-start p-4"
              onClick={() => handleClick(item)}
            >
              <span className="text-sm text-muted-foreground">{item.name}</span>
              <span className="text-2xl font-bold">{item.value}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

