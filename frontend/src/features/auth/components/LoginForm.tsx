import { Link } from "react-router-dom"
import Button from "../../../components/ui/Button"
import Input from "../../../components/ui/Input"

function LoginForm(){
    return (
        <div>
            <form>
                <h5 className="text-xl font-semibold text-heading mb-6">Sign in</h5>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1 text-md font-mono text-heading">Your email</label>
                    <Input id="email" name="email" placeholder="example@email.com"></Input>
                </div>
                <div>
                    <label htmlFor="password" className="block mb-1 text-md font-mono text-heading">Your password</label>
                    <Input id="password" name="password" type="password" placeholder="*******"></Input>
                </div>
                <div className="flex items-start my-6">
                    <div className="flex items-center">
                        <input id="checkbox-remember" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"/>
                        <label className="ms-2 text-sm font-medium text-heading">Remember me</label>
                    </div>
                    <a href="#" className="ms-auto text-sm font-medium text-fg-brand hover:underline text-blue-700">Lost Password?</a>
                </div>
                <Button type="submit" color="ok">Sign in</Button>
            </form>
            <div className="flex justify-center gap-1 pt-4 text-xs">
                <p>
                    you don't have an account?
                </p>
                <Link to={"/register"} className="hover:underline text-blue-700">
                    Register
                </Link>
            </div>
        </div>
    )
}
export default LoginForm