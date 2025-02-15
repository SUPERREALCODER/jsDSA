import Button from "./button";


function arr(setIsOpen) {
  const fruits = ["Apple", "Banana", "Mango", "Papaya", "Apple", "Banana", "Mango", "Papaya"];
  const components = [];

  //just for dsa could be done through map
  for (let i = 0; i < fruits.length; i++) {
    components.push(<Button key={i}  onClick={() => setIsOpen(true)} />);
  }

  return components;
}


const ArrayButton = ({ setIsOpen }) => { 
  return (
    <div className="flex space-x-4  items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {arr(setIsOpen)} 
    </div>
  );
};

export default ArrayButton;

  
 
  