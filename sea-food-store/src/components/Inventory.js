import React from 'react';
import AddfishForm from './AddFishForm'

class Inventory extends React.Component{

    render(){
        return(
            <div className="Inventory">
                <h2>Inventory</h2>
                <AddfishForm addfish={this.props.addfish}/>
                <button onClick={this.props.loadSampleFishes}>LOAD SAMPLE FISHES</button>
            </div>
        )
    }

}

export default Inventory;