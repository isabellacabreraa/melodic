import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={styles.header}>
        <Text style={styles.logo}>Melodic</Text>

        <Ionicons
          name="search-outline"
          size={24}
          color="#333"
        />
      </View>

      <Text style={styles.title}>Bom dia, Usuário</Text>

      <Text style={styles.subtitle}>
        Que bom te ver por aqui!
      </Text>

      <Text style={styles.sectionTitle}>
        Continue ouvindo
      </Text>

      <View style={styles.featuredCard}>
        <Text style={styles.featuredTitle}>
          Energia Matinal
        </Text>

        <Text style={styles.featuredSubtitle}>
          Mix do dia
        </Text>

        <View style={styles.playButton}>
          <Ionicons
            name="play"
            size={22}
            color="#FFFFFF"
          />
        </View>
      </View>

      <Text style={styles.sectionTitle}>
        Para o seu momento
      </Text>

      <View style={styles.row}>
        <View style={styles.smallCard}>
          <Ionicons
            name="headset-outline"
            size={35}
            color="#C6004D"
          />

          <Text style={styles.cardTitle}>
            Foco Profundo
          </Text>

          <Text style={styles.cardText}>
            Ambient
          </Text>
        </View>

        <View style={styles.smallCard}>
          <Ionicons
            name="leaf-outline"
            size={35}
            color="#C6004D"
          />

          <Text style={styles.cardTitle}>
            Relaxamento
          </Text>

          <Text style={styles.cardText}>
            Acoustic
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.libraryButton}
        onPress={() => navigation.navigate('Library')}
      >
        <Ionicons
          name="library-outline"
          size={20}
          color="#FFFFFF"
        />

        <Text style={styles.libraryButtonText}>
          Minha Biblioteca
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
    padding: 22,
    paddingTop: 60,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },

  logo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#C6004D',
  },

  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#222',
  },

  subtitle: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
    marginBottom: 30,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop: 20,
  },

  featuredCard: {
    height: 180,
    backgroundColor: '#F5CAD7',
    borderRadius: 24,
    padding: 22,
    justifyContent: 'flex-end',
  },

  featuredTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  featuredSubtitle: {
    color: '#666',
    marginTop: 3,
  },

  playButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#C6004D',
    alignItems: 'center',
    justifyContent: 'center',
  },

  row: {
    flexDirection: 'row',
    gap: 12,
  },

  smallCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
  },

  cardTitle: {
    fontWeight: 'bold',
    marginTop: 20,
  },

  cardText: {
    color: '#888',
    marginTop: 3,
  },

  libraryButton: {
    backgroundColor: '#C6004D',
    borderRadius: 25,
    padding: 16,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },

  libraryButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});