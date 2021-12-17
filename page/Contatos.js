import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Linking,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

import Clipboard from '@react-native-community/clipboard';

export default function Contatos() {
  const [n1, setN1] = useState('(11) 97377-6013');
  const [n2, setN2] = useState('(11) 93025-5376');
  const [n3, setN3] = useState('wender_vega@hotmail.com');
  useEffect(() => {
    setTimeout(() => {
      setN1('(11) 97377-6013');
    }, 1500);
  }, [n1]);
  useEffect(() => {
    setTimeout(() => {
      setN2('(11) 93025-5376');
    }, 1500);
  }, [n2]);
  useEffect(() => {
    setTimeout(() => {
      setN3('wender_vega@hotmail.com');
    }, 1500);
  }, [n3]);

  return (
    <SafeAreaView style={es.corpo}>
      <ScrollView>
        <View style={es.centro}>
          <Text style={es.titulo}>Contatos</Text>
        </View>
        <Text style={es.contatos}>Nome: "Wender Augusto Vega"</Text>
        <TouchableHighlight
          onPress={() => {
            Clipboard.setString(n1);
            setN1('Copiado');
          }}>
          <Text style={es.contatos}>Fone: "{n1}" </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            Clipboard.setString(n2);
            setN2('Copiado');
          }}>
          <Text style={es.contatos}>Fone: "{n2}" </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            Clipboard.setString(n3);
            setN3('Copiado');
          }}>
          <Text style={es.contatos}>Email: " {n3} "</Text>
        </TouchableHighlight>
        <View style={es.centro}>
          <Text style={es.titulo}>Redes Sociais</Text>
        </View>

        <View style={es.sociais}>
          <TouchableHighlight
            style={es.face}
            onPress={() => {
              Linking.openURL('https://www.facebook.com/wender.vega');
            }}>
            <Text style={{color: '#fff', fontSize: 20}}>Facebook</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={es.git}
            onPress={() => {
              Linking.openURL('https://github.com/VegaKunn');
            }}>
            <Text style={{color: '#fff', fontSize: 20}}>Github</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={es.lin}
            onPress={() => {
              Linking.openURL(
                'https://www.linkedin.com/in/wender-vega-167225174/',
              );
            }}>
            <Text style={{color: '#fff', fontSize: 20}}>Linkedin</Text>
          </TouchableHighlight>
        </View>

        <View style={es.centro}>
          <Text style={es.titulo}>Sobre Mim</Text>
        </View>
        <View>
          <Text style={es.texto}>
            Meu nome é Wender Vega sou de 1997 e estudo programação a um pouco
            mais de 2 anos, focado em desenvolvimenteo javascript para front,
            back-end e mobile.
          </Text>
          <Text style={es.texto}>
            Desde então me descobri um programador e estou à procura de novos
            desafios e constantemente me aperfeiçoando e aprendendo novas
            tecnologias do mercado.
          </Text>
          <Text style={es.texto}>
            Gosto de puxar a responsabilidade dos projetos para mim e aprender
            com os problemas apresentados, acredito que com isso eu possa trazer
            os melhores resultados para os negócios e aprimorar meu
            desenvolvimento profissional buscando a "Senioridade".
          </Text>
          <Text style={es.texto}>
            Agradeço o tempo investido em mim e em meu trabalho, ficou feliz em
            apresentar um trabalho feito exclusivamente por mim.
          </Text>
          <View style={es.centro}>
            <Text style={es.texto}>Muito Obrigado</Text>
          </View>
        </View>
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
  centro: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sociais: {
    width: '100%',
    height: 250,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  face: {
    width: '80%',
    height: 55,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#09b1ec',
    backgroundColor: '#0463ca',
    justifyContent: 'center',
    alignItems: 'center',
  },
  git: {
    width: '80%',
    height: 55,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#41ff07',
    backgroundColor: '#00ab03',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lin: {
    width: '80%',
    height: 55,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#7e4eff',
    backgroundColor: '#3b287b',
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
  contatos: {
    fontSize: 20,
    marginTop: 10,
    color: '#fff',
  },
});
