import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Contacts from 'expo-contacts';
import Contacto from './componentes/contacto.js';

export default function Contacto() {
    const [contacto, setContacto] = React.useState("");
    const renderItem = ({ item }) => (
        < Contacto data ={item.name} />
        );

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          const contact = data[0];
          console.log(contact);
        }
      }
    })();
  }, []);    
  

  return (
    <View style={styles.container}>
          <FlatList
          data={item}
          renderItem={renderItem}
          keyExtractor={item => item.name}
        />
    </View>
  );
}

//const styles = StyleSheet.create({ ... }); 