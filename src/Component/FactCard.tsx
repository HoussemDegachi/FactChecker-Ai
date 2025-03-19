import React from "react"

import TimeStamp from "./TimeStamp"

const FactCard = ({ TrueFact, data }) => {
  return (
    <div
      className={`w-[362px] h-[300px] ${TrueFact ? "bg-green-100" : "bg-red-100"} opacity-65 p-[5px] my-2 rounded-xl ${TrueFact ? "border-green-400" : "border-red-400"} border-l-4`}>
      <TimeStamp text={data.timestampInStr} />
      <p className={"mt-1 text-[13px] font-semibold"}>
        {
          data.claim
        }
      </p>
      <center>
        <div
          className={
            "bg-white w-[330px] h-[140px] mt-1 p-[5px] rounded-[10px] flex flex-col"
          }>
          <TimeStamp
            ClassNames={`flex-start z-10 ${TrueFact ? "bg-green-400" : "bg-red-400"} rounded-[40%] mx-3`}
            text={`${TrueFact ? "Correct" : "Wrong"}`}
          />
          <p className={"font-base text-[12px] w-full flex-start p-4"}>
            {
              data.explanation
            }
          </p>
        </div>
        <div className={"w-[330px] flex justify-evenly items-center my-2 mt-5"}>
          <p>Accuracy: </p>
          <div className={"h-[7px] w-[194px] bg-[#E5E7EB] flex"}>
            <div
              className={`h-[7px] z-10 ${TrueFact ? "bg-[#10B981]" : "bg-red-500"} flex-start`} style={{width: `${data.validation.confidence}%`}}></div>
          </div>
          <p className={"font-bold"}>{data.validation.confidence}%</p>
        </div>
      </center>
    </div>
  )
}
export default FactCard
