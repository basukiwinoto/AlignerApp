import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider as PaperProvider} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './src/Home';
import Progress from './src/Progress';
import Support from './src/Support';

const TBDView = () => (
  <View>
    <Text>TBD</Text>
  </View>
);

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerTintColor: 'purple',
          }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={() => ({
              title: 'Smile',
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="home-outline"
                  color={color}
                  size={size}
                />
              ),
            })}
          />
          <Tab.Screen
            name="Progress"
            component={Progress}
            options={() => ({
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="pulse"
                  color={color}
                  size={size}
                />
              ),
            })}
          />
          <Tab.Screen
            name="Support"
            component={Support}
            options={() => ({
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="comment-question-outline"
                  color={color}
                  size={size}
                />
              ),
            })}
          />
          <Tab.Screen
            name="Profile"
            component={TBDView}
            options={() => ({
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="account-outline"
                  color={color}
                  size={size}
                />
              ),
            })}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
