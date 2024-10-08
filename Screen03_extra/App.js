// Import Libraries
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';


// Mock Data
const mockData = [
  {
    id: '1',
    name: 'Pina Mountain',
    image: require('./assets/images/bike.png'),
    originalPrice: 449,
    discountedPrice: 350,
    discount: '15% OFF',
    description: 'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.',
  },
];


// Render Data Product Item
const ProductItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bgItem}>
        <Image source={item.image} style={styles.productImage} />
      </View>
      <Text style={styles.productName}>{item.name}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.discountedPrice}>
          {item.discount} | ${item.discountedPrice}
        </Text>
        <Text style={styles.originalPrice}>
          ${item.originalPrice}
        </Text>
      </View>
      <Text style={styles.descriptionTitle}>Description</Text>
      <Text style={styles.descriptionText}>{item.description}</Text>
      <TouchableOpacity style={styles.heartIcon}>
        <AntDesign name='hearto' size={24} color="black" borderColor="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};


// Component: Product Page
const ProductPage = () => {
  // Load Fonts
  const [ fontsLoaded ] = useFonts({
    'Voltaire': require('./assets/fonts/Voltaire-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <FlatList
      data={mockData}
      renderItem={({ item }) => <ProductItem item={item} />}
      keyExtractor={item => item.id}
    />
  );
};


// CSS StyleSheet
const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 812,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  bgItem: {
    width: 359,
    height: 388,
    backgroundColor: 'rgba(233, 65, 65, 0.1)',
    borderRadius: 5,
    marginLeft: 8,
    marginTop: 10,
  },
  productImage: {
    width: 297,
    height: 340,
    marginLeft: 37,
    marginTop: 36,
  },
  productName: {
    position: 'absolute',
    left: 8,
    top: 416,
    fontFamily: 'Voltaire',
    fontSize: 35,
    lineHeight: 44,
    color: '#000',
  },
  priceContainer: {
    flexDirection: 'row',
    position: 'absolute',
    left: 15,
    top: 467,
  },
  discountedPrice: {
    fontFamily: 'Voltaire',
    fontSize: 25,
    lineHeight: 31,
    color: 'rgba(0, 0, 0, 0.59)',
  },
  originalPrice: {
    fontFamily: 'Voltaire',
    fontSize: 25,
    lineHeight: 31,
    textDecorationLine: 'line-through',
    color: '#000',
    marginLeft: 10,
  },
  descriptionTitle: {
    position: 'absolute',
    left: 14,
    top: 523,
    fontFamily: 'Voltaire',
    fontSize: 25,
    lineHeight: 31,
    color: '#000',
  },
  descriptionText: {
    position: 'absolute',
    width: 355,
    left: 14,
    top: 585,
    fontFamily: 'Voltaire',
    fontSize: 22,
    lineHeight: 27,
    color: 'rgba(0, 0, 0, 0.57)',
  },
  heartIcon: {
    position: 'absolute',
    left: 19,
    top: 735,
    width: 35,
    height: 35,
  },
  addToCartButton: {
    position: 'absolute',
    width: 269,
    height: 54,
    left: 85,
    top: 726,
    backgroundColor: '#E94141',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartText: {
    fontFamily: 'Voltaire',
    fontSize: 25,
    color: '#FFFAFA',
  },
});


export default ProductPage;