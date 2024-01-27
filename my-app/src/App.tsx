import React,{useState} from 'react';
import Store from './Store';
import './App.css';
import { Address, Restaurant } from './model/restaurant';


let data:Restaurant = {
  name: '이름 없는 식당',
  category: '서양식',
  address:{
      city: 'Busan',
      detail: 'somewhere',
      zipCode: 231312
  },
  menu:[{name:"rose pasta",price:20000,category:"PASTA"},{name:"garlic soup", price:6000,category:"SOUP"}]
}

const App:React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data)
const changeAddress = (address:Address) => {
  setMyRestaurant({...myRestaurant,address:address})
}
  return (
    <div className="App">
    <Store info={myRestaurant} changeAddress={changeAddress}/>
    </div>
  );
}

export default App;
