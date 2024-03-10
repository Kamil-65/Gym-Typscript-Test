import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import { useForm } from "react-hook-form";



type Props = {
    setSelectedPage: (value:SelectedPage) => void;
};



const ContactUs = ({setSelectedPage}: Props) => {
    const inputStyle = `bg-primary--300 rounded-lg w-full mt-5 px-5 py-2 placeholder-white`;

    const {
        register,
        trigger,
        formState: {errors},
    } = useForm();

    const inSubmit = async (e:any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }};


    return (
        <section
        id="contactus"
        className="mx-auto w-5/6 pt-24 pb-32">
            <motion.div onViewportEnter = {()=>setSelectedPage(SelectedPage.ContactUs)}>
                {/**Text Section */}
                <motion.div className="md:w-3/5"
                initial = "hidden"
                whileInView="visible"
                viewport={{once:true, amount: 1}}
                transition={{duration: 0.7}}
                variants={{
                    hidden: {opacity:1, x: -50},
                    visible: {opacity:1, x: 0},
                }}
                >
                    <HText><span className="text-primary--500">JOIN NOW </span> TO GET IN SHAPE</HText>
                    <p className="py-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi aliquam, possimus ipsa, asperiores temporibus sint perspiciatis cupiditate optio necessitatibu.
                    Odio totam repellendus illo architecto reprehenderit!
                    </p>
                </motion.div>
                {/**Form & IMAGE */}
                <div className="md:flex my-8 gap-10 justify-between">
                    {/**Form Section */}
                    <motion.div className="md:-mt-4 basis-3/6"
                    initial = "hidden"
                    whileInView="visible"
                    viewport={{once:true, amount: 0.5}}
                    transition={{duration: 0.7}}
                    variants={{
                        hidden: {opacity:0, y: 50},
                        visible: {opacity:1, y: 0},
                    }}>
                        <form 
                            target = "_blank"
                            onSubmit = {inSubmit}
                            action="https://formsubmit.co/8568a2bc219dfba5c620256a131cdce7"
                            method="POST"
                        >
                            <input 
                                className={inputStyle}
                                type="text"
                                placeholder="NAME"
                                {...register("name", {
                                    required: true,
                                    maxLength: 50,
                                })}
                            />
                            {errors.name && (
                                <p className="text-primary--500">
                                    {errors.name.type === "required" && "This field is required."}
                                    {errors.name.type === "maxLength" && "This field must be 50 characters or less."}
                                </p>
                            )}

                            <input
                                className={inputStyle}
                                type="text"
                                placeholder="EMAIL"
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                })}
                            />
                            {errors.email && (
                                <p className="text-primary--500">
                                    {errors.email.type === "required" && "This field is required."}
                                    {errors.email.type === "pattern" && "This field must be a valid email address."}
                                </p>
                            )}

                            <textarea
                                className={inputStyle}
                                placeholder="MESSAGE"
                                {...register("message", {
                                    required: true,
                                    maxLength: 500,
                                })}
                            />
                            {errors.message && (
                                <p className="text-primary--500">
                                    {errors.message.type === "required" && "This field is required."}
                                    {errors.message.type === "maxLength" && "This field must be 500 characters or less."}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="my-5 rounded-lg bg-secondary--500 px-20 py-3 transition duration-500 hover:text-white"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </motion.div>

                    {/**IMAGE*/}
                    <motion.div className="md:mt-1 mt-10 flex justify-center relative"
                    initial = "hidden"
                    whileInView="visible"
                    viewport={{once:true, amount: 0.5}}
                    transition={{delay:0.2, duration: 0.7}}
                    variants={{
                        hidden: {opacity:0, y: 50},
                        visible: {opacity:1, y: 0},
                    }}>
                        <div className="before:absolute md:before:content-evolvetext before:-bottom-20 before:-right-10 before:z-[1]">
                            <img src={ContactUsPageGraphic} alt="Contact-Us-Page-Graphic" />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default ContactUs;