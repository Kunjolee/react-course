import { AuthProvider } from "../context/AuthContext";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";

const MyPage = () => {
  return (
    <div className="myPage">
      <AuthProvider>
        <LanguageProvider>
          <ThemeProvider>
            <HeaderContext />
            <MainContext />
            <FooterContext />
          </ThemeProvider>
        </LanguageProvider>
      </AuthProvider>
    </div>
  );
};

export default MyPage;
