import Image from "next/image"


export default function ProductItem({name, image, price, description}) {
    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-between mb-10 border-b-2 border-black w-full pb-4">
                <div className="flex flex-col gap-2 w-[60%]">
                    <strong>{name}</strong>
                    <p className="text-[13px] lg:text-sm">{description}</p>
                    <p className="text-[15px] lg:text-[16px]">{price}</p>
                </div>
                <div className="w-[40% h-full flex justify-end items-center">
                    <Image src={image} alt={name} width={100} height={100}/> 
                </div>           
            </div>
            
        </div>
    )
}