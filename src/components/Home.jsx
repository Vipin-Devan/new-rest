import React from 'react';
import Button from '../layouts/Button';

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/heroo11.jpg')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <div className=" lg:pl-44">
          <Button title="Order Now" />
        </div>
      </div>
    </div>
  );
};

export default Home;
