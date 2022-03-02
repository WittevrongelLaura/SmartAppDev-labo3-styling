import { useState } from "react"
import { Switch, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default () => {
    const [darkMode, setDarkMode] = useState<boolean>(false)

    const toggleSwitch = () => {
        setDarkMode(previousState => !previousState)
    }
    
    return (
        <SafeAreaView>
            <Text>Calculator</Text>
            <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={darkMode}
        />
        </SafeAreaView>
    )
}