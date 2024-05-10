import React, { useEffect, useState } from 'react'
import { TouchableOpacity, StyleSheet, Text, View, Alert } from 'react-native'
import PropTypes from 'prop-types'

const Quiz = ({ navigation }) => {
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [sessionToken, setSessionToken] = useState('')
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [feedbackMessage, setFeedbackMessage] = useState('')
  const [feedbackColor, setFeedbackColor] = useState('')

  const getSessionToken = async () => {
    const tokenResponse = await fetch('https://opentdb.com/api_token.php?command=request')
    const tokenData = await tokenResponse.json()
    if (tokenData.response_code === 0) {
      setSessionToken(tokenData.token)
    }
  }

  const getQuiz = async () => {
    if (!sessionToken) return 
    const url = `https://opentdb.com/api.php?amount=5&type=multiple&token=${sessionToken}`
    const res = await fetch(url)
    const data = await res.json()
    const questionsWithShuffledOptions = data.results.map((question) => ({
      ...question,
      all_answers: shuffle([...question.incorrect_answers, question.correct_answer])
    }))
    setQuestions(questionsWithShuffledOptions)
  }

  useEffect(() => {
    getSessionToken()
  }, [])

  useEffect(() => {
    if (sessionToken) {
      getQuiz()
    }
  }, [sessionToken])

  const shuffle = (array) => {
    for (let i = array.length - 1 ; i > 0 ; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  const handleAnswer = (answer) => {
    const correctAnswer = questions[currentQuestionIndex].correct_answer;
  
    if (answer === correctAnswer) {
      setFeedbackMessage('Você acertou!')
      setFeedbackColor('green')
    } else {
      setFeedbackMessage(`Você errou! A resposta certa era: ${correctAnswer}`)
      setFeedbackColor('red')
    }
  
    setTimeout(() => {
      nextQuestion();
    }, 2000); // 2 segundos
  }
  
  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setFeedbackMessage('');
    } else {
      navigation.navigate('Result', { score:correctAnswers, total:questions.length });
    }
  }
  
  return (
    <View style={styles.container}>
      {questions.length > 0 && (
        <View style={styles.parent}>
          <View style={styles.top}>
            <Text style={styles.question}>{questions[currentQuestionIndex].question}</Text>
          </View>
          <View style={styles.options}>
            {questions[currentQuestionIndex].all_answers.map((option, index) => (
              <TouchableOpacity key={index} style={styles.optionButton} onPress={() => handleAnswer(option)}>
                <Text style={styles.option}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={[styles.feedbackText, { color:feedbackColor }]}>{feedbackMessage}</Text> 
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
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
    backgroundColor: '#cce8f1'
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
    fontWeight:'400'
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
  },
  feedbackText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20
  }
})

export default Quiz 
