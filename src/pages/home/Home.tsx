import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { IReport } from "../../components/report/interface/IReport";
import { ItemSeparator, RenderItem } from "../../components/report/Report";
import { ROUTE } from "../../constants/Route";
import { getDataReport } from "../../services/Service";
import { generalStyle, homeStyle } from "../../styles/Style";
import { Props } from "../../types/Type";

const Home: React.FC<Props> = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [getListReport, setListReport] = useState<IReport[]>([]);

  const getReportAsync = async () => {
    const result = await getDataReport("report");
    if (result) {
      setListReport(JSON.parse(result));
      setLoading(false);
    }
  };

  useEffect(() => {
    getReportAsync();
  }, []);

  const NotFountReport: React.FC = () => {
    return (
      <View>
        <Text style={homeStyle.textNotFound}>Not Report Found</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTE.NewReport)}
          style={generalStyle.button}
        >
          <Text style={generalStyle.textButton}>Go to add a Report</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={generalStyle.container}>
      {!getListReport && loading && (
        <ActivityIndicator size="large" color="#0c0e3c" />
      )}
      {!getListReport.length && loading ? (
        <NotFountReport />
      ) : (
        <FlatList
          style={[generalStyle.content, homeStyle.flatList]}
          data={getListReport}
          renderItem={RenderItem}
          ItemSeparatorComponent={ItemSeparator}
          keyExtractor={(item) => item.id}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
