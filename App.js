import React, { useState } from 'react';
import { 
  StyleSheet, 
  Button,  
  View , 
  FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [courseGoals , setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoadHandle = goalTitle => {
    setCourseGoals(currentGoals => [
      ...courseGoals,
      {key: Math.random().toString() , value: goalTitle}
    ]);
    setIsAddMode(false);
  }

  const CancelGoalAdditionModel = () => {
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => 
      goal.key !== goalId);
    });
  }

  return (
    <View style={styles.Screen}>
      
      <Button title="Add New Goal" 
      onPress={() => setIsAddMode(true)}/>
      
      <GoalInput 
      visible={isAddMode} 
      onAddGoal={addGoadHandle}
      onCancel={CancelGoalAdditionModel}/>
      
      <View>
        {/* <ScrollView>
          {courseGoals.map((goal) => 
          <View key={goal} style={styles.listItem}>
              <Text>{goal}</Text>
          </View>
          )}
        </ScrollView> */}

        <FlatList 
            data={courseGoals} 
            keyExtractor={(item, index) => item.key} 
             renderItem={itemData => (
              <GoalItem 
              id={itemData.item.key} 
              onDelete={removeGoalHandler} 
              title={itemData.item.value}
              />
            )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  Screen : {
    padding : 50,
    flex: 1
  }
});
