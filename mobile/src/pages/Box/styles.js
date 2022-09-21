import { StyleSheet } from "react-native";

    const styles = StyleSheet.create({
        container: {
            paddingHorizontal: 20,
            flex: 1
        },
        boxTitle: {
            marginTop: 50,
            textAlign: "center",
            fontSize: 24,
            color: "#333333",
            fontWeight: "bold"
        },
        list: {
            marginTop: 30
        },
        file: {
            paddingVertical: 20,
            paddingHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        },
        separator: {
            marginHorizontal: 20,
            height: 2,
            backgroundColor: "#EEEEEE"
        },
        fileInfo: {
            flexDirection: "row",
            alignItems: "center"
        },
        fileTitle: {
            marginLeft: 10,
            fontSize: 16,
            color: "#333333"
        },
        fileDate: {
            fontSize: 14,
            color: "#666666"
        },
        fab: {
            height: 60,
            width: 60,
            position: "absolute",
            right: 30,
            bottom: 30,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#7159C1",
            borderRadius: 30
        }
    });

        export default styles;