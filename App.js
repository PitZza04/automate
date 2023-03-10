import { StyleSheet, Text, View, StatusBar } from "react-native";
import RootNavigation from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store from "./redux/reducers/store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        animated={true}
        showHideTransition={true}
        backgroundColor="transparent"
        translucent={true}
      />

      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RootNavigation />
        </Provider>
      </QueryClientProvider>
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
