import { useState } from "react"
import { baseUrl } from "../../global/url"

export default function Register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const clickRegister = async (e) => {
        e.preventDefault()

        try {
            const url = `${baseUrl}/auth/register`
            const response = await fetch(url, {
                method: "POST",
                headers: {},
                body: JSON.stringify({ name, email, password })
            })
            const res = await response.json()
            console.log(res)
        }
        catch (err) {
            console.log(`Error: ${err}`)
        }
    }

    return (
        <>
            <div className="content">
                <div className="register-part">
                    <div className="title">
                        <h2>Register</h2>
                    </div>
                    <form className="inputs" onSubmit={clickRegister}>
                        <div className="name">
                            <label htmlFor="name">Name:</label>
                            <input value={name} type="text" id="name" onChange={(e) => {
                                setName(e.target.value)
                            }} />
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email:</label>
                            <input value={email} type="email" id="email" onChange={(e) => {
                                setEmail(e.target.value)
                            }} />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password:</label>
                            <input value={password} type="password" id="password" onChange={(e) => {
                                setPassword(e.target.value)
                            }} />
                        </div>
                        <div className="button">
                            <button type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}