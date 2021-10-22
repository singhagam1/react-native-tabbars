import React from "react";
import { View, ScrollView, Dimensions } from "react-native";
import styles from "./styles";

const { width } = Dimensions.get("window");

const Body = React.forwardRef(({ item }: any, ref: any) => {
  const { screen, tabsOnScreen, stateChanger, active } = item;
  const { _scrollView, scrollView } = ref;

  return (
    <ScrollView
      scrollEventThrottle={16}
      onScroll={(event) => {
        scrollView?.current?.scrollTo({
          x:
            screen && screen.length > 2
              ? tabsOnScreen && tabsOnScreen === screen.length
                ? event.nativeEvent.contentOffset.x / tabsOnScreen
                : tabsOnScreen
                ? event.nativeEvent.contentOffset.x / (tabsOnScreen + 0.5)
                : event.nativeEvent.contentOffset.x / 2.5
              : screen.length === 2
              ? event.nativeEvent.contentOffset.x / 2
              : event.nativeEvent.contentOffset.x,
        });
        stateChanger(event.nativeEvent.contentOffset.x / width);
      }}
      horizontal
      ref={_scrollView}
      pagingEnabled
    >
      {screen.map((data: any, index) => (
        <View key={index} style={styles.child}>
          <data.component
            props={{
              index: index,
              active: active,
            }}
            ref={ref}
          />
        </View>
      ))}
    </ScrollView>
  );
});

export default Body;
