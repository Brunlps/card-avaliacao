import { useState } from "react";

const CardAval = () => {
    return (
        <>
            {/* Formato e estilização do componente avaliação */}
            <main className=" bg-gray-900">
                <div className=" flex items-center justify-center h-screen">
                    <div className="flex flex-col p-5 rounded-3xl bg-gray-700 text-white">
                        <div className="flex flex-col p-5">
                            <span className=" border rounded-2xl bg-gray-600 p-1 w-6">
                                <img src=" ./src/assets/icon-star.svg" alt="Star" />
                            </span>
                            <h1 className=" font-bold text-2xl">How did we do?</h1>
                            <div className="mt-3 max-lg:w-70">
                                <p className="font-thin text-xs">
                                    Please let us know how we did with your support request. All feedback is
                                    appreciated to help us improve our offering!
                                </p>
                            </div>

                        </div>
                        <div className="mb-5">
                            <ul className="flex justify-around gap-6">
                                <li className="flex justify-center items-center rounded-3xl bg-gray-600 text-gray-900 font-bold p-5 w-5 h-5 ">1</li>

                                <li className="flex justify-center items-center  rounded-3xl bg-gray-600 text-gray-900 font-bold p-5 w-5 h-5 ">2</li>
                                <li className="flex justify-center items-center  rounded-3xl bg-gray-600 text-gray-900 font-bold p-5 w-5 h-5 ">3</li>
                                <li className="flex justify-center items-center  rounded-3xl bg-gray-600 text-gray-900 font-bold p-5 w-5 h-5 ">4</li>
                                <li className="flex justify-center items-center  rounded-3xl bg-gray-600 text-gray-900 font-bold p-5 w-5 h-5 ">5</li>
                            </ul>
                        </div>
                        <div className="bg-orange-500 rounded-2xl flex justify-center items-center ">
                            <button className="text-gray-900 p-1 m-1" type="button">submit</button>
                        </div>
                    </div >
                </div >
            </main >
        </>
    );
};

export default CardAval;

// <div className=" flex items-center justify-center h-screen">
// <div className="flex flex-col p-5 rounded-3xl bg-gray-700 text-white">
{/* <div className="flex flex-col p-5"></div> */ }