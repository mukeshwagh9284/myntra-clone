import React from "react";
import Homeitem from "./Homeitem";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);

  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <Homeitem key={item.id} item={item}></Homeitem>
        ))}
      </div>
    </main>
  );
};

export default Home;
