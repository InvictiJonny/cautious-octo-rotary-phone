import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface WorkflowRule {
  id: number;
  condition: string;
  action: string;
}

export function Workflows() {
  const [rules, setRules] = useState<WorkflowRule[]>([
    { id: 1, condition: "If critical vulnerability found", action: "Send email to riskteam@example.com" }
  ]);
  const [newCondition, setNewCondition] = useState("");
  const [newAction, setNewAction] = useState("");

  const addRule = () => {
    if (newCondition && newAction) {
      setRules([...rules, { id: Date.now(), condition: newCondition, action: newAction }]);
      setNewCondition("");
      setNewAction("");
    }
  };

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Workflows</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex space-x-2">
            <Select onValueChange={setNewCondition}>
              <SelectTrigger className="w-[250px]">
                <SelectValue placeholder="Select condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="If critical vulnerability found">If critical vulnerability found</SelectItem>
                <SelectItem value="If high risk score detected">If high risk score detected</SelectItem>
                <SelectItem value="If compliance score drops below 80%">If compliance score drops below 80%</SelectItem>
              </SelectContent>
            </Select>
            <Input
              placeholder="Action (e.g., Send email to...)"
              value={newAction}
              onChange={(e) => setNewAction(e.target.value)}
            />
            <Button onClick={addRule}>Add Rule</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Condition</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rules.map((rule) => (
                <TableRow key={rule.id}>
                  <TableCell>{rule.condition}</TableCell>
                  <TableCell>{rule.action}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

