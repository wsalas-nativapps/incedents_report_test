import { StyleSheet } from "react-native";

const generalStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: { width: "100%", height: "100%" },
  logo: { width: 120, height: 120 },
  button: {
    width: "100%",
    borderRadius: 2,
    padding: 10,
    height: 50,
    backgroundColor: "#e79332",
    justifyContent: "center",
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  boxShadow: {
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 4,
  },
});

const landingStyle = StyleSheet.create({
  bgColor: {
    backgroundColor: "#0c0e3c",
  },
  colOne: {
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  colTwo: {
    height: "40%",
    paddingHorizontal: 20,
  },
  colThree: {
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "left",
  },
  subTitle: {
    marginTop: 10,
    color: "white",
    fontWeight: "300",
    fontSize: 16,
    textAlign: "left",
  },
});

const homeStyle = StyleSheet.create({
  flatList: { padding: 20 },
  textNotFound: {
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
    fontSize: 16,
  },
});

const reportStyle = StyleSheet.create({
  item: {
    width: "100%",
    marginVertical: 10,
  },
  itemSeparator: { height: 1, backgroundColor: "#80808026" },
  itemImageContent: {
    flex: 1,
    backgroundColor: "#e9e9e973",
    borderRadius: 2,
    justifyContent: "center",
  },
  reportImage: { height: 120, borderRadius: 2 },
  reportContentText: { padding: 10 },
  reportText: {
    padding: 10,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  reportTitle: { fontSize: 20, fontWeight: "bold", textAlign: "left" },
  reportDescription: { fontSize: 15, fontWeight: "200", textAlign: "left" },
});

const actionSheetStyle = StyleSheet.create({
  button: {
    height: 50,
    justifyContent: "center",
    borderBottomWidth: 0.2,
    borderBottomColor: "#393939d1",
  },
  title: {
    color: "#393939d1",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});

const newReportStyle = StyleSheet.create({
  colOne: {
    height: "40%",
    backgroundColor: "#e7e7e9",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 130,
    height: 130,
    margin: 10,
    borderRadius: 5,
    overflow: "hidden",
  },
  textImage: {
    fontSize: 16,
    fontWeight: "bold",
    color: "blue",
    textAlign: "center",
  },
  colTwo: {
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  keyboardAvoidingView: { width: "100%" },
  contentInput: {
    marginTop: 20,
    borderWidth: 0.5,
    borderColor: "gray",
    width: "100%",
    borderRadius: 4,
    padding: 10,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  textInput: { fontSize: 15 },
  colThree: {
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  buttonGreen: { backgroundColor: "green" },
});

export {
  generalStyle,
  landingStyle,
  homeStyle,
  reportStyle,
  actionSheetStyle,
  newReportStyle,
};
