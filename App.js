import React, { Component } from 'react';
import { Button, StyleSheet, View, Text, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class ButtonBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      feladat: "",
      datum: ""
    };
  }

  componentDidMount(){
    //this.storeData([])
    this.getData().then(data0=>{
      this.setState({data:data0})
      alert(JSON.stringify(data0))
    })
    //alert('valami')
  }

  felvitel=()=> {
    //alert("It's a trap!")
    let uj = this.state.data
    uj.push({
      "id": 2,
      "feladat": this.state.feladat,
      "datum": this.state.datum
    })
    this.setState({data:uj})
    this.storeData(this.state.data)
    alert(JSON.stringify(this.state.data))
  }

  storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
      // saving error
    }
  }

  getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{padding: 10, fontSize: 42}}>
          Feladatok:
        </Text>
        <TextInput
          style={{height: 40}}
          placeholder="Írd be a feladat szövegét"
          onChangeText={(text) => this.setState({feladat:text})}
          value={this.state.feladat}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          Dátum:
        </Text>
        <TextInput
          style={{height: 40}}
          placeholder="Írd be a dátumot!"
          onChangeText={(text) => this.setState({datum:text})}
          value={this.state.datum}
        />
        <View style={styles.buttonContainer}>
          <Button
            onPress={async () => this.felvitel()}
            title="Új feladat"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
});
