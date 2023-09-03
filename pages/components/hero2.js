import { useEffect, useRef, useState } from "react"
import Header from "./header"
import Image from "next/image"
import Typed from "typed.js"
import Form from "./form"
import Audio from "./audio"


const Hero2 = ( ) => {
    const TypedElement = useRef(null);

    useEffect(() => {
        if (!TypedElement.current) return;

        const typed = new Typed(TypedElement.current, {
            strings: [
                "Blogs",
                "Articles",
                "Text",

            ],
            startDelay: 0,
            typeSpeed: 120,
            backSpeed: 120,
            backDelay: 500,
            loop: true,
        });

        // Destroying
        return () => {
            typed.destroy();
        };
    }, []);
  

    return ( 
<section class=" bg-gradient-to-r from-white to-white bg-black body-font h-screen">
    <Header></Header>
    
  <div class="container mx-auto flex flex-col md:flex-row items-center  h-5/6">
    
  

    <div class="w-full 2xl:w-10/12 lg:w-9/12 md:w-10/12  flex flex-col text-black md:text-start md:items-start md:order-first order-last text-center items-center my-6">
        <h1 class="title-font xl:text-5xl sm:text-4xl text-2xl  mb-8 font-bold text-gray-900">Turn Your <span ref={TypedElement}></span><br></br>Into Captivating Audio </h1>
        <p class="mb-2 font-bold leading-relaxed text-gray-500 w-5/6 sm:text-lg text-sm"> Automatically turn any text into audio content using VoiceVerse, keep your audience engaged with our lifelike AI generated voices.</p>
        <Form></Form>
        <p class="text-sm mt-2 text-white mb-8 w-full"></p>
    </div>

    <Audio></Audio>

  </div>
</section>
    )
}

export default Hero2