import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = props => {
  const post = props.post;
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />
      {/* bed and bedroom */}
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedrooms{' '}
      </Text>
      {/* type and description */}
      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>

      {/* old price and new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.newPrice}> ${post.newPrice}</Text>/ night
      </Text>
      {/* total price */}
      <Text style={styles.totalPrice}>${post.totalPrice} Total Price</Text>
    </View>
  );
};

export default Post;
