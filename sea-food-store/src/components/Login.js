import React from 'react'
import Prototypes from 'prop-types'

const Login = (props)=>{
    return(
        <nav className="login">
            <h2>inventory login</h2>
            <p>Sign in to access your store's inventory</p>
            <button className="github" onClick={()=> props.authenticate('Github')}>
                Login with Github
            </button>
        </nav>
    )
}

Login.prototype={
    authenticate : Prototypes.func.isRequired
}

export default Login;
