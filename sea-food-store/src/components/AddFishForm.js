import React, { createRef } from 'react';

class AddfishForm extends React.Component{

        nameRef = React.createRef();
        priceRef = React.createRef();
        statusRef = React.createRef();
        descRef = React.createRef();
        imageRef = React.createRef();

    createfish = (event) => {
        // prevent the button form submitting
        event.preventDefault()
        
        const fish = {
           name: this.nameRef.current.value,
           price: parseFloat(this.priceRef.current.value),
           status: this.statusRef.current.value,
           desc: this.descRef.current.value,
           image: this.imageRef.current.value,
        };
        this.props.addfish(fish);
        // To refresh the form 
        event.currentTarget.reset();
    };

    render(){
        return(
            <form className = "fish-edit" onSubmit = {this.createfish}>
                <input name = "name" ref = {this.nameRef} type = 'text' placeholder = "Name" />
                <input name = "price" ref = {this.priceRef} type = 'text' placeholder = "Price" />
                <select name = "status" ref = {this.statusRef}>
                    <option value = 'available'>Fresh</option>
                    <option value = 'unavailable'>Sold Out</option>
                </select>
                <textarea name = "desc" ref = {this.descRef}placeholder = "Desc" />
                <input name = "image" ref = {this.imageRef} type = 'file' placeholder = "Image" />
                <button type='submit'>
                    + Add fish
                </button>
            </form>

            )
    }

}

export default AddfishForm;