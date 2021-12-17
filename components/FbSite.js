import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

export default function FbSite() {
  return (
    <View style={es.site}>
      <View style={es.menu}></View>
      <View style={es.main}>
        <View style={es.asside}>
          <View style={es.divFoto}>
            <View style={es.usuarioFoto}></View>
            <Text style={es.preto}>User</Text>
          </View>
        </View>
        <View style={es.asside}>
          <View style={es.pDiv}>
            <Text style={es.preto}>Post</Text>
          </View>
          <View style={es.pDiv}>
            <Text style={es.preto}>Post</Text>
          </View>
          <View style={es.pDiv}>
            <Text style={es.preto}>Post</Text>
          </View>
        </View>
        <View style={es.asside}></View>
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
    borderColor: '#00f',
  },
  menu: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#007acb',
  },
  main: {
    width: '100%',
    height: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: '#999',
  },
  asside: {
    width: '30%',
    height: '100%',
    padding: 10,
    backgroundColor: '#e3e3e3',
  },
  pDiv: {
    width: '100%',
    height: '30%',
    padding: 2,
    marginTop: 7,
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
