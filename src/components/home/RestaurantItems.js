import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { CustomColors } from '../../assets/CustomColors'

export const localRestaurants = [
  {
    name: " Beachside Bar ",
    image_url: "http://cdn.cnn.com/cnnnext/dam/assets/200120161356-cnn-worlds-best-new-restaurants---madera---simon-brown-photography-1-1.jpg",
    categories: [" Cafe ", " Bar "],
    price: " $$ ",
    reviews: 1244,
    rating: 4.5,
  },
  {

    name: " Benignant ",
    image_url: "https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2947%2Ftrend20200930101748.jpg",
    categories: [" Cafe ", " Bar "],
    price: " $$ ",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "Japanese Restaurants",
    image_url: "http://cdn.cnn.com/cnnnext/dam/assets/200120161356-cnn-worlds-best-new-restaurants---madera---simon-brown-photography-1-1.jpg",
    categories: [" Cafe ", " Bar "],
    price: " $$ ",
    reviews: 1244,
    rating: 4.5,
  },
  {

    name: "Indian Restaurants",
    image_url: "https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2947%2Ftrend20200930101748.jpg",
    categories: [" Cafe ", " Bar "],
    price: " $$ ",
    reviews: 1244,
    rating: 3.7,
  },
]


export default RestaurantItems = (props) => {
  return (
    <>
      {
        props.restaurantData.map((restaurant, index) => (
          <TouchableOpacity key={index} activeOpacity={.51} style={{ marginBottom: 5 }}>
            <View style={{
              marginTop: 10,
              padding: 15,
              backgroundColor: CustomColors.white,
            }}>
              <RestaurantImage image={restaurant.image_url} />
              <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
            </View>
          </TouchableOpacity>
        ))
      }
    </>
  )
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{ uri: props.image }}
      style={{
        width: '100%',
        height: 180,
      }}
    />
    <TouchableOpacity
      style={{ position: 'absolute', right: 20, top: 20 }}
    >
      <MaterialCommunityIcons name='heart-outline' size={25} color='#fff' />
    </TouchableOpacity>
  </>
)

const RestaurantInfo = (props) => (
  <View style={{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  }}>
    <View>
      <Text style={{
        fontSize: 15,
        fontWeight: 'bold',
        color: CustomColors.black
      }}>{props.name}</Text>
      <Text style={{ fontSize: 15, color: CustomColors.darkGray }}>30-45 • min</Text>
    </View>
    <View style={{
      backgroundColor: "#d0d0d0",
      height: 30,
      width: 30,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{ color: CustomColors.white }}>{props.rating}</Text>
    </View>
  </View>
)