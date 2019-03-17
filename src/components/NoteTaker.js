import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './NoteTaker.css';
import { classNames } from 'classnames';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
      },
});

class NoteTaker extends Component{
    constructor(props){
        super(props);
        this.state = {
            description : "",
            title : "",
            opacity : true
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnChangeTitle = this.handleOnChangeTitle.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnSubmit(e){
        e.preventDefault();
        console.log(this.state.description, this.state.title);
        
        this.props.handleForTodoApp(this.state.description, this.state.title, this.props.id);
        this.state.description = "";
        this.state.title = "";
    }

    handleOnChange(e){
        console.log("e = ",e.target.value);
        this.setState ({
            description : e.target.value
        });
    }

    handleOnChangeTitle(e){
        console.log("e = ",e.target.value);
        this.setState ({
            title : e.target.value
        });
    }

    handleOnClick(e){
        console.log('hello');
        console.log(this.state.opacity);
        if(this.state.opacity=true){
        this.setState({
            opacity:!this.state.opacity
        })
    }
    }

    render(){
        let btn_id=this.state.opacity?"classop1":"classop2";
        const { classes } = this.props;
        return(<div className = "NoteTaker">
            {/* <input type = "text" placeholder = "Take a note...." className="TextBox"
            onChange = {this.handleOnChange}
            value = {this.state.value}/> */}
            <form className={classes.container} noValidate autoComplete="off">
            <TextField className={btn_id}
                id={btn_id}
                label="Title"
                // className={classes.textField} {btn_id}
                type="title"
                name="title"
                // autoComplete="title"
                // margin="normal"
                variant="outlined"
                // className = "TextBox"
                onChange = {this.handleOnChangeTitle}
                 value = {this.state.title}
            /><br/>
            <TextField className="classop2"
                // id="outlined-title-input"
                label="Take your note..."
                // className={classes.textField}
                type="note"
                name="note"
                // autoComplete="no"
                // margin="normal"
                variant="outlined"
                // className = "TextBox"
                onChange = {this.handleOnChange}
                value = {this.state.description}
                onClick={this.handleOnClick} 
            /><br/>
            <Button variant="contained" className="addbutton"
             onClick = {this.handleOnSubmit}>Add</Button>
             </form>
        </div>);
    }
}
NoteTaker.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(NoteTaker);