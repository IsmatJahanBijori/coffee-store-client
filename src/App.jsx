import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

const App = () => {
  const loadedCoffeeS = useLoaderData()
  const [coffeeS, setCoffeeS]=useState(loadedCoffeeS)
  return (
    <div>
      <h1>Coffee Store
      </h1>
      <div className='grid md:grid-cols-2 gap-4 mt-auto'>
        {
          loadedCoffeeS.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffeeS={coffeeS} setCoffeeS={setCoffeeS}></CoffeeCard>)
        }
      </div>

    </div>
  );
};

export default App;
