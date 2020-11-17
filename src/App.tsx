import React from 'react'
import { AuthCheck } from 'reactfire'

import { LoginForm } from 'components/login-form'
import { AuthenticatedApp } from './authenticated-app'

const App: React.FC = () => {
  return <AuthCheck fallback={<LoginForm />}>{<AuthenticatedApp />}</AuthCheck>
}

export default App
