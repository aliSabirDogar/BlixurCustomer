import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Theme = {
  primary: '#000000',
  subPrimary: '#232F3F',
  secondary: '#ffffff',
  subSecondary: '#707070',
  placeHolderColor: '#BABABA',
  selectedColor: '#27a908',
  lightBackground: '#ECEDEE',
  tip: '#FF9830',
  gray:'#858381',
  chartSecondary: '#3C85D8',
  fontNormal: hp('1.5%'),
  fontSubNormal: hp('1.8%'),
  fontSmall: hp('1.2%'),
  fontVerySmall: hp('1%'),
  fontBoldHeadings: hp('2.5%'),
  bold: hp('3.5'),
  fontSubBoldHeadings: hp('4%'),
  fontExtraBoldHeadings: hp('8%'),
  fontNormalBoldHeadings: hp('2.0%'),
  selectedBtnColor: '#D1DEE5',
  gilRoyExtraBold: 'Montserrat-SemiBold',
  // gilRoySemiBold: 'Gilroy-SemiBold',
  gilRoySemiBold: 'Montserrat-SemiBold',

  gilRoyRegular: 'Montserrat-Light',
  gilRoyLight: 'Gilroy-Light',
  montserratSemiBold: 'Montserrat-SemiBold',
};
export default Theme;
