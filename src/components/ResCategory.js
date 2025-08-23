import { useState } from "react";
import ItemsList from "./ItemsList";

const ResCategory = ({ data }) => {
    console.log("Category data:", data);
    let [isAccordionOpen,setisAccordionOpen] = useState(false);
    function handleAccordion(){
        setisAccordionOpen(!isAccordionOpen);
    }
    return (
        <div>

            <div className="w-11.5/12   border-gray-200 bg-gray-100 m-3 p-3  rounded-lg shadow-md hover:bg-gray-200 cursor-pointer text-lg cursor-pointer mb-5" onClick={handleAccordion}>

                <div className="flex justify-between flex-wrap">
                    <span className="font-semibold">{data?.card?.card?.title} ({data?.card?.card?.itemCards?.length}) </span>
                    <span>⬇️</span>
                </div>

                
                {isAccordionOpen && <div>
                    <ItemsList props={data?.card?.card?.itemCards} />
                </div>}

            </div>





        </div>
    )
}

export default ResCategory;