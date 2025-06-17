import Card from "./Card";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import data from "./data";
import "./main.css";


export default function Main() {
    
  return (
    <div className="w-[100%] h-[100vh] flex flex-col items-center">
    <div className="w-[80%] main--container--tag mt-[100px] flex flex-col justify-center items-center gap-3">
      <div className="container" >
      {data.map((item)=>
      
      <Card
      key={item.id}
      name={item.name}
      />
      )}
    </div>  
    </div>
    </div>
  )
}
