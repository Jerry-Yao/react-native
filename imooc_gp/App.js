/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Boy from './js/Boy'
import PopularPage from './js/pop/PopularPage'

export default class imocc_gp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'tab_popular'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Navigator
            scene
        ></Navigator> */}
        {/* <Navigator 
            initialRoute = {{
              component:  Boy
            }}
            renderScene = {(route,navigator)=>{
              let Component = route.component;
              return <Component navigator = {navigator} {...route.params}/>
            }}
        ></Navigator> */}
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tab_popular'}
            selectedTitleStyle={{color:'blue'}}
            title="最热"
            renderIcon={() => <Image style={styles.image} source={require('./res/images/fire.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'blue'}]} source={require('./res/images/fire (1).png')} />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'tab_popular' })}>
            {/* <View style={styles.page1}></View> */}
            <PopularPage/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tab_treding'}
            selectedTitleStyle={{color:'blue'}}
            title="趋势"
            renderIcon={() => <Image style={styles.image} source={require('./res/images/treding.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'blue'}]} source={require('./res/images/treding.png')} />}
            // renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'tab_treding' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tab_favorite'}
            selectedTitleStyle={{color:'blue'}}
            title="收藏"
            renderIcon={() => <Image style={styles.image} source={require('./res/images/Favorite.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'blue'}]} source={require('./res/images/Favorite.png')} />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'tab_favorite' })}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tab_my'}
            selectedTitleStyle={{color:'blue'}}
            title="我的"
            renderIcon={() => <Image style={styles.image} source={require('./res/images/profile_light.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'blue'}]} source={require('./res/images/profile_light (1).png')} />}
            // renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'tab_my' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    // alignItems:'center',
    backgroundColor: '#F5FCFF'
  },
  page1: {
    flex: 1,
    backgroundColor: 'blue'
  },
  page2: {
    flex: 1,
    backgroundColor: 'blue'
  },
  image: {
    height: 22,
    width: 22
  }
});
// const App = () => {
//   return (
//     <Fragment>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </Fragment>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

