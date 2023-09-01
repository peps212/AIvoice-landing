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
                "Team Meetings",
                "Brainstorming Sessions",
                "Client Onboarding",
                "Product Demos"

            ],
            startDelay: 0,
            typeSpeed: 50,
            backSpeed: 80,
            backDelay: 500,
            loop: true,
        });

        // Destroying
        return () => {
            typed.destroy();
        };
    }, []);
  

    return ( 
<section class=" bg-gradient-to-r from-white to-white body-font h-screen">
    <Header></Header>
  <div class="container mx-auto flex flex-col justify-evenly items-center text-center h-full">

    <Audio></Audio>

    <div class="w-full 2xl:w-10/12 lg:w-9/12 md:w-11/12  flex flex-col mb-16 items-center text-center text-black">
        <h1 class="title-font mobile:text-xl sm:text-4xl text-3xl mb-4 font-bold">Transform Your Articles Into Engaging Podcasts With AI </h1>
        <p class="mb-2 font-bold leading-relaxed text-gray-600 w-5/6"> Seamlessly synchronize web browsing sessions with your team, unlock real-time collaboration on all the Web Apps you <span className="text-red-400 text-lg">Love</span>. <br></br> <br></br> Enable <span className="text-sky-300 ">Shared Online Experiences</span> Like Never Before.</p>
        <Form></Form>
        <p class="text-sm mt-2 text-white mb-8 w-full"></p>
    </div>
  </div>
</section>
    )
}

export default Hero2