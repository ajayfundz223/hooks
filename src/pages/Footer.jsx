import React from 'react'
import '../pages/App.css'

const Footer = () => {
  return (
    <div className='rescue'>
        <footer className='pt-5 mt-5 justify-content-spacebetween'>
    <div class="text-center bg-dark pb-5"> 
        <div class="justify-content-spacebetween"><a class="tony text-light" href="./nutrition.html">NUTRITION</a>  <a class="archie text-light" href="./partners.html">PARTNERS</a> <a class="archie text-light" href="./covid-19.html">COVID-19</a> <a class="archie text-light" href="./joshbootcamp.html">BOOTCAMP</a> <a class="archie text-light" href="./Jobopenings.html">JOBS</a></div>
        <p class="text-light">XP FITNESS, 2 MARSHLAND RD, HILTON HEAD ISLAND, SC, 29926 843.415.8655 TRAINING@XPFITNESS</p>
        <p class="text-secondary"><small>Powered by <u>Squarespace</u></small></p>
    </div>
        </footer>
    </div>
  )
}

export default Footer