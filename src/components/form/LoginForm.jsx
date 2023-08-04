import React from "react";
import { Button, Input } from "../../utils";

export default function LoginForm() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const body = {
            email,
            password,
        }
        console.log(body)
    }
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

            <div className="flex flex-col gap-4 mt-4">
                <Button
                    type="submit"
                    text="Login"
                />
                <button className="text-sm font-semibold leading-6 text-gray-900">
                    Don't have an account? <span className="text-indigo-600 hover:underline">Sign up</span>
                    <span aria-hidden="true">→</span></button>

            </div>
        </form>
    )
}
