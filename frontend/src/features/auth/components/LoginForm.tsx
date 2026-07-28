import Button from "../../../components/ui/Button"
import Input from "../../../components/ui/Input"

function LoginForm(){
    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center">
            <form>
                <h5 className="text-xl font-semibold text-heading mb-6">TASKFLOW</h5>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Your email</label>
                    <Input id="email" name="email" placeholder="example@email.com"></Input>
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-heading">Your password</label>
                    <Input id="password" name="password" type="password" placeholder="*******"></Input>
                </div>
                <div className="flex items-start my-6">
                    <div className="flex items-center">
                        <input id="checkbox-remember" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"/>
                        <label className="ms-2 text-sm font-medium text-heading">Remember me</label>
                    </div>
                    <a href="#" className="ms-auto text-sm font-medium text-fg-brand hover:underline">Lost Password?</a>
                </div>
                <Button type="submit" color="primary">Iniciar sesion</Button>
            </form>
        </div>
    )
}
export default LoginForm