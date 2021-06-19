import React, {useEffect, useState} from 'react'
import { useWindowScroll } from "react-use";

const scrollToBottom = () => window.scrollTo({top: 1300, behavior: "smooth" })

const ScrollToBottom = () => {
    const { y: pageYOffset} = useWindowScroll();
    return (
    <div className="scroll-to-bottom curusor-pointer text-center" onClick={scrollToBottom}>
        Schedule Demo
            <i className="icon fas fa-chevron-up"></i>
    </div>
    )
}


export default ScrollToBottom