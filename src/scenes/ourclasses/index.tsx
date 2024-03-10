import HText from "@/shared/HText";
import { SelectedPage,ClassType } from "@/shared/types"
import { motion } from "framer-motion";
import Class from "./Class";

import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";

const OurClass: Array<ClassType> = [
    {
    image: image1,
    title: "Wheight Training Classes",
    text:"Impedit magni eius quos eveniet, laudantium magnam reiciendis dolor quis odit incidunt doloremque vel totam veniam fugit vero!",
    },
    {
    image: image2,
    title: "Yoga Classes",
    text:"Impedit magni eius quos eveniet, laudantium magnam reiciendis dolor quis odit incidunt doloremque vel totam veniam fugit vero!",
    },
    {
    image: image3,
    title: "Ab Core Classes",
    text:""
    },
    {
    image: image4,
    title: "Adventure Classes",
    text:"Impedit magni eius quos eveniet, laudantium magnam reiciendis dolor quis odit incidunt doloremque vel totam veniam fugit vero!",
    },
    {
    image: image5,
    title: "Fitness Classes",
    text:""
    },
    {
    image: image6,
    title: "Training Classes",
    text:"Impedit magni eius quos eveniet, laudantium magnam reiciendis dolor quis odit incidunt doloremque vel totam veniam fugit vero!",
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
return (
    <section
    id="ourclasses"
    className="w-full bg-primary--100 py-40">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
            <motion.div
                className="mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.5}}
                transition={{delay:0.2, duration:0.7}}
                variants={{
                    hidden: {opacity:0, x:-50},
                    visible: {opacity:1, x:0},
                }}>
                    <div className="md:w-3/6">
                        <HText> OUR CLASSES</HText>
                        <p className="py-5">
                        Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                        tellus quam porttitor. Mauris velit euismod elementum arcu neque
                        facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                        enim mattis odio in risus nunc.
                        </p>
                    </div>
            </motion.div>

{/**Controllare animazione scorrimento automatico (possibilmente in loop) */}
            <div className="h-[360px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2000] whitespace-nowrap">
                    {OurClass.map((item: ClassType, index) => (
                        <Class
                            key={`${item.title} - ${index}`}
                            image={item.image}
                            title={item.title}
                            text={item.text}
                        ></Class>
                    ))}*/
                </ul>
            </div>
        </motion.div>
    </section>
)
}

export default OurClasses