
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    useSlider
  } from '@chakra-ui/react'


import pause from "./pause.png"
import play from "./playy.svg" 
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'




const Audio = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [timeProgress, setTimeProgress] = useState(0)

    const audioRef = useRef()
    const progressBarRef = useRef()
    const barAnimation = useRef()

    const repeat = useCallback(() => {
        const currentTime = audioRef.current.currentTime
        setTimeProgress(currentTime)
        progressBarRef.current.value = currentTime
    
        console.log("run")

        barAnimation.current = requestAnimationFrame(repeat)
    }, [audioRef, progressBarRef, setTimeProgress])

    const handlePlayPause = () => {
        setIsPlaying((prev) => !prev)
    }

    const handleProgressBar = () => {
        audioRef.current.currentTime = progressBarRef.current.value
        console.log("audio " + audioRef.current.currentTime)
        console.log("progress " + progressBarRef.current.value)
    }
/*
    const onLoadedMetadata = () => {
        const time = audioRef.current.duration
        progressBarRef.current.max = time
        console.log(audioRef.current.duration)
        console.log(progressBarRef.current.max)
    }
*/
    useEffect(() => {
        const time = audioRef.current.duration
        progressBarRef.current.max = time
        console.log(audioRef.current.duration)
        console.log(progressBarRef.current.max)
    }, [])

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play()
            barAnimation.current = requestAnimationFrame(repeat)
        } else {
            audioRef.current.pause()
            cancelAnimationFrame(barAnimation.current)
        }
    }, [isPlaying, audioRef, repeat])




    return(

        <div className='relative flex justify-center items-center'>
            <div className='w-12/12'>
            <img className='shadow-xl ' src="/image.png"></img>
            </div>
            <div className="container absolute w-6/12 h-16 bg-gray-800 border-4 border-white rounded-xl shado flex flex-row justify-between items-center text-center">
                <button onClick={handlePlayPause} class="hover:bg-indigo-800 bg-indigo-600 h-10 w-10 ml-3 shrink-0 focus:outline-none rounded-full shadow-2xl grid"> {isPlaying ? <Image className='w-6 h-6 place-self-center' src={pause}></Image> : <img className='w-5 h-5 ml-0.5 place-self-center' src={"/playW.png"} ></img> }</button>
                <div className='w-10/12 mx-4 grid'> 
            
                    <input  ref={progressBarRef} defaultValue="0" onChange={handleProgressBar} className="w-full h-1 bg-gray-600 rounded-lg appearance-none range-sm place-self-center " type="range" />


                </div>
                <audio src='/test-audio.mp3' ref={audioRef}></audio>
            </div>
        </div>
    )
}

export default Audio