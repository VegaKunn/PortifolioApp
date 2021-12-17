import React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import TecnoDiv from './TecnoDiv';

export default function Tecno(props) {
  return (
    <SafeAreaView style={es.corpo}>
      <View style={es.centro}>
        <Text style={es.texto}>Navegue pelas guias</Text>
        <Text style={es.texto}>Voce pode se surpreender</Text>
      </View>
      <View style={es.guias}>
        <TecnoDiv
          conteudo={'CSS/JS'}
          cor={es.cssS}
          bg={es.bgCss}
          nv={props.nv}
          ir="PageCss"
        />
        <TecnoDiv
          conteudo={'React'}
          cor={es.reactS}
          bg={es.bgReact}
          nv={props.nv}
          ir="PageReact"
        />
        <TecnoDiv
          conteudo={'React Native'}
          cor={es.nativeS}
          bg={es.bgNative}
          nv={props.nv}
          ir="PageNative"
        />
        <TecnoDiv
          conteudo={'Node'}
          cor={es.nodeS}
          bg={es.bgNode}
          nv={props.nv}
          ir="PageNode"
        />
      </View>
    </SafeAreaView>
  );
}

const es = StyleSheet.create({
  corpo: {
    width: '100%',
    height: '100%',
    backgroundColor: '#050505',
  },
  guias: {
    //  backgroundColor: '#333',
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 25,
    width: '100%',
    height: '100%',
  },
  centro: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // COR DO TEXTO

  cssS: {
    fontSize: 23,
    color: '#ffff00',
  },
  reactS: {
    fontSize: 23,
    color: '#6dc7ff',
  },
  nativeS: {
    fontSize: 23,
    color: '#2affed',
  },
  nodeS: {
    fontSize: 23,
    color: '#29ff57',
  },
  texto: {
    fontSize: 23,
    color: '#fff',
  },

  // COR DO FUNDO

  bgCss: {
    backgroundColor: '#ffd70050',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ecec00bb',
    borderStyle: 'solid',
    borderWidth: 3,
    borderRadius: 30,
    width: '80%',
    height: '80%',
  },
  bgReact: {
    backgroundColor: '#0046f850',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#0046f8',
    borderStyle: 'solid',
    borderWidth: 3,
    borderRadius: 30,
    width: '80%',
    height: '80%',
  },
  bgNative: {
    backgroundColor: '#00575a80',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#00575a',
    borderStyle: 'solid',
    borderWidth: 3,
    borderRadius: 30,
    width: '80%',
    height: '80%',
  },
  bgNode: {
    backgroundColor: '#005a0080',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#005a00',
    borderStyle: 'solid',
    borderWidth: 3,
    borderRadius: 30,
    width: '80%',
    height: '80%',
  },

  // COR DA BORDA
});
