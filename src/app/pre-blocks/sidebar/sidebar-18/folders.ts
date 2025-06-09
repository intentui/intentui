type FileTree = {
  id: number
  label: string
  href?: string
  files?: FileTree[]
}

export const folders: FileTree[] = [
  {
    id: 1,
    label: "app",
    files: [
      {
        id: 11,
        label: "Data",
        files: [{ id: 111, label: "AuthenticatedUserData.php", href: "#" }],
      },
      {
        id: 12,
        label: "Http",
        files: [
          {
            id: 121,
            label: "Controllers",
            files: [
              {
                id: 1211,
                label: "Auth",
                files: [
                  { id: 12111, label: "AuthenticatedSessionController.php", href: "#" },
                  { id: 12112, label: "ConfirmablePasswordController.php", href: "#" },
                  { id: 12113, label: "EmailVerificationNotificationController.php", href: "#" },
                  { id: 12114, label: "EmailVerificationPromptController.php", href: "#" },
                  { id: 12115, label: "NewPasswordController.php", href: "#" },
                  { id: 12116, label: "PasswordController.php", href: "#" },
                  { id: 12117, label: "PasswordResetLinkController.php", href: "#" },
                  { id: 12118, label: "RegisteredUserController.php", href: "#" },
                  { id: 12119, label: "VerifyEmailController.php", href: "#" },
                ],
              },
              { id: 1212, label: "Controller.php", href: "#" },
              { id: 1213, label: "ProfileController.php", href: "#" },
            ],
          },
          {
            id: 122,
            label: "Middleware",
            files: [{ id: 1221, label: "HandleInertiaRequests.php", href: "#" }],
          },
          {
            id: 123,
            label: "Requests",
            files: [
              {
                id: 1231,
                label: "Auth",
                files: [{ id: 12311, label: "LoginRequest.php", href: "#" }],
              },
              { id: 1232, label: "ProfileUpdateRequest.php", href: "#" },
            ],
          },
        ],
      },
      {
        id: 13,
        label: "Models",
        files: [{ id: 131, label: "User.php", href: "#" }],
      },
      {
        id: 14,
        label: "Providers",
        files: [{ id: 141, label: "AppServiceProvider.php", href: "#" }],
      },
    ],
  },
  {
    id: 2,
    label: "config",
    files: [
      { id: 21, label: "app.php", href: "#" },
      { id: 22, label: "auth.php", href: "#" },
      { id: 23, label: "cache.php", href: "#" },
      { id: 24, label: "data.php", href: "#" },
      { id: 25, label: "database.php", href: "#" },
      { id: 26, label: "filesystems.php", href: "#" },
      { id: 27, label: "logging.php", href: "#" },
      { id: 28, label: "mail.php", href: "#" },
      { id: 29, label: "queue.php", href: "#" },
      { id: 210, label: "services.php", href: "#" },
      { id: 211, label: "session.php", href: "#" },
    ],
  },
  {
    id: 3,
    label: "routes",
    files: [
      { id: 31, label: "auth.php", href: "#" },
      { id: 32, label: "console.php", href: "#" },
      { id: 33, label: "web.php", href: "#" },
    ],
  },
  {
    id: 4,
    label: "database",
    files: [
      { id: 41, label: "database.sqlite", href: "#" },
      {
        id: 42,
        label: "factories",
        files: [{ id: 421, label: "UserFactory.php", href: "#" }],
      },
      {
        id: 43,
        label: "migrations",
        files: [
          { id: 431, label: "0001_01_01_000000_create_users_table.php", href: "#" },
          { id: 432, label: "0001_01_01_000001_create_cache_table.php", href: "#" },
          { id: 433, label: "0001_01_01_000002_create_jobs_table.php", href: "#" },
        ],
      },
      {
        id: 44,
        label: "seeders",
        files: [{ id: 441, label: "DatabaseSeeder.php", href: "#" }],
      },
    ],
  },
  {
    id: 5,
    label: "public",
    files: [
      { id: 51, label: "favicon.ico", href: "#" },
      { id: 52, label: "index.php", href: "#" },
      { id: 53, label: "robots.txt", href: "#" },
    ],
  },
  {
    id: 6,
    label: "resources",
    files: [
      {
        id: 61,
        label: "css",
        files: [{ id: 611, label: "app.css", href: "#" }],
      },
      {
        id: 62,
        label: "js",
        files: [
          {
            id: 621,
            label: "components",
            files: [
              {
                id: 62999,
                label: "ui",
                files: [
                  { id: 62991, label: "primitive.tsx", href: "#" },
                  { id: 62901, label: "button.tsx", href: "#" },
                  { id: 62911, label: "checkbox.tsx", href: "#" },
                  { id: 62931, label: "field.tsx", href: "#" },
                  { id: 62941, label: "text-field.tsx", href: "#" },
                  { id: 62961, label: "textarea.tsx", href: "#" },
                ],
              },
              { id: 6211, label: "logo.tsx", href: "#" },
              { id: 6212, label: "app-sidebar.tsx", href: "#" },
              { id: 6213, label: "app-navbar.tsx", href: "#" },
              { id: 6214, label: "app-footer.tsx", href: "#" },
            ],
          },
          {
            id: 622,
            label: "layouts",
            files: [
              { id: 6221, label: "app-layout.tsx", href: "#" },
              { id: 6222, label: "guest-layout.tsx", href: "#" },
            ],
          },
          {
            id: 623,
            label: "pages",
            files: [
              {
                id: 6231,
                label: "Auth",
                files: [
                  { id: 62311, label: "confirm-password.tsx", href: "#" },
                  { id: 62312, label: "forgot-password.tsx", href: "#" },
                  { id: 62313, label: "login.tsx", href: "#" },
                  { id: 62314, label: "register.tsx", href: "#" },
                  { id: 62315, label: "reset-password.tsx", href: "#" },
                  { id: 62316, label: "verify-email.tsx", href: "#" },
                ],
              },
              { id: 6232, label: "dashboard.tsx", href: "#" },
              {
                id: 6233,
                label: "profile",
                files: [
                  { id: 62331, label: "edit.tsx", href: "#" },
                  {
                    id: 62332,
                    label: "partials",
                    files: [
                      { id: 623321, label: "delete-user-form.tsx", href: "#" },
                      {
                        id: 623322,
                        label: "update-password-form.tsx",
                        href: "#",
                      },
                      {
                        id: 623323,
                        label: "update-profile-information-form.tsx",
                        href: "#",
                      },
                    ],
                  },
                ],
              },
              { id: 6234, label: "welcome.tsx", href: "#" },
            ],
          },
          { id: 624, label: "app.tsx", href: "#" },
          { id: 625, label: "bootstrap.ts", href: "#" },
          { id: 626, label: "ssr.tsx", href: "#" },
          {
            id: 627,
            label: "types",
            files: [
              { id: 6271, label: "global.d.ts", href: "#" },
              { id: 6272, label: "index.d.ts", href: "#" },
              { id: 6273, label: "vite-env.d.ts", href: "#" },
            ],
          },
        ],
      },
      {
        id: 63,
        label: "views",
        files: [{ id: 631, label: "app.blade.php", href: "#" }],
      },
    ],
  },
]
