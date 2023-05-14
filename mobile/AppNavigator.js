import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';
import LinkingConfiguration from './LinkingConfiguration.js';

import CropDetailViewScreen from './screens/CropDetailViewScreen';
import CropListScreen from './screens/CropListScreen';
import EnableLocationScreen from './screens/EnableLocationScreen';
import GardenBedDetailViewScreen from './screens/GardenBedDetailViewScreen';
import GardenDetailViewScreen_6Fi5ZXwW from './screens/GardenDetailViewScreen_6Fi5ZXwW';
import GardenListScreen from './screens/GardenListScreen';
import LoginScreen from './screens/LoginScreen';
import MapViewScreen from './screens/MapViewScreen';
import NewGardenScreen from './screens/NewGardenScreen';
import NewSubgardenScreen from './screens/NewSubgardenScreen';
import SignUpScreen from './screens/SignUpScreen';
import StartScreen from './screens/StartScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Placeholder() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131A2A',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 36,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 12,
          color: '#FFF',
        }}
      >
        Missing Screen
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        This screen is not in a navigator.
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        Go to Navigation mode, and click the + (plus) icon in the Navigator tab
        on the left side to add this screen to a Navigator.
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFF' }}>
        If the screen is in a Tab Navigator, make sure the screen is assigned to
        a tab in the Config panel on the right.
      </Text>
    </View>
  );
}
function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.colors['Background'],
        inactiveTintColor: theme.colors['App Green'],
        activeBackgroundColor: theme.colors['App Green'],
        style: {
          backgroundColor: theme.colors['Background'],
          borderTopColor: 'transparent',
        },
      }}
    >
      <Tab.Screen
        name="GardenListScreen"
        component={GardenListScreen}
        options={{
          title: 'Garden List',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/rose"
              size={25}
              color={
                focused ? theme.colors['Background'] : theme.colors['App Green']
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="CropListScreen"
        component={CropListScreen}
        options={{
          title: 'Crop List',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="FontAwesome/tree"
              size={25}
              color={
                focused ? theme.colors['Background'] : theme.colors['App Green']
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: 'Login',
          }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            title: 'Sign Up',
          }}
        />
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{
            title: 'Start Screen',
          }}
        />
        <Stack.Screen
          name="GardenDetailViewScreen_6Fi5ZXwW"
          component={GardenDetailViewScreen_6Fi5ZXwW}
          options={{
            title: 'Garden Detail View',
          }}
        />
        <Stack.Screen
          name="NewGardenScreen"
          component={NewGardenScreen}
          options={{
            title: 'New Garden',
          }}
        />
        <Stack.Screen
          name="EnableLocationScreen"
          component={EnableLocationScreen}
          options={{
            title: 'Enable Location',
          }}
        />
        <Stack.Screen
          name="MapViewScreen"
          component={MapViewScreen}
          options={{
            title: 'Map View',
          }}
        />
        <Stack.Screen
          name="NewSubgardenScreen"
          component={NewSubgardenScreen}
          options={{
            title: 'New Subgarden',
          }}
        />
        <Stack.Screen
          name="CropDetailViewScreen"
          component={CropDetailViewScreen}
          options={{
            title: 'Crop Detail View',
          }}
        />
        <Stack.Screen
          name="GardenBedDetailViewScreen"
          component={GardenBedDetailViewScreen}
          options={{
            title: 'Garden Bed Detail View',
          }}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
