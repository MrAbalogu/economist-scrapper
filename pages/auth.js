import Login from '../components/Login'
import Signup from '../components/Signup'

export default function Auth() {
  const [page, setPage] = useState('login')
  let authPage

  if (page === 'login') {
    authPage = <Login />
  } else {
    authPage = <Signup />
  }

  return (
    <div>
      {authPage}
    </div>
  )
}