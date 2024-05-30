import React,{useState, useContext} from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = () => {
        setUser(username)
    }

    return (
        <div>
            <h2>Login</h2>
            <input
                type='text'
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                placeholder='Username' />
            <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password' />
            <button
                onClick={() => handleSubmit()}
            >Login</button>
        </div>
    )
}

export default Login