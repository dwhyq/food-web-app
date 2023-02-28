import React, { useState } from "react";
import { data } from "../data/data.js";

const Food = () => {
  const [foods, setFoods] = useState(data);

  //Filter type
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //Filter by price

  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Our Top Rated Menu
      </h1>

      {/* filter row  */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* filter type */}
        <div>
          <p className="font-bold text-gray-700">Make a Choice :</p>
          <div className="flex flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="mr-1 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white focus:bg-orange-600 focus:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType("Breakfast")}
              className="mr-1 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white focus:bg-orange-600 focus:text-white"
            >
              Breakfast
            </button>

            <button
              onClick={() => filterType("Lunch")}
              className="mr-1 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white focus:bg-orange-600 focus:text-white"
            >
              Lunch
            </button>
            <button
              onClick={() => filterType("Dinner")}
              className="mr-1 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white focus:bg-orange-600 focus:text-white"
            >
              Dinner
            </button>
            <button
              onClick={() => filterType("Drinks")}
              className="mr-1 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white focus:bg-orange-600 focus:text-white"
            >
              Drinks
            </button>
          </div>
        </div>

        {/* filter price */}
        <div>
          <p className="font-bold text-gray-700">Select a Budget :</p>
          <div className="flex flex-wrap justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("N500")}
              className="border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white mr-1 focus:bg-orange-600 focus:text-white"
            >
              N500
            </button>
            <button
              onClick={() => {
                filterPrice("N1000");
              }}
              className="border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white mr-1 focus:bg-orange-600 focus:text-white"
            >
              N1000
            </button>
            <button
              onClick={() => {
                filterPrice("N1500");
              }}
              className="border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white mr-1 focus:bg-orange-600 focus:text-white"
            >
              N1500
            </button>
            <button
              onClick={() => {
                filterPrice("N2000");
              }}
              className="border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white mr-1 focus:bg-orange-600 focus:text-white"
            >
              N2000
            </button>
            <button
              onClick={() => {
                filterPrice("N5000");
              }}
              className="border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white mr-1 focus:bg-orange-600 focus:text-white"
            >
              N5000
            </button>
          </div>
        </div>
      </div>

      {/* Display foods] */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between sm-sc:flex-col items-center px-2 py-4">
              <p className="font-bold text-center">{item.name}</p>
             
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full cursor-pointer">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
