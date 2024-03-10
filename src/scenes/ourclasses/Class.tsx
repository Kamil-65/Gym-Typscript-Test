

type Props = {
    image: string;
    title: string;
    text?: string;
}

const Class = ({image, title, text}: Props) => {
    const overlayStyle= `absolute p-5 h-[380px] w-[450px] z-1 flex flex-col 
    text-center text-white whitespace-normal item-center justify-center
    opacity-0 transition duration-500 bg-primary--500 hover:opacity-85`

return (
    <li className="relative inline-block mx-5 h-[380px] w-[450px]">

        <div className={`${overlayStyle}`}>
            <p className="text-2xl">
                {title}
            </p>
            <p className="mt-3">
                {text}
            </p>
        </div>
        
        <img src={image} alt={`${image}`} />
    </li>
)
}

export default Class