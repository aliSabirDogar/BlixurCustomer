import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Theme from '../../Utils/Theme';

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('AfterSplash');
    }, 3000);
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          style={{width: '50%', height: '25%'}}
          source={require('../../assets/images/newLogo.jpeg')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Theme.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
