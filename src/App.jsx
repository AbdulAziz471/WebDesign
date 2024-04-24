import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Pages/HomePage/Home";
import Footer from "./Components/Footer/Footer";
import InvestPage from "./Pages/InvestPage/InvestPage";
import HowItsWorkPage from "./Pages/HowItsWorkPage/HowItsWorkPage";
import WhyFilmPage from "./Pages/WhyFilmPage/WhyFilmPage";
import AboutUsPage from "./Pages/AboutPage/AboutUsPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ApplyForMemberShipPage from "./Pages/ApplyForMemberShipPage/ApplyforMemberShipPage";
import InvitePage from "./Pages/InvitePage/InvitePage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import ProfileForm from "./Components/ProfileTabs/ProfileForm";
import PortfolioPage from "./Pages/PortfolioPage/PortfolioPage";
import AccreditationForm from "./Components/ProfileTabs/AccreditationForm";
import InvestmentForm from "./Components/ProfileTabs/InvestmentForm";
import CommunicationForm from "./Components/ProfileTabs/CommuncationForm";
import DocumentsForm from "./Components/ProfileTabs/DocumentsForm";
import BrokecageAccountsForm from "./Components/ProfileTabs/BrokecageAccountsForm";
import PaymentForm from "./Components/ProfileTabs/PaymentForm";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invest" element={<InvestPage />} />
        <Route path="/howitwork" element={<HowItsWorkPage />} />
        <Route path="/whyfilm" element={<WhyFilmPage />} />
        <Route path="/About" element={<AboutUsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route
          path="/applyformembership"
          element={<ApplyForMemberShipPage />}
        />
        <Route path="/invite" element={<InvitePage />} />
        <Route path="/profile" element={<ProfilePage />}>
          <Route index element={<ProfileForm />} />
          <Route path="accreditation" element={<AccreditationForm />} />
          <Route path="investment-history" element={<InvestmentForm />} />
          <Route path="payment-methods" element={<PaymentForm />} />
          <Route
            path="brokerage-accounts"
            element={<BrokecageAccountsForm />}
          />
          <Route path="documents" element={<DocumentsForm />} />
          <Route path="communications" element={<CommunicationForm />} />
        </Route>
        <Route path="/logout" element={<LoginPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
