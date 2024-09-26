import {View , Text , TouchableOpacity ,Switch, Alert} from 'react-native'

interface TaskProps {
  data: string;
  date: string;
  complete: boolean
  onToggle: Function
  onDelete : Function
  id: number
}

export default function Task({ data , date , complete , onToggle , onDelete , id}: TaskProps) {
  return (
    <TouchableOpacity 
    style={{backgroundColor: 'dimgray', padding:15 , marginHorizontal: '10%' , marginVertical: '4%', flexDirection:'row', justifyContent:'space-between', borderRadius: 10}}
    onLongPress={() => {
        Alert.alert("Do you want to delete it ?" , `the task is ${data}` ,[
          {
            text: "Cancel",
            onPress: () => {}
          },
          {
            text: "Delete",
            onPress: () => {onDelete(id)}
          }
        ])
      }
    }
    >
      <View  style={{paddingHorizontal:10, gap:10}}>
        <Text style={{color: 'white'}}>
          {data}
        </Text>
        <Text style={{color: 'white'}}>{date}</Text>
      </View>
      <Switch value={complete} onValueChange={() => {onToggle(id)}}/>
  </TouchableOpacity>
  )
}
