import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { generalStyle, newReportStyle } from "../../styles/Style";
import { Props } from "../../types/Type";
import ActionSheet from "react-native-actions-sheet";
import { ActionSheetImage } from "../../components/action_sheet/ActionSheetImage";
import { getDataReport, saveReport } from "../../services/Service";
import { IReport } from "../../components/report/interface/IReport";

const NewReport: React.FC<Props> = ({}) => {
  const [getImage, setImage] = useState<string>();
  const [getTitle, setTitle] = useState<string>("");
  const [getDescription, setDescription] = useState<string>("");
  const [getListReport, setListReport] = useState<IReport[]>([]);
  const actionSheetRef: any = useRef();

  const getReportAsync = async () => {
    const result = await getDataReport("report");
    if (result) setListReport(JSON.parse(result));
  };

  useEffect(() => {
    getReportAsync();
  }, []);

  const createReport = async () => {
    try {
      if (getTitle === "" || getDescription === "") {
        return Alert.alert("", "Please complete the fields");
      }
      let newListReport = getListReport;
      newListReport.push({
        id: (getListReport.length + 1).toString(),
        title: getTitle || "",
        description: getDescription,
        image: getImage,
      });
      await saveReport("report", newListReport);
      return Alert.alert("Save Report", "Report generate successfull!", [
        {
          text: "Ok",
          onPress: () => {
            setTitle("");
            setDescription("");
            setImage(undefined);
          },
        },
      ]);
    } catch (error: any) {
      return Alert.alert("Error ", error);
    }
  };

  return (
    <SafeAreaView style={generalStyle.container}>
      <View style={generalStyle.content}>
        <TouchableOpacity
          onPress={() => actionSheetRef.current?.setModalVisible(true)}
          style={newReportStyle.colOne}
        >
          {getImage && (
            <Image
              resizeMode="contain"
              source={{ uri: getImage }}
              style={newReportStyle.image}
            />
          )}
          <Text style={newReportStyle.textImage}>
            {getImage ? "Change " : "Add a "}
            image
          </Text>
        </TouchableOpacity>
        <View style={newReportStyle.colTwo}>
          <KeyboardAvoidingView style={newReportStyle.keyboardAvoidingView}>
            <ScrollView>
              <View style={newReportStyle.contentInput}>
                <TextInput
                  placeholder="Title"
                  value={getTitle}
                  onChangeText={setTitle}
                  style={newReportStyle.textInput}
                />
              </View>
              <View style={[newReportStyle.contentInput]}>
                <TextInput
                  placeholder="Description"
                  value={getDescription}
                  onChangeText={setDescription}
                  maxLength={200}
                  multiline
                  style={newReportStyle.textInput}
                />
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
        <View style={newReportStyle.colThree}>
          <TouchableOpacity
            onPress={createReport}
            style={[generalStyle.button, newReportStyle.buttonGreen]}
          >
            <Text style={generalStyle.textButton}>Save</Text>
          </TouchableOpacity>
        </View>
        <ActionSheet ref={actionSheetRef}>
          <ActionSheetImage image={setImage} />
        </ActionSheet>
      </View>
    </SafeAreaView>
  );
};

export default NewReport;
