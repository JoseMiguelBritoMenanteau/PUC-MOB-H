import React , { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, ScrollView, FlatList, KeyboardAvoidingView, Platform, Share } from 'react-native';
import styles from "./Publish_styles";
import * as ImagePicker from 'expo-image-picker';
import { usePublicaciones } from '../../context/PublicacionesContext';
import { useAppContext } from '../../context/Context';


// aca se va a tener la lista de deportes

const deportes = [
    {nombre: "Futbol", campos: ["Goles", "Asistencias"]},
    {nombre: "Basquetbol", campos: ["Puntos", "Rebotes"]},
    {nombre: "Tenis", campos: ["Sets Ganados", "Aces"]},
    {nombre: "Ski", campos: ["Velocidad maxima", "Metros en bajada"]},
    {nombre: "Ciclismo", campos: ["Kilometros recorridos", "Tiempo de carrera"]},
    {nombre: "Natacion", campos: ["Estilo", "Tiempo"]},
    {nombre: "Atletismo", campos: ["Distancia recorrida", "Tiempo"]},
    {nombre: "Surf", campos: ["Olas", "Tiempo en el agua"]},
    {nombre: "Senderismo", campos: ["Distancia recorrida", "Tiempo"]},
    {nombre: "Escalada", campos: ["Altura alcanzada", "Tiempo"]},
    {nombre: "Voleibol", campos: ["Puntos", "Bloqueos", "Sets Ganados"]},
    {nombre: "Rugby", campos: ["Tries", "Conversiones", "Penales"]},
    {nombre: "Golf", campos: ["Holes", "Puntos"]},
    {nombre: "Boxeo", campos: ["Rounds Ganados", "Knockouts"]},
    {nombre: "Artes Marciales Mixtas", campos: ["Rounds Ganados", "Knockouts"]},
    {nombre: "Gym", campos: ["Ejercicios realizados", "Peso levantado"]}, // Este quizas eliminarlo
    
];

export default function Publish() {
    const [deporte, setDeporte] = useState(deportes[0].nombre);
    const [campos, setCampos] = useState<{ [key: string]: string }>({});
    const [image, setImage] = useState<string | null>(null);
    const [tags, setTags] = useState("");
    const [deporteInput, setDeporteInput] = useState("");
    const { username } = useAppContext();

    const handleDeporteChange = (nuevoDeporte: string) => {
        setDeporte(nuevoDeporte);
        setCampos({});  
    };

    const handleCampoChange = (campo: string, valor: string) => {
        setCampos({ ...campos, [campo]: valor });
    };

    const handlePickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });
        if (!result.canceled) {
                setImage(result.assets[0].uri);
            }
    };

    const { agregarPublicacion } = usePublicaciones();

    const handleGuardar = () => {
      if (!deporte || !image || !campos || !tags ) {
        alert("Debes rellenar todos los campos para publicar.");
        return;
      }
      const publicacion = {
        username,
        deporte,
        campos,
        image,
        tags: tags.split(',').map(tag => tag.trim()),
        fecha: new Date().toISOString(),
      };
      agregarPublicacion(publicacion);
      alert("¡Publicación guardada con éxito!");
      setImage(null);
      setDeporte("");
      setDeporteInput("");
      setCampos({});
      setTags("");
      };

    const deportesFiltrados = deportes.filter(deporte =>
      deporte.nombre.toLowerCase().includes(deporteInput.toLowerCase())
    );


    const deporteActual = deportes.find(d => d.nombre === deporte);

    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.titulo}>Publicar actividad</Text>

          <TouchableOpacity onPress={handlePickImage} style={styles.botonImagen}>
            <Text style={styles.botonImagenTexto}>Seleccionar imagen</Text>
          </TouchableOpacity>
          {image && <Image source={{ uri: image }} style={styles.imagen} />}

          <Text style={styles.label}>Deporte:</Text>
          <TextInput
            style ={styles.input}
            value ={deporteInput}
            onChangeText={text => {
              setDeporteInput(text);
              setDeporte("");
            }}
            placeholder = "Busca o selecciona un deporte"
            placeholderTextColor= "#FFFFFF"
          />
          {deporteInput.length > 0 && deportesFiltrados.length > 0 && !deporte && (
            <ScrollView style={styles.listaDeportes}>
              {deportesFiltrados.map(item => (
                <TouchableOpacity
                  key={item.nombre}
                  onPress={() => {
                    setDeporte(item.nombre);
                    setDeporteInput(item.nombre);
                    setCampos({});
                  }}
                  style={styles.opcionDeporte}
                >
                  <Text style={styles.opcionDeporteTexto}>{item.nombre}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}
          {deporteActual && deporteInput === deporteActual.nombre && deporteActual.campos.map(campo => (
            <View key={campo} style={styles.campoContainer}>
              <Text style={styles.label}>{campo}:</Text>
              <TextInput
                style={styles.input}
                value={campos[campo] || ''}
                onChangeText={valor => handleCampoChange(campo, valor)}
                placeholder={`Ingresa ${campo.toLowerCase()}`}
                placeholderTextColor="#FFFFFF"
              />
            </View>
          ))}
          
          <Text style={styles.label}>Tags (separados por coma):</Text>
          <TextInput
            style={styles.input}
            value={tags}
            onChangeText={setTags}
            placeholder="ej: nieve, velocidad, amigos"
            placeholderTextColor="#FFFFFF"
          />
          <TouchableOpacity onPress={handleGuardar} style={styles.botonImagen}>
            <Text style={styles.botonImagenTexto}>Publicar</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    );
}

