import { StyleSheet } from "react-native";

    const styles = StyleSheet.create({

        container: {
            paddingHorizontal: 30,
            flex: 1,
            alignItems: "stretch",
            justifyContent: "center"
        },

        logo: {
            alignSelf: "center"
        },

        input: {
            marginTop: 30,
            paddingHorizontal: 20,
            height: 48,
            borderWidth: 1,
            borderColor: "#DDDDDD",
            borderRadius: 4,
            fontSize: 16
        },

        button: {
            marginTop: 10,
            paddingHorizontal: 20,
            height: 48,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            fontSize: 16,
            backgroundColor: "#7159C1"
        },

        buttonText: {
            fontSize: 16,
            color: "#FFFFFF",
            fontWeight: "bold"
        }
        
    });

        export default styles;