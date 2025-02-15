'use client' // Tells Next.js that this component should be rendered as a client component

// Import necessary modules and components
import Image from 'next/image' // Next.js optimized image component
import ArrayButton from './components/arrayButton' // Custom component, possibly to toggle a modal or perform another action
import Button from './components/button' // Custom styled button component
import { useState } from 'react' // React hook for managing state in a functional component

// Main Home component that renders the page content
export default function Home() {
  // State variable "isOpen" tracks if the modal (popup) should be displayed or not.
  const [isOpen, setIsOpen] = useState(false)
  // State variable "shit" stores a message fetched from the API. It is initially set to 'sheeeet'.
  const [shit, setShit] = useState('sheeeet')

  // Asynchronous function to fetch data from a custom API endpoint.
  async function handleClick() {
    // Sends a GET request to the API route
    const response = await fetch('/api/[...nextauth]/route.js')
    // Parse the response as JSON
    const data = await response.json()
    // Update the state with the fetched message so it can be displayed in the modal.
    setShit(data.message)
  }

  return (
    <>
      {/* ArrayButton component likely controls the modal visibility using the setIsOpen function */}
      <ArrayButton setIsOpen={setIsOpen} />

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
      <div
        width={400} // Note: The width and height attributes here might not affect <div> elements.
        height={400}
        className="flex justify-center py-10 right-0"
      >
        {/* Multiple Button components are rendered.
            The first Button has text "dj" and when clicked, will open the modal by setting isOpen to true. */}
        <Button text="dj" onClick={() => setIsOpen(true)} />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />

        {/* Conditionally render the modal content if isOpen is true */}
        {isOpen && (
          <div className="fixed top-0 left-0 w-full flex justify-center">
            {/* Modal container with defined size and styling */}
            <div className="w-96 h-96 bg-white shadow-xl rounded-lg flex flex-col items-center justify-center p-4 border border-gray-200">
              {/* Header inside the modal displaying dynamic text from state "shit" */}
              <h2 className="text-xl font-bold text-gray-800">
                This is the {shit}
              </h2>
              {/* Paragraph for additional modal content */}
              <p className="text-gray-600 mt-2">
                Here you can write something!
              </p>

              {/* Button inside the modal to trigger an action.
                  Instead of immediately closing the modal, clicking this button runs the handleClick function 
                  which fetches data from the API and updates the displayed message.
                  The commented line shows an alternative to close the modal. */}
              <Button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                onClick={() => {
                  // setIsOpen(false) // This would close the modal if uncommented.
                  handleClick() // Fetch new data from the API and update the modal's content.
                }}
                text="Close"
              />
            </div>
          </div>
        )}
      </div>

      {/* Another spacer to allow more scrolling */}
      <div className="min-h-screen"></div>

      {/* Optional section (commented out) which might be used for additional scrolling or a button appearing later */}
      {/* <div className="flex justify-center py-10">
      </div> */}
    </>
  )
}
