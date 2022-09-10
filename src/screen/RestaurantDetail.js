import React from 'react'
import { StatusBar, View } from 'react-native'
import { Divider } from 'react-native-elements'
import { CustomColors } from '../assets/CustomColors'
import About from '../components/restaurantDetail/About'

export default RestaurantDetail = () => {
    return (
        <View style={{ flex: 1, backgroundColor: CustomColors.gray }}>
            <StatusBar
                hidden={true}
            />
            <About />
            <Divider size={1.8} style={{ marginVertical: 20 }} />
        </View>
    )
}