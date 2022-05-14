import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

const SettingsScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>Settings Screen</Text>
            <Button
            title='Click me'
            onPress={()=>navigation.navigate('Root', { screen: 'FindScreen' })}
            />
        </View>
    )
}
export default SettingsScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f8ff'
    }
})