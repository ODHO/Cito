import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
  Image,
} from 'react-native';
import HomeScreen from '../Screens/HomeScreen';
import CustomDrawerContent from '../Components/CustomDrawer';
import Food from '../Screens/Foods/Food';
import ApplyForJob from '../Screens/ApplyForJob';
import Settings from '../Screens/Setting';
import Profile from '../Screens/Profile';
import FAQs from '../Screens/FAQs';
import Support from '../Screens/Support';
import LoginAccount from '../Screens/LoginAccount';
import RestaurantDetails from '../Screens/Foods/RestaurantDetails';
import NearByRestaurant from '../Screens/Foods/NearByRestaurant';
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#fff',
        drawerLabelStyle: {
          marginLeft: 0,
          fontFamily: 'Poppins-Regular',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Login" component={LoginAccount} />
      <Drawer.Screen name="Food" component={Food} />
      <Drawer.Screen name="NearByRestaurant" component={NearByRestaurant} />
      <Drawer.Screen name="RestaurantDetails" component={RestaurantDetails} />
      <Drawer.Screen name="ApplyForJob" component={ApplyForJob} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="FAQs" component={FAQs} />
      <Drawer.Screen name="Support" component={Support} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  closeButtonContainer: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 10,
  },
  closeButton: {
    color: '#fff',
    fontSize: 16,
  },
});
export default MyDrawer;

// import { createDrawerNavigator } from '@react-navigation/drawer';
// import Home from '../../Screens/Home';
// import MyTabs from '../MyTabs';
// import CustomDrawer from '../../Components/CustomDrawer';
// import Payment from '../../Screens/Payment';
// import Complaint from '../../Screens/Complaint';
// import Notification from '../../Screens/Notification';

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator
//     drawerContent={props => <CustomDrawer {...props} />}
//     screenOptions={{
//       headerShown: false,
//       // drawerActiveBackgroundColor: '#aa18ea',
//       drawerActiveTintColor: '#fff',
//       drawerInactiveTintColor: '#fff',
//       drawerLabelStyle: {
//         marginLeft: 0,
//         fontFamily: 'Poppins-Regular',
//         fontSize: 15,
//       },
//     }}>
//       <Drawer.Screen name="HomeScreen" component={MyTabs} />
//     </Drawer.Navigator>
//   );
// }
// export default MyDrawer
