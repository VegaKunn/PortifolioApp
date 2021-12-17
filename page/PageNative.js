import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';

export default function PageNative() {
  return (
    <SafeAreaView style={es.corpo}>
      <ScrollView>
        <View style={es.center}>
          <Text style={es.titulo}>React Native</Text>
        </View>
        <Text style={es.texto}>
          Com experiencia tanto em Expo quanto CLI, consigo fazer aplicações das
          mais simples até consumir APIs de terceiros.
        </Text>
        <Text style={es.texto}>
          Criando interfaces responsivas e com uso de "State" utilizando
          renderização condicional de componetes torna possivel deixar a
          interação dinamica entre usuario e App.
        </Text>
        <Text style={es.texto}>
          Como amostra, consta esse app completo como exemplo, feito apenas por
          mim para deixa de pequena amostra pratica para qualquer contratante.
        </Text>
        <Text style={es.texto}>
          Melhor que dizer oque posso fazer, prefiro mostrar.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const es = StyleSheet.create({
  corpo: {
    width: '100%',
    height: '100%',
    padding: 10,
    backgroundColor: '#000',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 25,
    padding: 20,
    color: '#fff',
  },
  texto: {
    fontSize: 20,
    marginTop: 10,
    color: '#fff',
  },
});
