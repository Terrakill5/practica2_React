import React from "react"

function Contador({numClicks}) {
    return (
        <div className="min-w-[300px] h-[300px] text-[160px] p-[25px] text-[white] flex items-center justify-center border-[8px] border-[white] border-solid mb-[15px]">
            {numClicks}
        </div>
    );
}

export default Contador;