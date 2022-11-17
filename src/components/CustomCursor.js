import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

export const CustomCursor = () => {

    const cursorRef = useRef()

    useEffect(() => {
        document.addEventListener('mousemove', e => {
            cursorRef.current.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
        })

        document.addEventListener('click', () => {
            cursorRef.current.classList.add("expand");

            setTimeout(() => {
                cursorRef.current.classList.remove("expand");
            }, 500)
        })
    }, [cursorRef])

    return (
        <div className='cursor' ref={cursorRef}></div>
    )
}
