import { BlockSandbox } from "@/components/code/block-sandbox"
import { Header } from "@/components/header"

export const metadata = {
  title: "Blocks",
  description:
    "Blocks offers a comprehensive collection of example guides demonstrating how to effectively use components in their entirety.",
}

export default function Page() {
  return (
    <div>
      <Header>
        Blo
        <span className="text-muted-fg">cks</span>
      </Header>
      <div className="mx-auto max-w-(--breakpoint-2xl) space-y-16 px-4 py-6 sm:px-6">
        <BlockSandbox
          {...{
            isIframe: true,
            title: "Default Sidebar",
            defaultSelected: "app-sidebar.tsx",
            fullscreen: "/pre-blocks/sidebar/sidebar-01",
            preview: "/pre-blocks/sidebar/sidebar-01",
            expandKeys: ["components", "app"],
            initialRegistry: "pre-blocks/sidebar/app-sidebar",
            folders: {
              components: {
                ui: {
                  "badge.tsx": "ui-badge",
                  "link.tsx": "ui-link",
                  "avatar.tsx": "ui-avatar",
                  "menu.tsx": "ui-menu",
                  "separator.tsx": "ui-separator",
                  "sheet.tsx": "ui-sheet",
                  "tooltip.tsx": "ui-tooltip",
                  "primitive.tsx": "ui-primitive",
                  "button.tsx": "ui-button",
                  "sidebar.tsx": "ui-sidebar",
                },
                "app-sidebar-nav.tsx": "pre-blocks/sidebar/app-sidebar-nav",
                "app-sidebar.tsx": "pre-blocks/sidebar/app-sidebar",
              },
              app: {
                "page.tsx": "pre-blocks/sidebar/sidebar-01/page",
                "global.css": "pre-blocks/main.css",
              },
            },
          }}
        />

        <BlockSandbox
          {...{
            isIframe: true,
            title: "Inset Sidebar",
            defaultSelected: "app-sidebar.tsx",
            fullscreen: "/pre-blocks/sidebar/sidebar-03",
            preview: "/pre-blocks/sidebar/sidebar-03",
            expandKeys: ["components", "app"],
            initialRegistry: "pre-blocks/sidebar/app-sidebar",
            folders: {
              components: {
                ui: {
                  "badge.tsx": "ui-badge",
                  "link.tsx": "ui-link",
                  "avatar.tsx": "ui-avatar",
                  "menu.tsx": "ui-menu",
                  "separator.tsx": "ui-separator",
                  "sheet.tsx": "ui-sheet",
                  "tooltip.tsx": "ui-tooltip",
                  "primitive.tsx": "ui-primitive",
                  "button.tsx": "ui-button",
                  "sidebar.tsx": "ui-sidebar",
                },
                "app-sidebar.tsx": "pre-blocks/sidebar/app-sidebar",
                "app-sidebar-nav.tsx": "pre-blocks/sidebar/app-sidebar-nav",
              },
              app: {
                "page.tsx": "pre-blocks/sidebar/sidebar-03/page",
                "layout.tsx": "pre-blocks/sidebar/sidebar-03/layout",
                "global.css": "pre-blocks/main.css",
              },
            },
          }}
        />

        <BlockSandbox
          {...{
            isIframe: true,
            title: "Floating Sidebar",
            defaultSelected: "app-sidebar.tsx",
            fullscreen: "/pre-blocks/sidebar/sidebar-04",
            preview: "/pre-blocks/sidebar/sidebar-04",
            expandKeys: ["components", "app"],
            initialRegistry: "pre-blocks/sidebar/app-sidebar",
            folders: {
              components: {
                ui: {
                  "badge.tsx": "ui-badge",
                  "link.tsx": "ui-link",
                  "avatar.tsx": "ui-avatar",
                  "menu.tsx": "ui-menu",
                  "separator.tsx": "ui-separator",
                  "sheet.tsx": "ui-sheet",
                  "tooltip.tsx": "ui-tooltip",
                  "primitive.tsx": "ui-primitive",
                  "button.tsx": "ui-button",
                  "sidebar.tsx": "ui-sidebar",
                },
                "app-sidebar-nav.tsx": "pre-blocks/sidebar/app-sidebar-nav",
                "app-sidebar.tsx": "pre-blocks/sidebar/app-sidebar",
              },
              app: {
                "page.tsx": "pre-blocks/sidebar/sidebar-04/page",
                "layout.tsx": "pre-blocks/sidebar/sidebar-04/layout",
                "global.css": "pre-blocks/main.css",
              },
            },
          }}
        />

        <BlockSandbox
          {...{
            title: "Default Navbar",
            defaultSelected: "app-navbar.tsx",
            fullscreen: "/pre-blocks/navbar/navbar-01",
            preview: "pre-blocks/navbar/app-navbar",
            expandKeys: ["components", "ui", "app"],
            initialRegistry: "pre-blocks/navbar/app-navbar",
            folders: {
              components: {
                ui: {
                  "primitive.tsx": "ui-primitive",
                  "avatar.tsx": "ui-avatar",
                  "menu.tsx": "ui-menu",
                  "button.tsx": "ui-button",
                  "sheet.tsx": "ui-sheet",
                  "separator.tsx": "ui-separator",
                  "navbar.tsx": "ui-navbar",
                },
                "app-navbar.tsx": "pre-blocks/navbar/app-navbar",
                "theme-switcher.tsx": "pre-blocks/theme-switcher",
              },
              app: {
                "global.css": "pre-blocks/main.css",
                "page.tsx": "pre-blocks/navbar/navbar-01/page",
                "layout.tsx": "pre-blocks/navbar/navbar-01/layout",
              },
            },
          }}
        />

        <BlockSandbox
          {...{
            isIframe: true,
            title: "Inset Navbar",
            defaultSelected: "app-navbar.tsx",
            fullscreen: "/pre-blocks/navbar/navbar-03",
            preview: "pre-blocks/navbar/navbar-03",
            expandKeys: ["components", "ui", "app"],
            initialRegistry: "pre-blocks/navbar/app-navbar",
            folders: {
              components: {
                ui: {
                  "primitive.tsx": "ui-primitive",
                  "avatar.tsx": "ui-avatar",
                  "menu.tsx": "ui-menu",
                  "button.tsx": "ui-button",
                  "sheet.tsx": "ui-sheet",
                  "separator.tsx": "ui-separator",
                  "navbar.tsx": "ui-navbar",
                },
                "theme-switcher.tsx": "pre-blocks/theme-switcher",
                "app-navbar.tsx": "pre-blocks/navbar/app-navbar",
              },
              app: {
                "global.css": "pre-blocks/main.css",
                "page.tsx": "pre-blocks/navbar/navbar-03/page",
                "layout.tsx": "pre-blocks/navbar/navbar-03/layout",
              },
            },
          }}
        />

        <BlockSandbox
          {...{
            title: "Floating Navbar",
            defaultSelected: "app-navbar.tsx",
            fullscreen: "/pre-blocks/navbar/navbar-02",
            preview: "pre-blocks/navbar/app-navbar",
            expandKeys: ["components", "ui", "app"],
            initialRegistry: "pre-blocks/navbar/app-navbar",
            folders: {
              components: {
                ui: {
                  "primitive.tsx": "ui-primitive",
                  "avatar.tsx": "ui-avatar",
                  "menu.tsx": "ui-menu",
                  "button.tsx": "ui-button",
                  "sheet.tsx": "ui-sheet",
                  "separator.tsx": "ui-separator",
                  "navbar.tsx": "ui-navbar",
                },
                "theme-switcher.tsx": "pre-blocks/theme-switcher",
                "app-navbar.tsx": "pre-blocks/navbar/app-navbar",
              },
              app: {
                "global.css": "pre-blocks/main.css",
                "page.tsx": "pre-blocks/navbar/navbar-02/page",
                "layout.tsx": "pre-blocks/navbar/navbar-02/layout",
              },
            },
          }}
        />
      </div>
    </div>
  )
}
