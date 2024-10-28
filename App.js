import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const App = () => {
  const userInfo = {
    id: 1,
    username: "tyrecemcl",
    email: "tyrece@gmail.com",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User QR Code</Text>
      <QRCode
        value={String(userInfo.id)} // Generate QR code with user ID
        size={150}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
