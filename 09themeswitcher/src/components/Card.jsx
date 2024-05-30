import React, { useEffect } from 'react'
import cardImage from '../assets/person_with_computer.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import useThemeContext from '../contexts/ThemeContext'

const Card = () => {
    const { theme } = useThemeContext()

    useEffect(() => {
        if (theme === 'light') {
            document.querySelector('html').classList.remove('dark')
        } else {
            document.querySelector('html').classList.add('dark')
        }
    }, [theme])

    return (
        <div className='border rounded-md p-4 mt-2 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-100'>
            <img src={cardImage} alt="hitesh image" className='w-72' />
            <p className='text-sm font-semibold mt-4 dark:text-neutral-200'>Apple Watch Series 7 GPS, Aluminium case, Starlight Sport</p>
            <div className="flex items-center space-x-2 dark:text-neutral-300">
                <FontAwesomeIcon icon={faStar} style={{ color: "orange" }} className='w-3 dark:text-orange-300' />
                <FontAwesomeIcon icon={faStar} style={{ color: "orange" }} className='w-3 dark:text-orange-300' />
                <FontAwesomeIcon icon={faStar} style={{ color: "orange" }} className='w-3 dark:text-orange-300' />
                <FontAwesomeIcon icon={faStar} style={{ color: "orange" }} className='w-3 dark:text-orange-300' />
                <FontAwesomeIcon icon={faStarRegular} style={{ color: "orange" }} className='w-3 dark:text-orange-300' />
                <div className="badge inline font-medium px-1 py-0.5 ml-1 bg-slate-200 rounded dark:bg-neutral-700 dark:text-neutral-300" style={{ fontSize: "0.5rem" }}>4.0</div>
            </div>
            <div className="flex justify-between items-center mt-2">
                <p className="text-xl font-bold dark:text-white">$599</p>
                <button className="text-xs text-white bg-blue-800 p-2 rounded font-semibold ml-4 dark:bg-blue-600">Add to cart</button>
            </div>
        </div>
    )
}

export default Card