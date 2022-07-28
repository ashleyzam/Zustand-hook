import "./App.css";
import { FavoriteList } from "./components/FavoriteList/FavoriteList.jsx";
import { VStack } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <VStack w="100%" justifyContent="center" alignItems="center" wrap="wrap">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<FavoriteList />} />
        </Routes>
      </VStack>
    </div>
  );
}

export default App;
