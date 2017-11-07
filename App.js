/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import NavigationBar from './scripts/components/NavigationBar/NavigationBar';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'tb_popular'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar title="Boy"/>
        <TabNavigator>
          <TabNavigator.Item
             selected={this.state.selectedTab === 'tb_popular'}
             title="最热"
             selectedTitleStyle={styles.selectedTitle}
             renderIcon={() => <Image source={require('./res/images/ic_popular.png')}
                                      style={[styles.icon]}/>
             }
             renderSelectedIcon={() => <Image source={require('./res/images/ic_popular.png')}
                                              style={[styles.icon, styles.selectedIcon]}/>
             }
             badgeText="1"
             onPress={() => this.setState({ selectedTab: 'tb_popular' })}>
            <View style={[styles.page, styles.page1]}>

            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
             selected={this.state.selectedTab === 'tb_trending'}
             title="趋势"
             selectedTitleStyle={styles.selectedTitle}
             renderIcon={() => <Image source={require('./res/images/ic_trending.png')}
                                      style={[styles.icon]}/>
             }
             renderSelectedIcon={() => <Image source={require('./res/images/ic_trending.png')}
                                              style={[styles.icon, styles.selectedIcon]}/>
             }
             onPress={() => this.setState({ selectedTab: 'tb_trending' })}>
            <View style={[styles.page, styles.page2]}>

            </View>
          </TabNavigator.Item>
        <TabNavigator.Item
           selected={this.state.selectedTab === 'tb_favorite'}
           title="收藏"
           selectedTitleStyle={styles.selectedTitle}
           renderIcon={() => <Image source={require('./res/images/ic_favorite.png')}
                                    style={[styles.icon]}/>
           }
           renderSelectedIcon={() => <Image source={require('./res/images/ic_favorite.png')}
                                            style={[styles.icon, styles.selectedIcon]}/>
           }
           onPress={() => this.setState({ selectedTab: 'tb_favorite' })}>
          <View style={[styles.page, styles.page1]}>

          </View>
        </TabNavigator.Item>
        <TabNavigator.Item
           selected={this.state.selectedTab === 'tb_my'}
           title="我的"
           selectedTitleStyle={styles.selectedTitle}
           renderIcon={() => <Image source={require('./res/images/ic_my.png')}
                                    style={[styles.icon]}/>
           }
           renderSelectedIcon={() => <Image source={require('./res/images/ic_my.png')}
                                            style={[styles.icon, styles.selectedIcon]}/>
           }
           onPress={() => this.setState({ selectedTab: 'tb_my' })}>
          <View style={[styles.page, styles.page2]}>

          </View>
        </TabNavigator.Item>
      </TabNavigator>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  page: {
    flex: 1,
  },
  page1: {
    backgroundColor: '#dcdcdc'
  },
  page2: {
    backgroundColor: '#F5FCFF'
  },
  icon: {
    height: 22,
    width: 22
  },
  selectedIcon: {
    tintColor: '#f00'
  },
  selectedTitle: {
    color: '#f00'
  }
});
