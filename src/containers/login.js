import React, { Component } from 'react';


class Login extends Component {

    state = {
        email: undefined,
        password: undefined
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const details = {user:{password: this.state.password, email:this.state.email}}

        fetch("http://localhost:3000/login", {method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        
        body: JSON.stringify(details)
        }).then(resp => resp.json())
        .then(json => localStorage.setItem("token",json.token))
        
    }
    
    setEmail = (value) => {
        this.setState({email: value})
    }

    setPassword = (value) => {
        this.setState({password: value})
    }
    // {errors.join()}
    render(){
        return (
            <div>
                <h1>login page</h1>
                <form onSubmit={this.handleSubmit}>
      
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={this.state.email}
        onChange={e => this.setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={this.state.password}
        onChange={e => this.setPassword(e.target.value)}
      />
      <input type="submit" />
    </form>
            </div>
          
        );
      }

}

export default Login;