import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';


// Mock API function
const fetchData = () => {
  return Promise.resolve([
    {
      id: '1',
      title: 'Cáp chuyển từ Cổng USB sang PS2...',
      image: require('./assets/giacchuyen.png'),
      rating: 4,
      reviews: 15,
      price: '69.900 đ',
      discount: '-39%'
    },
    {
      id: '2',
      title: 'Cáp chuyển từ Cổng USB sang PS2...',
      image: require('./assets/daynguon.png'),
      rating: 4,
      reviews: 15,
      price: '69.900 đ',
      discount: '-39%'
    },
    {
      id: '3',
      title: 'Cáp chuyển từ Cổng USB sang PS2...',
      image: require('./assets/dauchuyendoips.png'),
      rating: 4,
      reviews: 15,
      price: '69.900 đ',
      discount: '-39%'
    },
    {
      id: '4',
      title: 'Cáp chuyển từ Cổng USB sang PS2...',
      image: require('./assets/dauchuyendoi.png'),
      rating: 4,
      reviews: 15,
      price: '69.900 đ',
      discount: '-39%'
    },
    {
      id: '5',
      title: 'Cáp chuyển từ Cổng USB sang PS2...',
      image: require('./assets/carbusbtops.png'),
      rating: 4,
      reviews: 15,
      price: '69.900 đ',
      discount: '-39%'
    },
    {
      id: '6',
      title: 'Cáp chuyển từ Cổng USB sang PS2...',
      image: require('./assets/daucam.png'),
      rating: 4,
      reviews: 15,
      price: '69.900 đ',
      discount: '-39%'
    },
  ]);
};

const StarRating = ({ rating }) => {
  return (
    <View style={styles.starContainer}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Feather
          key={star}
          name="star"
          size={13}
          color={star <= rating ? '#FBE41B' : '#C4C4C4'}
        />
      ))}
    </View>
  );
};

const UsbCableList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={ item.image } style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.ratingContainer}>
        <StarRating rating={item.rating} />
        <Text style={styles.reviews}>({item.reviews})</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.discount}>{item.discount}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <Feather name="search" size={24} color="black" />
          <Text style={styles.searchText}>Dây cáp usb</Text>
        </View>
        <TouchableOpacity>
          <Feather name="shopping-cart" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="more-vertical" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
      <View style={styles.footer}>
        <TouchableOpacity>
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="back" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1BA9FF',
    height: 42,
    paddingHorizontal: 18,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    height: 30,
    borderRadius: 4,
  },
  searchText: {
    marginLeft: 10,
    color: '#7D5B5B',
    fontSize: 13,
  },
  row: {
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  itemContainer: {
    width: '48%',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 90,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 12,
    marginTop: 8,
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  starContainer: {
    flexDirection: 'row',
  },
  reviews: {
    fontSize: 10,
    color: '#000000',
    marginLeft: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
  },
  discount: {
    fontSize: 12,
    color: '#969DAA',
    marginLeft: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1BA9FF',
    height: 49,
    paddingHorizontal: 22,
  },
});

export default UsbCableList;