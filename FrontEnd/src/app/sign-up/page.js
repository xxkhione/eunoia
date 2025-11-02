'use client'
import React, { useState } from 'react'

export default function SignUp() {
    const [username, setUserame] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [hidden, setHidden] = useState(true)
    const [userNameErrorHidden, setUserNameErrorHidden] = useState(true)
    const [passwordErrorHidden, setPasswordErrorHidden] = useState(true)

    return (
        <div className='site-form'>
            <h1>Welcome!</h1>
            <p>None of this is currently functional, mostly filler until I set up my databases! I will also be flushing this out more later on.</p>
            <p>Self note: This is where the email service will be set up to verify accounts and the authentication service to authenticate new users.</p>
            <div className="input-group">
                <label htmlFor="username">Username: </label>
                <input className="outline outline-1 outline-black rounded-md" type="text" id="username" name="username" value={username} onChange={(e) => setUserame(e.target.value)} required />
                <span hidden={userNameErrorHidden}>
                    <p className='invalid-message'>Username cannot be blank</p>
                </span>
            </div>

            <div className="input-group">
                <label htmlFor="password">Password: </label>
                <input className="outline outline-1 outline-black rounded-md" type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <span hidden={passwordErrorHidden}>
                    <p className='invalid-message'>Password cannot be blank</p>
                </span>
            </div>

            <div>
                <p>Possibly make some security questions here as well.</p>
            </div>

            <div hidden={hidden}>
                <p className='invalid-message'>{errorMessage}</p>
            </div>

            <button type="submit" onClick={() => loginUser()}
                className="focus:outline-none text-white bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
                Create
            </button>
        </div>
    )
}