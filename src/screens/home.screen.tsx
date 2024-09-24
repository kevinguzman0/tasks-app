import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {useGetTasksQuery} from '@store/apis/task.api';

export default function HomeScreen({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  const {data, isLoading} = useGetTasksQuery('');

  return (
    <View>
      <Text>HomeScreen</Text>
      {isLoading && <Text>Loading...</Text>}

      <View>
        {data?.map(task => (
          <Text key={task._id}>{task.title}</Text>
        ))}
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('')}>
        <Text>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
}
