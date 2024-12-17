import { StyleSheet, View, TouchableOpacity } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from './colors';
import { useNavigation } from '@react-navigation/native';

export default function BackButton() {
    const navigation = useNavigation();
    
    return (
        <View style={styles.topDesign}>
            <TouchableOpacity 
                style={styles.backButton}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Home')}
            >
                <Ionicons 
                    name={"arrow-back-outline"} 
                    size={24}
                    color={colors.white}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create (
    {
        backButton: {
            backgroundColor: colors.lightBlueBtn,
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
            height: 50,
            borderRadius: 50,
            marginLeft: 20,
          },
          topDesign: {
        
            backgroundColor: colors.lightBlueMid, 
            top: 0,
            left: 0,
            right: 0,
            paddingTop: 30,
            minWidth: '100%',
            height: 'auto',
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            paddingBottom: 15,

          }
    }
)