import { StyleSheet, Text, View } from "react-native";
import RootNavigation from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "./hooks/useAuth";
import { Provider } from "react-redux";
import store from "./redux/reducers/store";

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <Provider store={store}>
          <RootNavigation />
        </Provider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
