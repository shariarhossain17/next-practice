import Image from "next/image";

import eagle from "../../assets/0942.jpg_wh860.jpg";

const Banner = () => {
    return (
        <div className="px-12 flex justify-center items-center">
         <div>
            <h1 className="text-[40px] font-semibold">EAGLE YOU ARE NOT ALONE</h1>
            <p className="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis rerum qui nostrum sunt fuga, nulla nam saepe aliquam alias, dolorem dicta temporibus optio vel quam in cumque, eaque natus cum.</p>
            <button className="bg-black text-white px-4 py-4 rounded-[10px] mt-8">keep reading</button>
         </div>
         <div>
            <Image width={2000} height={200} src={eagle} alt=""></Image>
         </div>
        </div>
    );
};

export default Banner;