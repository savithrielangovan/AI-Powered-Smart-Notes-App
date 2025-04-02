import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  // const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <View style={[styles.container]}>
      <View style={styles.settingItem}>
        <Text style={[styles.settingText]}>
          Dark Mode
        </Text>
        {/* <Switch value={isDarkMode} onValueChange={setIsDarkMode} /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  settingText: {
    fontSize: 16,
  },
  lightBackground: {
    backgroundColor: '#f5f5f5',
  },
  darkBackground: {
    backgroundColor: '#121212',
  },
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
});

export default SettingsScreen;
