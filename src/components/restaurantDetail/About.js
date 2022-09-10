import React from 'react';
import { Image, Text, View } from 'react-native';
import { CustomColors } from '../../assets/CustomColors';

const yelpRestaurantInfo = {
    name: "Farmhouse Kitchen Thai Cuisine",
    image: "https://images.unsplash.com/photo-1626777553635-be342a766750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
    price: '$$',
    review: '1500',
    rating: "4.5",
    categories: [{ title: 'Thai' }, { title: 'Comfort Food' }],
}


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