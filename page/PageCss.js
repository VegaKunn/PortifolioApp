import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function PageCssJs() {
  const [usuario, setUsuario] = useState(null);
  const [senha, setSenha] = useState(null);

  return (
    <SafeAreaView style={es.corpo}>
      <ScrollView style={es.corpos}>
        <View style={es.centro}>
          <Text style={es.titulo}>JS & CSS</Text>
        </View>

        <Text style={es.texto}>
          Experiencia com CSS e Javascript contendo animações e responsividade
          via CSS.
        </Text>

        <View style={es.divCorpo}>
          <View style={es.telaLogin}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 15,
              }}>
              <Text style={es.textoBlack}>Login</Text>
            </View>
            <View style={es.menu}>
              <Text style={es.textoBlack2}>Email:</Text>
              <View style={es.centro}>
                <TextInput
                  style={es.inpt}
                  onChangeText={value => {
                    setUsuario(value);
                  }}
                  value={usuario}
                />
              </View>
              <Text style={es.textoBlack2}>Senha:</Text>
              <View style={es.centro}>
                <TextInput
                  style={es.inpt}
                  secureTextEntry={true}
                  onChangeText={value => {
                    setSenha(value);
                  }}
                  value={senha}
                  // keyboardType="numeric"
                  //   returnKeyType="done"
                />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '18%',
                  marginTop: 15,
                }}>
                <TouchableOpacity
                  style={es.btnSubmit}
                  onPress={() => {
                    setUsuario('');
                    setSenha('');
                  }}>
                  <Text style={{fontSize: 20, color: '#000'}}>Logar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text style={es.texto}>
            Utilização de metodos modernos de programação assincrona com
            tratamento de erros via Try/Catch/Throw, boas praticas de
            programação e utilização dos "Design Patterns" corretos para
            resolver cada problema especifico.
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
    backgroundColor: '#000',
  },
  corpos: {
    width: '100%',
    height: '100%',
  },
  divCorpo: {
    width: '100%',
    height: 380,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    marginTop: 15,
    padding: 5,
  },
  telaLogin: {
    backgroundColor: '#fff',
    width: '70%',
    height: '90%',
    borderRadius: 15,
  },
  btnSubmit: {
    width: '75%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#6dc7ff',
  },
  centro: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inpt: {
    color: '#000',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    width: '75%',
    marginTop: 5,
  },

  texto: {
    fontSize: 20,
    marginTop: 10,

    color: '#fff',
  },
  titulo: {
    fontSize: 25,
    padding: 20,
    color: '#fff',
  },
  textoBlack: {
    marginTop: 5,
    fontSize: 20,
    color: '#000',
  },
  textoBlack2: {
    marginTop: 5,
    marginLeft: 5,
    fontSize: 20,
    color: '#000',
  },
});
