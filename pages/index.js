"use client"
import HomePage from "../components/Home"
import AboutPage from "../components/About"
import Highlights from "../components/Highlights"
import LuxortEvents from "../components/LuxortEvents"
import FaqSection from "../components/FaqSection"
import Testimonials from "../components/Testimonials"
import NewsletterPartners from "../components/NewsletterPartners"
import Footer from "../components/Footer"
export default function Page(){
    return(
        <>
        <HomePage />
        <AboutPage />
        <Highlights />
        <LuxortEvents />
        <FaqSection />  
        <Testimonials />
        <NewsletterPartners />
        <Footer />
        </>
    ) 
}