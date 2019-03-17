import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class LogInSymbol extends Component{
        render(){
            if(this.props.isLoggedIn === "false"){
                return(<div>
                    <Button variant = "outlined" color = 'inherit'>SIGNIN</Button> 
                </div>)
            }
            else if(this.props.isLoggedIn === "true"){
                return(<div>
                    <Button variant = "outlined" color = 'inherit'>{this.props.id}</Button>
                </div>)
            }
        }
}
export default LogInSymbol;
