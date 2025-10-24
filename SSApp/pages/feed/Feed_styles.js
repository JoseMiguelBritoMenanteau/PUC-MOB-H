import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        backgroundColor: "#23232A"
    },

    imagen: {
        marginTop: 20,
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
        width: '100%'
    },

    card: {
        marginBottom: 20,
        borderRadius: 15,
        padding: 15,
        backgroundColor: "#C97B3A",

        alignItems: "center",
    },

    fecha: {
        fontSize: 12,
        color: "23232A",
        marginTop: 5
    },

    deporte: {
        color: "#fff",
        fontWeight: "bold",
        marginBottom: 5,
        fontSize: 20
    },

    tags: {
        color: "#23232A",
        marginTop: 5,
        fontStyle: "italic"
    },
    
    camposFila: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
        flexWrap: 'wrap',
    },
    campo: {
        color: "#fff",
        fontSize: 16,
        marginHorizontal: 8,
        marginBottom: 4,
    },

    username: {
        position: "absolute",
        top: 10,
        left: 15,
        borderRadius: 8,
        paddingHorizontal:8,
        paddingVertical: 2,
        zIndex: 2,
        color: "#fff",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        fontWeight: "bold"
    }
});
    