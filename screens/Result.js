import React from 'react'
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'

const Result = ({ navigation }) => {
  return (
    <View>
      <View>
        <Text>Result</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image 
          source={{uri:'../assets/quiz.png'}}
          style={styles.banner}
        />
      </View>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

Result.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

const styles = StyleSheet.create({
  banner:{
    height: 300,
    width: 300
  },
  bannerContainer:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  container:{
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%'
  }
})

export default Result 
