export default function Signup()  {
  return (
    <div>
      <h2>Signup</h2>

      <form submit="handleSubmit">
        <input
          name="name"
          type="text"
          placeholde="John Doe"
          required="true"
        ></input>
        <input
          name="email"
          type="email"
          placeholde="john@doe.com"
          required="true"
        ></input>
        <input
          name="password"
          type="password"
          placeholde="password"
          required="true"
        ></input>
      </form>
    </div>
  )
}