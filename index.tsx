import * as React from "react";
import { View, ScrollView } from "react-native";
import styles from "./Components/styles";
import Title from "./Components/title";
import Body from "./Components/body";

/**
 *
 * @param {props} screen - Array of Components
 * @param {props} tabsOnScreen - tabs to display at a time in one screen
 * @param {props} selectedFontColor -active tab font color
 * @param {props} activeBorderColor - underline color
 *
 * @returns
 */

export default function App(props: any) {
  const [active, setActive] = React.useState(0);
  const _scrollView = React.useRef<ScrollView>(null);
  const scrollView = React.useRef<ScrollView>();
  const { activeBorderColor, selectedFontColor, tabsOnScreen, screen } = props;

  return (
    <View style={styles.container}>
      <Title
        item={{
          screen: screen,
          activeBorderColor: activeBorderColor,
          tabsOnScreen: tabsOnScreen,
          selectedFontColor: selectedFontColor,
          active: active,
        }}
        ref={{
          _scrollView: _scrollView,
          scrollView: scrollView,
        }}
      />
      <Body
        item={{
          screen: screen,
          tabsOnScreen: tabsOnScreen,
          stateChanger: setActive,
          active: active,
        }}
        ref={{
          _scrollView: _scrollView,
          scrollView: scrollView,
        }}
      />
    </View>
  );
}
