import styles, { layout } from "../style"
import { card } from "../assets"
import Button from "./Button"
import React from "react"

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in a few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
        cupiditate rerum animi voluptates magnam numquam mollitia esse ipsum
        doloremque, modi aliquam nihil! Iure delectus rerum error excepturi
        eaque porro! Quasi?
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
)

export default CardDeal
