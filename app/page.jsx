"use client"; 
import Image from "next/image";
import ArrayButton from "./components/arrayButton";
import Button from "./components/button";
import { useState } from "react";




export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
   

    
    <ArrayButton setIsOpen={setIsOpen}/>
  
    <Image  src="/images/Detective1.png" // Image from the public folder
        alt="My Image"
        width={400} // Set the width
        height={400} // Set the height
        className="rounded-lg shadow-lg fixed bottom-10 left-0 scale-150"/>
        {/* Spacer for Scroll Effect */}
        <div className="min-h-screen"></div>


<div 
width={400} // Set the width
height={400}
className="flex justify-center py-10 right-0">
  <Button text="dj" onClick={() => setIsOpen(true)}/>
  <Button />
  <Button />
  <Button />
  <Button />
  <Button />
  <Button />
  <Button />
  {isOpen && (
        <div className="fixed top-0 left-0 w-full flex justify-center">
          <div className="w-96 h-96 bg-white shadow-xl rounded-lg flex flex-col items-center justify-center p-4 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">This is the Sheet</h2>
            <p className="text-gray-600 mt-2">Here you can write something!</p>

            {/* Close Button */}
            <Button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              onClick={() => setIsOpen(false)}
              text="Close"
            />
              
          
          </div>
        </div>
      )}
</div>

<div className="min-h-screen"></div>

{/* Button appears after scrolling */}
{/* <div className="flex justify-center py-10">

</div> */}
    </>
      
  

    
  );
}
