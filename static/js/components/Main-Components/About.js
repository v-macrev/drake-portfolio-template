import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function About() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="about-area page-section scroll-to-page" id="about">
        <div className="custom-container">
            <div className="about-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="lar la-user"></i> About
                    </h4>
                    <h1 className="scroll-animation" data-aos='fade-up'>Every great design begin with<br/>
                        an even <span>better story</span></h1>
                </div>
                <p className="scroll-animation" data-aos='fade-up'>Since beginning my journey as a freelance designer nearly 8 years ago, 
                    I've done remote work for agencies, consulted for startups, and collaborated with 
                    talented people to create digital products for both business and consumer use. 
                    I'm quietly confident, naturally curious, and perpetually working on improving my 
                    chopsone design problem at a time.</p>
            </div>
        </div>
    </section>
  )
}
