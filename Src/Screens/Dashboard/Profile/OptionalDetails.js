import React, {Component, useImperativeHandle, useRef} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Theme from '../../../Utils/Theme';
import SelectDropdown from 'react-native-select-dropdown';
import SmallButton from '../../../components/SmallBtn/SmallBtn';
const countries = ['USA', 'CANADA', 'ENGLAND', 'JAPAN'];
const citiesDropdownRef = null;
export default class OptionalDetails extends Component {
  openDropdown = () => {
    this.citiesDropdownRef.current.openDropdown();
  };
  constructor(props) {
    super(props);
    this.citiesDropdownRef = React.createRef();
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Entypo
            name={'circle-with-cross'}
            size={20}
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
        {/* Header */}
        <View style={[styles.imgView, {backgroundColor: Theme.secondary}]}>
          <Image
            resizeMode={'cover'}
            style={styles.imgView}
            source={require('../../../assets/images/alex.jpg')}
          />
        </View>

        <AntDesign style={styles.cameraImg} name={'camerao'} size={20} />
        <View style={styles.contentView}>
          <Text style={styles.Heading}>Optional Details</Text>
          <View style={styles.viewOfCountryTxtAndIcon}>
            <Text style={styles.countryTxt}>Country</Text>
            <AntDesign
              name={'edit'}
              size={20}
              onPress={() => this.openDropdown()}
            />
          </View>
          <SelectDropdown
            ref={this.citiesDropdownRef}
            data={countries}
            buttonTextStyle={{
              fontSize: hp('1.7%'),
              color: Theme.subSecondary,
              //   alignSelf: 'flex-start',
              //   textAlign: 'flex-start',
            }}
            defaultButtonText="USA"
            // renderDropdownIcon={this.renderIcon}
            buttonStyle={{
              width: wp('90%'),
              height: hp('5%'),
              marginTop: hp('2%'),
              backgroundColor: Theme.secondary,
              borderRadius: 10,
              //   alignItems: 'flex-end',
            }}
            // dropdownStyle={{alignItems: 'flex-start'}}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: hp('5%'),
            // backgroundColor: 'red',
            width: wp('100%'),
          }}>
          <SmallButton
            txt={'Save'}
            bgColor={Theme.primary}
            width={wp('70%')}
            color={Theme.secondary}
            height={hp('5%')}
            radius={20}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: 'red',
  },
  header: {
    padding: wp('5%'),
    alignItems: 'flex-end',
  },
  imgView: {
    width: wp('75%'),
    height: hp('30%'),

    alignSelf: 'center',
    borderRadius: 20,
  },
  cameraImg: {
    alignSelf: 'center',
  },
  contentView: {
    padding: wp('5%'),
  },
  Heading: {
    fontFamily: Theme.gilRoyExtraBold,
    fontSize: Theme.fontNormalBoldHeadings,
    color: Theme.subSecondary,
  },
  viewOfCountryTxtAndIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('3%'),
  },
  countryTxt: {
    color: Theme.subSecondary,
    fontFamily: Theme.gilRoySemiBold,
  },
});
