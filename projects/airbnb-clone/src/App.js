import React from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import data from "./data"

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
            
    const dataElements = data.map(info => {
        return (
            <Card
                key={info.id}
                item={info}
                // img={info.coverImg}
                // rating={info.stats.rating} 
                // reviewCount={info.stats.reviewCount}
                // location={info.location} 
                // title={info.title} 
                // price={info.price} 
            />
        )
    })
    
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {dataElements} 
            </section>
        </div>
    )
}

                // img="katie-zaferes.png"
                // rating="5.0"
                // reviewCount={6}
                // location="USA"
                // title="Life Lessons with Katie Zaferes"
                // price={136}