import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, height: "100%" },
  statsView: {
    position: "absolute",
    zIndex: 999,
    bottom: 20,
    right: 16,
    alignItems: "center",
  },
  videoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  likeText: { fontSize: 12, marginTop: 4 },
  commentsText: { fontSize: 12, marginTop: 4 },
  video: {
    height: "100%",
    width: "100%",
  },
  header: {
    position: "absolute",
    zIndex: 999,
    top: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
    alignItems:'center'
  },
});

export { styles };
