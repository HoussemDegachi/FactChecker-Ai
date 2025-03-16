import React from "react"

const TimeStamp = ({ text, bgColor = "#E0F0E9", ClassNames = "" }) => {
  console.log(bgColor)
  return (
    // <div className={`w-[65px] h-[27px] bg-[${bgColor}] rounded-[40%]` +
    //   `${ClassNames}`}>
    //   <div className={'w-full h-full relative bg-transparent'}>
    //   <p className={'absolute top-[10.5px] left-[26.5px] font-bold'}>{text}</p>
    //   </div>
    // </div>
    <div
      className={
        `w-[65px] h-[27px] bg-[${bgColor}] rounded-[40%]` + `${ClassNames}`
      }>
      <div
        className={
          "w-full h-full flex justify-center items-center bg-transparent"
        }>
        <p className={"font-bold"}>{text}</p>
      </div>
    </div>
  )
}
export default TimeStamp
