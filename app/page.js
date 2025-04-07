"use client";
import Committees from './components/Committees';
import DepartmentsSection from './components/Department';
import Gallery from './components/Gallery';
// import Image from "next/image";
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar';
import NewsEventsSection from './components/NewsEvent';

export default function Home() {
  return (
    <div className="relative">
       <div>
        <Navbar/>
         <HeroSection/>
         <NewsEventsSection/>
         <DepartmentsSection/>
         <Gallery/>
         <Committees/>
       </div>
    </div>
  );
}
