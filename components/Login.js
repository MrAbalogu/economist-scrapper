import { useState } from 'react'
import Router from 'next/router'
import axios from 'axios'

export default function Login({ goToSignUp }) {
  const [submitting, setSubmitting] = useState(false),
        [email, setEmail] = useState(''),
        [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    setSubmitting(true)

    const params = {
      email,
      password
    }

    axios.post('/api/login', params)
      .then(() => {
        setSubmitting(false)
        Router.push('/posts')
      })
      .catch((err) => {
        setSubmitting(false)
        console.error('Error', err)
      })
  }

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="john@doe.com"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          name="password"
          type="password"
          placeholder="password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button
          type="submit"
        >Log in</button>
        { submitting && <p>Logging in...</p> }

      </form>

      <a 
        onClick={() => goToSignUp()}
      >Go To SignUp</a>
    </div>
  )
}
