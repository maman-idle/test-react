import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:''
        }

        //example of binding function with this
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //use arrow function so u dont need to bind 
    handleUsernameChange = (e) =>{
        this.setState({username:e.target.value});
    }

    handlePasswordChange = (e) => {
        this.setState({password:e.target.value})
    }

    //need to bind because normal function
    handleSubmit(e){
        var gotName = 'false'

        for( var i = 0; i<this.props.users.length; i++){
            if(this.props.users[i].username === this.state.username && this.props.users[i].password === this.state.password){
                gotName = 'true';
                break;
            }
            else{
                gotName = 'false';
            }
        }

        if(gotName === 'true'){
            alert('Hello '+ this.state.username);
        }else{
            alert('Who are you?');
        }

        //CANT USE BREAK INSIDE ARRAY MAPPING
        // this.props.users.map((user) => {
        //    if(this.state.username === user.username && this.state.password === user.password){
        //        gotName = 'true';
        //        return;
        //    }else{
        //        gotName = 'false';
        //    } 
        // })

    }

    render() {
        console.log(this.props.users)
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <form onSubmit={this.handleSubmit}>
                        <div className="col-md mt-3">
                            <input className="form-control" type="text" placeholder="Username" value={this.state.username} onChange={this.handleUsernameChange} required></input>
                        </div>
                        <div className="col-md mt-3">                            
                            <input className="form-control" type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} required></input>
                        </div>
                        <div className="col-sm mt-3 mb-3">
                            <input className="btn btn-sm btn-outline-warning" value="OK" type="submit"></input>
                        </div>
                    </form>
                </div>
            </div>
            
        )
    }
}

export default Form
