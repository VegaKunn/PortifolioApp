import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

export default function Loja() {
  return (
    <View style={es.site}>
      <View style={es.menu}></View>
      <View style={es.main}>
        <View style={es.asside2}>
          <View style={es.pDiv}>
            <Text style={es.preto}>Produto</Text>
          </View>
          <View style={es.pDiv}>
            <Text style={es.preto}>Produto</Text>
          </View>
          <View style={es.pDiv}>
            <Text style={es.preto}>Produto</Text>
          </View>
          <View style={es.pDiv}>
            <Text style={es.preto}>Produto</Text>
          </View>
          <View style={es.pDiv}>
            <Text style={es.preto}>Produto</Text>
          </View>
          <View style={es.pDiv}>
            <Text style={es.preto}>Produto</Text>
          </View>
          <View style={es.pDiv}>
            <Text style={es.preto}>Produto</Text>
          </View>
          <View style={es.pDiv}>
            <Text style={es.preto}>Produto</Text>
          </View>
          <View style={es.pDiv}>
            <Text style={es.preto}>Produto</Text>
          </View>
        </View>
        <View style={es.asside}>
          <Text>Rodapé</Text>
        </View>
      </View>
    </View>
  );
}

const es = StyleSheet.create({
  corpo: {
    width: '100%',
    height: '100%',
    padding: 10,
    backgroundColor: '#111',
  },
  rolagem: {
    width: '100%',
    height: '100%',
    backgroundColor: '#333',
  },
  texto: {
    fontSize: 20,
    marginBottom: 15,
    color: '#fff',
  },
  preto: {
    color: '#000',
  },
  site: {
    width: '100%',
    height: 300,
    minHeight: 300,
    marginTop: 5,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#7a00cb',
  },
  menu: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#7a00cb',
  },
  main: {
    width: '100%',
    height: '90%',

    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: '#999',
  },
  asside: {
    width: '100%',
    height: '20%',
    padding: 10,
    backgroundColor: '#e3e3e3',
  },
  asside2: {
    width: '100%',
    height: '78%',
    padding: 10,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    backgroundColor: '#e3e3e3',
  },
  pDiv: {
    width: '30%',
    height: '28%',
    padding: 2,
    //  marginTop: 7,
    //  marginRight: 5,
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: '#e7e7e7',
  },
  divFoto: {
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    padding: 3,
    marginTop: 3,
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: '#e7e7e7',
  },
  usuarioFoto: {
    width: '30%',
    height: '80%',
    marginRight: 10,
    borderRadius: 1000,
    borderWidth: 2,
    borderColor: 'black',
  },
});
