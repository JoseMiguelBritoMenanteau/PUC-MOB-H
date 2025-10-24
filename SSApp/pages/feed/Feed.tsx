import React from "react";
import { View, Text, Image, FlatList} from "react-native";
import styles from "./Feed_styles";
import { usePublicaciones } from "../../context/PublicacionesContext";

type PublicacionType = {
    username: string;
    deporte: string;
    campos: { [key: string]: string };
    image: string | null;
    tags: string[];
    fecha: string;
};

const Publicacion = ({item}: {item: PublicacionType}) => (
    <View style = {styles.card}>
        {item.image && <Image source = {{uri: item.image}} style = {styles.imagen} />}
        <Text style = {styles.username}> {item.username}</Text>
        <Text style = {styles.deporte}>{item.deporte}</Text>
        <View style={{ width: '100%' }}>
            {Object.entries(item.campos).map(([campo, valor]) => (
                <Text key={campo} style = {styles.campo}> 
                    {campo}: {valor} 
                </Text>
            ))}
        </View>
        <Text style = {styles.tags}>Tags: {item.tags.join(', ')}</Text>
        <Text style = {styles.fecha}>
            {new Date(item.fecha).toLocaleString()}
        </Text>
    </View>
);

export default function Feed() {
    const { publicaciones } = usePublicaciones();

    return (
        <View style = {styles.container}>
            <FlatList
                data = {publicaciones}
                keyExtractor = {(_, index) => index.toString()}
                renderItem = {({ item }) => <Publicacion item={item} />}
                showsVerticalScrollIndicator = {false}
                contentContainerStyle = {{paddingBottom: 20}}
                ListEmptyComponent = {
                    <Text style = {{color: "#fff", textAlign: "center", marginTop: 20}}>
                        No hay publicaciones aún. ¡Sé el primero en publicar!
                    </Text>
                }
            />
        </View>
    );
}