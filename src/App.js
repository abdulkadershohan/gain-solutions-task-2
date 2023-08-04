import React from "react";
import Button from "./utils/Button";
import Input from "./utils/Input";

export default function App() {
  return (
    <div className="bg-gray-100">

      <p
        className="font-jose"
      >
        lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <Button
        text={'Get started'}
        link={'/login'}
      />
      <Input
        placeholder={'Email'}

      />
    </div>
  )
}
