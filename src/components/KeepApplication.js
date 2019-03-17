import React, { Component } from 'react';
import PrimarySearchAppBar from './PrimarySearchAppBar';
import NoteTaker from './NoteTaker';
import NoteList from './NoteList';
import saveTask from '../routers/PutNotes';
import fetchData from '../routers/GetUsers';
import LoginPlate from './LoginPlate';
import postData from '../routers/PostAPI';
import Decider from './Decider';
class KeepApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            id : '',
            notes : [],
            title : "Keep-Application",
            myData : {},
            isLoggedIn : "false"
        }
        // fetchData('Priyanshi').then((data) => {
        //     this.setState((currState) => ({
        //         notes:currState.notes.concat(data.notes)
        //     }))
        // })
        this.handleForTodoApp = this.handleForTodoApp.bind(this);
        this.removeTodoFromList = this.removeTodoFromList.bind(this);
        this.handleForSignIn = this.handleForSignIn.bind(this);
        this.handleForSignUp = this.handleForSignUp.bind(this);
    }

    async handleForTodoApp(task, title, id){
        this.state.myData = await fetchData(id);
        this.state.notes = this.state.myData.notes;
        const newState = [{
            id :Math.random()*340293842,
            title:title,
            description:task
        }];
        this.setState((currState) =>({
            notes:currState.notes.concat(newState)
        }));
        saveTask(this.state.myData.id,this.state.myData.password,this.state.notes);       
    }

    async removeTodoFromList(key, id){
        this.state.myData = await fetchData(id);
        this.state.notes = this.state.myData.notes;
        this.setState((currState) =>({
            notes:currState.notes.filter(task => task.id!=key)
        }));
        saveTask(this.state.myData.id,this.state.myData.password,this.state.notes);
    }
    
handleForSignUp(email,password){
    var notes = [];
    postData(email,password,notes);
    this.setState({
        isLoggedIn : "true",
        id : email
    })
}

async handleForSignIn(email,password){
    this.state.myData = await fetchData(email);
    if(this.state.myData.id !== email){
        alert("User not exist");
    }
    else if(this.state.myData.password !== password){
        alert("Password Incorrect");
    }
    else if(this.state.myData.password === password && this.state.myData.id === email){
        this.setState({
            isLoggedIn : "true",
            id : email,
            notes : this.state.myData.notes
        })
    }
    else{
        alert("Login failed");
    }
}
    render(){        
        console.log("here", this.state.notes);      
        return(<div>
            <Decider isLoggedIn={this.state.isLoggedIn} id={this.state.id}
            handleForSignUp = {this.handleForSignUp} handleForSignIn = {this.handleForSignIn}
            handleForTodoApp = {this.handleForTodoApp}
            notes = {this.state.notes} removeTodoFromList = {this.removeTodoFromList}
            />
        </div>);
    }
}
export default KeepApp;