'use client'

import {
  DocumentIcon,
  DocumentTextIcon,
  FolderIcon,
  FolderOpenIcon,
  PlayCircleIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline'
import { Tree, TreeContent, TreeItem } from '@/components/ui/tree'

interface FileNode {
  id: string
  name: string
  children?: FileNode[]
}

const fileStructure: FileNode[] = [
  {
    id: 'departments',
    name: 'departments',
    children: [
      {
        id: 'sales',
        name: 'sales',
        children: [
          {
            id: 'reports',
            name: 'reports',
            children: [
              { id: 'q1', name: 'Q1.pdf' },
              { id: 'q2', name: 'Q2.pdf' },
              { id: 'q3', name: 'Q3.pdf' },
            ],
          },
          {
            id: 'clients',
            name: 'clients',
            children: [
              { id: 'europe', name: 'europe.xlsx' },
              { id: 'asia', name: 'asia.xlsx' },
            ],
          },
        ],
      },
      {
        id: 'hr',
        name: 'hr',
        children: [
          {
            id: 'docs',
            name: 'docs',
            children: [
              { id: 'policy', name: 'leave-policy.pdf' },
              { id: 'handbook', name: 'handbook.pdf' },
              { id: 'benefits', name: 'benefits.pdf' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'projects',
    name: 'projects',
    children: [
      {
        id: 'revamp',
        name: 'website-revamp',
        children: [
          {
            id: 'designs',
            name: 'designs',
            children: [
              { id: 'home', name: 'home.fig' },
              { id: 'about', name: 'about.fig' },
              { id: 'pricing', name: 'pricing.fig' },
            ],
          },
        ],
      },
      {
        id: 'mobile',
        name: 'mobile-app',
        children: [
          {
            id: 'ios',
            name: 'ios',
            children: [
              { id: 'v1', name: 'v1.0.ipa' },
              { id: 'v2', name: 'v2.0.ipa' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'clients',
    name: 'clients',
    children: [
      {
        id: 'acme',
        name: 'acme-corp',
        children: [
          {
            id: 'contracts',
            name: 'contracts',
            children: [
              { id: '2024', name: '2024.pdf' },
              { id: '2025', name: '2025.pdf' },
            ],
          },
        ],
      },
      {
        id: 'initech',
        name: 'initech',
        children: [
          {
            id: 'invoices',
            name: 'invoices',
            children: [
              { id: 'inv1', name: 'inv-001.pdf' },
              { id: 'inv2', name: 'inv-002.pdf' },
              { id: 'inv3', name: 'inv-003.pdf' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'legal',
    name: 'legal',
    children: [
      {
        id: 'nda',
        name: 'nda',
        children: [
          { id: 'partner-a', name: 'partner-a.pdf' },
          { id: 'partner-b', name: 'partner-b.pdf' },
        ],
      },
      {
        id: 'terms',
        name: 'terms',
        children: [
          { id: '2024', name: '2024.pdf' },
          { id: '2025', name: '2025.pdf' },
        ],
      },
    ],
  },
  {
    id: 'resources',
    name: 'resources',
    children: [
      {
        id: 'docs',
        name: 'docs',
        children: [
          { id: 'api', name: 'api.md' },
          { id: 'auth', name: 'auth.md' },
          { id: 'sdk', name: 'sdk.md' },
        ],
      },
      {
        id: 'videos',
        name: 'videos',
        children: [
          { id: 'intro', name: 'intro.mp4' },
          { id: 'setup', name: 'setup.mp4' },
        ],
      },
    ],
  },
]

function renderTree(nodes: FileNode[], path: string[] = []) {
  return nodes.map((node) => {
    const currentPath = [...path, node.id].join('/')
    return (
      <TreeItem key={currentPath} id={currentPath} textValue={node.name}>
        <TreeContent>
          {({ isExpanded, hasChildItems }) => (
            <>
              {hasChildItems ? (
                isExpanded ? (
                  <FolderOpenIcon />
                ) : (
                  <FolderIcon />
                )
              ) : node.name.endsWith('.fig') ? (
                <Squares2X2Icon />
              ) : node.name.endsWith('.mp4') ? (
                <PlayCircleIcon />
              ) : node.name.endsWith('.pdf') ? (
                <DocumentIcon />
              ) : (
                <DocumentTextIcon />
              )}
              {node.name}
            </>
          )}
        </TreeContent>
        {node.children && renderTree(node.children, [...path, node.id])}
      </TreeItem>
    )
  })
}

export default function TreeFolderDemo() {
  return <Tree aria-label="File system">{renderTree(fileStructure)}</Tree>
}
