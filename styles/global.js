import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex:1,
        padding: 24
    },
    titleText: {
        fontFamily: 'lato-regular',
        fontSize: 20,
        color: 'red'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight:20,
    },
    rtext: {
        fontFamily: 'roboto-regular',
        fontSize: 20,
        color: '#606060',
        textAlign: 'center',
       
    },
    rpoint: {
        fontFamily: 'roboto-bold',
        fontSize: 16,
        color: '#606060',
        marginTop: 30
    },
    radio: {
        fontFamily: 'roboto-regular',
        fontSize: 16,
        color: '#606060',
        marginTop: 30,
        marginLeft: 15
        
    },
    cancel: {
        width: 110,
        height: 39,
        backgroundColor: '#de282e',
        borderRadius: 3,
        fontFamily: 'roboto-bold',
        fontSize: 20,
        marginTop: 55,
        marginLeft: 130
    },
    join: {
        width: 54,
        height: 39,
        backgroundColor: '#444444',
        borderRadius: 3,
        fontFamily: 'roboto-bold',
        fontSize: 20,
        marginTop: -39,
        marginLeft: 250
    },


});