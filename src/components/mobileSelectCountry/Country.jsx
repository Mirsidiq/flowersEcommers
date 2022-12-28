import React from 'react'
import { useEffect } from 'react'
import "./country.scss"
export default function Country({setCountry,setCountryName,country}) {
    useEffect(()=>{
        const elCountry=document.querySelector(".country")
        setTimeout(()=>{
            country ? elCountry.classList.add('country-active') : elCountry.classList.remove('country-active')
        },100)
    },[])
  return (
  <>
    <div className='country'>
        <label className='country__label' htmlFor="kiyev">
            <input type="radio" id='kiyev' name='country' onChange={(e)=>{
                setCountryName(e.target.id)
                setCountry(false)
            }}/>
            Киев
        </label>
        <label className='country__label' htmlFor="kiyev">
            <input type="radio" id='moscow' name='country' onChange={(e)=>{
                setCountryName(e.target.id)
                setCountry(false)
            }}/>
            Moscow
        </label>
    </div>
    <div className="country-overlay">
    </div>
    </>
  )
}
