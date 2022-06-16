import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/inputtext'
import Image from '../screens/image'

const screens = {
    Home : {
        screen : Home
    },
    ImageScreen : {
        screen : ImageScreen
    }
}

const HomeStack = createStackNavigator(screens);



export default createAppContainer(HomeStack);

 