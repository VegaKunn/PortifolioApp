import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

export default function DivFoto() {
  return (
    <View style={estilo.div}>
      <View style={estilo.divFoto}>
        <Image source={require('../assets/eu2.jpg')} style={estilo.foto} />
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  foto: {
    borderRadius: 1000,
    width: '100%',
    height: '100%',
    resizeMode: 'center',
  },
  divFoto: {
    marginTop: 50,
    width: '75%',
    height: '75%',
  },
  div: {
    // backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50%',
  },
});
