import React from 'react'
import { About } from '../sections/About'
import { Hero } from '../sections/Hero'
import { Portfolio } from '../sections/Portfolio'

export const Home = () => {
    return (
        <>
            <Hero/>
            <About/>
            <Portfolio/>
        </>
    )
}
