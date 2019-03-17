import React, { Component } from 'react';
import Note from './Note';
import { Grid, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing.unit * 2,
    },
  });
class NoteList extends Component{
    constructor(props){
        super(props);
        this.handleTodoFromList = this.handleTodoFromList.bind(this);
    }
    handleTodoFromList(key, id){
        this.props.removeTodoFromList(key, id);
    }
    render(){
        const { classes } = this.props;
        return (
            <div>
                <Grid container className={classes.root} spacing={32}>
                    <Grid item xs={12}>
                        <Grid container className={classes.control} justify="center" spacing={32}>
                        {/* {[0, 1, 2].map(value => (
                        <Grid key={value} item>
                        <Paper className={classes.paper} />

                        
                    </Grid>
                    ))} */}
                    {this.props.tasks.map(task => <Note key={task.id} task={task} 
                        handleTodoFromList={this.handleTodoFromList} id={this.props.id}></Note>)}
                        
                </Grid>
                </Grid>
                </Grid>
                </div>
        );
    }
}
NoteList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(NoteList);