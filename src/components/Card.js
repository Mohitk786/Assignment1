import React from 'react';
import {BsFillPeopleFill, BsSpeedometer2, BsFillFuelPumpDieselFill,} from 'react-icons/bs';
import {AiFillAlipayCircle} from "react-icons/ai"

export const  Card = ({title, model, seats,type,price, speed,engine, imageURL}) => {

    return (
            <div className="bg-slate-300 rounded-lg">
            <div className="flex flex-col gap-3 shadow md:shadow-lg m-3 rounded-lg bg-slate-200 ">

                <div className="flex flex-col gap-1">
                    <img src={imageURL} width="350px" height="" alt="car" className="rounded-lg m-3"/>
                    <div className="flex justify-between px-5">
                        <span className="font-semibold text-xl">{title}</span>
                        <div className='outline-dotted p-0 outline-sky-400 rounded-xl'><span className='mx-1 my-0'>{model}</span></div>
                    </div>
                </div>
                
                <div className="flex my-6">
                    <div className="flex flex-col mx-7">
                        <span className='flex  gap-1'><BsFillPeopleFill className='text-sky-400 my-1'/>{seats}</span>
                        <span className='flex gap-1'><BsSpeedometer2 className='text-sky-400  my-1'/>{speed}km/1-litre</span>
                    </div>
                    <div  className="flex flex-col mx-7">
                        <span className='flex gap-1'><AiFillAlipayCircle className='text-sky-400  my-1'/>{engine}</span>
                        <span  className='flex gap-1'><BsFillFuelPumpDieselFill className='text-sky-400  my-1'/>{type}</span>
                    </div>
                </div>

                <div className="flex justify-around items-center mt-3">
                    <div className="font-semibold">${price}/month</div>
                    <div>
                        {/* //like buttton */}
                        <button className="bg-sky-600 text-white font-semibold rounded-md p-1 mb-2 items-center">Rent now</button>
                    </div>
                </div>
                </div>
            </div>
    )
}