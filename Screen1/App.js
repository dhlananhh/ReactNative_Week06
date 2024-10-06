import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image 
            source={require('./assets/arrow-left.png')}
            style={styles.headerIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chat</Text>
        <TouchableOpacity>
          <Image 
            source={require('./assets/cart.png')}
            style={styles.headerIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Notice */}
      <Text style={styles.notice}>
        Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chát với shop!
      </Text>

      {/* Product List */}
      <ScrollView style={styles.productList}>
        {/* Product Item 1 */}
        <View style={styles.productItem}>
          <Image 
            source={require('./assets/ca_nau_lau.png')}
            style={styles.productImage}
          />
          <View style={styles.productInfo}>
            <Text style={styles.productTitle}>Ca nấu lẩu, nấu mì mini...</Text>
            <Text style={styles.shopName}>Shop Devang</Text>
          </View>
          <TouchableOpacity style={styles.chatButton}>
            <Text style={styles.chatButtonText}>Chat</Text>
          </TouchableOpacity>
        </View>

        {/* Product Item 2 */}
        <View style={styles.productItem}>
          <Image 
            source={require('./assets/ga_bo_toi.png')}
            style={styles.productImage}
          />
          <View style={styles.productInfo}>
            <Text style={styles.productTitle}>1KG KHÔ GÀ BƠ TỎI ...</Text>
            <Text style={styles.shopName}>Shop LTD Food</Text>
          </View>
          <TouchableOpacity style={styles.chatButton}>
            <Text style={styles.chatButtonText}>Chat</Text>
          </TouchableOpacity>
        </View>

        {/* Remaining Product Items... */}
        {/* Similar structure for other products */}

      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Image 
            source={require('./assets/menu.png')}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image 
            source={require('./assets/home.png')}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image 
            source={require('./assets/back.png')}
            style={styles.navIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 361,
    height: 653,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 360,
    height: 42,
    backgroundColor: '#1BA9FF',
    paddingHorizontal: 17,
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  notice: {
    width: 294,
    marginLeft: 31.58,
    marginTop: 59.1,
    marginBottom: 15,
    color: '#000000',
  },
  productList: {
    flex: 1,
  },
  productItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
    height: 80,
  },
  productImage: {
    width: 74,
    height: 74,
  },
  productInfo: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  productTitle: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 5,
  },
  shopName: {
    fontSize: 12,
    color: '#7D5B5B',
  },
  chatButton: {
    width: 88,
    height: 38,
    backgroundColor: '#F31111',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  chatButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 360,
    height: 49,
    backgroundColor: '#1BA9FF',
    paddingHorizontal: 22,
  },
  navIcon: {
    width: 23,
    height: 23,
  },
});

export default ChatScreen;