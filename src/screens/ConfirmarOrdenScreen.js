import React, { Component } from 'react';
import Item from '../components/Item';

//class RecogerScreen extends Component {
class ConfirmarOrdenScreen extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            
                <Item 
                    item="20 Libras"
                    quantity="20"
                />                

                
        );
    }
}
export default ConfirmarOrdenScreen;