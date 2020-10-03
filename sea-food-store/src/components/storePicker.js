import React from 'react';

class StorePicker extends React.Component{

    myInput = React.createRef()

    goToStore= event =>{
        // 1. stop the form from submitting
        event.preventDefault();
        // 2. Get the text from that input
        console.log(this)
        // 3. Change the page to /store/what-ever-they=enter
    }

    render(){
        return (
        <form className = 'store-selector' onSubmit = {this.goToStore}>
            <h2>Please enter a store!</h2>
            <input 
            type="text" 
            ref={this.myInput}
            placeholder="Store Name" 
            required
            // defaultValue = {getValue()}
            />
            <button type='submit'> Visit Store </button>
        </form>
        )
    }
}
export default StorePicker;