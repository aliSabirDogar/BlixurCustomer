import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import Theme from '../../Utils/Theme';

export class paymentLogos extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          padding: 5,
          height: 50,
          width: 70,
          backgroundColor: Theme.secondary,
          // elevation: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,

          elevation: 2,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
        }}>
        <Image style={{width: 30, height: 30}} source={this.props.image} />
      </TouchableOpacity>
    );
  }
}

export default paymentLogos;
