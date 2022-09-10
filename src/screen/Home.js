import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { CustomColors } from '../assets/CustomColors';
import BottomTabs from '../components/home/BottomTabs';
import Categories from '../components/home/Categories';
import HeaderTabs from '../components/home/HeaderTabs';
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems';
import SearchBar from '../components/home/SearchBar';


const Home = ({navigation}) => {

  const [restaurantData, setRestaurantData] = useState([localRestaurants]);
  const [activeTab, setActiveTab] = useState('Delivery');
  const [city, setCity] = useState('New York');
//   SanDiego
//   San Francisco
  const getRestaurantFromYelp = async () => {

    const YELP_API_KEY = 'JG5bWmFNSo8AyNRR60ZHYo7I-3eyM_XQt7R7FxWDCkSIGPzUUdbUyKRcrA0nNAyjY8FyvpnWCP3xDxA1W3AgthF9Z4sZR1UTbY7BUVMiqqAJYl04CadGML1hpQ8WY3Yx';

    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`
      },
    };

    const tempRestaurant = await fetch(yelpUrl, apiOptions);
    let result = await tempRestaurant.json();
    result = await result.businesses.filter((businesses) => businesses.transactions.includes(activeTab.toLowerCase()));
    setRestaurantData([...result]);
  }

  useEffect(() => {
    getRestaurantFromYelp()
  }, [city, activeTab])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: CustomColors.gray }}>
      <StatusBar
        backgroundColor={CustomColors.white}
        barStyle={'dark-content'}
      // translucent
        hidden={true}
      />

      <View style={{ backgroundColor: CustomColors.white, padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
      </ScrollView>

      <Divider width={1} />
      <BottomTabs />

    </SafeAreaView>
  )
}

export default Home