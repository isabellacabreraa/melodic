import React, {
  useEffect,
  useState,
} from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  Image,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import {
  savePlaylist,
  updatePlaylist,
} from '../services/playlistStorage';

export default function PlaylistFormScreen({
  navigation,
  route,
}) {
  const playlistToEdit =
    route.params?.playlist;

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [cover, setCover] = useState('');

  const [songName, setSongName] = useState('');
  const [artist, setArtist] = useState('');
  const [albumArt, setAlbumArt] = useState('');

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    if (playlistToEdit) {

      setName(
        playlistToEdit.name || ''
      );

      setDescription(
        playlistToEdit.description || ''
      );

      setCategory(
        playlistToEdit.category || ''
      );

      setCover(
        playlistToEdit.cover || ''
      );

      setSongs(
        playlistToEdit.songs || []
      );
    }
  }, [playlistToEdit]);

  function addSong() {
    if (!songName.trim()) {
      Alert.alert(
        'Atenção',
        'Digite o nome da música.'
      );

      return;
    }

    const id = Date.now().toString();

    const newSong = {
      id,
      title: songName.trim(),

      artist:
        artist.trim() ||
        'Artista desconhecido',

      albumArt:
        albumArt.trim() ||
        `https://picsum.photos/seed/song-${id}/200`,
    };

    setSongs((currentSongs) => [
      ...currentSongs,
      newSong,
    ]);

    setSongName('');
    setArtist('');
    setAlbumArt('');
  }

  function removeSong(id) {
    setSongs((currentSongs) =>
      currentSongs.filter(
        (song) => song.id !== id
      )
    );
  }

  async function handleSave() {
    if (!name.trim()) {
      Alert.alert(
        'Atenção',
        'Digite o nome da playlist.'
      );

      return;
    }

    const playlistData = {
      name: name.trim(),

      description:
        description.trim(),

      category:
        category.trim() ||
        'Personalizada',

      cover: cover.trim(),

      songs,
    };

    if (playlistToEdit) {

      await updatePlaylist(
        playlistToEdit.id,
        playlistData
      );

      Alert.alert(
        'Sucesso',
        'Playlist atualizada!'
      );

    } else {

      await savePlaylist(
        playlistData
      );

      Alert.alert(
        'Sucesso',
        'Playlist criada e salva!'
      );
    }

    navigation.goBack();
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >

      {/* BOTÃO HOME */}
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() =>
          navigation.navigate('Home')
        }
        activeOpacity={0.8}
      >

        <Ionicons
          name="home-outline"
          size={18}
          color="#C6004D"
        />

        <Text style={styles.homeButtonText}>
          Voltar para Home
        </Text>

      </TouchableOpacity>

      <Text style={styles.title}>
        {playlistToEdit
          ? 'Editar Playlist'
          : 'Nova Playlist'}
      </Text>

      {/* NOME */}
      <Text style={styles.label}>
        Nome da playlist
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: minhas favoritas"
        value={name}
        onChangeText={setName}
      />

      {/* DESCRIÇÃO */}
      <Text style={styles.label}>
        Descrição
      </Text>

      <TextInput
        style={[
          styles.input,
          styles.textArea,
        ]}
        placeholder="Descrição da playlist..."
        value={description}
        onChangeText={setDescription}
        multiline
      />

      {/* CATEGORIA */}
      <Text style={styles.label}>
        Categoria
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: Pop"
        value={category}
        onChangeText={setCategory}
      />

      {/* CAPA */}
      <Text style={styles.label}>
        URL da capa
      </Text>

      <TextInput
        style={styles.input}
        placeholder="https://..."
        value={cover}
        onChangeText={setCover}
        autoCapitalize="none"
      />

      {cover ? (
        <Image
          source={{ uri: cover }}
          style={styles.coverPreview}
        />
      ) : null}

      {/* MÚSICA */}
      <Text style={styles.sectionTitle}>
        Adicionar Música
      </Text>

      <Text style={styles.label}>
        Nome da música
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: Dynamite"
        value={songName}
        onChangeText={setSongName}
      />

      <Text style={styles.label}>
        Artista
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: BTS"
        value={artist}
        onChangeText={setArtist}
      />

      <Text style={styles.label}>
        URL da imagem da música
      </Text>

      <TextInput
        style={styles.input}
        placeholder="https://..."
        value={albumArt}
        onChangeText={setAlbumArt}
        autoCapitalize="none"
      />

      {albumArt ? (
        <Image
          source={{
            uri: albumArt,
          }}
          style={styles.albumPreview}
        />
      ) : null}

      {/* ADICIONAR */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={addSong}
        activeOpacity={0.8}
      >

        <Text style={styles.addText}>
          + Adicionar Música
        </Text>

      </TouchableOpacity>

      {/* MÚSICAS ADICIONADAS */}
      <Text style={styles.sectionTitle}>
        Músicas adicionadas
      </Text>

      {songs.map((song) => (

        <View
          key={song.id}
          style={styles.song}
        >

          <Image
            source={{
              uri: song.albumArt,
            }}
            style={styles.songImage}
          />

          <View style={styles.songInfo}>

            <Text style={styles.songTitle}>
              {song.title}
            </Text>

            <Text style={styles.songArtist}>
              {song.artist}
            </Text>

          </View>

          <TouchableOpacity
            onPress={() =>
              removeSong(song.id)
            }
          >

            <Text style={styles.removeText}>
              Excluir
            </Text>

          </TouchableOpacity>

        </View>

      ))}

      {/* SALVAR */}
      <TouchableOpacity
        style={styles.saveButton}
        onPress={handleSave}
        activeOpacity={0.8}
      >

        <Text style={styles.saveText}>
          {playlistToEdit
            ? 'Salvar Alterações'
            : 'Cadastrar Playlist'}
        </Text>

      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFF8FA',
  },

  content: {
    padding: 20,
    paddingBottom: 50,
  },

  homeButton: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 13,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#C6004D',
  },

  homeButtonText: {
    color: '#C6004D',
    fontWeight: '700',
    fontSize: 13,
  },

  title: {
    fontSize: 27,
    fontWeight: '800',
    marginBottom: 15,
    color: '#222',
  },

  label: {
    fontWeight: '600',
    marginBottom: 7,
    marginTop: 14,
    color: '#333',
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F0D7DF',
    borderRadius: 13,
    padding: 14,
  },

  textArea: {
    height: 90,
    textAlignVertical: 'top',
  },

  coverPreview: {
    width: '100%',
    height: 180,
    borderRadius: 20,
    marginTop: 14,
    backgroundColor: '#F3DDE4',
  },

  albumPreview: {
    width: 90,
    height: 90,
    borderRadius: 15,
    marginTop: 12,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    marginTop: 28,
    color: '#222',
  },

  addButton: {
    borderWidth: 1,
    borderColor: '#C6004D',
    borderRadius: 25,
    padding: 14,
    alignItems: 'center',
    marginTop: 20,
  },

  addText: {
    color: '#C6004D',
    fontWeight: '700',
  },

  song: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  songImage: {
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
    color: '#222',
  },

  songArtist: {
    color: '#888',
    marginTop: 3,
  },

  removeText: {
    color: '#C6004D',
    fontWeight: '600',
  },

  saveButton: {
    backgroundColor: '#C6004D',
    borderRadius: 25,
    padding: 17,
    alignItems: 'center',
    marginTop: 30,
  },

  saveText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },

});