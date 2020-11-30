import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title='G' }) {
  const openMenu = () => {
    navigation.openDrawer()
  }

  return (
    <View styles={styles.header}>
      <MaterialIcons 
        name='menu' 
        size={28} 
        onPress={openMenu} 
        style={styles.icon} 
      />

      <View>
        <Text style={styles.headerText}>
          {title}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    // width: Dimensions.get('screen').width,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: -110,
  }
})
















// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
// } from 'react-native';
// import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

// export default function Header({ navigation, route }) {
//   const [headerTitle, setHeaderTitle] = useState('');

//   useEffect(() => {
//     console.log('yellow', getFocusedRouteNameFromRoute(route));
//     const routeName = getFocusedRouteNameFromRoute(route);
//     console.log(`routeName: ${routeName}`);

//     switch (routeName) {
//       case 'Home':
//         setHeaderTitle('Home');
//         break;
//       case 'Review Details':
//         setHeaderTitle('Review Details Pog');
//         break;
//     }
//   }, [route])

//   return (
//     <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'transparent', fontSize: 20, justifyContent: 'center'}}>
//       <Text>
//         {headerTitle}
//       </Text>
//     </View>
//   )
// }