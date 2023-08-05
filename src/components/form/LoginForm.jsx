import React from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../features/auth/authApi";
import { Button, Input } from "../../utils";

export default function LoginForm() {
    const [login, { isLoading, isError, isSuccess, error }] = useLoginMutation()
    const navigate = useNavigate()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const body = {
            email,
            password,
        }
        login(body)
    }
    React.useEffect(() => {
        alert('Login Success')
    }, [isSuccess])
    React.useEffect(() => {
        console.log(error)
    }, [isError])
    return (
        <form
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 px-4">
            <Input
                placeholder={'Enter your email'}
                label={'Email'}
                type={'email'}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                placeholder={'Enter your password'}
                label={'Password'}
                type={'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {
                isError && <p className="text-red-600">Authentication Failed</p>
            }

            <div className="flex flex-col gap-4 mt-4">
                <Button
                    type="submit"
                    text="Login"
                    disabled={isLoading}
                />
                <button className="text-sm font-semibold leading-6 text-gray-900"
                    onClick={() => navigate('/registration')}
                >
                    Don't have an account? <span className="text-indigo-600 hover:underline">Sign up</span>
                    <span aria-hidden="true">→</span></button>

            </div>
        </form>
    )
}
