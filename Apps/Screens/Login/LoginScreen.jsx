import { View, StyleSheet, Text, Image } from "react-native";
import React from "react";
import { Video, ResizeMode } from "expo-av";
import { Colors } from "react-native/Libraries/NewAppScreen";
import * as WebBrowser from "expo-web-browser" 
WebBrowser.maybeCompleteAuthSession();
import { TouchableOpacity } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";

export default function LoginScreen() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google"})

  const onPress=React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive }=
        await startOAuthFlow();

    if (createdSessionId) {
      setActive({ session: createdSessionId });
    } else {
    // Use signIn or signup for next steps such as MFA
    }
  } catch (err) {
    console.error("OAuth error", err);
  }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Video
        style={styles.video}
        source={{
          uri: "https://videos.pexels.com/video-files/8953699/8953699-sd_360_640_30fps.mp4",
        }}
        shouldPlay
        resizeMode="cover"
        isLooping={true}
      />
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 100,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            color: "#fff",
            fontSize: 45,
          }}
        >
          TakaTak
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            color: "#fff",
            fontSize: 17,
            textAlign: "center",
          }}
        >
          Ultimate place to share your createive short videoooo{" "}
        </Text>
      </View>
      <TouchableOpacity 
      style={styles.banner}
      onPress={onPress}
      >
            <Image
              style={styles.tinyLogo}
              source={{
                uri: "https://pngimg.com/d/google_PNG19635.png",
              }}
            />
            <Text fontFamily={{fontFamily: "outfit-bold"}}>
            Sign In with Google
          </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  banner:{
    backgroundColor:'#FFFF',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    paddingLeft:20,
    paddingRight:30,
    borderRadius:30,
    fontFamily:'outfit-bold',
    cursor:'pointer',
    gap:5,
    position:'absolute',
    bottom:150,
    left:90
  }
});
