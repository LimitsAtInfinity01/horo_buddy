import { Text, View, StyleSheet, Image } from 'react-native';


export default function Index() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainTitle}>Welcome to Horo Buddy</Text>
      <View>
         <Image style={styles.horoBuddy} source={require('@/assets/images/aquarius_owl.png')}/>
      </View>
      <Text style={styles.buddySpeak}>Magnam vel nihil culpa similique error rem ratione maxime illum nesciunt optio laborum praesentium perferendis deserunt officiis, facilis voluptatem molestiae quas impedit!</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00193b'
  },

  mainTitle: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 100,
    fontSize: 25,
    fontWeight: 'bold',
  },

  buddySpeak: {
    padding: 10,
    marginLeft: 30,
    marginRight: 30,
    textAlign: 'center',
    backgroundColor: '#fae0cd',
    borderRadius: 20,
  },

  horoBuddy: {
    resizeMode: 'contain',
    width: 400,
    height: 350,
  }

})