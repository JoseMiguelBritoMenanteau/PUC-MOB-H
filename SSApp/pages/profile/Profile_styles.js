import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23232A',
    padding: 16,
  },
  bienvenida: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  titulo: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#C97B3A',
    borderRadius: 12,
    marginBottom: 16,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  imagen: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#222',
  },
  info: {
    flex: 1,
  },
  deporte: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
  },
  camposFila: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 4,
  },
  campo: {
    color: '#fff',
    fontSize: 14,
    marginRight: 8,
  },
  tags: {
    color: '#23232A',
    fontStyle: 'italic',
    marginBottom: 2,
  },
  fecha: {
    color: '#23232A',
    fontSize: 12,
  },
  empty: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
  deleteBox: {
    backgroundColor: '#D7263D',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    borderRadius: 12,
    width: 350,
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'right',
    width: '100%',
    paddingRight: 12,
  },
  instruccion: {
  color: '#fff',
  fontSize: 15,
  textAlign: 'center',
  marginBottom: 12,
},
});