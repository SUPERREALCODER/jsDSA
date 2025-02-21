import Button from "./button";


function arr(onRotate) {
  const fruits = ["Dj"];
  const components = [];

  //just for dsa could be done through map
  for (let i = 0; i < fruits.length; i++) {
    components.push(<Button key={i}   text={fruits[i]} onClick={onRotate}/>);
  }

  return components;
}


const DsaButton = ({ onRotate }) => { 
  return (
    <div
    width={400} // Note: The width and height attributes here might not affect <div> elements.
    height={400}
    className="flex justify-center py-10 right-0"
  >
      {arr(onRotate)} 
    </div>
  );
};

export default DsaButton;

  
 
  