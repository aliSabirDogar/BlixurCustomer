import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Theme from '../../../Utils/Theme';
import AndtDesign from 'react-native-vector-icons/AntDesign';
import { fontSize } from 'styled-system';
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedData: [],
      categories: [
        {
          img: require('../../../assets/images/clothing.jpg'),
          name: 'Clothing Brand',
        },
        // {
        //   img: require('../../../assets/images/cosmetics.jpg'),
        //   name: 'Cosmetics',
        // },
        {
          img: require('../../../assets/images/painting.jpg'),
          name: 'Art',
        },
        // {
        //   img: require('../../../assets/images/household.jpg'),
        //   name: 'Household Necessities',
        // },
        // {
        //   img: require('../../../assets/images/designer.jpg'),
        //   name: 'Designer',
        // },
        {
          img: require('../../../assets/images/health.jpg'),
          name: 'Helth ',
        },
        {
          img: require('../../../assets/images/jewlery.jpg'),
          name: 'Designer Jewelery',
        },
        // {
        //   img: require('../../../assets/images/Sneakers.jpg'),
        //   name: 'Sneakers',
        // },
        {
          img: require('../../../assets/images/Sneakers.jpg'),
          name: 'Sneakers',
        },
        {
          img: require('../../../assets/images/Automotive.jpg'),
          name: 'Automotive',
        },
        {
          img: require('../../../assets/images/HomeDecor.jpg'),
          name: 'Home Decor',
        },
       
      
        {
          img: require('../../../assets/images/Food.jpg'),
          name: 'Food & Dessert',
        },
      ],
      text: '',
    };
  }
  renderCategories = ({item, index}) => {
    return (
      <View
        style={{
          marginEnd: wp('1%'),
          marginStart: wp('1%'),
          marginBottom: 10,
          alignItems: 'center',
          // backgroundColor: 'red',
        }}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Products', {
              profilesProduct: false,
              data: item.name,
            })
          }
          style={{
            width: wp('43%'),
            height: hp('16%'),
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
            borderRadius: 10,
            backgroundColor: Theme.secondary,
            justifyContent: 'center',
          }}>
          <ImageBackground
            imageStyle={{
              width: wp('43%'),
              height: hp('16%'),
              borderRadius: 10,
              opacity: 0.6,

              // backgroundColor: Theme.primary,
            }}
            style={{
              width: wp('43%'),
              height: hp('16%'),
              borderRadius: 10,
              justifyContent: 'center',
              paddingStart: '10%',
              // justifyContent: 'center',
              backgroundColor: 'black',
            }}
            source={item.img}>
                <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              color: 'white',
              fontWeight: 'bold',
             // position: 'absolute',
              // bottom: hp('1%'),
              marginStart: '2%',
              fontSize: Theme.fontSubNormal,
              marginTop:75
            }}>
            {item.name}
          </Text>
            </ImageBackground>
        
        </TouchableOpacity>
      </View>
    );
  };

  SearchFilterFunction = text => {
    //passing the inserted text in textinput
    const newData = this.state.categories.filter(function (item) {
      //applying filter for the inserted text in search bar
      // if(item.personalInfo.developmentCate!==null)

      const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    if (text == '') {
      this.setState({categories: this.state.categories, text: ''});
    } else {
      this.setState({
        //setting the filtered newData on datasource
        //After setting the data it will automatically re-render the view
        searchedData: newData,
        text: text,
      });
    }
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.heading}>Search</Text>

        {/* search */}
        <View style={styles.searchInputView}>
          <AndtDesign name="search1" />
          <TextInput
            style={{width: wp('70%'), height: hp('5%'), marginStart: 5}}
            placeholder={'Brands, Products, Services and More '}
            onChangeText={text => this.SearchFilterFunction(text)}
          />
        </View>
        {/* bottomLine */}
        <View style={styles.bottomLine} />
        <Text style={styles.heading}>Brands Categories</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={
              {
                // flex: 1,
                // backgroundColor: 'red',
                // marginBottom: hp('20%'),
                // alignItems: 'center',
                // height: hp('15%'),
                // backgroundColor: 'blue',
                // justifyContent: 'center',
              }
            }>
            <FlatList
              // style={{marginBottom: hp('20%')}}
              showsVerticalScrollIndicator={false}
              data={
                this.state.text == ''
                  ? this.state.categories
                  : this.state.searchedData
              }
              renderItem={this.renderCategories}
              numColumns={2}
              contentContainerStyle={{
                // paddingStart: '5%',
                paddingTop: '5%',
                // marginBottom: 50,
                // paddingEnd: '5%',
              }}
            />
          </View>
        </ScrollView>
        {/* <View style={{height: hp('20%'), backgroundColor: 'red'}} /> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: wp('5%'),
    marginStart: wp('5%'),
    marginEnd: wp('5%'),
  },
  searchInputView: {
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
    borderRadius: 5,
    alignItems: 'center',
    paddingStart: '1%',
    // elevation: 5,
    marginTop: hp('1%'),
  },
  bottomLine: {
    height: 1,
    backgroundColor: Theme.placeHolderColor,
    marginTop: hp('2%'),
    marginBottom: hp('2%'),
  },
  heading: {
    fontFamily: Theme.gilRoyExtraBold,
    fontSize: Theme.fontBoldHeadings,
  },
});
