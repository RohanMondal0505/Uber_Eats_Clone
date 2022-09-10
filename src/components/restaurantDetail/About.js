import React from 'react';
import { Image, Text, View } from 'react-native';
import { CustomColors } from '../../assets/CustomColors';


export default About = props => {

    const { name, image, price, reviews, rating, categories } = props.route.params;

    const formattedCategories = categories.map(cat => cat.title).join(' • ');

    const description = `${formattedCategories} ${price ? " • " + price : ""} • 🎟️ • ${rating} 🌟 (${reviews}+)`;

    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantTitle name={name} />
            <RestaurantDescription description={description} />
        </View>
    )
}

const RestaurantImage = props => (
    <Image source={{ uri: props.image }} style={{ width: '100%', height: 180 }} />
)

const RestaurantTitle = props => (
    <Text style={{
        color: CustomColors.black,
        fontSize: 29,
        fontWeight: '600',
        marginTop: 10,
        marginHorizontal: 15,
    }}>{props.name}</Text>
)

const RestaurantDescription = props => (
    <Text style={{
        color: CustomColors.black,
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: '400',
        fontSize: 15.5,
    }}>{props.description}</Text>
)