"use client"
import { counter, userStore } from "@/store/counterNumber";
import { useRef, useState } from "react";

export default function Home() {
  const inpitValue = useRef()
  const [value, setValue] = useState<string>('')
  const number = userStore((state) => state.user)
  const { add } = userStore((state) => state.actions)

  return (
    <>
      <div className="flex flex-col space-y-5">
        <input type="text" ref={inpitValue} className="text-black" />
        <div className="text-center mt-10">{number.map((item: {name: string}) => <p>{item.name}</p>)}</div>
        {/* <button onClick={(): void => incr()}>incrment</button>
        <button onClick={(): void => decr()}>decrment</button> */}
        <button onClick={(): void => {
          setValue(inpitValue.current.value)
          add(value)
        }}>incrmentByNumber</button>
      </div>
    </>
  );
}
