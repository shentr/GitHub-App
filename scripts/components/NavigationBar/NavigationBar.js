import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import config from './config';

export default class NavigationBar extends Component {
  static propTypes = {
    style: View.propTypes.style,
    title: PropTypes.string,
    titleView: PropTypes.element,
    hide: PropTypes.bool,
    leftButton: PropTypes.element,
    rightButton: PropTypes.element
  }
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      hide: false
    }
  }
  render() {
    let titleView = this.props.titleView || <Text>{this.props.title}</Text>;
    let content = (
       <View style={styles.navBar}>
         {this.props.leftButton}
         {titleView}
         {this.props.rightButton}
       </View>
    )
    return (
       <View style={styles.container}>{content}</View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray'
  },
  navBar: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 22,
    height: 50
  }
})