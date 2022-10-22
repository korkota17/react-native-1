import {View, TextInput, Button, StyleSheet} from 'react-native';
import {useState} from 'react';


function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState('')


    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }


    return (
        <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your Goal' onChangeText={goalInputHandler} value={enteredGoalText} />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
    )
};

export default GoalInput;

const styles = StyleSheet.create({
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
})