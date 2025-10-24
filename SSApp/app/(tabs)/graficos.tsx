import { Pressable, Text, View, StyleSheet, Image, TextInput, Dimensions } from "react-native";
import React from 'react';
import { usePublicaciones } from '@/context/PublicacionesContext';
import { Svg } from 'react-native-svg';
import { Pie, PolarChart } from 'victory-native';

const colores = [
  'hsla(30, 100%, 95%, 1.00)',
  'hsla(30, 100%, 85%, 1.00)',
  'hsla(30, 100%, 75%, 1.00)',
  'hsla(30, 100%, 65%, 1.00)',
  'hsla(30, 100%, 55%, 1.00)',
  'hsla(30, 100%, 45%, 1.00)',
  'hsla(30, 100%, 35%, 1.00)',
  'hsla(30, 100%, 25%, 1.00)',
  'hsla(30, 80%, 20%, 1.00)',
  'hsla(30, 70%, 15%, 1.00)',
  'hsla(30, 70%, 10%, 1.00)',
  'hsla(30, 70%, 5%, 1.00)',
];

export default function Graficos() {

  const {publicaciones} = usePublicaciones();

  const conteoDeportes = publicaciones.reduce((i, publicacion) => {
    i[publicacion.deporte] = (i[publicacion.deporte] || 0) + 1;
    return i;
  }, {} as { [key: string]: number })

  const Data = Object.entries(conteoDeportes).map(([nombre, cantidad], index) => ({
    x: nombre,
    y: cantidad,
    label: `${nombre}\n(${cantidad})`,
    color: colores[index]
  }));



  if (Data.length == 0) {
    return(
      <View>
        <Text>
          Aún no se han hecho publicaciones...
        </Text>
      </View>
    )
  }

  return (
    <View>
      <Svg>
        <PolarChart
          data = {Data}
          labelKey = 'label'
          valueKey = 'y'
          colorKey = 'color'
          width = {Dimensions.get('window').width * 0.8}
          height = {Dimensions.get('window').width * 0.8}
          padAngle = {2}
          innerRadius = {Dimensions.get('window').width * 0.08}

        >
          <Pie.Chart />
          <PolarLabel />
        </PolarChart>
      </Svg>
    </View>
  )


}