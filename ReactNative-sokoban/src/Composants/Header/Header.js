import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {
  return (
    <View style={{
      backgroundColor: '#2994D1', borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 50, marginBottom: 20 }}>Sokoban</Text>
    </View>
  );
};

export default Header;