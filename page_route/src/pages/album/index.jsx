import Image from "next/image";
const Album = () => {
    return (
        <div>
            <h1>this album</h1>
            <img src="https://images.ctfassets.net/c63hsprlvlya/IacLLeOBR5WCvdCPqKuff/6860b5cc464c4f54703a2befa3f706b4/nextjs3.webp" alt="" srcset="" />

            <Image src="https://images.ctfassets.net/c63hsprlvlya/IacLLeOBR5WCvdCPqKuff/6860b5cc464c4f54703a2befa3f706b4/nextjs3.webp" alt="next" width={500} height={500}></Image>
        </div>
    );
};

export default Album;