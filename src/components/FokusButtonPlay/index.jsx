import { styles } from "@/styles/index/styles";
import { Pressable, Text } from "react-native";

export const FokusButtonPlay = ({ title, icon, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      {icon}
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};
