import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Button} from 'react-native';

export default function TecnoDiv(props) {
  const nv = props.nv;
  const ir = props.ir;

  return (
    <View style={es.divF}>
      <TouchableHighlight
        style={props.bg}
        onPress={() => {
          nv.navigate(ir);
        }}>
        <Text style={props.cor}>{props.conteudo}</Text>
      </TouchableHighlight>
    </View>
  );
}

const es = StyleSheet.create({
  divF: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '30%',
  },
  divC: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c9cccb',
    borderStyle: 'solid',
    borderWidth: 3,
    borderRadius: 30,
    width: '80%',
    height: '80%',
  },
});
