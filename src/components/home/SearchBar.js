import React from 'react';
import { Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Iconicons from 'react-native-vector-icons/Ionicons';
import { CustomColors } from '../../assets/CustomColors';


const SearchBar = ({ cityHandler }) => {
    return (
        <View style={{ marginTop: 15, flexDirection: 'row', }}>
            {/* FIXME: */}
            {/* <TextInput */}
            <GooglePlacesAutocomplete
                // FIXME:
                query={{ key: "" }}
                onPress={(data, details = null) => {
                    const city = data.description.split(",")[0];
                    cityHandler(city)
                }}
                // FIXME:
                onChangeText={txt => {
                    cityHandler(txt)
                    console.log(txt)
                }}
                placeholder='Search'
                textInputProps={{
                    placeholderTextColor: '#888888',
                }}
                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        color: CustomColors.black,
                        borderRadius: 20,
                        fontSize: 16,
                        marginTop: 7,
                        fontWeight: '700',
                    },
                    textInputContainer: {
                        backgroundColor: CustomColors.gray,
                        borderRadius: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 10,
                    },
                }}
                renderLeftButton={() => (
                    <View style={{ marginLeft: 10 }}>
                        <Iconicons
                            name="location-sharp"
                            size={24}
                            style={{ marginRight: 6, color: CustomColors.black }}
                        />
                    </View>
                )}
                renderRightButton={() => (
                    <View style={{
                        flexDirection: 'row',
                        marginRight: 8,
                        backgroundColor: CustomColors.white,
                        padding: 9,
                        borderRadius: 30,
                        alignItems: 'center',
                        color: 'red'
                    }}>
                        <AntDesign
                            name="clockcircle"
                            size={11}
                            style={{ marginRight: 6, color: CustomColors.black }}
                        />
                        <Text style={{ color: CustomColors.black }}>Search</Text>
                    </View>
                )}
            />


        </View>
    )
}

export default SearchBar