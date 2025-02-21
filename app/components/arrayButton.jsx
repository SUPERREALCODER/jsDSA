import Button from "./button";


// function arr(setIsOpen) {
//   const fruits = ["Apple", "Banana", "Mango", "Papaya", "Appl", "Banan", "Mang", "Papay"];
//   const components = [];

//   //just for dsa could be done through map
//   for (let i = 0; i < fruits.length; i++) {
//     components.push(<Button key={i}  onClick={() => setIsOpen(true)} text={fruits[i]}/>);
//   }

//   return components;
// }


const ArrayButton = ({ setIsOpen,items,setSelectedKey }) => { 
  const buttons = [];

    for (let i = 0; i < items.length; i++) {
      buttons.push(<Button key={i} onClick={() => {setIsOpen(true); setSelectedKey(i);}} text={items[i].substring(0,8)} />);
    }
  return (
    

    <div className="flex space-x-4  items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {buttons}
      {
      /* {arr(setIsOpen)}  */}
    </div>
  );
};

export default ArrayButton;

  
 
  