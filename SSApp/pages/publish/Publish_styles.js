import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#23232A",
        flexGrow: 1
    },

    titulo: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#FFFFFF",
        textAlign: "center"
    },

    input: {
        borderColor: "#CCCCCC",
        borderWidth: 1,
        borderRadius: 5,
        color: "#CCCCCC",
        padding: 8,
        marginTop: 5,
        backgroundColor: "#2D2D37"
    },

    label: {
        color: "#FFFFFF",
        fontWeight: "bold",
        marginTop: 10
    },

    imagen: {
        alignSelf: "center",
        width: 220,
        height: 220,
        borderColor: "#C97B3A",
        borderWidth: 2,
        borderRadius: 10,
        marginVertical: 10
    },

    botonImagen: {
        backgroundColor: "#C97B3A",
        padding: 12,
        borderRadius: 15,
        alignItems: "center",
        marginVertical: 10
    },

    botonImagenTexto: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18
    },

    listaDeportes: {
        marginBottom: 10,
        maxHeight: 120,
        borderRadius: 10,
        backgroundColor: "#C97B3A"
    },
    
    opcionDeporte: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#444"
    },

    opcionDeporteTexto: {
        color: "#fff"
    },
    
    campoContainer: {
        marginBottom: 10
    }
});