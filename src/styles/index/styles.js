import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.componentes[1],
    gap: 40,
  },

  actions: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    backgroundColor: colors.fundos[3],
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: colors.fundos[2],
    gap: 32,
  },

  context: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  contextButtonActive: {
    backgroundColor: colors.componentes[3],
    borderRadius: 8,
  },

  contextButtonText: {
    fontSize: 12.5,
    color: "#FFF",
    padding: 8,
  },

  timer: {
    fontSize: 54,
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },

  button: {
    backgroundColor: colors.componentes[2],
    borderRadius: 32,
    padding: 8,
    flexDirection: 'row',
    gap: 12,
    alignItems: "center",
    justifyContent: 'center',
  },

  buttonText: {
    textAlign: "center",
    color: colors.componentes[1],
    fontSize: 18,
  },

  footer: {
    width: "80%",
  },

  footerText: {
    textAlign: "center",
    color: colors.componentes[4],
    fontSize: 12.5,
  },
});
