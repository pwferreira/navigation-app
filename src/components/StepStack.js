import React from "react";
import { View, Text, Button } from "react-native";

export default props => {
    return(
        <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                { props.next
                    ? < Button title="Avançar"
                               onPress={() => {
                                props.navigation.navigate(props.next)
                               }} />
                    : false
                }
                { props.back
                    ? < Button title="Voltar"
                               onPress={() => {
                                props.navigation.goBack()
                               }} />
                    : false
                }
            </View>
            <View style={{flex: 1}}>
                {props.children}
            </View>
        </View>
    )
}