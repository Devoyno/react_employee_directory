import React, {Component} from 'react';
import Searchbox from '../Searchbox';
import api from '../../utils/api';

class Main extends Component {
  state = {
    users: [], filteredUsers: [], order: 'decend'
  }
  handleInputChange = (e) => {
    console.log(e.target.value);
  } 
  componentDidMount() {
    api.getUsers().then(res => this.setState({users:res.data.results}))
  }
  render() {
    return (
      <>
      <Searchbox handleInputChange={this.handleInputChange}/>
      <Table users={this.state.users}/>
      </>
    );
  }
}

export default Main;