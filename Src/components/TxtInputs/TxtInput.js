import React, {Component} from 'react';
import {TextInput} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Theme from '../../Utils/Theme';

const TxtInputs = React.forwardRef((props, ref) => (
  <TextInput
    style={{
      backgroundColor: '#ffffff',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
      borderRadius: props.radius,
      paddingLeft: 10,
      // marginBottom: '5%',
      marginBottom: props.bottom,
      marginTop: props.top,
      width: props.width,
      // height: hp('5%'),
      height: props.height,
      fontSize: Theme.fontNormal,
      backgroundColor: 'white',
      // textAlignVertical: props.align,
    }}
    placeholder={props.placeHolder}
    placeholderTextColor={Theme.placeHolderColor}
    keyboardType={props.type}
    multiline={props.multiline}
    ref={props.ref}
    textAlignVertical={props.align}
    onPressIn={props.onPressIn}
  />
));

export default TxtInputs;
