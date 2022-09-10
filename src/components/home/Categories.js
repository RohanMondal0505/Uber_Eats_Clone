import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { CustomColors } from '../../assets/CustomColors'

const Item = [
  {
    image: require('../../assets/images/shopping-bag.png'),
    text: 'Pick-up',
  },
  {
    image: require('../../assets/images/soft-drink.png'),
    text: 'Soft Drinks',
  },
  {
    image: require('../../assets/images/bread.png'),
    text: 'Bakery Items',
  },
  {
    image: require('../../assets/images/fast-food.png'),
    text: 'Fast Food',
  },
  {
    image: require('../../assets/images/deals.png'),
    text: 'Deals',
  },
  {
    image: require('../../assets/images/coffee.png'),
    text: 'Coffee & Tea',
  },
  {
    image: require('../../assets/images/desserts.png'),
    text: 'Desserts',
  },
  {
    image: require('../../assets/images/deals.png'),
    text: 'Deals',
  },
  {
    image: require('../../assets/images/coffee.png'),
    text: 'Coffee & Tea',
  },
  {
    image: require('../../assets/images/desserts.png'),
    text: 'Desserts',
  },
]

export default Categories = () => {
  return (
    <View style={{
      marginTop: 5,
      backgroundColor: CustomColors.white,
      paddingVertical: 10,
      paddingLeft: 20,
    }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          Item.map((item, index) => (
            <View key={index} style={{ alignItems: 'center', marginRight: 30 }}>
              <Image source={item.image}
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: 'contain',
                }} />
              <Text style={{
                fontSize: 13,
                fontWeight: '900',
                color: CustomColors.black,
              }}>{item.text}</Text>
            </View>
          ))
        }

      </ScrollView>
    </View>
  )
}

