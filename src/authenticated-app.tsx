import * as React from 'react'
import { useUser } from 'reactfire'

const AuthenticatedApp: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user: any = useUser()

  console.log(user)

  return <div>authenticated</div>
}

export { AuthenticatedApp }
