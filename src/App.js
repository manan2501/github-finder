import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';

class App extends Component {
  state ={
    users: [],
    loading: false
  }
  async componentDidMount(){
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users');
    this.setState({
      users: res.data,
      loading: false
    });
    console.log(res.data);
  }

  //Search Github Users
  searchUsers = async text => {
      const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
      this.setState({
        users: res.data.items,
        loading: false
      });
  };

  render(){
    return (
      <div className="App">
        <Navbar title='Github Finder' icon='fab fa-github'/>
        <div className='container'>
          <Search searchUsers={this.searchUsers}/>
          <Users loading={this.state.loading} users ={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;
