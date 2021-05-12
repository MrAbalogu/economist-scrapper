export default function Login()  {
    return (
      <div>
        <h2>Login</h2>
  
        <form submit="handleSubmit">
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