import { Billing, Business, Navbar } from "./components"
import Testimonials from "./components/Testimonials"
import CardDeal from "./components/CardDeal"
import Clients from "./components/Clients"
import Footer from "./components/Footer"
import Stats from "./components/Stats"
import Hero from "./components/Hero"
import CTA from "./components/CTA"
import styles from "./style"
import React from "react"

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
)

export default App
