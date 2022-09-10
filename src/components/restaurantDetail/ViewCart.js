import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { CustomColors } from '../../assets/CustomColors'

export default function ViewCart({ navigation, restaurantName }) {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            position: 'absolute',
            bottom: 130,
            zIndex: 999,
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100%',
            }}>
                <TouchableOpacity
                    style={{
                        marginTop: 20,
                        backgroundColor: CustomColors.black,
                        alignItems: 'center',
                        padding: 13,
                        borderRadius: 30,
                        width: 300,
                        position: 'relative'
                    }}
                >
                    <Text style={{ color: CustomColors.white,fontSize:20 }}>View Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}