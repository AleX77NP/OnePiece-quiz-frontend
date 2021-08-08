import React from 'react'
import '../App.css'
import { useInView } from 'react-intersection-observer';

const Wrapper = (WrappedComponent: React.FC) => {

    return function MiddleWrapper(props:any) {

        const { ref, inView } = useInView({triggerOnce: true});

        return(
            <div ref={ref} className={inView ? 'up': ''}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Wrapper
