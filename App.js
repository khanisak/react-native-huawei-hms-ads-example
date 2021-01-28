import React from "react";
import { Alert, Text, Button } from "react-native";
import {
  HMSBanner,
  BannerAdSizes
} from "@hmscore/react-native-hms-ads";

const App = () => {

  let bannerRef;

  return (
    <>
      <Text>Ads should be showed up here, otherwise there will be an error alert.</Text>
      <HMSBanner
        style={{ height: 100 }}
        bannerAdSize={{
          bannerAdSize: BannerAdSizes.B_PORTRAIT,
          width: 300,
        }}
        adId="testw6vs28auh3"// <== your ad slot id goes here
        onAdLoaded={() => Alert.alert("Ads loaded")}
        onAdFailed={err => {
          err.persist();
          console.log(err);
          Alert.alert("Ad failed load", `error code : ${err.nativeEvent.errorCode}, message : ${err.nativeEvent.errorMessage}`)
        }}
        ref={el => {
          bannerRef = el
        }}
      />
    </>
  )
}

export default App;