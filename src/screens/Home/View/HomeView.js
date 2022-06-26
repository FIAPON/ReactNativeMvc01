import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight, 
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './HomeStyle' //Importando o Style

const HomeView = (props) => {
    //juntando o texto Tempo com o count_info vindo do props
    const teste = "Tempo: " + props.count_info;
    
    //Passando o metodo recebido pela props no onPress
    return (
      <View style={styles.container}>
        <Text style={styles.textInfo}> {teste} </Text>
        <TouchableOpacity underlayColor="white" onPress={props.onButtonPressed}>
          <View style={styles.viewButton} >
            <Text>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableHighlight underlayColor="white" onPress={props.onButtonPressed}>
          <View style={styles.viewButton} >
            <Text>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableWithoutFeedback onPress={props.onButtonPressed} >
          <View style={styles.viewButton}>
            <Text >TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>

      </View>
    )


}
export default HomeView;
