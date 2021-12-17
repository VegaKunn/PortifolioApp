import {TestScheduler} from 'jest';
import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';

export default function PageNode() {
  return (
    <SafeAreaView style={es.corpo}>
      <ScrollView style={{padding: 10}}>
        <View style={es.centro}>
          <Text style={es.titulo}>Node.js</Text>
        </View>
        <Text style={es.texto}>
          Meus conhecimentos sobre Node.js são todos atrelados os "Express" e
          sua facilidade com a criação de rotas, manipulação e validação dos
          dados trazidos pelo Front-end e entregues ao mesmo via API.
        </Text>
        <Text style={es.texto}>
          Além do Express, sei utilizar algumas outras ferramentas como
          "Sequelize", "body-parser".
        </Text>
        <Text style={es.texto}>
          Sabendo criar servidores, é imprescindível conhecer alguns bancos de
          dados, sendo assim optei por aprender MySQL e Mongo.db, sendo um
          relacional e o outro não relacional, respectivamente, com isso eles se
          completam sendo um melhor que outro dependendo do uso da aplicação ou
          até mesmo podendo ser usados em conjunto.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const es = StyleSheet.create({
  corpo: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },
  centro: {
    alignItems: 'center',
    justifyContent: 'center',
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
