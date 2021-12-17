import * as React from 'react';
import {View, Text, NavigatorIOS} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Section from './components/Section';
import Tecno from './components/Tecno';
import PCssJs from './page/PageCss';
import PReact from './page/PageReact';
import PNative from './page/PageNative';
import PNode from './page/PageNode';
import Contat from './page/Contatos';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <Section nv={navigation} />
    </View>
  );
}

function Tecnologias({navigation}) {
  return (
    <View>
      <Tecno nv={navigation} />
    </View>
  );
}

function PageCss(navigation) {
  return (
    <View>
      <PCssJs />
    </View>
  );
}
function PageReact(navigation) {
  return (
    <View>
      <PReact />
    </View>
  );
}
function PageNative(navigation) {
  return (
    <View>
      <PNative />
    </View>
  );
}
function PageNode(navigation) {
  return (
    <View>
      <PNode />
    </View>
  );
}
function Contatos(navigation) {
  return (
    <View>
      <Contat />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tecnologias" component={Tecnologias} />
        <Stack.Screen name="Contatos" component={Contatos} />
        <Stack.Screen name="PageCss" component={PageCss} />
        <Stack.Screen name="PageReact" component={PageReact} />
        <Stack.Screen name="PageNative" component={PageNative} />
        <Stack.Screen name="PageNode" component={PageNode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
