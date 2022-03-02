import { StyleSheet } from "react-native"
import { colors } from "./colors"


export const app = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light, //dark mode?
        padding: 32
    },
})

export const headers = StyleSheet.create({
    large: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.alpha,
        opacity: 0.8,
        marginBottom: 8
    },

    medium : {
        fontSize: 22,
        fontWeight: 'bold'
    }
})