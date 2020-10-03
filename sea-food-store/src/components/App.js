import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from './Fish'

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  addfish = (fish) => {
    // 1. copy the current state (which is empty)
    const fishes = { ...this.state.fishes };
    // 2. add our new fish to the fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. update the state value to the new fishes objects
    this.setState({ fishes });
    console.log(fishes);
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = (key)=>{
      // 1. copy the state
      const order = {...this.state.order}
      // 2. either add to order or update the number of item
      order[key]= order[key]+1 || 1
      // 3. call the setState to update the object
      this.setState({order})
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh seafish market" />
          <ul className='fishes'>
            {Object.keys(this.state.fishes).map(key =>
             <Fish 
             key={key} 
             index = {key}
             detail = {this.state.fishes[key]} 
             addToOrder={this.addToOrder}
             /> )}
          </ul>
        </div>
        <Order fishes = {this.state.fishes} order={this.state.order} />
        <Inventory
          addfish={this.addfish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
