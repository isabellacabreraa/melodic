import React, {
  useCallback,
  useState,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {
  useFocusEffect,
} from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

import PlaylistCard from '../components/PlaylistCard';

import {
  getPlaylists,
} from '../services/playlistStorage';

export default function LibraryScreen({
  navigation,
}) {
  const [playlists, setPlaylists] =
    useState([]);

  async function loadPlaylists() {
    const data = await getPlaylists();
    setPlaylists(data);
  }

  useFocusEffect(
    useCallback(() => {
      loadPlaylists();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.logo}>
            Melodic
          </Text>

          <Text style={styles.title}>
            Library
          </Text>

          <Text style={styles.subtitle}>
            Minhas Playlists
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.createButton}
        onPress={() =>
          navigation.navigate(
            'PlaylistForm'
          )
        }
      >
        <Ionicons
          name="add"
          size={19}
          color="#FFFFFF"
        />

        <Text style={styles.createText}>
          Criar Nova Playlist
        </Text>
      </TouchableOpacity>

      {playlists.length === 0 ? (
        <View style={styles.empty}>
          <Ionicons
            name="musical-notes-outline"
            size={70}
            color="#E0A7B9"
          />

          <Text style={styles.emptyTitle}>
            Sua biblioteca está vazia
          </Text>

          <Text style={styles.emptyText}>
            Crie sua primeira playlist.
          </Text>
        </View>
      ) : (
        <FlatList
          data={playlists}
          keyExtractor={(item) =>
            item.id
          }
          showsVerticalScrollIndicator={
            false
          }
          contentContainerStyle={{
            paddingBottom: 40,
          }}
          renderItem={({ item }) => (
            <PlaylistCard
              playlist={item}
              onPress={() =>
                navigation.navigate(
                  'PlaylistDetails',
                  {
                    playlist: item,
                  }
                )
              }
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8FA',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  header: {
    marginBottom: 15,
  },

  logo: {
    fontSize: 17,
    fontWeight: '800',
    color: '#C6004D',
    marginBottom: 18,
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#222',
  },

  subtitle: {
    color: '#777',
    marginTop: 3,
  },

  createButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#C6004D',
    paddingVertical: 11,
    paddingHorizontal: 17,
    borderRadius: 22,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 22,
  },

  createText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },

  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 80,
  },

  emptyTitle: {
    fontSize: 19,
    fontWeight: '700',
    marginTop: 18,
  },

  emptyText: {
    color: '#888',
    marginTop: 5,
  },
});
