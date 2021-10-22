import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import styles from "./styles";

const { width } = Dimensions.get("window");

const Title = React.forwardRef(({ item }: any, ref: any) => {
  const { screen, active, activeBorderColor, tabsOnScreen, selectedFontColor } =
    item;
  const { _scrollView, scrollView } = ref;

  return (
    <ScrollView horizontal ref={scrollView}>
      <View style={styles.topMain}>
        {screen.map((data: any, index: any) => (
          <TouchableOpacity
            style={[
              styles.button,
              active === index && {
                borderBottomColor: activeBorderColor
                  ? activeBorderColor
                  : "#000",
                borderBottomWidth: 2,
              },
              screen && screen.length > 2
                ? tabsOnScreen && tabsOnScreen === screen.length
                  ? {
                      width: width / tabsOnScreen,
                    }
                  : tabsOnScreen
                  ? {
                      width: width / (tabsOnScreen + 0.5),
                    }
                  : {
                      width: width / 2.5,
                    }
                : screen.length === 2
                ? {
                    width: width / 2,
                  }
                : {
                    width: width,
                  },
            ]}
            key={index}
            onPress={() => {
              _scrollView?.current?.scrollTo({ x: index * width });
            }}
          >
            <Text
              style={[
                styles.title,
                {
                  color:
                    active === index && selectedFontColor
                      ? selectedFontColor
                      : "#000",
                },
              ]}
            >
              {data.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
});

export default Title;
