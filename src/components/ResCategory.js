const ResCategory=({data})=>{
    console.log("Category data:", data);
    return (
        <div>
            <div className="w-11.5/12 flex justify-between flex-wrap  border-gray-200 bg-gray-100 m-3 p-3  rounded-lg shadow-md hover:bg-gray-200 cursor-pointer text-lg">
                <span className="font-semibold">{data?.card?.card?.title} ({data?.card?.card?.itemCards?.length}) </span>
                <span>⬇️</span>
            </div>
        </div>
    )
}

export default ResCategory;