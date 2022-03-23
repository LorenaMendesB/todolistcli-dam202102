import React from 'react';
import { TouchableOpacity, FlatList, Text, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function TaskCard({ onPress,renderItem, ...rest }) {
   
<FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.buttonTask}
            onPress={() => onPress(item.id)}
          {...rest}
          >
            <Text style={styles.textTask}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )
        }
 /> 

}