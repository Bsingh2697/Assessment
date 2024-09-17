import { TouchableOpacity, View } from "react-native";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setMedia } from "../../store/mediaSlice";
import ScreenContainer from "../../components/screenContainer";
import { useAppTheme } from "../../utils/theming";
import { Divider, Icon, Surface, Text } from "react-native-paper";
import { Image } from "react-native";
import { Images } from "../../assets/images";
import { useEffect } from "react";
import { requestHandler } from "../../networking/requestHandler";
import { FlashList } from "@shopify/flash-list";
import Video from "react-native-video";
import { styles } from "./home.styles";
import { ScreenKeys } from "../../navigation/ScreenKeys";
import { EvTabParamList } from "../../navigation/types";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

export type Ev_TabsProps<T extends keyof EvTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<EvTabParamList, T>,
    StackScreenProps<EvTabParamList>
  >;

type Props = Ev_TabsProps<ScreenKeys.HOME>

const Home = ({navigation}:Props) => {
  const media = useAppSelector((state) => state.media.media);
  const dispatch = useAppDispatch();

  const {
    colors: { theme_green, theme_blue, theme_yellow_shade, primary, secondary, theme_white, theme_black },
    fonts: { medium },
  } = useAppTheme();

  useEffect(() => {
    const fetchData = async () => {
      const response = await requestHandler({
        url: "https://66acf2fdf009b9d5c733eeea.mockapi.io/api/v1/videos",
        method: "GET",
      });
      dispatch(setMedia(response.data));
    };
    fetchData();
  }, []);

  return (
    <ScreenContainer>
      <View style={{ flex: 1}}>
        <View style={styles.headingView}>
          <Text style={[medium, styles.headingText]}>
            Hello John,
          </Text>
        </View>
        <View style={styles.cardHeading}>
          <Text style={[medium, { fontSize: 16 }]}>Please tap below</Text>
        </View>
        <Surface
          elevation={5}
          style={styles.surfaceView}
        >
          <View
            style={[styles.cardImageView,{backgroundColor: theme_green}]}
          >
            <Image
              source={Images.Heart}
              style={{ height: 26, aspectRatio: 1.3 / 1 }}
            />
          </View>
          <View
            style={[{
              backgroundColor: theme_yellow_shade,
            }, styles.cardTitleView]}
          >
            <View style={styles.cardTitle}>
              <Text style={[medium, { fontSize: 14, color:theme_black }]}>Large Font Title</Text>
              <View
                style={styles.cardSubtitle}
              >
                <Text style={[{ fontSize: 12, color:theme_black }]}>Sub title </Text>
                <Text style={{ fontSize: 10 }}>💎💎💎</Text>
              </View>
            </View>
            <Icon source={"chevron-right"} size={30} color={theme_black}/>
          </View>
        </Surface>
        <Divider style={{ marginTop: 24 }} />
        <TouchableOpacity
          style={styles.mediaTitle}
          onPress={()=>navigation.navigate(ScreenKeys.MEDIA)}
        >
          <Icon size={24} source={"play"} color={primary}/>
          <Text style={[medium, { fontSize: 16, marginStart: 2 }]}>Media</Text>
        </TouchableOpacity>
        {media && (
          <FlashList
            data={media}
            estimatedItemSize={200}
            horizontal
            overrideProps={{contentContainerStyle: {paddingStart:16}}}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View
                style={styles.videoContainer}
              >
                <View>
                <Video
                  source={{ uri: item.urls?.mp4 }}
                  style={styles.videoStyle}
                /></View>
              </View>
            )}
          />
        )}
        <TouchableOpacity
          style={[{
            backgroundColor: theme_blue,
          },styles.uploadTouchContainer]}
        >
          <View style={{ marginEnd: 8 }}>
            <Image source={Images.CamRecorder} />
          </View>
          <Text style={[medium, { fontSize: 18, color: theme_white }]}>
            Upload
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
};

export default Home;
