import React from 'react'
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native'
import Title from '../components/title'
import PropTypes from 'prop-types'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.bannerContainer}>
        <Image 
          source={{uri:'../assets/quiz.png'}}
          style={styles.banner}
          resizeMode='contain'
        />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Quiz')} style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

Home.propTypes = {
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
  banner:{
    height: 300,
    width: 300
  },
  bannerContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  button:{
    width: '100%',
    backgroundColor: '#1659BF',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30
  },
  buttonText:{
    fontSize: 24,
    fontWeight: '600',
    color: 'white'
  }
})

export default Home 
