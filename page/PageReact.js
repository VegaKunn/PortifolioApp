import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

import FbSite from '../components/FbSite';
import Loja from '../components/Loja';

export default function PageReact() {
  const [mudaSite, setMudaSite] = useState(true);
  return (
    <SafeAreaView style={es.corpo}>
      <ScrollView style={es.rolagem}>
        <View style={es.centro}>
          <Text style={es.titulo}>React.js</Text>
        </View>
        <Text style={es.texto}>
          Com React.js, é possivel fazer a criação de sites modernos, rapidos e
          responsivos, com interfaces componentizadas garantindo agilidade e
          performance para qualquer aplicação web.
        </Text>
        <TouchableHighlight
          onPress={() => {
            setMudaSite(!mudaSite);
          }}>
          {mudaSite ? <FbSite /> : <Loja />}
        </TouchableHighlight>
        <View>
          <Text style={es.texto}>
            Indo além, utilizando Next.js torna-se possivel fazer a
            implementação de conteúdo HTML armazenado em buffer pelo servidor,
            exibindo conteudo dinâmico de forma estatica, isso faz com que
            depois da primeira busca não seja mais preciso requisitar o banco de
            dados da aplicação, trazendo velocidade ao site.
          </Text>
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
    backgroundColor: '#111',
  },
  rolagem: {
    width: '100%',
    height: '100%',
  },
  centro: {
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
    marginBottom: 15,
    color: '#fff',
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
