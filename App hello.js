import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, Button } from 'react-native'; // Importa Image


// Componente principal do aplicativo
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello!</Text>
      <Text>
        Welcome to my{' '}
        <Text style={styles.app}>App</Text>!
      </Text>
      <View style={{ paddingTop: 20 }}>
        <Image
          source={{
            uri: 'https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-19/505803494_17906669523173374_3908385279463034264_n.jpg?stp=dst-jpg_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby45NDkuYzIifQ&_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=110&_nc_oc=Q6cZ2QEkSDcDns6sDGYhDCWnzz5u16zaGvGwsT8YvSJZ3L83n7AylNCgjoy_rDldq1lgbWs&_nc_ohc=7zSnDSTwQSUQ7kNvwEb1dyz&_nc_gid=BGhk6Pvi676VC9vcbLSRDw&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfXhK2po1TGJa8mkbduUJY2vDs12U3z1HCbmrkuXXzw7-g&oe=689FC1BE&_nc_sid=8b3546&#39;,'
          }}
          style={{
            width: 200,
            height: 200,
            borderRadius: 20,
            borderColor: '#8bcfd4ff',
            borderWidth: 2,
          }}
        />
        <View style={{ marginTop: 20 }}><Button title="hi" /></View>
      </View>
      <StatusBar style="auto" />
      <Text style={{ paddingTop: 20 }}>made by Erick</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    color: '#000000ff',
  },
  container: {
    flex: 1,
    backgroundColor: '#b6e4e7ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#1b1721ff',
    fontSize: 60,
    fontWeight: 'bold',
  },
});

