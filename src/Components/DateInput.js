import React, { useState } from 'react';
import { View, TextInput, Modal, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Colors } from "../Constants/Colors";

const DateInput = ({ label, value, onChange }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(value);

  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleChange = (event, selectedDate) => {
    if (selectedDate) {
      setSelectedDate(selectedDate);
      onChange(selectedDate);
      handleModalClose();
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handleModalOpen}>
        <TextInput
          label={label}
          value={selectedDate ? selectedDate.toLocaleDateString() : ''}
          style={styles.input}
          editable={false}
        />
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleModalClose}
      >
        <TouchableOpacity style={styles.modalContainer} onPress={handleModalClose}>
          <View style={styles.modalContent}>
            <DateTimePicker
              value={selectedDate || new Date()}
              mode="date"
              display="spinner"
              onChange={handleChange}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
        width: "90%",
        height: 45,
        justifyContent: "center",
        margin: 10,
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.input,
      },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
});

export default DateInput;