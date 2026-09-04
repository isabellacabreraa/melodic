import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@melodic_playlist';

const DEFAULT_PLAYLISTS = [
  {
    id: 'it-girl-energy',
    name: 'main character core ✨',
    description: 'Pop perfeito para se sentir no topo do mundo',
    category: 'Pop',
    cover:          'https://i.pinimg.com/736x/7c/7a/09/7c7a09aea6d9475d118ea1b71121fbbe.jpg',
    songs: [
      {
        id: 'pop-1',
        title: 'drop dead',
        artist: 'Olivia Rodrigo',
        albumArt:  'https://i.pinimg.com/736x/21/02/cd/2102cd11bcc2787330d58ac0fab6b380.jpg',
      },
      {
        id: 'pop-2',
        title: 'The Fate of Ophelia',
        artist: 'Taylor Swift',
        albumArt:
          'https://i.pinimg.com/736x/b2/67/f5/b267f5706e973ce9b0bd0759ce9d138c.jpg',
      },
      {
        id: 'pop-3',
        title: 'Espresso',
        artist: 'Sabrina Carpenter',
        albumArt:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQkXR-p3AtpMr7gLcW9saMA5IbXs1DtUuK3LYktfRZRJM8193ymnQWMMA&s=10',
      },
      {
        id: 'pop-4',
        title: '360',
        artist: 'Charli xcx',
        albumArt:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXncDQ3eWUbKaP32EStrdcloJN8JmYghtn-bTZyYhu7U6goR_6lpl22rY&s=10',
      },
      {
        id: 'pop-5',
        title: 'Stateside',
        artist: 'PinkPantheress',
        albumArt:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWyPXx7eROZPfNegORnxp-K2KNtOexpMba_HIr82rjdmcUHgFJjdOV1I4&s=10',
      },
      {
        id: 'pop-6',
        title: 'Man I Need',
        artist: 'Olivia Dean',
        albumArt:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3DHTPpWhRTziytRr4CofEH5AN5_j0j6CKHbkkeBjekG90BYOCWMRRhhXa&s=10',
      },
    ],
  },

  {
    id: 'kpop-multiverse',
    name: 'k-pop obsession 🖤',
    description:
      'O suprassumo do K-pop: BTS, Enhypen, ATEEZ e solo queens',
    category: 'K-pop',
    cover:
      'https://i.pinimg.com/736x/76/4d/ec/764dec3a6e1e916bf249403189494f1e.jpg',
    songs: [
      {
        id: 'kpop-1',
        title: 'SWIM',
        artist: 'BTS',
        albumArt:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOWW6Uq_tEgKMiS1zb1u6SS3EImWXEwTckSYPGYooabg&s=10',
      },
      {
        id: 'kpop-2',
        title: 'Bite Me',
        artist: 'ENHYPEN',
        albumArt:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOqTvww5kXypmdsIQgFt9FNamdrWvpu0k4H74XAo8RNrcflOrfVvMSr9xG&s=10',
      },
      {
        id: 'kpop-3',
        title: 'BOUNCY',
        artist: 'ATEEZ',
        albumArt:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ21sNE-FX27zajQdb-w0vhnqppoFKGZUA9dcd4xrr62_naVZdAnkhZvFk&s=10',
      },
      {
        id: 'kpop-4',
        title: 'Mantra',
        artist: 'JENNIE',
        albumArt:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdn61bDoW-2WLMEeqKd0fXpCHpzfJgd0DNROSqhL2YFD41ptONaiTmw0-u&s=10',
      },
      {
        id: 'kpop-5',
        title: 'Seven',
        artist: 'Jungkook',
        albumArt:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScFFY3eADZo1a4ZGzXcMNphe3C0m8U34N3OENTn8HMXPihlt3kVMVu8ui1&s=10',
      },
      {
        id: 'kpop-6',
        title: 'Love Me Again',
        artist: 'V',
        albumArt:
'https://i.pinimg.com/1200x/ca/9d/57/ca9d57dc7a507368cfdf2fe4d26a99f9.jpg',
      },
    ],
  },

  {
    id: 'midnight-vibes',
    name: '3am thoughts & indie 🌙',
    description:
      'Ethereal, dark & moody. The Marías, Arctic Monkeys e Chase Atlantic',
    category: 'Indie / Alt',
    cover:
'https://i.pinimg.com/736x/9b/71/04/9b710412727f0b84d3db73f4183ee334.jpg',
    songs: [
      {
        id: 'alt-1',
        title: 'Cariño',
        artist: 'The Marías',
        albumArt:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdUAcKiuUO-5tA1RiNSERUnDqKcTOMMTpzj2t2zPwdUceDP_1QlVRDGw9v&s=10',
      },
      {
        id: 'alt-2',
        title: '505',
        artist: 'Arctic Monkeys',
        albumArt:
          'https://cdn-images.dzcdn.net/images/cover/d7a4f9f1af8736457de34f28d50ef496/1900x1900-000000-80-0-0.jpg',
      },
      {
        id: 'alt-3',
        title: 'Into It',
        artist: 'Chase Atlantic',
        albumArt:
          'https://cdn-images.dzcdn.net/images/cover/9cce2a097bb4e8e7300e3830a4fd6361/1900x1900-000000-80-0-0.jpg',
      },
      {
        id: 'alt-4',
        title: 'I Wanna Be Yours',
        artist: 'Arctic Monkeys',
        albumArt:      'https://akamai.sscdn.co/uploadfile/letras/albuns/5/7/c/b/31278.jpg',
      },
      {
        id: 'alt-5',
        title: 'Swim',
        artist: 'Chase Atlantic',
        albumArt:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiWFX8lK3YNmDtzCtNM-cgF9QDTx8HdshgAG0eex6bnlG2i-ivZHLzL59O&s=10',
      },
    ],
  },

  {
    id: 'mpb-nostalgia',
    name: 'café, sol & nostalgia ☕️',
    description:
      'Do clássico ao MPB moderno para aquecer a alma',
    category: 'MPB',
    cover:
'https://i.pinimg.com/1200x/99/20/43/992043b1f264a9cceddbc9606c85cddc.jpg',
    songs: [
      {
        id: 'mpb-1',
        title: 'Ainda Bem',
        artist: 'Marisa Monte',
        albumArt:
          'https://cdn-images.dzcdn.net/images/cover/745738969ea23df2e6d66a8827254f9e/1900x1900-000000-80-0-0.jpg',
      },
      {
        id: 'mpb-2',
        title: 'Velha Infância',
        artist: 'Tribalistas',
        albumArt:
'https://upload.wikimedia.org/wikipedia/pt/9/9f/Tribalistas_capa.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original',
      },
      {
        id: 'mpb-3',
        title: 'Pode Ser',
        artist: 'Jorge Ben Jor',
        albumArt:
'https://upload.wikimedia.org/wikipedia/pt/4/48/Jorge_Ben_1969_album.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original',
      },
      {
        id: 'mpb-4',
        title: 'Trevo (Tu)',
        artist: 'ANAVITÓRIA',
        albumArt:
'https://upload.wikimedia.org/wikipedia/pt/0/0a/Capa_de_Anavit%C3%B3ria.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original',
      },
      {
        id: 'mpb-5',
        title: 'Partilhar',
        artist: 'Rubel',
        albumArt:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCeJoLSZm1wp5TUJh71epr4QI-Cw162C_jW_I8SnYO9QOIK_PlLWwbFuNI&s=10',
      },
    ],
  },

  {
    id: 'hits-2026',
    name: 'dopamina pura 🔥',
    description: 'Os hits que estão travando a sua timeline',
    category: 'Hits',
    cover:
'https://i.pinimg.com/736x/66/4a/4a/664a4aa50da76f972ff9f3410470bf3d.jpg',
    songs: [
      {
        id: 'hits-1',
        title: 'APT.',
        artist: 'ROSÉ & Bruno Mars',
        albumArt:
'https://upload.wikimedia.org/wikipedia/pt/7/78/Ros%C3%A9_%26_Bruno_Mars_-_Apt.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original',
      },
      {
        id: 'hits-2',
        title: 'Dai Dai',
        artist: 'Shakira & Burna Boy',
        albumArt:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2uNmrzgzhb4SqlJ4har8HWo1rdmObK98t5PxxdzHeFwuDcuR7qLIjd1Zs&s=10',
      },
      {
        id: 'hits-3',
        title: 'American Girls',
        artist: 'Harry Styles',
        albumArt:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRd6ODZwVSO-CEIrInsdEyq_JaIV0hlIsAlcVHyEPXw3iaiOwjbhIfgxM&s=10',
      },
      {
        id: 'hits-4',
        title: 'Earrings',
        artist: 'Malcolm Todd',
        albumArt:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7dCF5CZyCMNXs2Qu8WT4mJVhNCxg30aDyjYDQxLkBKgas_8P_GbFtoVmV&s=10',
      },
    ],
  },

  {
    id: 'calminhas',
    name: 'modo avião 🌸',
    description:
      'Pra desativar o mundo exterior e relaxar',
    category: 'Relax',
    cover:
'https://i.pinimg.com/736x/41/9c/7f/419c7facca8f26f5ccb638f6ccbe7eb4.jpg',
    songs: [
      {
        id: 'relax-1',
        title: 'BIRDS OF A FEATHER',
        artist: 'Billie Eilish',
        albumArt:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTElTvJjIn6bjZIZlr_vdIQA4oruHKI5io5x9Oep3pQ5hjZQ6NePP8RLcBF&s=10',
      },
      {
        id: 'relax-2',
        title: 'Beautiful Things',
        artist: 'Benson Boone',
        albumArt:
          'https://http2.mlstatic.com/D_NQ_NP_789399-MLB107777291786_032026-O.webp',
      },
      {
        id: 'relax-3',
        title: 'Die With A Smile',
        artist: 'Lady Gaga & Bruno Mars',
        albumArt:
    'https://upload.wikimedia.org/wikipedia/pt/7/7d/Die_with_a_Smile_-_Lady_Gaga_%26_Bruno_Mars.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original',
      },
      {
        id: 'relax-4',
        title: 'End of Beginning',
        artist: 'Djo',
        albumArt:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hB16i_2VrxtepgrTwiVgQj0olsbktcYfZr9VCSwDLnNfvhF6c05WKRHo&s=10',
      },
    ],
  },
];

