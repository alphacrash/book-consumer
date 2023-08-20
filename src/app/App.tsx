import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import Dashboard from "../components/main/dashboard";
import AppIntlProvider from "./AppIntlProvider";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <AppIntlProvider>
        <>
          <Dashboard />
          <CssBaseline />
        </>
      </AppIntlProvider>
    </Provider>
  );
}

export default App;
