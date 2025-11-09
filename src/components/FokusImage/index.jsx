import { Image } from "react-native";

export const FokusImage = ({ timerType }) => {
  return (
    <Image source={timerType.image} />
  );
};
