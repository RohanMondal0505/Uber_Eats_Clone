import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { CustomColors } from '../../assets/CustomColors';

export default BottomTabs = () => {
  return (
    <View style={{
      flexDirection: 'row',
      backgroundColor: CustomColors.white,
      padding: 10,
      paddingHorizontal: 30,
      justifyContent: 'space-between'
    }}>
      <Icon name="home" text="Home" />
      <Icon name="search" text="Browse" />
      <Icon name="shopping-bag" text="Grocery" />
      <Icon name="receipt" text="Orders" />
      <Icon name="user" text="Account" />
    </View>
  )
}

const Icon = (props) => (
  <TouchableOpacity
    onPress={() => { }}>
    <FontAwesome5
      name={props.name}
      size={25}
      style={{
        marginBottom: 3,
        alignSelf: 'center',
        color:'black'
      }}
    />
    <Text>{props.text}</Text>
  </TouchableOpacity>
)