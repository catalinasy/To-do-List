    
import React, { Component } from "react";
import { Button } from "./button";

export default class NewItem extends Component {
    state = {
        newItem: null,
        items: []
    }
   handleChange(e){
       const item = e.target.value.trim()
       this.setState({newItem:item})
   }


   addItem() {
    const { newItem } = this.state;
    newItem && this.props.addItem(newItem);
  }

  render(){
        return(
            
      <div>
      <input
        type="text"
        onChange={event => this.handleChange(event)}
      />
      <Button
        className="button"
        label="Add new Item"
        onClick={() => this.addItem()}
      />
    </div>

        )
    }
}