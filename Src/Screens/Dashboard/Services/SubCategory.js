import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {height} from 'styled-system';
import Theme from '../../../Utils/Theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import {FlatList} from 'react-native-gesture-handler';

export default class SubCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subCategory: [
        {
          name: 'Fitness Traner',
          img: 'https://freshysites.com/wp-content/uploads/house-cleaning.jpg',
        },
        {
          name: 'Nutritionists',
          img: 'https://freshysites.com/wp-content/uploads/house-cleaning.jpg',
        },
        {
          name: 'House Cleaning',
          img: 'https://freshysites.com/wp-content/uploads/house-cleaning.jpg',
        },
      ],
      
    };
  }
  
  renderSubCategory = ({item, index}) => {
    return (
      <View
        style={{
          // backgroundColor: 'red',
          width: wp('90%'),
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('BusinessProfiles')}
          style={[
            styles.itemImg,
            {
              backgroundColor: Theme.secondary,
              elevation: 5,
              marginTop: 10,
              borderRadius: 10,
            },
          ]}>
          <Image style={styles.itemImg} source={{uri: item.img}} />
        </TouchableOpacity>
        <Text style={styles.itemTxt}>{item.name}</Text>
        <View style={styles.bottomLine} />
      </View>
    );
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <AntDesign
            name="arrowleft"
            color={Theme.secondary}
            size={20}
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
        <Text style={styles.headingTxt}>Home Maintainance</Text>
        <View style={styles.secondMain}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.subCategory}
            renderItem={this.renderSubCategory}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Theme.primary,
  },
  secondMain: {
    flex: 1,
    backgroundColor: Theme.secondary,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    paddingStart: wp('4%'),
    paddingEnd: wp('4%'),
    paddingTop: wp('5%'),
    alignItems: 'center',
  },
  header: {
    // height: hp('10%'),
    padding: wp('5%'),
  },
  headingTxt: {
    color: Theme.secondary,
    textAlign: 'center',
    paddingBottom: '5%',
    fontFamily: Theme.gilRoyExtraBold,
    fontSize: Theme.fontBoldHeadings,
  },
  itemImg: {
    width: wp('85%'),
    height: hp('20%'),
    borderRadius: 10,
  },
  itemTxt: {
    marginTop: hp('2%'),
    fontFamily: Theme.gilRoySemiBold,
    color: Theme.subSecondary,
    // alignSelf: 'flex-start',
    width: wp('85%'),
  },
  bottomLine: {
    borderBottomWidth: 0.5,
    marginTop: hp('2%'),
    marginBottom: hp('2%'),
    borderColor: Theme.placeHolderColor,
    width: wp('85%'),
  },
});
