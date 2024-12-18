import 'expo-dev-client';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text } from "react-native";

export default function App() {
    return (
        <SafeAreaProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <View>
                    <Text>Help</Text>
                </View>
            </GestureHandlerRootView>
        </SafeAreaProvider>
    );
}