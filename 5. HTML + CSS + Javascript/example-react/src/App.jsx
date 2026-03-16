import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Users from "./pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* 
          다음 페이지 이동을 구현하세요.
            - "/"으로 요청이 올 경우 Home 컴포넌트를 렌더링 합니다.
            - "/users"으로 요청이 올 경우 Users 컴포넌트를 렌더링 합니다.
        */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;