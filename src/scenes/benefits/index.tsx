import ActionButton from "@/shared/ActionButton";
import { motion } from "framer-motion";
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { SelectedPage, BenefitType } from "@/shared/types";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import HText from "@/shared/HText";
import Benefit from "./Benefit";


const benefits: Array <BenefitType>= [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title:"State of the Arte Facilities",
        description: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque.Ullamcorper et.",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title:"100' of Diverse Classes",
        description: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque.Ullamcorper et.",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title:"Expert and Pro Trainers",
        description: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque.Ullamcorper et.",
    }
];

const container = {
    hidden: {},
    visible: {
        transition:  { staggerChildren: 0.2},
    },
};



type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({setSelectedPage,}: Props) => {
    
    return (
    <section
    id="benefit"
    className="min-h-full mx-auto w-5/6 py-20">
        {/**tutto Benefits */}
        <motion.div 
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
            {/**titolo + testo */}
            <motion.div
            className="my-5 w-3/5"
            initial = "hidden"
            whileInView="visible"
            viewport={{once:true, amount: 1}}
            transition={{delay:0.2, duration: 0.7}}
            variants={{
                hidden: {opacity:1, x: -50},
                visible: {opacity:1, x: 0},
            }}>
                <HText>MORE THAN JUST GYM.</HText>
                <p className="my-8 text-sm">
                We provide world class fitness equipment, trainers and classes to
				get you to your ultimate fitness goals with ease. We provide true
                care into each and every member.
                </p>
            </motion.div>

            {/**Benefits Card */}
            <motion.div 
                className="md:flex gap-5 justify-between items-center my-5"
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount: 0.5}}
                variants={container}
            >
                {benefits.map ((benefits: BenefitType) => (
                    <Benefit
                    key={benefits.title}
                    icon= {benefits.icon}
                    title= {benefits.title}
                    description = {benefits.description}
                    setSelectedPage={setSelectedPage}
                    >
                    </Benefit>
                ))}
            </motion.div>

            {/**img + titolo + testo */}
            <motion.div className="md:flex justify-between items-center gap-20 md:mt-28 mt-16">
                <img className="mx-auto" 
                    src={BenefitsPageGraphic} alt="Benefits-Page-Graphic" />

                {/**testo + Button */}
                <div>
                    <div className="relative">
                        <div className="before:absolute before:content-abstractwaves before:-top-20 before:-left-20 before:z-[-1]">
                            <motion.div
                                initial= "hidden"
                                whileInView= "visible"
                                viewport={{once:true, amount: 0.5}}
                                transition={{delay:0.2, duration: 0.5}}
                                variants={{
                                    hidden: {opacity:0, x:-50},
                                    visible: {opacity:1, x:0},
                                }}
                            >
                                <HText>MILLION OF HAPPY MEMBERS GETTING <span className=" text-primary--500">FIT</span></HText>
                            </motion.div>
                        </div>
                    </div>

                    <motion.div 
                        initial= "hidden"
                        whileInView= "visible"
                        viewport={{once:true, amount: 0.5}}
                        transition={{duration: 0.7}}
                        variants={{
                        hidden: {opacity: 0, x: 50},
                        visible: {opacity: 1, x: 0}
                        }}
                    >
                        <p className="mt-4 ">
                        Nascetur aenean massa auctor tincidunt. Iaculis potenti amet ultrices consectetur adipiscing ultricies enim.
                        Pulvinar fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat sed facilisis dui sit egestas ultrices tellus.
                        Ullamcorper arcu id pretium sapien proin integer nisl. Felis orci diam odio.
                        </p>
                        <p className="mt-4 ">
                        Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor.
                        Mauris velit euismod arcu neque facilisi. Amet semper tortor facilisis metus nibh.Rhoncus sit enim mattis odio in risus nunc.
                        </p>
                    </motion.div>
                    <div className="mt-16 relative">
                        <div className="before:absolute before:content-sparkles before:-bottom-20 before:right-40 before:z-[-1]">
                        <ActionButton setSelectedPage = {setSelectedPage}>Leran More</ActionButton>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </section>
    )
}

export default Benefits