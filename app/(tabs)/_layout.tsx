// import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import Home from "@/assets/icons/house-solid.svg";
import Heart from "@/assets/icons/heart-solid.svg";
import City from "@/assets/icons/tree-city-solid.svg";

import Colors from "@/constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
// function TabBarIcon(props: {
//  name: React.ComponentProps<typeof FontAwesome>['name'];
//  color: string;
// }) {
//  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
// }

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tab One",
          tabBarIcon: () => (
            <Home width={28} height={28} fill={Colors[colorScheme ?? "light"].text}
              style={{ marginLeft: 5 }}
            />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => ( <Heart width={28} height={28}
                    fill={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
          tabBarIcon: () => (
            <City width={28} height={28} fill={Colors[colorScheme ?? "light"].text}
            />
          ),
        }}
      />
    </Tabs>
  );
}
