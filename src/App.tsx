import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Industries from './pages/Industries'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

import GoogleBusinessProfile from './pages/services/GoogleBusinessProfile'
import LocalSeo from './pages/services/LocalSeo'
import SeoServices from './pages/services/SeoServices'
import GeoAeoAiSearch from './pages/services/GeoAeoAiSearch'
import GoogleReviewManagement from './pages/services/GoogleReviewManagement'
import WhatsappAutomation from './pages/services/WhatsappAutomation'
import LandingPage from './pages/services/LandingPage'
import DigitalMarketing from './pages/services/DigitalMarketing'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/local-seo" element={<LocalSeo />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/google-business-profile" element={<GoogleBusinessProfile />} />
          <Route path="/seo-services" element={<SeoServices />} />
          <Route path="/geo-aeo-ai-search" element={<GeoAeoAiSearch />} />
          <Route path="/google-review-management" element={<GoogleReviewManagement />} />
          <Route path="/whatsapp-automation" element={<WhatsappAutomation />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
