// import AboutUs from "./components/AboutUs";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Points from "./components/Points";
// import Property_deals from "./components/Property_deals";
// import Property_types from "./components/Property_types";
// import PropertyCarousel from "./components/PropertyCarousel";
// import Services from "./components/Services";
// import Subscribe from "./components/Subscribe";
// import Testimonials from "./components/Testimonials";
// import Chats from "./Pages/Chats";
// import Dashboard from "./Pages/Dashoard";
// import Home from "./Pages/Home";
// import LoadMore from "./Pages/LoadMore";
// import Login from "./Pages/Login";

// import DashboardLoad from "./components/DashboardLoad";
// import LoginSignup from "./components/signup";
// import BuyerSellerProfile from "./components/BuyerSellerProfile"
// import IndividualProfile from "./components/IndividualProfile"
// import BrokerSignup from "./components/BrokerSignup";
// import BrokerPostAd from "./components/BrokerPostAd";
// import AdsPage from "./components/AdsPage"
// import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import MainPage from "./components/BuyerDashboard/MainPage";


// export default function App() {
//   return (
//    <>
//    <BrowserRouter>
//    <Header/>
//    <Routes>
//    <Route path='/' element={<Home />} />
//    <Route path='/adspage' element={<AdsPage />} />
//    <Route path='/brokerpostad' element={<BrokerPostAd />} />
//    <Route path='/brokersignup' element={<BrokerSignup />} />
//    <Route path='/individualprofile' element={<IndividualProfile />} />
//    <Route path='/buyersellerprofile' element={<BuyerSellerProfile />} />
//    <Route path='/signup' element={<LoginSignup />} />
//    <Route path='/main-page' element={<MainPage />} />
//    </Routes>
//    </BrowserRouter>
// {/* <Home /> */}
// {/* <ChatWindow/> */}
// {/* <DashboardLoad/> */}
// {/* <Login /> */}
// {/* <Dashboard /> */}
// {/* <LoadMore /> */}
// {/* <Chats /> */}
//    </>

//   )
// }

import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./Pages/Home";
import AdsPage from "./components/AdsPage";
// import BrokerPostAd from "./components/BrokerPostAd";
import BrokerSignup from "./components/BrokerSignup";
import SellerSignup from "./components/SellerSignup";
import BuyerSellerProfile from "./components/BuyerSellerProfile";
import LoginSignup from "./components/signup";
import Login from "./Pages/Login"; // Login Component
import Chats from "./Pages/Chats";
import BuyerSignup from "./components/BuyerSignup";
import Points from "./components/Points";

//Buyer Routes
import MainPage from "./components/BuyerDashboard/MainPage";
import { BuyerHeader } from "./components/BuyerDashboard/Layout/Header";
import { Sidebar } from "./components/BuyerDashboard/Layout/Sidebar";
import Footer from "./components/BuyerDashboard/Layout/Footer";
import SavedSearch from "./components/BuyerDashboard/SavedSearch";
import MyProperties from "./components/BuyerDashboard/MyProperties";
import ProfileInformation from "./components/BuyerDashboard/ProfileInfo";
import Properties from "./components/BuyerDashboard/Properties";
import PropertyDetail from "./components/BuyerDashboard/DetailsPage/PropertyDetail";
import MyPropertyDetail from "./components/BuyerDashboard/DetailsPage/MyPropertyDetail";

// Seller Routes
import SellerMainPage from "./components/SellerDashboard/MainPage";
import { SellerHeader } from './components/SellerDashboard/layout/Header'
import SellerProfileInfo from './components/SellerDashboard/ProfileInfo'
import MyPropertiesSeller from './components/SellerDashboard/MyProperties'
import SellerMyPropertyDetail from './components/SellerDashboard/DetailPage/MyPropertyDetail'
import { SellerSidebar } from './components/SellerDashboard/layout/Sidebar'
import SellerPostAd from "./components/SellerDashboard/SellerPostAd";
import SellerPostEdit from "./components/SellerDashboard/DetailPage/propertyedit";




export default function App() {
  const [userRole, setUserRole] = useState("guest"); // State to manage user role
  // const [userRole, setUserRole] = useState("seller"); // State to manage user role
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Check device width on initial render
    const handleResize = () => {
      if (window.innerWidth >= 770) {
        setIsSidebarOpen(true); // Show sidebar for desktop by default
      } else {
        setIsSidebarOpen(false); // Hide sidebar for mobile by default
      }
    };

    handleResize(); // Call once on component mount
    window.addEventListener("resize", handleResize); // Add listener for window resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  console.log(userRole);

  const handleLogin = (role) => {
    setUserRole(role);
    console.log(`User logged in as: ${role}`);
  };

  return (
    <BrowserRouter>
      {userRole === "buyer" ? (
        <>
          <BuyerHeader />
          <div className="flex flex-col md:flex-row">
            <aside className="hidden md:block md:w-64 lg:w-72">
              <Sidebar />
            </aside>
            <main className="flex-1 bg-gray-100 p-4 md:p-10">
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/saved-search" element={<SavedSearch />} />
                <Route path="/chats" element={<Chats />} />
                <Route path="/my-properties" element={<MyProperties />} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/profile-info" element={<ProfileInformation />} />
                <Route path="/property-detail/:id" element={<PropertyDetail />} />
                <Route path="/my-property-detail/:id" element={<MyPropertyDetail />} />
              </Routes>
              <Footer />
            </main>
          </div>
        </>
      ) : userRole === "seller" ? (
        <>
          <SellerHeader toggleSidebar={toggleSidebar} />
          <div className="flex flex-col md:flex-row">
          <aside className={`md:w-64 lg:w-72 ${isSidebarOpen ? "block" : "hidden"} lg:block`}>
        <SellerSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </aside>
            <main className="flex-1 bg-gray-100 p-4 md:p-10">
              <Routes>
                <Route path="/" element={<SellerMainPage />} />
                <Route path="/my-properties" element={<MyPropertiesSeller />} />
                <Route path="/profile-info" element={<SellerProfileInfo />} />
                <Route path="/chats" element={<Chats />} />
                <Route path="/my-property-detail/:id" element={<SellerMyPropertyDetail />} />
                <Route path="/seller-post-ad" element={<SellerPostAd />} />
                <Route path="/seller-post-edit" element={<SellerPostEdit />} />
              </Routes>
              <Footer />
            </main>
          </div>
        </>
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adspage" element={<AdsPage />} />
            <Route path="/brokersignup" element={<BrokerSignup />} />
            <Route path="/seller-signup" element={<SellerSignup />} />
            <Route path="/buyer-signup" element={<BuyerSignup />} />
            <Route path="/buyersellerprofile" element={<BuyerSellerProfile />} />
            <Route path="/points" element={<Points />} />
            <Route path="/signup" element={<LoginSignup />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

