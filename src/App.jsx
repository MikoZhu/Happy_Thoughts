import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { PostMessage } from "./components/PostMessage";

export const App = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <PostMessage />
      <Footer />
    </div>
  );
};
