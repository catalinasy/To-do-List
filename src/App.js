import React, {Component} from 'react';
import NewItem from './Components/NewItem'
import {List} from './Components/List'
import './App.css';

export default class App extends Component{

  state= {
    newItem: null,
    items: [],
    itemExist: false
  }


  addItem(item) {
    let {newItem, items } = this.state;
    newItem = item
    items.push(newItem)
    console.log({items, newItem})
    this.setState({itemExist: true})
    
  }
 

render() {
  const {items} = this.state
  return (
    <div className="App">
      <NewItem addItem = {item => this.addItem(item)}/> 
      <List items={items}/>
    </div>
  )
  }
};