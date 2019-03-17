import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { IconButton } from '@material-ui/core/IconButton';
import { AccountCircle } from '@material-ui/icons/AccountCircle';
import { Menu } from '@material-ui/core/Menu';
import { MenuItem } from '@material-ui/core/MenuItem';

class HeaderButton extends Component{
    constructor(props){
        super(props)
    state = {
        anchorEl: null,
        mobileMoreAnchorEl: null,
        open: false,
      };
    }
      handleProfileMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
      };
    render(){
        const { anchorEl, mobileMoreAnchorEl } = this.state;
        // const { open } = this.state;
        const isMenuOpen = Boolean(anchorEl);
        const renderMenu = (
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={isMenuOpen}
              onClose={this.handleMenuClose}
            >
              <MenuItem onClick={this.handleMenuClose}>Logout</MenuItem>
              {/* <MenuItem onClick={this.handleMenuClose}>My account</MenuItem> */}
            </Menu>
          );
        if(this.props.isLoggedIn === "false"){
        return(<div>
            <Button variant = "outlined" color = 'inherit' 
                // aria-owns={'material-appbar' }
                >SIGNIN</Button>
        </div>);
        }
        else if(this.props.isLoggedIn === "true"){
            return(<div>
                <IconButton>
            {/* //     aria-owns={isMenuOpen ? 'material-appbar' : undefined}
            //     aria-haspopup="true"
            //     onClick={this.handleProfileMenuOpen}
            //     color="inherit"
            //   >
            //     <AccountCircle /> */}
              </IconButton> 
            </div>);
        }
    }
    // render(){
    //     if(this.props.isLoggedIn === "false"){
    //         return(<div>
    //             <Button variant = "outlined" color = 'inherit'>SIGNIN</Button> 
    //         </div>)
    //     }
    //     else if(this.props.isLoggedIn === "true"){
    //         return(<div>
    //             <Button variant = "outlined" color = 'inherit'>{this.props.id}</Button>
    //         </div>)
    //     }
    // }
}

export default HeaderButton;