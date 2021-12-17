import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight, Button} from 'react-native';

export default function Menu(props) {
  const nv = props.nv;
  return (
    <View style={estilo.divMenu}>
      <TouchableHighlight
        style={estilo.bordas}
        onPress={() => {
          nv.navigate('Tecnologias');
        }}>
        <Text style={estilo.texto}>Tecnologias</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={estilo.bordas}
        onPress={() => {
          nv.navigate('Contatos');
        }}>
        <Text style={estilo.texto}>Contatos</Text>
      </TouchableHighlight>
    </View>
  );
}

const estilo = StyleSheet.create({
  divMenu: {
    // backgroundColor: '#00f',
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bordas: {
    width: '90%',
    height: '20%',
    borderRadius: 20,
    marginTop: 15,
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: '#c9cccb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 25,
  },
});
