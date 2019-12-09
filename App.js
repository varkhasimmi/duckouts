import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen  from './src/screens/LoginScreen'; 
import ForgetScreen  from './src/screens/ForgetScreen'; 
import Signup  from './src/screens/SignupScreen'; 

const navigator = createStackNavigator(
  {
    
    Login: LoginScreen,
    ForgetScreen : ForgetScreen,
    Signup : Signup
  },{
    initialRouteName : 'Signup',
    defaultNavigationOptions: {
      header:null
    }
  }
);

export default createAppContainer(navigator);