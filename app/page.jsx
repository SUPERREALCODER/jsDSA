'use client' // Tells Next.js that this component should be rendered as a client component


import Image from 'next/image' 
import ArrayButton from './components/arrayButton' 
import Button from './components/button' 
import { useState } from 'react' 
import DsaButton from './components/dsaButton'
import useArrayManager from './components/userArrayManager'


export default function Home() {
  // State variable "isOpen" tracks if the modal (popup) should be displayed or not.
  const [isOpen, setIsOpen] = useState(false)
  // State variable "shit" stores a message fetched from the API. It is initially set to 'sheeeet'.
  const [shit, setShit] = useState('sheeeet')

  //operation of dsa
  const [fruits, setFruits] = useState([
    "Apple", "Banana", "Mango", "Papaya", 
    "Appl", "Banan", "Mang", "Papay"
  ]);

  //for button para
  const [selectedKey, setSelectedKey] = useState(null);

  var { items, rotateArray} = useArrayManager(fruits);
  
  // Asynchronous function to fetch data from a custom API endpoint.
  async function handleClick() {
    // Sends a GET request to the API route
    const response = await fetch('/api/[...nextauth]/route.js')
    // Parse the response as JSON
    const data = await response.json()
    console.log(data[0]);
    const newfruits = [data[0].data1,data[0].data2,data[0].data3,data[0].data4,data[0].data5,data[0].data6,data[0].data7,data[0].data8]
    // Update the state with the fetched message so it can be displayed in the modal.
    setFruits(newfruits);
    setShit(data[0].inf)
  }

  return (
    <>
    <h1 className="text-2xl font-bold text-center w-full py-4 fixed top-0 bg-white shadow-md z-10 text-black">
  {shit}
</h1>
      {/* ArrayButton component likely controls the modal visibility using the setIsOpen function */}
      <ArrayButton setIsOpen={setIsOpen} setSelectedKey={setSelectedKey} items={items} />

      {/* Next.js Image component to optimize and display an image from the public folder */}
      <Image
        src="/images/Detective1.png" // Path to the image in the public folder
        alt="My Image" // Alt text for accessibility
        width={400} // Width of the image
        height={400} // Height of the image
        className="rounded-lg shadow-lg fixed bottom-10 left-0 scale-150" // Styling classes for appearance and positioning
      />

      {/* Spacer div to create vertical space (useful for scroll effects) */}
      <div className="min-h-screen"></div>

      {/* Container div for a group of buttons */}
     
        {/* Multiple Button components are rendered.
            The first Button has text "dj" and when clicked, will open the modal by setting isOpen to true. */}
        {/* <Button text="dj" onClick={() => setIsOpen(true)} />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button /> */}
        <DsaButton onRotate={rotateArray}/>


        {/* Conditionally render the modal content if isOpen is true */}
        {isOpen && (
          <div className="fixed top-0 left-0 w-full flex justify-center">
            
            <div className="w-96 h-96 bg-white shadow-xl rounded-lg flex flex-col items-center justify-center p-4 border border-gray-200">
              
              <h2 className="text-xl font-bold text-gray-800">
                This is the {shit}
              </h2>
            
              <p className="text-gray-600 mt-2">
               {fruits[selectedKey]}
               
              </p>

             
              <Button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                onClick={() => {
                  setIsOpen(false) // This would close the modal if uncommented.
                  handleClick()// Fetch new data from the API and update the modal's content.
                }}
                text="Close"
              />
            </div>
          </div>
        )}
     

      {/* Another spacer to allow more scrolling */}
      <div className="min-h-screen"></div>

      {/* Optional section (commented out) which might be used for additional scrolling or a button appearing later */}
      {/* <div className="flex justify-center py-10">
      </div> */}
    </>
  )
}
