import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Theme from '../../Utils/Theme';
import styles from './Style';

export default class SmallButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[
          styles.touchableContainer,
          {
            width: this.props.width,
            height: this.props.height,
            // elevation: this.props.elevation,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,

            elevation: 2,
            backgroundColor: this.props.bgColor,
            borderRadius: this.props.radius,
            // marginBottom: this.props.bottom,
            // shadowColor: '#000',
            // shadowOffset: {
            //   width: 0,
            //   height: 1,
            // },
            // shadowOpacity: 0.22,
            // shadowRadius: 2.22,

            // elevation: 3,
            // color: this.props.color,
          },
        ]}
        onPress={this.props.onPress}>
        <Text
          style={{
            fontSize: Theme.fontNormal,
            color: this.props.color,
            fontFamily: 'Montserrat-SemiBold',
          }}>
          {this.props.txt}
        </Text>
      </TouchableOpacity>
    );
  }
}
