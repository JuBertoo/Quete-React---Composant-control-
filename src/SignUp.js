import React, { Component } from 'react'

export default class SignUp extends Component {
    constructor(props){
        super(props);
            this.state = {
                email: "mon@email.com",
                password: "monPassw0rd",
                confirm: "monPassw0rd" ,
                name: "James",
                lastName: "Bond"
                
            }
   this.updateEmail = this.updateEmail.bind(this);
   this.handdleSubmit = this.handdleSubmit.bind(this);
              
    }
    updateEmail(event){
       
        this.setState({[event.target.name]: event.target.value});
    }

    handdleSubmit(event){
        event.preventDefault();
        console.log(this.state)
        if(this.state.password !== this.state.confirm){
            alert("confirm password is different to your password");
        }else{
            alert("Information submit, this message will self-destruct ");
        }
        
         

    }
    

  render() {
    return (
      <form onSubmit={this.handdleSubmit}>
         <h1>{JSON.stringify(this.state,1,1)}</h1>
         <  input type="email" name="email" placeholder="e-mail here" autoComplete="off" value={this.state.email} onChange= {this.updateEmail}/>
         <  input type="password" name="password" placeholder="password" autoComplete="off" value={this.state.password} onChange= {this.updateEmail}/>
         <  input type="password" name="confirm" placeholder="confirm password" autoComplete="off" value={this.state.confirm} onChange= {this.updateEmail}/>
         <  input type="text" name="name" placeholder="Name" autoComplete="off" value={this.state.name} onChange= {this.updateEmail}/>
         <  input type="text" name="lastName" placeholder="Last Name" autoComplete="off" value={this.state.lastName} onChange= {this.updateEmail}/>
         <input type="submit" value="Submit" />
      </form>
    )
  }
}
