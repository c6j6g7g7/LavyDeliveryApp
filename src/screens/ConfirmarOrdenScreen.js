import React, { Component } from 'react';
import { ScrollView, View, Text} from 'react-native';

import { connect } from 'react-redux';

import Actions from '../redux/ActionTypes';
//import CounterComponent from '../Components/CounterComponent';

//https://medium.com/@smile2gether/react-redux-todo-list-ccf63b622339
//http://www.jaimeolmo.com/2017/02/que-es-redux/
//COUNTER
//https://www.uno-de-piera.com/reactjs-con-redux/
//https://github.com/carlacentenor/contador

//Contador
//https://github.com/alinz/example-react-native-redux
//https://github.com/ImranHishaam/react-native-redux-counter-app
//https://appdividend.com/2018/06/14/how-to-connect-react-and-redux-with-example/

//CURSOS
//https://alligator.io/react/roadmap-react-native-developer/
//https://www.valentinog.com/blog/react-redux-tutorial-beginners/
//https://medium.freecodecamp.org/from-reduce-to-redux-understanding-redux-by-building-redux-918ef08abafe
//http://www.jaimeolmo.com/2017/02/que-es-redux/

//Tips
//https://www.robinwieruch.de/tips-to-learn-react-redux/
//EJEMPLOS
//https://medium.com/@aaronvb/a-simple-react-native-redux-example-b8e22a6e93d0

//TODOLISTCOMPLETO
//https://www.ma-no.org/es/content/index_ejemplo-completo-de-crud-con-redux-y-react_2336.php



//EJEMPLO DE CONTRUCCION
//https://github.com/ImranHishaam/react-native-redux-counter-app/blob/master/App/Components/CounterComponent.js

import Button from '../components/Button';
import Item from '../components/Item';

//Estilos
import { wrapper }  from '../styles/styles';
import { title, subTitle }  from '../styles/text';

//class RecogerScreen extends Component {
class ConfirmarOrdenScreen extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <ScrollView >
                <View style={wrapper}>   
                    <Text style={title}>Detalle orden</Text>
                    <Text style={subTitle}>Modificar Orden</Text>
                    <Item 
                        item=" Libras"
                        quantity= {this.props.quantity}
                    />
                    <Item 
                        item=" Corbatas"
                        quantity="3"
                    />
                    <Item 
                        item=" Toallas"
                        quantity="1"
                    />
                     <Button                
                        text="Modificar"
                    />                
                </View>
            </ScrollView>
        );
    }
}




/*
const mapStateToProps = (state) => {
    console.log("STATE=>"+JSON.stringify(state.currentOrder));
    return { quantity: state.currentOrder.quantity }
};

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({type: COUNTER_INCREMENT}),
    decrement: () => dispatch({type: COUNTER_DECREMENT}),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmarOrdenScreen)*/

export default ConfirmarOrdenScreen;