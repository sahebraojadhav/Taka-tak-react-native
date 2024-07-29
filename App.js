import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { ClerkProvider, ClerkLoaded,SignedIn,SignedOut } from '@clerk/clerk-expo'
import {NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY} from '@env'

import LoginScreen from './Apps/Screens/Login/LoginScreen';
import { SignIn } from '@clerk/clerk-expo/web';

export default function App() {

  console.log(NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf')
  });
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
    <View style={styles.container}>
      <SignedIn>
        <Text>
          you are signed in
        </Text>
      </SignedIn>
      <SignedOut>
      <LoginScreen/>
      </SignedOut>
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
 
});

