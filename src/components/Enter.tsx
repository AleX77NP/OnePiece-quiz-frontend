import { Box } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/media-query'
import React from 'react'
import zoro from '../images/zoro.png'
import fatluffy from '../images/fatluffy.png'
import styles from '../styles/Home.module.css'

const Enter: React.FC = () => {

    const [isLargerThan800] = useMediaQuery("(min-width: 800px)")

    return (
        <div className={styles.Container}>
            <img className={styles.Zoro} src={isLargerThan800 ? zoro : fatluffy} alt="enter-quiz" />
            <div className={styles.Options}>
                <Box bgGradient="linear(to-t, green.300, green.600)" w="100%" p={isLargerThan800 ? 8 : 4} textAlign="center" color="white" boxShadow="dark-lg">
                    <p className={styles.Start}>START QUIZ</p>
                </Box>
            </div>
        </div>
    )
}

export default Enter
