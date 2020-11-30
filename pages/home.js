import React, { useState }  from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity 
} from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 5, body: 'lorem ipsum', key: '2' },
    { title: 'Not so \'Final\' Fantasy', rating: 5, body: 'lorem ipsum', key: '3' },
  ]);
  
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Review Details', item)}
          >
            <Text style={globalStyles.title}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}