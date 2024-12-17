import { useEffect } from "react";
import "./App.css";
import "./output.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import DefaultPage from "./Components/Pages/DefaultPage";
import MessagesPage from "./Components/Pages/MessagesPage";
import CallsPage from "./Components/Pages/CallsPage";
import useSwipeNavigation from "./Components/SwipeDetection/SwipeDetection";
import ArchievedChats from "./Components/Pages/ArchievedChats";
import StatusPage from "./Components/Pages/StatusPage";
import StarredPage from "./Components/Pages/StarredPage";
import AiPage from "./Components/Pages/AiPage";
import GeneralPage from "./Components/DrawarData/GeneralPage";
import DrawarLayout from "./Components/DrawarData/DrawarLayout";
import AccountPage from "./Components/DrawarData/AccountPage";

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the API is available
    if (window.api && window.api.messageFromMain) {
      // Listen for messages from the main process
      window.api.messageFromMain((Message) => {
        alert(Message); // Show an alert with the message
      });
    }
  }, []);

  // Swipe left to go to the next page
  const handleSwipeLeft = () => {
    console.log("Swiped left"); // Debugging log
    navigate(1); // Go to the next page
  };

  // Swipe right to go to the previous page
  const handleSwipeRight = () => {
    console.log("Swiped right");
    navigate(-1); // Go to the previous page
  };

  // Use the swipe navigation hook
  useSwipeNavigation(handleSwipeLeft, handleSwipeRight);

  return (
    <Routes>
      <Route path="/" element={<DefaultPage />} />
      <Route path="/messages" element={<MessagesPage />} />
      <Route path="/call" element={<CallsPage />} />
      <Route path="/archievedChats" element={<ArchievedChats />} />
      <Route path="/status" element={<StatusPage />} />
      <Route path="/starred" element={<StarredPage />} />
      <Route path="/ai" element={<AiPage />} />
    </Routes>
  );
};

export default App;
