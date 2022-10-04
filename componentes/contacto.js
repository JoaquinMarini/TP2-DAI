import React, { useEffect, Text} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Contacts from 'expo-contacts';
import React from 'react';
import { Text } from "react-native";

export default function Contacto({data}){
    return(
        <>
            <Text>{data.name}</Text>
            <Text>{data.number}</Text>

        </>
    )
}
