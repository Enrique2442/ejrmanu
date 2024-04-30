import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Input from './src/components/Input.js/'
import Boton from './src/components/Boton.js/';

export default function App() {

//codigo javascript
//state  de la aplicacion
const[numero1, setNumero1]=useState(0)
const[numero2, setNumero2]=useState(0)
const[resultado, setResultado]=useState(0)

//hacer que se sumen dos numeros

const suma = ()=>{
  let sumatoria=(parseFloat(numero1)+parseFloat(numero2));
  setResultado(sumatoria);
}

const multi = ()=>{
  let multiplicacion=(parseFloat(numero1)*parseFloat(numero2));
  setResultado(multiplicacion);
}

const divi = ()=>{
  let divicion=(parseFloat(numero1)/parseFloat(numero2));
  setResultado(divicion);
}

const rest = ()=>{
  let resta=(parseFloat(numero1)-parseFloat(numero2));
  setResultado(resta);
}

const limpiar = ()=>{
  setNumero1(0)
  setNumero2(0)
  setResultado(0)
}

  return (
    <View style={styles.container}>
      <Text>Suma de numeros</Text>
      

      <Text>Numero 1:</Text>
      <TextInput
      placeholder='Numero 1: '
      value={numero1}
      onChangeText={setNumero1}
      />
      

      <Text>Numero 2:</Text>
      <TextInput placeholder='Numero 2: ' value={numero2} onChangeText={setNumero2}/>

      <Boton
      texto='suma'
      funcion={suma}
      />

      <Boton
      texto='resta'
      funcion={rest}
      />

      <Boton
      texto='multiplicacion'
      funcion={multi}
      />

      <Boton
      texto='divicion'
      funcion={divi}
      />
      
      <Text style={{color: 'red', fontSize:30}}>Numero 1: {numero1}</Text>
      <Text style={{color: 'red', fontSize:30}}>Numero 2: {numero2}</Text>
      <Text style={{color: 'red', fontSize:30}}>Total: {resultado}</Text>

      

      <Boton
      texto='Lipiar'
      funcion={limpiar}
      />
     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
