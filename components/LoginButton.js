import React from 'react';
import {View,TouchableOpacity,StyleSheet,Text} from 'react-native';

const LoginButton = ({ButtonText}) => {
    return (
        <View style={styles.buttonStyle}>
            <TouchableOpacity
                style={styles.btn}
                onPress={this.onPress}>
                <Text style={styles.text}>{ButtonText}</Text>
            </TouchableOpacity>
           
        </View>
    )
}
const styles = StyleSheet.create({
    buttonStyle:{
        flexDirection:'column',
        marginHorizontal:15,
        flex:1,
    },
    btn:{
        borderRadius:100,
        fontSize:5,
        backgroundColor:'#ff2727',
        alignItems:'center',
        height:60,
        justifyContent:'center',
    },
    text:{
        color:'white',
        textTransform:'uppercase',
        fontSize:15
    }
    
})

export default LoginButton;