import React from 'react'
import { StatusBar, View } from 'react-native'
import { Divider } from 'react-native-elements'
import { CustomColors } from '../assets/CustomColors'
import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems'

export default RestaurantDetail = ({route}) => {
    return (
        <View style={{ flex: 1, backgroundColor: CustomColors.gray }}>
            <StatusBar
                hidden={true}
            />
            <About route={route} />
            <Divider size={1.8} color={CustomColors.black} style={{ marginVertical: 20, }} />
            <MenuItems/>
        </View>
    )
}