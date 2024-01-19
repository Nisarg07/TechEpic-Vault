import "./App.css";
import Blog from "./components/Blog";
import BlogList from "./components/BlogList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const data = [
    { title: "Card 1", content: "Content for Card 1" },
    { title: "Card 2", content: "Content for Card 2" },
    { title: "Card 2", content: "Content for Card 2" },
    { title: "Card 2", content: "Content for Card 2" },
    { title: "Card 2", content: "Content for Card 2" },
    { title: "Card 2", content: "Content for Card 2" },
    { title: "Card 2", content: "Content for Card 2" },
    { title: "Card 2", content: "Content for Card 2" },
    { title: "Card 2", content: "Content for Card 2" },
    { title: "Card 2", content: "Content for Card 2" },
    { title: "Card 2", content: "Content for Card 2" },
    { title: "Card 2", content: "Content for Card 2" },
    { title: "Card 2", content: "Content for Card 2" },
    { title: "Card 2", content: "Content for Card 2" },
    // Add more items as needed
  ];
  return (
    <>
      <Router>
        <Navbar title="TechEpic Vault" />
        <Routes>
          <Route exact path="/" element={<BlogList data={data} />} />
          <Route
            exact
            path="/TechEpic Vault"
            element={<BlogList data={data} />}
          />
          <Route
            exact
            path="/Blog"
            element={
              <Blog className="blog-container" blogTitle="What is React?" />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
