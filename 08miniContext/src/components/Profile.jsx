import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const { user } = useContext(UserContext)
    console.log(user)
    return user ? <h2>Profile : {user}</h2> : <h2>User not logged In</h2>
}

export default Profile