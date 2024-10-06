import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const mockData = [
  {
    id: '1',
    image: require('./assets/ca_nau_lau.png'),
    title: 'Ca nấu lẩu, nấu mì mini...',
    shop: {
      name: 'Devang',
      color: '#E83030'
    }
  },
  {
    id: '2',
    image: require('./assets/ga_bo_toi.png'),
    title: '1KG KHÔ GÀ BƠ TỎI ...',
    shop: {
      name: 'LTD Food',
      color: '#7D5B5B'
    }
  },
  {
    id: '3',
    image: require('./assets/xa_can_cau.png'),
    title: 'Xe cần cẩu đa năng',
    shop: {
      name: 'Thế giới đồ chơi',
      color: '#7D5B5B'
    }
  },
  {
    id: '4',
    image: require('./assets/do_choi_dang_mo_hinh.png'),
    title: 'Đồ chơi dạng mô hình',
    shop: {
      name: 'Thế giới đồ chơi',
      color: '#7D5B5B'
    }
  },
  {
    id: '5',
    image: require('./assets/lanh_dao_gian_don.png'),
    title: 'Lãnh đạo giản đơn',
    shop: {
      name: 'Minh Long Book',
      color: '#7D5B5B'
    }
  },
  {
    id: '6',
    image: require('./assets/hieu_long_con_tre.png'),
    title: 'Hiểu lòng con trẻ',
    shop: {
      name: 'Minh Long Book',
      color: '#7D5B5B'
    }
  },
  {
    id: '7',
    image: require('./assets/trump.png'),
    title: 'Donald Trump Thiên tài lãnh đạo',
    shop: {
      name: 'Minh Long Book',
      color: '#7D5B5B'
    }
  }
];

const ChatScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.productItem}>
      <Image 
        source={item.image}
        style={styles.productImage}
      />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <View style={styles.shopInfo}>
          <Text style={styles.shopLabel}>Shop</Text>
          <Text style={[styles.shopName, { color: item.shop.color }]}>{item.shop.name}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatButtonText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <Image 
            source={require('./assets/arrow-left.png')}
            style={[styles.headerIcon, { tintColor: '#FFFFFF' }]}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chat</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Image 
            source={require('./assets/cart.png')}
            style={[styles.headerIcon, { tintColor: '#FFFFFF' }]}
          />
        </TouchableOpacity>
      </View>

      {/* Notice */}
      <View style={styles.noticeContainer}>
        <Text style={styles.noticeText}>
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chát với shop!
        </Text>
      </View>

      {/* Product List */}
      <FlatList
        data={mockData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={ItemSeparator}
        style={styles.list}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <View style={styles.menuIcon}>
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
            source={require('./assets/home.png')}
            style={[styles.navIcon, { tintColor: '#FFFFFF' }]}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
            source={require('./assets/back.png')}
            style={[styles.navIcon, { tintColor: '#FFFFFF' }]}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: 361,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1BA9FF',
    height: 42,
    paddingHorizontal: 17,
  },
  headerButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  noticeContainer: {
    paddingHorizontal: 31.58,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
  },
  noticeText: {
    fontSize: 14,
    color: '#000000',
  },
  list: {
    flex: 1,
  },
  productItem: {
    flexDirection: 'row',
    padding: 10,
    height: 80,
    alignItems: 'center',
  },
  productImage: {
    width: 74,
    height: 74,
    marginRight: 15,
  },
  productInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  productTitle: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 5,
  },
  shopInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shopLabel: {
    fontSize: 12,
    color: '#7D5B5B',
    marginRight: 5,
  },
  shopName: {
    fontSize: 12,
  },
  chatButton: {
    width: 88,
    height: 38,
    backgroundColor: '#F31111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  separator: {
    height: 1,
    backgroundColor: '#C4C4C4',
    width: '100%',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1BA9FF',
    height: 49,
    paddingHorizontal: 22,
  },
  menuIcon: {
    width: 23,
    height: 13.85,
    justifyContent: 'space-between',
  },
  menuLine: {
    width: 23,
    height: 1,
    backgroundColor: '#000000',
  },
  navIcon: {
    width: 23,
    height: 23,
  },
});

export default ChatScreen;