import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { mockVulnerabilityData } from "@/utils/mockData"

export function TableQuerySection() {
  const [query, setQuery] = useState('')
  const [filteredData, setFilteredData] = useState(mockVulnerabilityData)

  const handleSearch = () => {
    const lowercaseQuery = query.toLowerCase()
    const filtered = mockVulnerabilityData.filter(item =>
      item.name.toLowerCase().includes(lowercaseQuery) ||
      item.severity.toLowerCase().includes(lowercaseQuery) ||
      item.description.toLowerCase().includes(lowercaseQuery)
    )
    setFilteredData(filtered)
  }

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Table Query Section</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 mb-4">
          <Input
            type="text"
            placeholder="Search vulnerabilities..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Severity</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.severity}</TableCell>
                <TableCell>{item.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

