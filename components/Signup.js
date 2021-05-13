import { useState } from 'react'
import axios from 'axios'

export default function Signup({ goToSignIn }) {
  const [submitting, setSubmitting] = useState(false),
        [name, setName] = useState(''),
        [email, setEmail] = useState(''),
        [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    setSubmitting(true)

    const params = {
      name,
      email,
      password
    }

    axios.post('/api/users', params)
      .then(() => {
        setSubmitting(false)
        window.location.reload()
      })
      .catch((err) => {
        setSubmitting(false)
        console.error('Error', err)
      })
  }

  return (
    <div>
      <h2>Signup</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="John Doe"
          onChange={(e) => setName(e.target.value)}
          required={true}
        ></input>
        <input
          name="email"
          type="email"
          placeholder="john@doe.com"
          onChange={(e) => setEmail(e.target.value)}
          required={true}
        ></input>
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required={true}
        ></input>

        <button
          type="submit"
        >Sign Up</button>

        { submitting && <p>Submitting...</p> }
      </form>

      <a 
        onClick={() => goToSignIn()}
      >Go To Login</a>
    </div>
  )
}
