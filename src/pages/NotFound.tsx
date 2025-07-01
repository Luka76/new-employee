import React from "react";

const NotFound = () => {
  return (
    <>
      <h1 className="font-mono flex justify-center items-center text-3xl p-5 m-3">
        Oops... the thing
        <span className="mx-2  text-4xl font-bold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-pink-500">
          You
        </span>
        searched for seems like it doesn't exist.
      </h1>
      <p className="font-sans flex justify-center items-center text-2xl mt-3">
        Try checking for spelling mistakes or something else might be wrong.
      </p>
    </>
  );
};

export default NotFound;
