import React, { Component } from 'react';


class SignUp extends Component {

    state = {
        email: undefined,
        password: undefined,
        error: false
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const details = {user:{password: this.state.password, email:this.state.email}}

        fetch("http://localhost:3000/users", {method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        
        body: JSON.stringify(details)
        }).then(resp => resp.json())
        .then((json) => {if (! json.errors){localStorage.setItem("token",json.token)}})
        .then((x)=> {if (localStorage.getItem("token")){
            this.props.handleSignUp()
        }else{
            this.setState({error: true})
        }})
        
    }
    
    setEmail = (value) => {
        this.setState({email: value})
    }

    setPassword = (value) => {
        this.setState({password: value})
    }

    ifErrors = () => {
        if(this.state.error === true){
            return <h1>error, pls try again</h1>
        }
        
    }
    // {errors.join()}
    render(){
        return (
            <div>
                <h1>sign up page</h1>
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
    {this.ifErrors()}
            </div>
          
        );
      }

}

export default SignUp;