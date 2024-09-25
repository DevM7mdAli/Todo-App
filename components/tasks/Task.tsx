import {View , Text , Switch} from 'react-native'

interface TaskProps {
  data: string;
  date: string;
  complete: boolean
  toggle: Function
  id: number
}

export default function Task({ data , date , complete , toggle , id}: TaskProps) {
  return (
    <View style={{backgroundColor: 'dimgray', padding:15 , marginHorizontal: '10%' , marginVertical: '4%', flexDirection:'row', justifyContent:'space-between', borderRadius: 10}}>
      <View  style={{paddingHorizontal:10}}>
        <Text style={{color: 'white'}}>
          {data}
        </Text>
        <Text style={{color: 'white'}}>{date}</Text>
      </View>
      <Switch value={complete} onValueChange={() => {toggle(id)}}/>
  </View>
  )
}
