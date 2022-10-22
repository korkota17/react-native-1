import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])
  function goalInputHandler(enteredText){
    setEnteredGoal(enteredText)
  }

  function addGoalHandler(){
    setCourseGoals(currentCourseGoals =>[...courseGoals, enteredGoalText]);
  }

  return (
    <View style={styles.appContainer} >
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your Goal' onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View  style={styles.goalsContainer}>
      <ScrollView>
        {courseGoals.map((goal) =>
        ( <View key={''} style={styles.goalItem}>
           <Text style={styles.goalText}  >{goal}</Text> 
           </View>
           ))}
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 appContainer: {
  flex: 1,
  paddingTop: 50,
  paddingHorizontal: 16
 },
  inputContainer:{
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    
  },
  textInput:{
    padding: 8,
    borderWidth: 1,
    borderColor: 'gray',
    width: '70%',
    marginRight: 8,
    marginBottom: 50,
    },
    goalsContainer: {
      flex: 5
    },
    goalItem: {
      margin: 8,
      padding: 8,
      borderRadius: 6,
      backgroundColor: 'purple',
      
    },
    goalText: {
      color: 'white'
    }
});
