import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {CustomColors} from '../../assets/CustomColors';

export default function ViewCart({navigation, restaurantName}) {
    const items = useSelector(state => state.cartReducer.selectedItems.items);
    const total = items
        .map(item => Number(item.price.replace('$', '')))
        .reduce((prev, curr) => prev + curr, 0);

    let tempTotal = total.toFixed(2);
    const totalUSD = tempTotal.toLocaleString('en', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <>
            {total ? (
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        width: '100%',
                        position: 'absolute',
                        bottom: 130,
                        zIndex: 999,
                    }}>
                    <View
                        style={{
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
                                position: 'relative',
                            }}>
                            <Text
                                style={{
                                    color: CustomColors.white,
                                    fontSize: 20,
                                }}>
                                View Cart
                            </Text>
                            <Text
                                style={{
                                    position: 'absolute',
                                    right: 20,
                                    top: 15,
                                    fontSize: 18,
                                    color:CustomColors.white,
                                }}>
                                $ {totalUSD}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <></>
            )}
        </>
    );
}
