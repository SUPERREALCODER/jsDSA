import { useState,useEffect } from "react";

export default function useArrayManager(initialArray) {
  const [items, setItems] = useState(initialArray);

  //accident 
  useEffect(() => {
    setItems(initialArray); 
  }, [initialArray]);

  //dsa functions
  const rotateArray = () => {
    let newArr = [...items];
    let firstElement = newArr.shift();
    newArr.push(firstElement);
    setItems(newArr);
  };
  //dsa functions

//   const reverseArray = () => {
//     setItems([...items].reverse());
//   };

  return { items, rotateArray};
}
