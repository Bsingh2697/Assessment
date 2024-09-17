import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headingView: { marginBottom: 12, marginTop: 12, marginHorizontal: 16 },
  headingText: { fontSize: 20, textAlign: "center" },
  cardHeading: { marginBottom: 12, marginHorizontal: 16 },
  surfaceView: { flexDirection: "row", borderRadius: 8, marginHorizontal: 16 },
  cardImageView: {
    paddingVertical: 16,
    paddingHorizontal: 11,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  cardTitle:{ flex: 1, alignItems: "center" },
  cardSubtitle:{flexDirection: "row",
    alignItems: "center",
    paddingTop: 4,},
  mediaTitle:{flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
    marginHorizontal:16},
  cardTitleView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  videoContainer:{
    height: 372,
    width: 208,
    borderRadius: 10,
    marginEnd: 10,
  },
  videoStyle:{
        height: 372,
        width: 208,
        borderRadius: 20,
        overflow:'hidden'
  },
  uploadTouchContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 8,
    paddingVertical: 8,
    marginTop: 20,
    marginHorizontal: 16,
  },
});

export { styles };
