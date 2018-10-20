import React, { Component } from 'react'

export default class SignUp extends Component {
    constructor(props){
        super(props);
            this.state = {
                email: "",
                
            }
   this.updateEmail = this.updateEmail.bind(this);
   this.submitEmail = this.submitEmail.bind(this);
              
    }
    updateEmail(event){
       
        this.setState({email : event.target.value});
    }

    submitEmail(event){

        alert('Hey ! your e-mail : ' + this.state.email + ' was submitted');
         event.preventDefault();

    }
    

  render() {
    return (
      <form onSubmit={this.submitEmail}>
         <h1>{this.state.email || "Enter your mail"}</h1>
         <  input type="email" name="email" placeholder="e-mail here" autoComplete="off" value={this.state.email} onChange= {this.updateEmail}/>
         <input type="submit" value="Submit" />
      </form>
    )
  }
}
