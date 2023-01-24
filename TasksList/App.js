import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import TasksScreen from './src/screens/Tasks';


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const App = ({children, title}) => {
return(
  <SafeAreaView style={{flex:1, }}>
    <TasksScreen/>
  </SafeAreaView>
)
};



const styles = StyleSheet.create({
 
});

export default App;
