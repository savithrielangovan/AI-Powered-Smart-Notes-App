import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const InsightsScreen = () => {
  const [insights, setInsights] = useState([
    { id: '1', note: 'Meeting Notes', sentiment: 'Positive', keywords: ['project', 'deadline'] },
    { id: '2', note: 'AI Research', sentiment: 'Neutral', keywords: ['OpenAI', 'NLP'] },
    { id: '3', note: 'Grocery List', sentiment: 'Negative', keywords: ['expenses', 'budget'] },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>AI Insights</Text>
      <FlatList
        data={insights}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.insightItem}>
            <Text style={styles.noteTitle}>{item.note}</Text>
            <Text style={styles.sentiment}>Sentiment: {item.sentiment}</Text>
            <Text style={styles.keywords}>Keywords: {item.keywords.join(', ')}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.refreshButton}>
        <Ionicons name="refresh" size={24} color="white" />
        <Text style={styles.buttonText}>Refresh Insights</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  insightItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sentiment: {
    fontSize: 14,
    color: 'gray',
  },
  keywords: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  refreshButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
  },
});

export default InsightsScreen;
