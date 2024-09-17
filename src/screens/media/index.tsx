import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppTheme } from "../../utils/theming";
import React, { useRef, useState } from "react";
import { View, Dimensions, FlatList, Image } from "react-native";
import { Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Video from "react-native-video";
import { Images } from "../../assets/images";
import { styles } from "./media.styles";

const { height } = Dimensions.get("window");

const Media = () => {
  const insets = useSafeAreaInsets();
  const media = useAppSelector((state) => state.media.media);
  const [currentIndex, setCurrentIndex] = useState(0);
  const {fonts:{bold,medium}, colors:{secondary,theme_white}} = useAppTheme()

  const handleViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      const index = viewableItems[0].index;
      setCurrentIndex(index);
    }
  }).current;

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 })

  const ReelItem = ({ videoUrl, index }: { videoUrl: string, index:number }) => {
    const videoRef = useRef(null);

    
    return (
      <View
        style={[styles.videoContainer, { height: height - insets.bottom - 46 }]}
      >
        <Video
          ref={videoRef}
          source={{ uri: videoUrl }}
          style={styles.video}
          resizeMode="cover"
          repeat={true}
          controls={false}
          paused={index !== currentIndex}
          muted={false}
          onError={(error)=>console.log(error)}
        />
      </View>
    );
  };

  if (media.length < 1) {
    return (
      <View style={styles.noData}>
        <Text>No data available!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[bold,{color:theme_white,fontSize:16}]}>Media</Text>
        <Image source={Images.MediaOutline}/>
      </View>
      <View style={styles.statsView}>
        <View>
          <Image source={Images.Like} />
          <Text style={[medium,{color:theme_white}]}>281 k</Text>
        </View>
        <View style={{marginTop:18, marginBottom:24}}>
          <Image source={Images.Comments} />
          <Text style={[medium,{color:theme_white}]}>281 k</Text>
        </View>
        <View>
          <Image source={Images.Dots} />
        </View>
      </View>
      <FlatList
        data={media}
        renderItem={({ item, index }) => <ReelItem videoUrl={item.urls.mp4}  index={index}/>}
        keyExtractor={(item) => item.id.toString()}
        pagingEnabled
        horizontal={false}
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={viewConfigRef.current}
      />
    </View>
  );
};

export default Media;
