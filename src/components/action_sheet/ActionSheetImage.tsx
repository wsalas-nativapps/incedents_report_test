import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { ImageManager } from "../../helpers/ImageManager";
import { actionSheetStyle } from "../../styles/Style";

const ActionSheetImage: React.FC<{ image: any }> = ({ image }) => {
  const items = [
    {
      title: "Galery",
    },
    {
      title: "Camera",
    },
  ];

  const actionSheetSelection = async (index: number) => {
    let pathFile: string = "";
    const actions: any = {
      [0]: async () => {
        await ImageManager.PickImage((imageUri: string) => {
          if (imageUri) pathFile = imageUri;
        });
      },
      [1]: async () => {
        await ImageManager.TakePhoto((imageUri: string) => {
          if (imageUri) pathFile = imageUri;
        });
      },
    };
    await actions[index]();
    if (pathFile !== "") return image(pathFile);
  };

  return (
    <>
      {items?.map((item, i) => {
        return (
          <TouchableOpacity
            key={i}
            onPress={() => actionSheetSelection(i)}
            style={actionSheetStyle.button}
          >
            <Text style={actionSheetStyle.title}>{item.title}</Text>
          </TouchableOpacity>
        );
      })}
    </>
  );
};

export { ActionSheetImage };
