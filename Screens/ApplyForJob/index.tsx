import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';

const ApplyForJob = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Who Are You</Text>
        <Text style={styles.para}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
      </View>

      {/* Business start */}
      <TouchableOpacity onPress={() => navigation.navigate('BusinessJob')}>
        <View style={styles.view}>
          <View style={styles.box}>
            <View style={styles.card}>
              <Image
                source={require('../../Images/business.png')}
                style={styles.img}
              />
              <Text style={styles.boxText}>Business/Job</Text>
            </View>
            <View>
              <Image
                source={require('../../Images/redright.png')}
                style={styles.arrowimg}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      {/* Business End */}

      {/* food start */}
      <View style={styles.view}>
        <View style={styles.box}>
          <View style={styles.card}>
            <Image
              source={require('../../Images/foodeat.png')}
              style={styles.img}
            />
            <Text style={styles.boxText}>Food</Text>
          </View>
          <View>
            <Image
              source={require('../../Images/redright.png')}
              style={styles.arrowimg}
            />
          </View>
        </View>
      </View>
      {/* food End */}

      {/* Marriage start */}
      <View style={styles.view}>
        <View style={styles.box}>
          <View style={styles.card}>
            <Image
              source={require('../../Images/marriagemain.png')}
              style={styles.img}
            />
            <Text style={styles.boxText}>Marriage Bureau</Text>
          </View>
          <View>
            <Image
              source={require('../../Images/redright.png')}
              style={styles.arrowimg}
            />
          </View>
        </View>
      </View>
      {/* Marriage End */}
    </View>
  );
};

export default ApplyForJob;
const styles = StyleSheet.create({
  arrowimg: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  img: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  box: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderColor: '#333333',
    borderWidth: 1,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  boxText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#333333',
  },
  para: {
    fontWeight: '400',
    color: '#333333',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '600',
    color: '#333333',
    fontSize: 30,
    alignSelf: 'center',
  },
  view: {
    paddingVertical: 10,
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
