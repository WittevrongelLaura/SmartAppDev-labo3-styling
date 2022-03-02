import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack"
import Home from './Home'
import Settings from './Settings'

export default function MainStack () {
    const Stack = createStackNavigator()

    //removes the header
    const screenOptions: StackNavigationOptions = {
    headerShown: false,
}
    
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    )
}