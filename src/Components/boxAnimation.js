import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring
} from 'react-native-reanimated';


const BoxAnimation = () => {

    const offset = useSharedValue(0)

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: offset.value * 255 }, { translateY: offset.value * 255 }]
        }
    })

    const movement = () => {
        offset.value = withSpring(Math.random())
    }


    return (
        <React.Fragment>
            <Animated.View style={[styles.mainContainer, animatedStyles]}>
            </Animated.View>
            <Button title='Move me' onPress={movement} />
        </React.Fragment>
    )
}

export default BoxAnimation

const styles = StyleSheet.create({
    mainContainer: {
        width: 50,
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 10
    }
})
