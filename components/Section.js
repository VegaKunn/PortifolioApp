import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import DivFoto from './DivFotos';
import Menu from './Menu';

export default function Section(props) {
  return (
    <View style={estiloCorpo.corpo}>
      <DivFoto />
      <View style={estiloCorpo.centro}>
        <Text style={estiloCorpo.cor}>Dev FullStack</Text>
      </View>
      <Menu nv={props.nv} />
    </View>
  );
}

const estiloCorpo = StyleSheet.create({
  corpo: {
    width: '100%',
    height: '100%',
    backgroundColor: '#050505',
    color: '#fff',
  },

  corpos: {
    width: '100%',
    height: '100%',
  },

  centro: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cor: {
    color: '#c9cccb',
    fontSize: 28,
  },
});
