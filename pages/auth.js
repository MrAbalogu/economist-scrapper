import { useState } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'

export default function Auth() {
  const [page, setPage] = useState('signin')
  let authPage

  if (page === 'signin') {
    authPage = <Login goToSignUp={() => setPage('signup')} />
  } else {
    authPage = <Signup goToSignIn={() => setPage('signin')} />
  }

  return (
    <div>
      {authPage}
    </div>
  )
}
