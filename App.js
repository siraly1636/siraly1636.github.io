import React, { Component } from 'react';
import { Button, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Checkbox from 'expo-checkbox';

export default class ButtonBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      feladat: "",
      datum: "",
      pipa: false,
    };
  }

  componentDidMount(){
    //this.storeData([])
    this.getData().then(data0=>{
      this.setState({data:data0})
      //alert(JSON.stringify(data0))
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

  mindentorles=()=>{
    alert("Mindent töröl!")
  }

  pipavalto=()=>{
    this.setState({pipa:!this.state.pipa})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{padding: 10, fontSize: 42}}>
          Feladatok:
        </Text>
        <View style={{flexDirection: "row"}}>
          <TextInput style={{height: 40, flex: 8, margin: 10, borderWidth: 1, borderColor: "gray", padding: 5}} placeholder="Írd be a feladat szövegét." 
            onChangeText={(text) => this.setState({feladat:text})}
            value={this.state.feladat} />
          <TouchableOpacity style={{flex: 1, margin: 10, backgroundColor: "brown", borderRadius: 50, width: 30, height: 30}} onPress={()=>this.setState({feladat:""})}>
            <Text style={{fontSize: 20, textAlign: "center", color: "white"}}>X</Text>
          </TouchableOpacity>
        </View>
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

        <View style={{flexDirection: "row"}}>
          <View style={{flexDirection: "row", flex: 3, marginLeft: 10}}>
            <Checkbox style={styles.checkbox} value={this.state.pipa} onValueChange={()=>this.pipavalto()}/>
            <Text> korábbiak</Text>
          </View>
          <TouchableOpacity style={{flex: 2}} onPress={()=>this.mindentorles()}>
            <Text style={styles.alldelete}>Minden törlés</Text>
          </TouchableOpacity>
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
  alldelete: {
    backgroundColor: "brown",
    width: 150,
    borderRadius: 10,
    padding: 10,
    margin: 5,
    color: "white"
  },
});
