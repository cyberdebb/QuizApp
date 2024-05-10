import React from 'react'
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'

const Result = ({ route, navigation }) => {
  const { score, total } = route.params; 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado Final</Text>
      <View style={styles.bannerContainer}>
        <Image 
          source={{uri:'../assets/quiz.png'}}
          style={styles.banner}
        />
      </View>
      <Text style={styles.resultText}>Você acertou {score} de {total} perguntas!</Text>
      <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.homeButtonText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

Result.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      score: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired
    }).isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'space-around', 
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#cce8f1'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resultText: {
    fontSize: 18,
    marginVertical: 20,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  banner: {
    height: 300,
    width: 300
  },
  homeButton: {
    backgroundColor: '#1659BF', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  homeButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600'
  }
})

export default Result 
