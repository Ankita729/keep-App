import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const styles = {
    card: {
    
      marginLeft: 40,
      marginBottom:30,
      
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };
class Note extends Component{
    constructor(props){
        super(props);
        this.handleOnRemove = this.handleOnRemove.bind(this);
    }

    handleOnRemove(e){
        // console.log(e.target.value);
        e.preventDefault();
        this.props.handleTodoFromList(this.props.task.id, this.props.id);
        console.log(this.props.task.id);
    }
    render(){
        const { classes } = this.props;
        console.log("title ", this.props.task.title);
        console.log("description ", this.props.task.description);
        return (
                <Card  className = {classes.card}>
                <CardContent>
                <Typography color="textSecondary" gutterBottom>
                {this.props.task.title}<br/>
                {this.props.task.description}
                </Typography>
                </CardContent>
                
                <CardActions>
                <IconButton aria-label="Add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="Edit">
                <EditIcon />
                </IconButton>
                <IconButton aria-label="Share">
                <ShareIcon />
                </IconButton>
                <IconButton aria-label="Delete"  onClick={this.handleOnRemove} >
                <DeleteIcon  value = {this.props.task.id} />
                </IconButton>
                </CardActions>
                </Card>
        );
    }
}
Note.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  

export default withStyles(styles)(Note);