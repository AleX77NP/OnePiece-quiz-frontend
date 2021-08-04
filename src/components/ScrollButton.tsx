import { TriangleUpIcon } from '@chakra-ui/icons'
import React, { useState, useEffect } from 'react'

const ScrollButton: React.FC = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 300) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scroll({top: 0, behavior: "smooth"})
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible)

        return () => window.removeEventListener('scroll', toggleVisible)
    })

    return (
        <div style={{display:  visible ? 'block' : 'none', position: 'fixed', bottom: '50px', right:'30px', zIndex: 99, border: 'none', outline: 'none', 
        fontSize: '18px', cursor: 'pointer', padding: '15px', borderRadius: '4px'}} onClick={scrollToTop}>
            <TriangleUpIcon />
        </div>
    )
}

export default ScrollButton
