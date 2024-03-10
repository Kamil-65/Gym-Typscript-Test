import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll"



type Props = {
    setSelectedPage: (value: SelectedPage) => void;
    icon: JSX.Element;
    title: string;
    description: string;
}

const childVariant ={
    hidden: {opacity: 0, scale:0.9},
    visible: {opacity: 1, scale: 1},
};
const Benefit = ({icon, title, description, setSelectedPage}: Props) => {
return (
    /**bordo cards */
    <motion.div 
        className="rounded-md border-2 border-gray-200 px-5 py-16 mt-5 "
        variants={childVariant}>
        {/**contenuto */}
        <div className="flex-col justify-center text-center">

            {/**bordo icon */}
            <div className="flex justify-center text-center">
                <div className="rounded-full border-2 border-gray-200 bg-primary--100 p-4">
                    {icon}
                </div>
            </div>

            {/**title+text & Link */}
            <h4 className="font-bold">{title}</h4>
            <p className="mt-5">{description}</p>
            <AnchorLink
                className="text-primary--500 underline hover:text-secondary--400 text-sm"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
                >Learn More </AnchorLink>
        </div>
    </motion.div>
    )
}

export default Benefit