import React from 'react'
import { Text,Image,StyleSheet,View,Pressable } from 'react-native'



export default function TaskTile({task, onUpdateTask, onDeleteTask}) {

    const onChangeStatus = () => {
        onUpdateTask(task.id)
    }
    
    const _onDeleteTask = () => {
        onDeleteTask(task.id)
    }

  return (
    <View style={styles.container}>
        <Pressable onPress={onChangeStatus} style={styles.subContainer}>
            <Image
                style={styles.check}
                source={task.isCompleted ? require('../../../assets/icons/checkcircle.png') : require('../../../assets/icons/circle.png')}
            />
            <Text style={styles.title}>{task.title}</Text>
        </Pressable>
        <Pressable onPress={_onDeleteTask}>
        <Image
            style={styles.check}
            source={require('../../../assets/icons/delete.png')}
        />
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
       marginLeft:20,
       fontSize: 16,
    },
    subContainer: {
        flexDirection : "row",
        alignItemes: "center",
        justifyContent: "flex-start",
    },
    container: {
        flexDirection : "row",
        alignItemes: "center",
        padding:20,
        justifyContent: "space-between",
    },
    check:{
        width:26,
        height:26,
    }
})