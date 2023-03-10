import React, {useState} from 'react'
import { TextInput, StyleSheet, Button, View } from 'react-native'


export default function TaskForm({onAddTask}) {

const [newTitle, setNewTitle] = useState("")

const onChangeText = (val) => {
    setNewTitle(val)
}

const onAddNewTask = () =>{
    if(newTitle === "") return
    onAddTask(newTitle)
    setNewTitle("")
}

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={newTitle}
        placeholder="Nouvelle tâche"
      />
      <Button
        onPress={onAddNewTask}
        title="Ajouter"
        color="blue"
      />
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        borderColor :"black",
        borderWidth:1,
        borderRadius:5,
        width:"70%",
        height:40
    },
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:20,
        marginTop:10
,    }
})