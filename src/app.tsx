import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './app/home/home';
import GencastPrivacy from './app/gencast/gencast-privacy';
import GencastTerms from './app/gencast/gencast-terms';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gencast" element={<Home />} />
        <Route path="/gencast/privacy" element={<GencastPrivacy />} />
        <Route path="/gencast/terms" element={<GencastTerms />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
