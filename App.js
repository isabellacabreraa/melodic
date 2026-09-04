import React from 'react';

import {
  NavigationContainer,
} from '@react-navigation/native';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import LibraryScreen from './src/screens/LibraryScreen';

import PlaylistFormScreen from './src/screens/PlaylistFormScreen';

import PlaylistDetailsScreen from './src/screens/PlaylistDetailsScreen';

const Stack =
  createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Library"
        screenOptions={{
          headerStyle: {
            backgroundColor:
              '#FFF8FA',
          },

          headerTintColor:
            '#C6004D',

          headerShadowVisible:
            false,

          contentStyle: {
            backgroundColor:
              '#FFF8FA',
          },
        }}
      >
        <Stack.Screen
          name="Library"
          component={
            LibraryScreen
          }
          options={{
            title: 'Biblioteca',
          }}
        />

        <Stack.Screen
          name="PlaylistForm"
          component={
            PlaylistFormScreen
          }
          options={({ route }) => ({
            title:
              route.params
                ?.playlist
                ? 'Editar Playlist'
                : 'Nova Playlist',
          })}
        />

        <Stack.Screen
          name="PlaylistDetails"
          component={
            PlaylistDetailsScreen
          }
          options={{
            title: 'Playlist',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}