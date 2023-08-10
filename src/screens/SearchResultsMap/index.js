import React, {useState, useEffect, useRef} from 'react';
import {View, FlatList, useWindowDimensions} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
import places from '../../../assets/data/feed';
import PostCarouselItem from '../../components/PostCarouselItem';

const SearchResultsMap = () => {
  const width = useWindowDimensions().width;
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const flatlist = useRef();
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });

  const map = useRef();

  useEffect(() => {
    if (!selectedPlaceId || !flatlist) {
      return;
    }
    const index = places.findIndex(place => place.id === selectedPlaceId);
    const selectedPlace = places[index];
    const region = {
      latitude: selectedPlace.coordinate.latitude,
      longitude: selectedPlace.coordinate.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    flatlist.current.scrollToIndex({index});
    map.current.animateToRegion(region);
  }, [selectedPlaceId]);

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        ref={map}
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {places.map(place => (
          <CustomMarker
            coordinate={place.coordinate}
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
            key={place.id}
          />
        ))}
      </MapView>
      <View style={{position: 'absolute', bottom: 10}}>
        <FlatList
          ref={flatlist}
          data={places}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60} //this is the width of the PostCarouselItem
          snapToAlignment={'center'} //snap to the center of the screen
          decelerationRate={'fast'} //the deceleration rate of the scroll
          viewabilityConfig={{
            itemVisiblePercentThreshold: 70, //when the item is 70% visible, it will be considered as visible
          }}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
