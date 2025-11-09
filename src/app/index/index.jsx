import { FokusButtonPlay } from "@/components/FokusButtonPlay";
import { FokusContextSelector } from "@/components/FokusContextSelector";
import { FokusFooter } from "@/components/FokusFooter";
import { FokusImage } from "@/components/FokusImage";
import { FokusTimer } from "@/components/FokusTimer";
import { IconPause, IconPlay } from "@/components/icons";
import { styles } from "@/styles/index/styles";
import { pomodoro } from "@/utils/pomodoro";
import { useRef, useState } from "react";
import { View } from "react-native";

export default function Index() {
  const [timerType, setTimerType] = useState(pomodoro[0]);
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue);
  const [timerRunning, setTimerRunning] = useState(false);

  const timerRef = useRef(null);

  const clear = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimerRunning(false);
    }
  };

  const toggleTimerTyper = (newTimerType) => {
    setTimerType(newTimerType);
    setSeconds(newTimerType.initialValue);
    clear();
  };

  const toggleTimer = () => {
    if (timerRef.current) {
      clear();
      return;
    }

    setTimerRunning(true);

    const id = setInterval(() => {
      setSeconds((oldState) => {
        if (oldState === 0) {
          clear();
          return timerType.initialValue;
        }
        return oldState - 1;
      });
    }, 1000);
    timerRef.current = id;
  };

  return (
    <View style={styles.container}>
      <FokusImage timerType={timerType} />
      <View style={styles.actions}>
        <FokusContextSelector
          timerType={timerType}
          onPress={toggleTimerTyper}
        />

        <FokusTimer totalSeconds={seconds} />

        <FokusButtonPlay
          title={timerRunning ? "Pausar" : "Começar"}
          icon={timerRunning ? <IconPause /> : <IconPlay />}
          onPress={toggleTimer}
        />
      </View>

      <FokusFooter />
    </View>
  );
}
