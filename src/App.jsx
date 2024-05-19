import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import CouponMessage from "./views/CouponMessage.jsx"
import Home from "./views/Home.jsx"
import EagleFinalMessage from "./views/EagleFinalMessage.jsx"
import LevelSelect from "./views/LevelSelect.jsx"
import WhereYouCameFrom from "./views/WhereYouCameFrom.jsx"
import Quiz from "./views/Quiz.jsx"
import PassportChallenge from "./views/PassportChallenge.jsx"
import Navbar from './components/Navbar.jsx'

function App() {
  return (

    <Router>
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display relative">
          <div className="artboard artboard-demo phone-1 block  bg-neutral">
            <div className="container flex  h-full">
              <div className="container h-full flex flex-col">
                <Navbar />
                <div className='h-full flex px-4 justify-center flex-col'>
                  <Routes >
                    <Route exact path="/" element={<Home />} />
                    <Route path="/whereYouCameFrom" element={<WhereYouCameFrom />} />
                    <Route path="/levelSelect" element={<LevelSelect />} />
                    <Route path="/quiz/:levelName" element={<Quiz />} />
                    <Route path="/passportChallenge" element={<PassportChallenge />} />
                    <Route path="/itsDone" element={<EagleFinalMessage />} />
                    <Route path="/couponMessage" element={<CouponMessage />} />
                  </Routes >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ul className="menu bg-base-200 w-56 rounded-box">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/whereYouCameFrom">Where You Came From</Link></li>
          <li><Link to="/levelSelect">Level Select</Link></li>
          <li><Link to="/quiz">Quiz</Link></li>
          <li><Link to="/passportChallenge">Passport Challenge</Link></li>
          <li><Link to="/itsDone">Eagle Final Message</Link></li>
          <li><Link to="/couponMessage">Coupon Message</Link></li>
        </ul>
      </div>
    </Router>
  );
}

export default App
