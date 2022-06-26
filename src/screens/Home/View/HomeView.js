import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from './HomeStyle' //Importando o Style

class HomeView extends React.Component {

  constructor() {
    super();
  }

  render() {
    const teste = "Hello World";

    return (
      <View style={styles.container}>
        <Text style={styles.textInfo}> {teste} </Text>
      </View>
    )
  }
}

export default HomeView;
