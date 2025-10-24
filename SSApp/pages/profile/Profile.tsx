import React from "react";
import { View, Text, Image, FlatList, Alert } from "react-native";
import styles from "./Profile_styles";
import { usePublicaciones } from "../../context/PublicacionesContext";
import { useAppContext } from "../../context/Context";
import { Swipeable } from "react-native-gesture-handler";
import { Publicacion } from "../../context/PublicacionesContext";

export default function Profile() {
  const { publicaciones, eliminarPublicacion } = usePublicaciones();
  const { username } = useAppContext();

  // Solo mostrar publicaciones del usuario actual
  const publicacionesUsuario = publicaciones.filter(p => p.username === username);

  const renderRightActions = () => (
    <View style={styles.deleteBox}>
      <Text style={styles.deleteText}>Eliminar</Text>
    </View>
  );


  const renderItem = ({ item }: { item: Publicacion }) => (
    <Swipeable
      renderRightActions={renderRightActions}
      onSwipeableOpen={() => eliminarPublicacion(item)}
    >
      <View style={styles.card}>
        {item.image && (
          <Image source={{ uri: item.image }} style={styles.imagen} />
        )}
        <View style={styles.info}>
          <Text style={styles.deporte}>{item.deporte}</Text>
          <View style={styles.camposFila}>
            {Object.entries(item.campos).map(([campo, valor]) => (
              <Text key={campo} style={styles.campo}>{`${campo}: ${valor}`}</Text>
            ))}
          </View>
          <Text style={styles.tags}>Tags: {item.tags.join(", ")}</Text>
          <Text style={styles.fecha}>{new Date(item.fecha).toLocaleString()}</Text>
        </View>
      </View>
    </Swipeable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.bienvenida}>{`¡Bienvenido, ${username}!`}</Text>
      {publicacionesUsuario.length > 0 ? (
        <Text style={styles.instruccion}>Desliza hacia la izquierda para eliminar una publicación</Text>
      ) : null}
      <FlatList
        data={publicacionesUsuario}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.empty}>No tienes publicaciones aún.</Text>}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}