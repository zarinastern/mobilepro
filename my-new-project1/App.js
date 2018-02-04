import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image } from 'react-native';

export default class App extends React.Component {

  constructor(){
      super(props);
      this.state = {value: 0}
    }

    buttonPlus = () => {
            this.setState((prevState) => {
              return {counter: prevState.value + 1}
            });
          }
          buttonMinus = () => {
          this.setState((prevState) => {
              return {counter: prevState.value - 1}
            });

render() {

    return (

      <View style={styles.container}>
    <TextInput style = {styles.input} {this.buttonPlus}/>
    <TextInput style = {styles.input} {this.buttonMinus} />
      <Text style = {styles.submitButtonText} onPress= {this.buttonPlus} title="+"/>+</Text>
      <Text style = {styles.submitButtonText} onPress= {this.buttonMinus} title="-"/>-</Text>
      </View>


    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
