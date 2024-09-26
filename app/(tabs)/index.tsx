import Task from '@/components/tasks/Task';
import { useState } from 'react';
import {View , Text, TextInput, TouchableOpacity, Alert, ScrollView} from 'react-native';
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

      function handleDelete(id: number){
        setTasks(tasks.filter((task, index) => index !== id));
      }



  return (
      <View style={{flex: 1, backgroundColor: '#111f1f'}}>
        <SafeAreaView style={{gap:12}} >
            <Text style={{color: '#ffffff', alignSelf: 'center', marginTop: 30, fontSize:24, marginBottom:40, fontWeight:'bold'}}>Welcome to Todo</Text>
            <View style={{flexDirection: 'row',  marginHorizontal: 30, gap:15}}>
              <TextInput 
              style={{padding: 15, borderWidth:2, borderColor: 'white', color: 'white', flex:1, borderRadius:10, fontSize:19}} 
              value={input} 
              onChangeText={setInput} 
              placeholder='Your Task ...' 
              placeholderTextColor={'white'}/>
              <TouchableOpacity 
              style={{backgroundColor: '#1f2151', padding:20, borderRadius:10}}
              onPress={() => {addTask(new Date())}}
              >
                <Text style={{color: 'white'}}>Press</Text>
              </TouchableOpacity>
            </View>
            <ScrollView  style={{marginTop:'10%', marginBottom: '50%' }}>
              {
                tasks.map((val , index) => {
                  return(
                    <Task data={val.name} date={val.date} complete={val.complete} onToggle={toggling} onDelete={handleDelete} id={index} key={index}/>
                  )
                })
              }
            </ScrollView>
        </SafeAreaView>
      </View>
  );
}