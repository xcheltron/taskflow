import { Link } from "react-router-dom"
import Button from "../../../components/ui/Button"
import Input from "../../../components/ui/Input"

function RegisterForm () {
    return (
        <form>
            <h5 className="text-xl font-semibold text-heading mb-6">Register</h5>
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-1 text-md font-mono text-heading">Name</label>
                    <Input id="name" name="name" type="text" placeholder="Juan Perez"></Input>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1 text-md font-mono text-heading">Your email</label>
                    <Input id="email" name="email" placeholder="example@email.com"></Input>
                </div>
                <div>
                    <label htmlFor="password" className="block mb-1 text-md font-mono text-heading">Your password</label>
                    <Input id="password" name="password" type="password" placeholder="*******"></Input>
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