import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../shared/Card';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './ReviewForm'

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [reviews, setReviews] = useState([
    { name: 'fantasy life', ratings: 1, desc: 'lorem ipsum', key: '1' },
    { name: 'pokemon x', ratings: 2, desc: 'lorem ipsum 2', key: '2' },
    { name: 'pokemon omega ruby', ratings: 3, desc: 'lorem ipsum 3', key: '3' },
    { name: 'pokemon sun', ratings: 4, desc: 'lorem ipsum 4', key: '4' },
  ])

  const addReview = (review) => {
    review.key = Math.random().toString()
    setReviews((currentReviews) => {
      return [review, ...currentReviews]
    })
    setModalOpen(false)
  }

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide" >
        <MaterialIcons style={{ ...styles.toggleModal, ...styles.closeModal }} name="close" size={24} color="black" onPress={() => setModalOpen(false)} />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons style={styles.toggleModal} name="add" size={24} color="black" onPress={() => setModalOpen(true)} />

      <FlatList data={reviews} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Rerview Details', item)}>
          <Card>
            <Text style={globalStyles.titleText}>{item.name}</Text>
          </Card>
        </TouchableOpacity>
      )} />
    </View>
  )
}

const styles = StyleSheet.create({
  toggleModal: {
    alignSelf: 'center',
    marginBottom: 10,
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    borderColor: '#f2f2f2'
  },
  closeModal: {
    marginTop: 40,
    marginBottom: 0
  },
  modalContent: {
    flex: 1
  }
})
