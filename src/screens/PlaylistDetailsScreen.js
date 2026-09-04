import React, {
  useCallback,
  useState,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList,
  Image,
} from 'react-native';

import {
  useFocusEffect,
} from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

import {
  getPlaylists,
  deletePlaylist,
} from '../services/playlistStorage';

export default function PlaylistDetailsScreen({
  navigation,
  route,
}) {
  const playlistId =
    route.params.playlist.id;

  const [playlist, setPlaylist] =
    useState(route.params.playlist);

  async function loadPlaylist() {
    const playlists =
      await getPlaylists();

    const currentPlaylist =
      playlists.find(
        (item) =>
          item.id === playlistId
      );

    if (currentPlaylist) {
      setPlaylist(currentPlaylist);
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadPlaylist();
    }, [])
  );

  function handleDelete() {
    Alert.alert(
      'Excluir playlist?',
      "Deseja realmente excluir `${playlist.name}?`",
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },

        {
          text: 'Excluir',
          style: 'destructive',

          onPress: async () => {
            await deletePlaylist(
              playlist.id
            );

            navigation.navigate(
              'Library'
            );
          },
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: playlist.cover,
        }}
        style={styles.cover}
      />

      <Text style={styles.title}>
        {playlist.name}
      </Text>

      <Text style={styles.category}>
        {playlist.category}
      </Text>

      <Text
        style={styles.description}
      >
        {playlist.description ||
          'Sem descrição'}
      </Text>

      <Text
        style={styles.sectionTitle}
      >
        {playlist.songs?.length ||
          0}{' '}
        músicas
      </Text>

      {playlist.songs?.length >
      0 ? (
        <FlatList
          data={playlist.songs}
          keyExtractor={(item) =>
            item.id
          }
          showsVerticalScrollIndicator={
            false
          }
          renderItem={({ item }) => (
            <View style={styles.song}>
              <Image
                source={{
                  uri: item.albumArt,
                }}
                style={
                  styles.albumArt
                }
              />

              <View
                style={
                  styles.songInfo
                }
              >
                <Text
                  style={
                    styles.songTitle
                  }
                >
                  {item.title}
                </Text>

                <Text
                  style={
                    styles.artist
                  }
                >
                  {item.artist}
                </Text>
              </View>
            </View>
          )}
        />
      ) : (
        <Text
          style={styles.noSongs}
        >
          Nenhuma música adicionada.
        </Text>
      )}

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() =>
            navigation.navigate(
              'PlaylistForm',
              {
                playlist,
              }
            )
          }
        >
          <Ionicons
            name="create-outline"
            size={19}
            color="#FFFFFF"
          />

          <Text
            style={
              styles.editButtonText
            }
          >
            Editar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            styles.deleteButton
          }
          onPress={handleDelete}
        >
          <Ionicons
            name="trash-outline"
            size={19}
            color="#C6004D"
          />

          <Text
            style={
              styles.deleteButtonText
            }
          >
            Excluir
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles =
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF8FA',
      padding: 20,
    },

    cover: {
      width: '100%',
      height: 220,
      borderRadius: 24,
      backgroundColor: '#F4DCE4',
      marginBottom: 20,
    },

    title: {
      fontSize: 28,
      fontWeight: '800',
      color: '#222',
    },

    category: {
      color: '#C6004D',
      fontWeight: '700',
      marginTop: 6,
    },

    description: {
      color: '#777',
      marginTop: 6,
      lineHeight: 20,
    },

    sectionTitle: {
      fontSize: 19,
      fontWeight: '800',
      marginTop: 25,
      marginBottom: 12,
    },

    song: {
      backgroundColor: '#FFFFFF',
      padding: 10,
      borderRadius: 14,
      marginBottom: 9,
      flexDirection: 'row',
      alignItems: 'center',
    },

    albumArt: {
      width: 52,
      height: 52,
      borderRadius: 10,
      backgroundColor: '#F4DDE5',
    },

    songInfo: {
      flex: 1,
      marginLeft: 12,
    },

    songTitle: {
      fontWeight: '700',
    },

    artist: {
      color: '#888',
      marginTop: 3,
    },

    noSongs: {
      color: '#888',
    },

    buttons: {
      flexDirection: 'row',
      gap: 10,
      marginTop: 20,
      marginBottom: 20,
    },

    editButton: {
      flex: 1,
      backgroundColor: '#C6004D',
      padding: 15,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent:
        'center',
      flexDirection: 'row',
      gap: 6,
    },

    deleteButton: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#C6004D',
      padding: 15,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent:
        'center',
      flexDirection: 'row',
      gap: 6,
    },

    editButtonText: {
      color: '#FFFFFF',
      fontWeight: '700',
    },

    deleteButtonText: {
      color: '#C6004D',
      fontWeight: '700',
    },
  });