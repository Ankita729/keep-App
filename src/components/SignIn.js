import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './SignIn.css';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
      },
      
});

class SignIn extends Component{
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
        
        this.props.handleForSignIn(this.state.email, this.state.password);
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
            <input type="text" className="textarea" placeholder='Id' onChange={this.handleOnChangeEmail} required></input><br/>
            <input type="password" className="textarea" placeholder='password' onChange={this.handleOnChangePassword} required></input><br/>
            <button className="button">Login</button><br/>
          </form>
          or    
        </div>);
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(SignIn);