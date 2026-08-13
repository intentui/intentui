import { Preview, PreviewContent } from '@/components/ui/preview'
import { Button } from '@/components/ui/button'
import { Link } from '@/components/ui/link'
import { Text } from '@/components/ui/text'

export default function Basic() {
  return (
    <div>
      Deployment is currently blocked by{' '}
      <Preview>
        <Link href="#" className="text-primary-subtle-fg">
          #1842
        </Link>
        <PreviewContent>
          <div className="space-y-1">
            <div className="font-medium">Authentication redirect loop after session expiration</div>
            <Text>
              Users returning to protected routes are redirected repeatedly between the login page
              and the application.
            </Text>
          </div>
          <div className="flex gap-2 mt-4">
            <Button size="sm">View issue</Button>
            <Button size="sm" intent="secondary">
              Assign to me
            </Button>
          </div>
        </PreviewContent>
      </Preview>{' '}
      and{' '}
      <Preview>
        <Link href="#" className="text-primary-subtle-fg">
          #1917
        </Link>
        <PreviewContent>
          <div className="space-y-1">
            <div className="font-medium">
              Duplicate webhook deliveries during deployment retries
            </div>
            <Text>
              Retried deployments can enqueue the same webhook more than once when the initial
              request times out.
            </Text>
          </div>
          <div className="flex gap-2 mt-4">
            <Button size="sm">Review pull request</Button>
            <Button size="sm" intent="secondary">
              View checks
            </Button>
          </div>
        </PreviewContent>
      </Preview>
      .
    </div>
  )
}
