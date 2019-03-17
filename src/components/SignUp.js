import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './SignIn.css';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
      },
});

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            password : "",
            email : ""
        }
        this.handleOnChangePassword = this.handleOnChangePassword.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this);
    }

    handleOnSubmit(e){
        e.preventDefault();
        console.log(this.state.email, this.state.password);
        
        this.props.handleForSignUp(this.state.email, this.state.password);
        this.state.password = "";
        this.state.email = "";
    }

    handleOnChangePassword(e){
        console.log("e = ",e.target.value);
        this.setState ({
            password : e.target.value
        });
    }

    handleOnChangeEmail(e){
        console.log("e = ",e.target.value);
        this.setState ({
            email : e.target.value
        });
    }

    render(){
        const { classes } = this.props;
        return(<div>
         <form onSubmit = {this.handleOnSubmit} className="form">
            <input type="email"  value={this.state.email} className="textarea" placeholder='Id' onChange={this.handleOnChangeEmail} required></input><br/>
            <input type="password"  value={this.state.password} className="textarea" placeholder='password' onChange={this.handleOnChangePassword} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required></input><br/>
            <button className="button">SignUp</button> 
          </form> 
        </div>);
    }
}

SignUp.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(SignUp);