import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Divider} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {CustomColors} from '../../assets/CustomColors';

const food = [
    {
        title: 'Lasagna',
        description: 'With butter lettuce, tomato and sauce bechamel',
        price: '$13.50',
        image: 'https://images.unsplash.com/photo-1662743065111-435a92c58a5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    },
    {
        title: 'Tandoori Chicken',
        description: 'Amazing Indian dish with tenderloin chicken off the size',
        price: '$19.99',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
    },
    {
        title: 'Burger King',
        description: 'It is so good',
        price: '$9.99',
        image: 'https://images.unsplash.com/photo-1618644195280-44360cfd6f69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=707&q=80',
    },
    {
        title: 'Tandoori Fri Chicken',
        description: 'Amazing Indian dish with tenderloin chicken off the size',
        price: '$19.99',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
    },
    {
        title: 'Burger King Jumbo',
        description: 'It is so good',
        price: '$9.99',
        image: 'https://images.unsplash.com/photo-1618644195280-44360cfd6f69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=707&q=80',
    },
    {
        title: 'Butter Chicken',
        description: 'With butter lettuce, tomato and sauce bechamel',
        price: '$13.50',
        image: 'https://images.unsplash.com/photo-1662743065111-435a92c58a5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    },
    {
        title: 'Tandoori Rost Chicken',
        description: 'Amazing Indian dish with tenderloin chicken off the size',
        price: '$19.99',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
    },
    {
        title: 'KFC',
        description: 'It is so good',
        price: '$9.99',
        image: 'https://images.unsplash.com/photo-1618644195280-44360cfd6f69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=707&q=80',
    },
];

export default function MenuItems({restaurantName}) {
    const dispatch = useDispatch();
    const selectItem = (item, checkboxValue) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                ...item,
                restaurantName: restaurantName,
                checkboxValue: checkboxValue,
            },
        });
    };
    const cartItems = useSelector(state => state.cartReducer.selectedItems.items);

    const isFoodInCart = (food, cartItems) =>
        Boolean(cartItems.find(item => item.title === food.title));

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {food.map((food, index) => (
                <View key={index}>
                    <View style={styles.menuItemsStyle}>
                        <View style={styles.container}>
                            <BouncyCheckbox
                                iconStyle={{
                                    borderColor: CustomColors.lightGray,
                                    borderRadius: 0,
                                }}
                                fillColor={CustomColors.green}
                                innerIconStyle={{borderRadius: 0}}
                                isChecked={isFoodInCart(food, cartItems)}
                                onPress={checkboxValue =>
                                    selectItem(food, checkboxValue)
                                }
                            />
                            <FoodInfo food={food} />
                        </View>
                        <FoodImage food={food} />
                    </View>
                    <Divider
                        size={0.5}
                        orientation="vertical"
                        style={{marginHorizontal: 20}}
                    />
                </View>
            ))}
        </ScrollView>
    );
}

const FoodInfo = props => (
    <View style={{width: 240, justifyContent: 'space-evenly'}}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text style={styles.textStyle}>{props.food.description}</Text>
        <Text style={styles.textStyle}>{props.food.price}</Text>
    </View>
);

const FoodImage = props => (
    <Image
        source={{uri: props.food.image}}
        style={{width: 100, height: 100, borderRadius: 8}}
    />
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        // borderColor: '#000', borderWidth: 1
    },
    menuItemsStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    textStyle: {
        color: CustomColors.black,
    },
    titleStyle: {
        color: CustomColors.black,
        fontSize: 19,
        fontWeight: '600',
    },
});
