import { Pressable, TextInput, View } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import styles from "./SearchInput.style.js";
const SearchInput = ({ onSearch }) => {
  const [value, setValue] = useState("");
  const search = () => {
    onSearch(value);
  };

  const clearInput = () => {
    setValue("");
    onSearch("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder="Search Product"
      />
      <View style={styles.iconContainer}>
        <Pressable onPress={search} style={styles.icon}>
          <AntDesign name="search1" size={24} color="black" />
        </Pressable>
        <Pressable onPress={clearInput} style={styles.icon}>
          <AntDesign name="closecircleo" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default SearchInput;