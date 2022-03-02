import { useEffect, useState } from "react"
import { Animated, Text } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import { calculator } from "../../styling/calculator"
import { app, headers } from "../../styling/generic"
import { numbers, romanConverter, validateInput } from "../../utils/roman-converter"

export default () => {
    //dit kan je importeren zonder {} --> dwz dat hij de default neem


    /////useState uitgelegd
    // useState = (startValue) => {
    //     ergensAnders.value = startValue
        
    //     const updateValue = (newValue) => {
    //         ergensAnders.value = newValue
    //     }

    //     return[
    //         value: ergensAnders.value,
    //         updateFunction: updateValue
    //     ]
    // }

    // const [value, updateFunction] = useState (2525)

    const [roman, setRoman] = useState<string | undefined>()

    const [arab, setArab] = useState<number |undefined>()
    const [romanBreakDown, setRomanBreakDown] = useState<any | undefined>()

    useEffect(() => {
        if (!arab){
            if(arab! < 9999){
                //showerror()
            }
        }
        
    }, [arab])

    const renderBreakdown = (): JSX.Element[] => {
        const details: JSX.Element[] = []
        let timingDelay: number = 10

        if (romanBreakDown){
           for (const [key, value] of Object.entries(romanBreakDown)) {
                const animatedOpacity = new Animated.Value(0)
                details.push( 
                    <Animated.Text key={key} style={{...calculator.resultText, opacity: animatedOpacity}}>
                        {value} x {numbers[key]} = {(key.repeat(value as number))}
                        </Animated.Text>
                )

                Animated.timing(animatedOpacity,{
                    toValue:1,
                    duration: 300,
                    delay: timingDelay * 150,
                    useNativeDriver: true,
                }).start()
            } 
        }

        return details
        
    }

    const handleArabTextInput = (textInput: string) => {
        console.log ("Textinput = " + textInput)
        const [romanValue, romanBreakdownValue] = romanConverter(+textInput)
        setRoman(romanValue)
        console.log({romanValue})
        setRomanBreakDown(romanBreakdownValue)
    }

    return (
        <SafeAreaView style={app.container}>
            <Text style={headers.medium}>Roman number converter</Text>
            <TextInput style={calculator.input} 
            onChangeText={handleArabTextInput} 
            value={arab?.toString()} 
            keyboardType='numeric'
            placeholder="123"></TextInput>

            <TextInput style={calculator.input} 
            value={roman?.toString()}
            placeholder="MI"></TextInput>

            <Text style={calculator.resultText}>Details</Text>

            {renderBreakdown()}
        </SafeAreaView>
    )
}