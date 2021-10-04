import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { ROUTE } from "../../constants/Route";
import { Props } from "../../types/Type";
import { generalStyle, landingStyle } from "../../styles/Style";

const Landing: React.FC<Props> = ({ navigation }) => (
  <SafeAreaView style={[generalStyle.container, landingStyle.bgColor]}>
    <StatusBar style="light" />
    <View style={generalStyle.content}>
      <View style={landingStyle.colOne}>
        <Image
          resizeMode="contain"
          source={require("../../../assets/icon.png")}
          style={generalStyle.logo}
        />
      </View>
      <View style={landingStyle.colTwo}>
        <Text style={landingStyle.title}>Welcome to Incedents Report</Text>
        <Text style={landingStyle.subTitle}>
          With this application you will be able to create and visualize all
          your generated reports, get ready to use it!
        </Text>
      </View>
      <View style={landingStyle.colThree}>
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTE.HomeTab)}
          style={generalStyle.button}
        >
          <Text style={generalStyle.textButton}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  </SafeAreaView>
);

export default Landing;
