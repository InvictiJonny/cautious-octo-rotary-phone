export const mockVulnerabilityData = [
  { id: 1, name: 'SQL Injection', severity: 'Critical', description: 'SQL injection vulnerability in login form' },
  { id: 2, name: 'Cross-Site Scripting', severity: 'High', description: 'XSS vulnerability in comment section' },
  { id: 3, name: 'Broken Authentication', severity: 'Critical', description: 'Weak password requirements' },
  { id: 4, name: 'Sensitive Data Exposure', severity: 'High', description: 'Unencrypted data transmission' },
  { id: 5, name: 'XML External Entities', severity: 'Medium', description: 'XXE vulnerability in XML parser' },
]

export const mockRiskData = [
  { name: 'Critical', value: 30 },
  { name: 'High', value: 45 },
  { name: 'Medium', value: 60 },
  { name: 'Low', value: 40 },
]

export interface ApplicationRisk {
  name: string;
  riskScore: number;
}

export interface ComponentRisk {
  name: string;
  riskScore: number;
}

export const mockApplicationRisks: ApplicationRisk[] = [
  { name: 'Web App', riskScore: 85 },
  { name: 'Mobile App', riskScore: 70 },
  { name: 'API Gateway', riskScore: 60 },
  { name: 'Database', riskScore: 75 },
  { name: 'Authentication Service', riskScore: 80 },
]

export const mockComponentRisks: ComponentRisk[] = [
  { name: 'Login Module', riskScore: 90 },
  { name: 'Payment Processing', riskScore: 85 },
  { name: 'User Profile', riskScore: 65 },
  { name: 'Data Storage', riskScore: 75 },
  { name: 'Third-party Integration', riskScore: 70 },
]

