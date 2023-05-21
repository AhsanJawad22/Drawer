import React from "react";
import { Button, View, Text, Modal } from "react-native";
import { TouchableOpacity } from "react-native";

const Detail =({ route}) => {
    const {task} = route.params;
    return (
        <View>
            <Text>{task.taskName}</Text>
            <Text>{task.Details}</Text>    
        </View>

        

    );   
};

export default Detail;    