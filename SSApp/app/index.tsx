import { Pressable, Text, View, StyleSheet, Image, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { useState } from 'react';
import Publish from "../pages/publish/Publish";
import Feed from "../pages/feed/Feed";


export default function Index() {
  //return <Publish/> //Descomentar esto para ver la pantalla publicar 
  //return <Feed/> //Descomentar esto para ver la pantalla feed

  const [username, setUsername] = useState('');

  const router = useRouter();

  const handleButton = () => {
    router.replace('/home');
  };

  return (
    <View style = {styles.container}>

      <View style = {styles.containerTitle}>
        <Image source = {require('../assets/Logo_Blanco.png')} style = {styles.logo} resizeMode="contain" />
        <Text style = {styles.titulo}>Bienvenido a Social Sport</Text>
      </View>
      
      <View style = {styles.containerInfo}>
        <TextInput style = {styles.inputUsername} placeholder = 'Ingresa tu nombre' placeholderTextColor='hsla(0, 0%, 80%, 1.00))' onChangeText = {setUsername} />
        <Pressable onPress = {handleButton} style = {styles.loginButton}>
          <Text style = {{textAlign: 'center', color: 'hsla(0, 0%, 80%, 1.00))', fontWeight: 'bold', fontSize: 17}}>Ingresar</Text>
        </Pressable>
        <Text style = {styles.subtitle}>Al ingresar se aceptan las Políticas de Terminos y Condiciones.</Text>
      </View>

    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'hsla(240, 7%, 11%, 1.00)',
  },
  containerInfo: {
    flex: 1,
    justifyContent: 'center',
    width: '50%',
  },
  containerTitle: {
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 40,
    marginBottom: 40,
  },
  titulo: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'hsla(0, 0%, 80%, 1.00))',
    textAlign: 'center',
  },
  inputUsername: {
    color: 'hsla(0, 0%, 80%, 1.00))',
    textAlign: 'center',
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 16,
    fontSize: 18,
  },
  loginButton: {
    backgroundColor: 'hsla(28, 68%, 43%, 0.65)',
    color: 'hsla(0, 0%, 80%, 1.00))',
    padding: 8,
    marginRight: 15,
    marginLeft: 15,
    borderRadius: 15,
    
  },
  subtitle: {
    marginTop: 20,
    color: 'hsla(0, 0%, 80%, 1.00))',
    textAlign: 'center',
  },
});




