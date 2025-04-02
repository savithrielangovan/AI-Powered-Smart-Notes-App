import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NoteScreen = ({ navigation }) => {
  const [note, setNote] = useState('');
  const [summary, setSummary] = useState('');

  // Mock function for AI summarization
  const generateSummary = () => {
    if (note.length > 20) {
      setSummary('AI Summary: ' + note.substring(0, 20) + '...');
    } else {
      setSummary('AI Summary: Not enough text for summarization.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Write your note here..."
        multiline
        value={note}
        onChangeText={setNote}
      />
      {summary ? <Text style={styles.summary}>{summary}</Text> : null}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={generateSummary}>
          <Ionicons name="sparkles" size={24} color="white" />
          <Text style={styles.buttonText}>AI Summarize</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Ionicons name="save" size={24} color="white" />
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    elevation: 2,
  },
  summary: {
    marginTop: 10,
    fontSize: 14,
    color: 'gray',
    fontStyle: 'italic',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
  },
});

export default NoteScreen;
