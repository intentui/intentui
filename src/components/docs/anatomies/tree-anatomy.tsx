import { Tree, TreeContent, TreeItem } from "@/components/ui/tree"

export default function TreeAnatomy() {
  return (
    <Tree aria-label="Tree anatomy example">
      <TreeItem id="a" textValue="Departments">
        <TreeContent />
        <TreeItem id="b" textValue="Sales">
          <TreeContent>Sales</TreeContent>
          <TreeItem id="c" textValue="Reports">
            <TreeContent>Reports</TreeContent>
            <TreeItem id="d1" textValue="Q1.pdf">
              <TreeContent>Q1.pdf</TreeContent>
            </TreeItem>
            <TreeItem id="d2" textValue="Q2.pdf">
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
    </Tree>
  )
}
