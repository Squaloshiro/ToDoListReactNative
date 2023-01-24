import React, {useState} from 'react'
import { Text, FlatList, View, StyleSheet,Pressable } from 'react-native';
import  Header  from "../../components/Header"
import TaskTile from './TaskTile';
import TaskForm from './TaskForm';
import FloatingBtn from '../../components/FloatingBtn';
import Counter from '../../components/Counter';



export default function TasksScreen() {
    const [tasks, setTasks] = useState([]);
    const [isFormVisble, setIsFormVisible] = useState(false);

    const renderItem = ({item}) =>{
        return <TaskTile task={item} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask}/>
    };

    const onAddTask = (title) =>{
        setTasks([...tasks, {
            id: Date.now(),
            title,
            isCompleted: false
        }])
    }

    const onUpdateTask = (id) => {
        let newTasks = [];

        tasks.forEach(t => {
            if(t.id !== id) {
                newTasks.push(t)
                return
            }

            newTasks.push({
                id,
                title: t.title,
                isCompleted: !t.isCompleted
            })
        })
        setTasks(newTasks)
    }

    const onDeleteTask = (id) => {
        let newTasks = [];

        tasks.forEach(t => {
            if(t.id !== id) {
                newTasks.push(t)
                return
            }
        })
        setTasks(newTasks)
    }

    const _toggleForm = () => {
        setIsFormVisible(!isFormVisble)
    }

  return (
    <>
        <FlatList
        ListHeaderComponent={
        <>
        <Header/>
        {isFormVisble && <TaskForm onAddTask={onAddTask}/>}
        <View style={styles.containerCounters}>
        <Counter nb={tasks.length} title="Tâches crées"/>
        <Counter nb={tasks.filter(t => t.isCompleted === true).length} title="Tâches éffectuées"/>
        </View>
        </>
        }
        contentContainerStyle={{flexGrow:1}}
        data={tasks}
        keyExtractor={(item, index)=>index.toString()}
        renderItem={renderItem}
    />
        <FloatingBtn toggle={_toggleForm} isOpen={isFormVisble}/>
    </>
    
  )
}

const styles = StyleSheet.create({
    containerCounters:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:10,
        paddingHorizontal:20
    }
})
