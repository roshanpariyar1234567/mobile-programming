import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://i.pravatar.cc/150?img=12',
          }}
          style={styles.image}
        />

        <Text style={styles.name}>Roshan Pariyar</Text>
        <Text style={styles.course}>
          PRG 402: Mobile Programming Applications
        </Text>

        <Text style={styles.university}>
          Westcliff University
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            View Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: 320,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    elevation: 5,
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  course: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
    textAlign: 'center',
  },

  university: {
    fontSize: 16,
    marginTop: 8,
    color: '#333',
  },

  button: {
    marginTop: 20,
    backgroundColor: '#662D91',
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 10,
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});