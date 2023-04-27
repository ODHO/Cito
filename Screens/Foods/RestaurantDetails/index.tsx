import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Color} from '../../../Constants';
import Header from '../../../Components/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
const RestaurantDetails = ({navigation, route}: any) => {
  const data = route.params;

  const [searchText, setSearchText] = useState('');
  const [selectService, setSelectService] = useState([
    {
      id: 1,
      Foodtype: 'Burger',
      foodName: 'Beef Burger',
      price: '500',
      raiting: '4.8',
      min: '20 mn',
      image: require('../../../Images/burger.png'),
      Description:
        'dfs s c  cdsd csd dc sddc sd csd c sdc sdc sd c sdc sdc sd c',
    },
    {
      id: 2,
      Foodtype: 'pizza',
      foodName: 'sss',
      price: '500',
      raiting: '4.8',
      min: '20 mn',
      image: require('../../../Images/pizza.png'),
      Description:
        'dfs s c  cdsd csd dc sddc sd csd c sdc sdc sd c sdc sdc sd c',
    },
    {
      id: 3,
      Foodtype: 'pizza',
      foodName: 'sss',
      price: '500',
      raiting: '4.8',
      min: '20 mn',
      image: require('../../../Images/pizza.png'),
      Description:
        'dfs s c  cdsd csd dc sddc sd csd c sdc sdc sd c sdc sdc sd c',
    },
    {
      id: 4,
      Foodtype: 'pasta',
      foodName: 'xuz',
      price: '500',
      raiting: '4.8',
      min: '20 mn',
      image: require('../../../Images/deal.png'),
      Description:
        'dfs s c  cdsd csd dc sddc sd csd c sdc sdc sd c sdc sdc sd c',
    },
  ]);

  const [selectedSubCategory, setSelectedSubCategory] = useState<any>(null);
  const [filterSubCategory, setFilterSubCategory] = useState<any>([]);
  const handleCategoryClick = (e: any) => {
    setSelectedSubCategory(e.Foodtype);
    const subdata = selectService.filter(
      (data: any) => data.Foodtype === e.Foodtype,
    );
    setFilterSubCategory(subdata);
  };
  const [foundName, setFoundName] = useState([]);
  const searchName = (e: any) => {
    setSearchText(e);
    let filteredItems: any = selectService.filter((x: any) =>
      x.Foodtype.toLowerCase().includes(e.toLowerCase()),
    );
    setFoundName(filteredItems);
  };

  return (
    <ScrollView style={{flex: 1}}>
      <View
        style={{
          backgroundColor: Color.mainColor,
          paddingHorizontal: 10,
          paddingBottom: 20,
        }}>
        <Header
          navigation={navigation}
          backBtn={true}
          backBtnColor="white"
          cart
          cartStyle="white"
          title={data.resturantName}
          titleColor="white"
        />
        {/* Search */}
        <View
          style={{
            width: '100%',
            borderWidth: 1,
            borderColor: Color.white,
            borderRadius: 10,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 4,
            paddingHorizontal: 10,
            alignSelf: 'center',
            backgroundColor: Color.white,
            marginTop: 15,
          }}>
          <TextInput
            placeholder="Search"
            placeholderTextColor={Color.mainColor}
            style={{
              width: '90%',
              padding: 8,
              color: Color.mainColor,
              fontSize: 16,
            }}
            onChangeText={e => searchName(e)}
          />
          <TouchableOpacity>
            <Text>
              <Icon name="search" size={25} color={Color.mainColor} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* food category */}

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            gap: 5,
            marginVertical: 10,
            marginHorizontal: 10,
          }}>
          {selectService &&
            selectService
              .filter(
                (e: any, i: number, arr: any[]) =>
                  arr.findIndex((f: any) => f.Foodtype === e.Foodtype) === i,
              )
              .map((e: any, i: number) => {
                const isSelected = e.Foodtype === selectedSubCategory;
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={() => handleCategoryClick(e)}
                    style={{
                      backgroundColor: isSelected ? Color.mainColor : 'white',
                      paddingHorizontal: 25,
                      paddingVertical: 10,
                      borderRadius: 20,
                      borderWidth: 1,
                    }}>
                    <Text
                      style={[
                        styles.cancleButtonText,
                        {
                          color: isSelected ? 'white' : Color.mainColor,
                          marginTop: 0,
                        },
                      ]}>
                      {e.Foodtype}
                    </Text>
                  </TouchableOpacity>
                );
              })}
        </View>
      </ScrollView>

      {/* item cards */}
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: '100%',
          marginHorizontal: 10,
        }}>
        {filterSubCategory && filterSubCategory.length > 0
          ? filterSubCategory.map((e: any, i: number) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  key={i}
                  style={{
                    height: 200,
                    backgroundColor: Color.lightgrey,
                    width: '45%',
                    borderRadius: 10,
                    shadowRadius: 10,
                    elevation: 5,
                    margin: 5,
                  }}>
                  <Image
                    source={e.image}
                    resizeMode="cover"
                    style={{
                      width: 120,
                      height: 100,
                      alignSelf: 'center',
                      marginTop: 10,
                    }}
                  />
                  <Text
                    style={{
                      paddingHorizontal: 10,
                      fontSize: 16,
                      color: Color.mainColor,
                      fontFamily: 'Poppins-SemiBold',
                    }}>
                    {e.foodName}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 10,
                      paddingHorizontal: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 13,
                        color: Color.textColor,
                        fontFamily: 'Poppins-SemiBold',
                      }}>
                      20 min
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        gap: 5,
                        alignItems: 'center',
                      }}>
                      <FontAwesome name="star" size={15} color="gold" />
                      <Text
                        style={{
                          fontSize: 13,
                          color: Color.mainColor,
                          fontFamily: 'Poppins-SemiBold',
                        }}>
                        4.2
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingHorizontal: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: Color.mainColor,
                        fontFamily: 'Poppins-SemiBold',
                      }}>
                      Rs: 5454
                    </Text>
                    <TouchableOpacity activeOpacity={0.8}>
                      <AntDesign name="shoppingcart" size={25} color="purple" />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            })
          : foundName && foundName.length > 0
          ? foundName.map((e: any, i: number) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  key={i}
                  style={{
                    height: 200,
                    backgroundColor: Color.lightgrey,
                    width: '45%',
                    borderRadius: 10,
                    shadowRadius: 10,
                    elevation: 5,
                    margin: 5,
                  }}>
                  <Image
                    source={e.image}
                    resizeMode="cover"
                    style={{
                      width: 120,
                      height: 100,
                      alignSelf: 'center',
                      marginTop: 10,
                    }}
                  />
                  <Text
                    style={{
                      paddingHorizontal: 10,
                      fontSize: 16,
                      color: Color.mainColor,
                      fontFamily: 'Poppins-SemiBold',
                    }}>
                    {e.foodName}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 10,
                      paddingHorizontal: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 13,
                        color: Color.textColor,
                        fontFamily: 'Poppins-SemiBold',
                      }}>
                      20 min
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        gap: 5,
                        alignItems: 'center',
                      }}>
                      <FontAwesome name="star" size={15} color="gold" />
                      <Text
                        style={{
                          fontSize: 13,
                          color: Color.mainColor,
                          fontFamily: 'Poppins-SemiBold',
                        }}>
                        4.2
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingHorizontal: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: Color.mainColor,
                        fontFamily: 'Poppins-SemiBold',
                      }}>
                      Rs: 5454
                    </Text>
                    <TouchableOpacity activeOpacity={0.8}>
                      <AntDesign name="shoppingcart" size={25} color="purple" />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            })
          : selectService &&
            selectService.length > 0 &&
            selectService.map((e: any, i: number) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  key={i}
                  style={{
                    height: 200,
                    backgroundColor: Color.lightgrey,
                    width: '45%',
                    borderRadius: 10,
                    shadowRadius: 10,
                    elevation: 5,
                    margin: 5,
                  }}>
                  <Image
                    source={e.image}
                    resizeMode="cover"
                    style={{
                      width: 120,
                      height: 100,
                      alignSelf: 'center',
                      marginTop: 10,
                    }}
                  />
                  <Text
                    style={{
                      paddingHorizontal: 10,
                      fontSize: 16,
                      color: Color.mainColor,
                      fontFamily: 'Poppins-SemiBold',
                    }}>
                    {e.foodName}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 10,
                      paddingHorizontal: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 13,
                        color: Color.textColor,
                        fontFamily: 'Poppins-SemiBold',
                      }}>
                      20 min
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        gap: 5,
                        alignItems: 'center',
                      }}>
                      <FontAwesome name="star" size={15} color="gold" />
                      <Text
                        style={{
                          fontSize: 13,
                          color: Color.mainColor,
                          fontFamily: 'Poppins-SemiBold',
                        }}>
                        4.2
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingHorizontal: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: Color.mainColor,
                        fontFamily: 'Poppins-SemiBold',
                      }}>
                      Rs: 5454
                    </Text>
                    <TouchableOpacity activeOpacity={0.8}>
                      <AntDesign name="shoppingcart" size={25} color="purple" />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            })}
      </View>
    </ScrollView>
  );
};

export default RestaurantDetails;

const styles = StyleSheet.create({
  cancleButtonText: {
    color: Color.mainColor,
    // fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});