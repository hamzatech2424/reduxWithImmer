import { StyleSheet, Text, View, Dimensions, Image, Button } from 'react-native';
import React from 'react';


const SW = Dimensions.get('window').width
const SH = Dimensions.get('window').height



const ProductItem = ({ imageUrl,price,addToCart,aciveBtn }) => {
    return (
        <View style={[styles.mainContainer, { width: SW * 0.4 }]}>
            <View style={styles.imageView}>
                <Image resizeMode='contain' source={{ uri: imageUrl }} style={{ width: '100%', height: '100%' }} />
            </View>
            <View>
                <Text>Price:{price}</Text>
            </View>
            <Button disabled={aciveBtn} title='Add To Cart' onPress={addToCart} />
        </View>
    );
};

export default ProductItem;

const styles = StyleSheet.create({
    mainContainer: {
        height: 180,
        backgroundColor: 'white',
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    imageView: {
        width: '90%',
        height: '60%',
    }
});
