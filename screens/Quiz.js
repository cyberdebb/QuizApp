import React, { useEffect, useState } from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'

const Quiz = ({ navigation }) => {
  const [questions, setQuestions] = useState();
  const[ques, setQues] = useState(0)
  const getQuiz = async() => {
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple'
    const res = await fetch(url)
    const data = await res.json()
    setQuestions(data.results)
  }

  useEffect(()=>{
    getQuiz()
  },[])

  return (
    <View style={styles.container}>
      {questions && (
        <View style={styles.parent}>
          <View style={styles.top}>
            <Text style={styles.question}>Pergunta muito boa</Text>
          </View>
          <View style={styles.options}>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>Opcao 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>Opcao 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>Opcao 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>Opcao 4</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>SKIP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  )
}

Quiz.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%'
  },
  top:{
    marginVertical: 16
  },
  options:{
    marginVertical: 16,
    flex: 1
  },
  bottom:{
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  button:{
    backgroundColor: '#1659BF',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30
  },
  buttonText:{
    fontSize: 18,
    fontWeight: '600',
    color: 'white'
  },
  question:{
    fontSize: 28,
    fontWeight:'600'
  },
  option:{
    fontSize: 18,
    fontWeight:'400',
  },
  optionButton:{
    paddingVertical: 12,
    paddingHorizontal:12,
    marginVertical: 6,
    backgroundColor: '#FFFD62',
    borderRadius: 12
  },
  parent:{
    height: '100%'
  }
})

export default Quiz 
