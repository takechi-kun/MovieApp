import "./App.css";
import Router from "./router/router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header/Header";
import User from "./pages/User";
const theme = createTheme();
function App() {
  return (
    <>
      <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
        <ThemeProvider theme={theme}>
          <Header />
          <User />
          <Router />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
