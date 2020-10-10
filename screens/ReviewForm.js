import React from 'react'
import { Formik } from 'formik'
import { globalStyles } from '../styles/global'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import * as yup from 'yup'
import FlatButton from '../shared/button'

const reviewSchema = yup.object({
  name: yup.string().required().min(4),
  desc: yup.string().required().min(8),
  ratings: yup.string().max(1).required().test('must be 1-5', 'rating must be 1-5', (val) => {
    return parseInt(val) < 6 && parseInt(val) > 0
  })
})

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ name: '', desc: '', ratings: '' }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm()
          addReview(values)
        }}
      >
        {(props) => (
          <View style={globalStyles.formContainer}>
            <TextInput
              style={globalStyles.input}
              placeholder="Review Name"
              onChangeText={props.handleChange('name')}
              onBlur={props.handleBlur('name')}
              value={props.values.name} />
            <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text>
            <TextInput
              multiline minHeight={60}
              style={globalStyles.input}
              placeholder="Review desc"
              onChangeText={props.handleChange('desc')}
              onBlur={props.handleBlur('desc')}
              value={props.values.desc} />
            <Text style={globalStyles.errorText}>{props.touched.desc && props.errors.desc}</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Review ratings"
              onChangeText={props.handleChange('ratings')}
              onBlur={props.handleBlur('ratings')}
              value={props.values.ratings}
              keyboardType='numeric' />
            <Text style={{ ...globalStyles.errorText, marginBottom: 15 }}>{props.touched.ratings && props.errors.ratings}</Text>

            <FlatButton text="submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  )
}
