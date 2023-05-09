import Image from "next/image"

const Footer = () => {
    return(
        <div className="mt-15 font-[Poppins] p-10">
            <h1 className="text-center w-[100px] m-auto tracking-wider text-white font-semibold"><Image src="/img/LOGOHELP.png" width={400} height={0} /></h1>
            <h1 className="text-center text-black/70 mt-12 tracking-wide text-sm">&copy; Copyright Smk Telkom Makassar 2023</h1>
        </div>
    )
}

export default Footer