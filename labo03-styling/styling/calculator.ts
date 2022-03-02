import { StyleSheet } from "react-native"
import { colors } from "./colors"



export const calculator = StyleSheet.create({
    input: {
        fontSize: 50,
        fontWeight: 'bold',
        color: colors.alpha,
        opacity: 0.8,
        marginBottom: 8,
        // padding: 8,
        width: '100%', 
        // borderWidth: 1,
        // borderRadius: 8,
        // borderColor: colors.dark
    },
    resultHolder: {

    }, 

    resultText:{
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 4
    }
})