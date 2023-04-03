import React from 'react';
import { View, Text, Image } from "react-native";
import { responsivePixels } from "../../../globalStyles";
import { BodyThree, FinePrint, SmallHeadings } from "../../Text/Text";
import CustomButton from "../CustomButton/CustomButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "./SavedMediaButtonStyles";

const SavedMediaButton = ({ item }) => {
  const { header, author, published, read, image } = item;
  const authorSplit = (author) => {
    return (
      <View style={{ textAlign: "center" }}>
        <BodyThree>{author.split(" ").slice(-1)}</BodyThree>
        <BodyThree>{author.split(" ").slice(0, -1).join(" ")}{" "}</BodyThree>
      </View>
    );
  };

  return (
    <CustomButton style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={{
            uri: image
          }}
        />
      </View>
      <View style={styles.flexInfo}>
        <SmallHeadings style={styles.header}>
          <Text>{header}</Text>
        </SmallHeadings>
        <View style={styles.infoDetails}>
          {authorSplit(author)}
          <FinePrint style={styles.publish}>
            {" "}
            <Ionicons size={responsivePixels(16)} name="time-outline" />{" "}
            {published}
          </FinePrint>
          <FinePrint>
            {" "}
            <Ionicons size={responsivePixels(16)} name="eye-outline" /> {read}
          </FinePrint>
        </View>
      </View>
    </CustomButton>
  );
};

export default SavedMediaButton;
