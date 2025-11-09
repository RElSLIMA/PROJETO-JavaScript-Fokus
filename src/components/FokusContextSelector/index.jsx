import { styles } from "@/styles/index/styles";
import { pomodoro } from "@/utils/pomodoro";
import { Pressable, Text, View } from "react-native";

export const FokusContextSelector = ({ timerType, onPress }) => {
  return (
    <View style={styles.context}>
      {pomodoro.map((p) => (
        <Pressable
          key={p.id}
          style={timerType.id === p.id ? styles.contextButtonActive : null}
          onPress={() => onPress(p)}
        >
          <Text style={styles.contextButtonText}>{p.display}</Text>
        </Pressable>
      ))}
    </View>
  );
};
