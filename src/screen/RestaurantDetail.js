import React from 'react'
import { StatusBar, View } from 'react-native'
import About from '../components/restaurantDetail/About'

export default RestaurantDetail = () => {
    return (
        <View style={{ flex: 1, }}>
            <StatusBar
                backgroundColor="transparent"
                barStyle={'default'}
                translucent
            />
            <About />
        </View>
    )
}