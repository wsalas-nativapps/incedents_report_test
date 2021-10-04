import React from "react";
import { View, Text, Image } from "react-native";
import { reportStyle } from "../../styles/Style";
import { IReport } from "./interface/IReport";

const ItemImage: React.FC<IReport> = ({ title, image }) => (
  <View style={reportStyle.itemImageContent}>
    {image ? (
      <Image
        resizeMode="contain"
        source={{ uri: image }}
        style={reportStyle.reportImage}
      />
    ) : (
      <Text style={reportStyle.reportText}>
        {title?.substring(0, 2).toLocaleLowerCase()}
      </Text>
    )}
  </View>
);

const RenderItem: React.FC<{ item: IReport }> = ({
  item: { title, image, description },
}) => (
  <View style={reportStyle.item}>
    <View>
      <ItemImage title={title} image={image} />
    </View>
    <View style={reportStyle.reportContentText}>
      <Text style={reportStyle.reportTitle}>{title}</Text>
      <Text style={reportStyle.reportDescription}>{description}</Text>
    </View>
  </View>
);

const ItemSeparator: React.FC = () => (
  <View style={reportStyle.itemSeparator} />
);

export { RenderItem, ItemSeparator };
