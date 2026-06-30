import { Tree, TreeContent, TreeItem } from '@/components/ui/tree'

export default function TreeDemo() {
  return (
    <Tree aria-label="Company workspace">
      <TreeItem id="departments" textValue="Departments">
        <TreeContent>Departments</TreeContent>
        <TreeItem id="sales" textValue="Sales">
          <TreeContent>Sales</TreeContent>
          <TreeItem id="reports" textValue="Reports">
            <TreeContent>Reports</TreeContent>
            <TreeItem id="q1" textValue="Q1.pdf">
              <TreeContent>Q1.pdf</TreeContent>
            </TreeItem>
            <TreeItem id="q2" textValue="Q2.pdf">
              <TreeContent>Q2.pdf</TreeContent>
            </TreeItem>
            <TreeItem id="q3" textValue="Q3.pdf">
              <TreeContent>Q3.pdf</TreeContent>
            </TreeItem>
          </TreeItem>
          <TreeItem id="contacts" textValue="Client Contacts">
            <TreeContent>Client Contacts</TreeContent>
            <TreeItem id="europe" textValue="Europe.xlsx">
              <TreeContent>Europe.xlsx</TreeContent>
            </TreeItem>
            <TreeItem id="asia" textValue="Asia.xlsx">
              <TreeContent>Asia.xlsx</TreeContent>
            </TreeItem>
          </TreeItem>
        </TreeItem>
        <TreeItem id="hr" textValue="HR">
          <TreeContent>HR</TreeContent>
          <TreeItem id="hr-docs" textValue="Documents">
            <TreeContent>Documents</TreeContent>
            <TreeItem id="leave" textValue="Leave Policy.pdf">
              <TreeContent>Leave policy.pdf</TreeContent>
            </TreeItem>
            <TreeItem id="benefits" textValue="Benefits.pdf">
              <TreeContent>Benefits.pdf</TreeContent>
            </TreeItem>
            <TreeItem id="handbook" textValue="Employee Handbook.pdf">
              <TreeContent>Employee handbook.pdf</TreeContent>
            </TreeItem>
            <TreeItem id="review" textValue="Performance Review.xlsx">
              <TreeContent>Performance review.xlsx</TreeContent>
            </TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeItem>

      <TreeItem id="projects" textValue="Projects">
        <TreeContent>Projects</TreeContent>
        <TreeItem id="revamp" textValue="Website revamp">
          <TreeContent>Website revamp</TreeContent>
          <TreeItem id="wireframes" textValue="Wireframes">
            <TreeContent>Wireframes</TreeContent>
            <TreeItem id="home" textValue="Home.fig">
              <TreeContent>Home.fig</TreeContent>
            </TreeItem>
            <TreeItem id="pricing" textValue="Pricing.fig">
              <TreeContent>Pricing.fig</TreeContent>
            </TreeItem>
          </TreeItem>
        </TreeItem>
        <TreeItem id="mobileapp" textValue="Mobile app">
          <TreeContent>Mobile app</TreeContent>
        </TreeItem>
      </TreeItem>

      <TreeItem id="clients" textValue="Clients">
        <TreeContent>Clients</TreeContent>
        <TreeItem id="acme" textValue="Acme Corp">
          <TreeContent>Acme corp</TreeContent>
          <TreeItem id="contracts" textValue="Contracts">
            <TreeContent>Contracts</TreeContent>
            <TreeItem id="2024" textValue="2024.pdf">
              <TreeContent>2024.pdf</TreeContent>
            </TreeItem>
            <TreeItem id="2025" textValue="2025.pdf">
              <TreeContent>2025.pdf</TreeContent>
            </TreeItem>
          </TreeItem>
        </TreeItem>
        <TreeItem id="globex" textValue="Globex Ltd">
          <TreeContent>Globex Ltd</TreeContent>
          <TreeItem id="mou" textValue="MOU">
            <TreeContent>MOU</TreeContent>
            <TreeItem id="signed" textValue="Signed.pdf">
              <TreeContent>Signed.pdf</TreeContent>
            </TreeItem>
          </TreeItem>
        </TreeItem>
        <TreeItem id="initech" textValue="Initech">
          <TreeContent>Initech</TreeContent>
          <TreeItem id="invoices" textValue="Invoices">
            <TreeContent>Invoices</TreeContent>
            <TreeItem id="inv1" textValue="INV-001.pdf">
              <TreeContent>INV-001.pdf</TreeContent>
            </TreeItem>
            <TreeItem id="inv2" textValue="INV-002.pdf">
              <TreeContent>INV-002.pdf</TreeContent>
            </TreeItem>
            <TreeItem id="inv3" textValue="INV-003.pdf">
              <TreeContent>INV-003.pdf</TreeContent>
            </TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeItem>

      <TreeItem id="legal" textValue="Legal">
        <TreeContent>Legal</TreeContent>
        <TreeItem id="nda" textValue="NDAs">
          <TreeContent>NDAs</TreeContent>
        </TreeItem>
        <TreeItem id="terms" textValue="Terms">
          <TreeContent>Terms</TreeContent>
          <TreeItem id="current" textValue="2025.pdf">
            <TreeContent>2025.pdf</TreeContent>
          </TreeItem>
          <TreeItem id="previous" textValue="2024.pdf">
            <TreeContent>2024.pdf</TreeContent>
          </TreeItem>
        </TreeItem>
      </TreeItem>

      <TreeItem id="resources" textValue="Resources">
        <TreeContent>Resources</TreeContent>
        <TreeItem id="docs" textValue="Documentation">
          <TreeContent>Documentation</TreeContent>
          <TreeItem id="api" textValue="API.md">
            <TreeContent>API.md</TreeContent>
          </TreeItem>
          <TreeItem id="sdk" textValue="SDK.md">
            <TreeContent>SDK.md</TreeContent>
          </TreeItem>
          <TreeItem id="auth" textValue="Auth.md">
            <TreeContent>Auth.md</TreeContent>
          </TreeItem>
        </TreeItem>
        <TreeItem id="videos" textValue="Video Tutorials">
          <TreeContent>Video tutorials</TreeContent>
          <TreeItem id="intro" textValue="Intro.mp4">
            <TreeContent>Intro.mp4</TreeContent>
          </TreeItem>
          <TreeItem id="setup" textValue="Setup.mp4">
            <TreeContent>Setup.mp4</TreeContent>
          </TreeItem>
        </TreeItem>
      </TreeItem>
    </Tree>
  )
}
