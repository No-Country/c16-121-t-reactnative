import React, { useRef } from 'react';
import { Modal, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { captureRef } from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';
import MyBottom from './MyBottom'


const ImageToShare = ({ infoUsuario, cant, tipoSangre, onCloseModal }) => {
  const ref = useRef();

  const handleCloseModal = () => {
    onCloseModal();
  };

  const shareImage = async () => {
    try {
      const image = await captureRef(ref, { format: 'png' });

      await Sharing.shareAsync(image, { dialogTitle: `¡Ayuda a ${infoUsuario.nombre}!` });
    } catch (error) {
      console.error('Error al compartir la imagen:', error);
    }
  };

  return (
    <View>
      <Modal
        visible={true}
        transparent={true}
        statusBarTranslucent={true}
        animationType="none"
        onRequestClose={handleCloseModal}
      >
        <TouchableOpacity style={styles.modalContainer} onPress={handleCloseModal}>
          <View style={styles.modalContent} ref={ref}>
            <Text style={styles.text}>{infoUsuario.nombre} busca {cant} donadores de sangre tipo: {tipoSangre}</Text>
            <Image
              style={styles.generatedImage} 
              source={require("../Assets/publicacion.png")}
              // source={{
              //   uri: 'https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?q=80&w=1414&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              // }}
            />
            {/* <TouchableOpacity onPress={shareImage}> */}
              {/* <Text>Compartir</Text> */}
              <MyBottom title="Compartir" onPress={shareImage}></MyBottom>
            {/* </TouchableOpacity> */}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    width: '80%',
    height: '50%',
    position: "relative"
  },
  generatedImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
  },
  text: {
    position: "absolute",
    top: 40,
    zIndex: 5,
    alignSelf: "center",
    textAlign: "center",
    fontSize: 16,
  }, 
  textDestacado: {
    fontWeight: "bold"
  }
});

export default ImageToShare;
