import Task from '@/components/tasks/Task';
import { useState } from 'react';
import {View , Text, TextInput, Button, Alert, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface TaskContains {
  name: string
  date: string
  complete: boolean
}



export default function HomeScreen() {
  const [tasks, setTasks] = useState<TaskContains[]>([])
  const [input , setInput] = useState('')


      function addTask(date: Date){
      if(input.length !== 0)
        {
          setTasks([
            ...tasks,
            {name: input , date: `the time created at ${date.getHours()}${date.getHours() >= 12 ? 'PM' : 'AM'} :${date.getMinutes()}` , complete: false}
            ]
          )
          Alert.alert('the task has been added', `the task is '${input}'`);
          setInput('')
        } else {
          Alert.alert("You can't add empty task");
        }
      }

      function toggling(id: number){
        setTasks(tasks.map((task ,index) => (id == index ? {...task, complete: !task.complete } : task)))
      }



  return (
      <View style={{flex: 1, backgroundColor: '#111f1f'}}>
        <SafeAreaView style={{gap:12}} >
            <Text style={{color: '#ffffff', alignSelf: 'center', marginTop: 20, fontSize:24, marginBottom:20, fontWeight:'bold'}}>Welcome to Todo</Text>
            <View style={{flexDirection: 'row' }}>
              <TextInput style={{padding: 15, borderWidth:2, marginHorizontal: 30, borderColor: 'white', color: 'white', flex:1,}} value={input} onChangeText={setInput} placeholder='Your Task ...' placeholderTextColor={'white'}/>
              <Button  title='Press' color={"#1f2151"}  onPress={() => {addTask(new Date())}}/>
            </View>
            <ScrollView  style={{marginTop:'10%', marginBottom: '35%' }}>
              {
                tasks.map((val , index) => {
                  return(
                    <Task data={val.name} date={val.date} complete={val.complete} toggle={toggling} id={index} key={index}/>
                  )
                })
              }
            </ScrollView>
        </SafeAreaView>
      </View>
  );
}