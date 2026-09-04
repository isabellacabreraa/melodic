import React from 'react';

import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Image,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function PlaylistCard({
  playlist,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
    >

      <Image
        source={{
          uri: playlist.cover,
        }}
        style={styles.cover}
      />

      <View style={styles.content}>

        <Text
          style={styles.title}
          numberOfLines={1}
        >
          {playlist.name}
        </Text>

        <Text
          style={styles.description}
          numberOfLines={2}
        >
          {playlist.description || 'Sem descrição'}
        </Text>

        <View style={styles.infoRow}>

          <Text style={styles.category}>
            {playlist.category || 'Playlist'}
          </Text>

          <Text style={styles.count}>
            {playlist.songs?.length || 0} músicas
          </Text>

        </View>

      </View>

      <Ionicons
        name="chevron-forward"
        size={20}
        color="#B4A2AA"
      />

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 10,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  cover: {
    width: 72,
    height: 72,
    borderRadius: 15,
    backgroundColor: '#F5DCE5',
  },

  content: {
    flex: 1,
    marginLeft: 13,
    marginRight: 8,
  },

  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#231F20',
  },

  description: {
    color: '#8A7A81',
    fontSize: 12,
    marginTop: 3,
    lineHeight: 16,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },

  category: {
    color: '#C6004D',
    fontSize: 11,
    fontWeight: '600',
    marginRight: 10,
  },

  count: {
    color: '#9A8D92',
    fontSize: 11,
  },

});