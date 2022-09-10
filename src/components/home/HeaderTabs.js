import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { CustomColors } from '../../assets/CustomColors';

export default HeaderTabs = (props) => {

  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: CustomColors.white,
    }}>
      <HeaderButton
        title={'Delivery'}
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab} />

      <HeaderButton
        title={'Pickup'}
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab} />
    </View>
  )
}

const HeaderButton = (props) => (
  <TouchableOpacity
    onPress={() => props.setActiveTab(props.title)}
    style={{
      backgroundColor: props.activeTab === props.title
        ? CustomColors.black : CustomColors.white,
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}>
    <Text style={{
      color: props.activeTab === props.title ? CustomColors.white : CustomColors.black,
      fontSize: 15,
      fontWeight: '900',
    }}>{props.title}</Text>
  </TouchableOpacity>
)
