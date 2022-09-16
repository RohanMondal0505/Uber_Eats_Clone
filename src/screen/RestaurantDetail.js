import React from 'react'
import { StatusBar, View } from 'react-native'
import { Divider } from 'react-native-elements'
import { CustomColors } from '../assets/CustomColors'
import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems'
import ViewCart from '../components/restaurantDetail/ViewCart'

export default RestaurantDetail = ({ route, navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: CustomColors.gray }}>
            <StatusBar
                hidden={true}
            />
            <About route={route} />
            <Divider size={1.8} color={CustomColors.black} style={{ marginVertical: 20, }} />
            <MenuItems restaurantName={route.params.name} />
            <ViewCart navigation={navigation} restaurantName={route.params.name} />
        </View>
    )
}