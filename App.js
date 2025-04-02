import React from 'react';

// React Native Components
import { View, ActivityIndicator } from 'react-native';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Icons
import { Ionicons } from '@expo/vector-icons';

// Fonts
import { useFonts, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';

// Context Providers

// Screens
import HomeScreen from './src/screens/HomeScreen';
import NoteScreen from './src/screens/NoteScreen';
import InsightsScreen from './src/screens/InsightsScreen';
import TasksScreen from './src/screens/TasksScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import { ThemeProvider } from './src/theme';


const Tab = createBottomTabNavigator();

function AppNavigator() {
  // const { theme } = useTheme(); // Get current theme

  return (
    <NavigationContainer >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Notes') {
              iconName = 'create';
            } else if (route.name === 'Insights') {
              iconName = 'bar-chart';
            } else if (route.name === 'Tasks') {
              iconName = 'checkmark-done';
            } else if (route.name === 'Settings') {
              iconName = 'settings';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarLabelStyle: { fontFamily: 'Inter_400Regular' }, // Apply Inter font to tab labels
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Notes" component={NoteScreen} />
        <Tab.Screen name="Insights" component={InsightsScreen} />
        <Tab.Screen name="Tasks" component={TasksScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}
