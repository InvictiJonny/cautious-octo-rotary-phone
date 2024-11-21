import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function QuerySection() {
  const [query, setQuery] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send the query to a backend service
    setResponse(`Response for query: "${query}"`)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Query Section</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Enter your security query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button type="submit">Submit Query</Button>
        </form>
        {response && (
          <div className="mt-4">
            <h3 className="font-bold">Response:</h3>
            <p>{response}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

