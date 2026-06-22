import { useState } from "react"

function Password() {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const passwordFunc = () => {
    setShowPassword((s) => !s)
  }

  return (
    <div>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter the password"
      />
      <button onClick={passwordFunc}>{showPassword ? "Hide" : "Show"}</button>
    </div>
  )
}

export default Password