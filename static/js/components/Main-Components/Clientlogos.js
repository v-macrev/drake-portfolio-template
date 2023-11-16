import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Clientlogos() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section>
        <div className="custom-container">
            <div className="services-content content-width">
                <div class="clients-logos">
                    <h4 class="scroll-animation" data-aos='fade-up'>work with 60+ brands worldwide</h4>
                    <div class="row align-items-center">
                        <div class="col-md-3 scroll-animation" data-aos='fade-right'>
                            <img src="../assets/images/client-1.png" alt="Client"/>
                        </div>
                        <div class="col-md-3 scroll-animation" data-aos='fade-up'>
                            <img src="../assets/images/client-2.png" alt="Client"/>
                        </div>
                        <div class="col-md-3 scroll-animation"  data-aos='fade-down'>
                            <img src="../assets/images/client-3.png" alt="Client"/>
                        </div>
                        <div class="col-md-3 scroll-animation" data-aos='fade-left'>
                            <img src="../assets/images/client-4.png" alt="Client"/>
                        </div>
                        <div class="col-md-3 scroll-animation" data-aos='fade-right'>
                            <img src="../assets/images/client-5.png" alt="Client"/>
                        </div>
                        <div class="col-md-3 scroll-animation" data-aos='fade-up'>
                            <img src="../assets/images/client-6.png" alt="Client"/>
                        </div>
                        <div class="col-md-3 scroll-animation"  data-aos='fade-down'>
                            <img src="../assets/images/client-7.png" alt="Client"/>
                        </div>
                        <div class="col-md-3 scroll-animation" data-aos='fade-left'>
                            <img src="../assets/images/client-8.png" alt="Client"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}


