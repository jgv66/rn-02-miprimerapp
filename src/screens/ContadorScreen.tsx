

import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

const ContadorScreen = () => {

  console.log(222);

  const [contador, setContador] = useState(10);

  console.log(333);

  return (

    <View style={styles.container}>

        <Text style={styles.title}>
            Contador: {contador}
        </Text>

        <Fab
            title="+1"
            position="br"
            onPress={ () => setContador( contador + 1) }
        />

        <Fab
            title="-1"
            position="bl"
            onPress={ () => setContador( contador - 1) }
        />

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        top: -15,
    },
  });

  export default ContadorScreen;


