import { Link, useNavigate  } from "react-router-dom"
import { useState,} from "react"

import Button from "../../../components/ui/Button"
import Input from "../../../components/ui/Input"

import { register } from "../services/authService"

function RegisterForm () {

    const navigate = useNavigate()


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault()

        try {
            const response = await register({
                name,
                email,
                password
            })

            console.log(response)

            navigate('/')

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h5 className="text-xl font-semibold text-heading mb-6">Register</h5>
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-1 text-md font-mono text-heading">Name</label>
                    <Input id="name" name="name" type="text" placeholder="Juan Perez" value={name} onChange={(e) => setName(e.target.value)}></Input>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1 text-md font-mono text-heading">Your email</label>
                    <Input id="email" name="email" placeholder="example@email.com" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
                </div>
                <div>
                    <label htmlFor="password" className="block mb-1 text-md font-mono text-heading">Your password</label>
                    <Input id="password" name="password" type="password" placeholder="*******" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
                </div>
                <div className="pt-6">
                    <Button type="submit" color="ok">Register</Button>
                </div>
                <div className="flex justify-center gap-1 pt-4 text-xs">
                <p>
                    you have an account?
                </p>
                <Link to={"/"} className="hover:underline text-blue-700">
                    Login
                </Link>
            </div>
        </form>
    )
}

export default RegisterForm