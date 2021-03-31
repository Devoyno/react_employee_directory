import React, {Component} from 'react';
import Searchbox from '../Searchbox';
import api from '../../utils/api';
import Table from '../Table';

class Main extends Component {
  state = {
    users: [], filteredUsers: [], order: 'descend'
  }
  handleInputChange = (e) => {
    console.log(e.target.value);
    const searchTerm = e.target.value;
    const filteredList = this.state.users.filter(user => {
      let values = Object.values(user).join("").toLowerCase();
      return values.indexOf(searchTerm.toLowerCase()) !==-1  
    })
    console.log(filteredList);
    this.setState({filteredUsers: filteredList})
  } 
  componentDidMount() {
    api.getUsers().then(res => this.setState({users:res.data.results, 
      filteredUsers: res.data.results}))
  }

  handleSort = () => {
    if (this.state.order === 'descend') {
      this.setState({order: 'ascend'}) 
    } else {
      this.setState({order: 'descend'})
    }
  }

  render() {
    return (
      <>
      <Searchbox handleInputChange={this.handleInputChange}/>
      <Table users={this.state.filteredUsers}
      handleSort={this.handleSort}
      order={this.state.order}/>
      </>
    );
  }
}

export default Main;