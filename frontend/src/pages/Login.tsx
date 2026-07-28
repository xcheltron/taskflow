import LoginForm from "../features/auth/components/LoginForm"
import AuthLayout from "../layouts/AuthLayout"

function Login() {
    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center">
            <AuthLayout>
                <LoginForm/>
            </AuthLayout>
        </div>
    )
}

export default Login