export async function getPlaylists() {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);

    if (!data) {
      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(DEFAULT_PLAYLISTS)
      );

      return DEFAULT_PLAYLISTS;
    }

    return JSON.parse(data);
  } catch (error) {
    console.log('Erro ao buscar playlists:', error);
    return [];
  }
}

export async function savePlaylist(playlist) {
  try {
    const playlists = await getPlaylists();

    const id = Date.now().toString();

    const novaPlaylist = {
      id,
      name: playlist.name,
      description: playlist.description || '',
      category: playlist.category || 'Personalizada',
      cover:
        playlist.cover ||
        `https://picsum.photos/seed/${id}/500`,
      songs: playlist.songs || [],
    };

    const updatedPlaylists = [
      ...playlists,
      novaPlaylist,
    ];

    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedPlaylists)
    );

    return novaPlaylist;
  } catch (error) {
    console.log('Erro ao salvar playlist:', error);
  }
}

export async function updatePlaylist(
  id,
  updatedData
) {
  try {
    const playlists = await getPlaylists();

    const updatedPlaylists =
      playlists.map((playlist) =>
        playlist.id === id
          ? {
              ...playlist,
              ...updatedData,
            }
          : playlist
      );

    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedPlaylists)
    );

    return updatedPlaylists;
  } catch (error) {
    console.log('Erro ao editar playlist:', error);
  }
}

export async function deletePlaylist(id) {
  try {
    const playlists = await getPlaylists();

    const updatedPlaylists =
      playlists.filter(
        (playlist) =>
          playlist.id !== id
      );

    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedPlaylists)
    );

    return updatedPlaylists;
  } catch (error) {
    console.log('Erro ao excluir playlist:', error);
  }
}