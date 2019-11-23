import React , { useState } from 'react';
import { View , Button , StyleSheet ,TextInput , Modal } from 'react-native';

const GoalInput = props => {

const [enteredGoal, setEnteredGoal] = useState('');

const goalInputHandler = (enteredGoal) => {
    setEnteredGoal(enteredGoal);
}

const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
};

return  <Modal visible={props.visible} animationType="slide" >
            <View style={styles.inputcontainer}>
                <TextInput 
                    placeholder="Course Goal" 
                    style={styles.textinput} 
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button 
                            title="ADD" 
                            onPress={addGoalHandler}/>
                    </View>
                    <View style={styles.button}>
                        <Button 
                            title="CANCEL" 
                            color="red" 
                            onPress={props.onCancel}/>
                    </View>
                </View>
            </View>
        </Modal>
};

const styles = StyleSheet.create({
    textinput : {
        width: '80%',
        borderWidth : 1,
        borderColor : 'black', 
        borderRadius : 1 ,
        padding: 10,
        marginBottom :10
      },
      inputcontainer : {
        flex: 1,
        justifyContent : 'center',
        alignItems: 'center',
      },
      buttonContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        width : '60%'
      },
      button : {
          width: '40%'
      }
});

export default GoalInput;