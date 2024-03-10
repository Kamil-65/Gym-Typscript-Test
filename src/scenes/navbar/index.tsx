import { useState } from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link.tsx"
import { SelectedPage } from "@/shared/types.ts";
import ActionButton from "@/shared/ActionButton.tsx";
import useMediaQuery from "@/Hook/useMediaQuery.ts";



type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
    isTopPage: boolean;
}

const Navbar = ({isTopPage, selectedPage, setSelectedPage,}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreen = useMediaQuery ("(min-width: 1060px)");
    const [ isMenuToggled, setIsMenuToggled] = useState <Boolean> (false);
    const navbarBackground = isTopPage ? "" : "bg-primary--100 drop-shadow";


    return (
    <nav>
        <div className={`${flexBetween} ${navbarBackground} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/**Left Side */}
                    <img src={Logo} alt="logo" />
                    {/**Right Side */}
                    {isAboveMediumScreen ? (
                    <div className={`${flexBetween} w-full`}>
                        {/**inner Left */}
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link 
                                page ="Home"
                                selectedPage = {selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page ="Benefit"
                                selectedPage = {selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page ="Our Classes"
                                selectedPage = {selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page ="Contact Us"
                                selectedPage = {selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                        {/**inner Right */}
                        <div className={`${flexBetween} gap-8`}>
                            <p>Sign In</p>
                            <ActionButton setSelectedPage={setSelectedPage}> Become a Member </ActionButton> 
                        </div>
                    </div>
                    ) : (
                        <button className="rounded-full bg-secondary--500 p-2"
                        onClick={() => setIsMenuToggled (!isMenuToggled)}>
                            <Bars3Icon className="text-white h-6 w-6" />
                        </button>
                    )}
                </div>
            </div>
        </div>
        {!isAboveMediumScreen && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full bg-primary--100 w-[300px] drop-shadow-xl">
                <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled (!isMenuToggled)}>
                        <XMarkIcon className="h-6 w-6 text-gray-400" />
                    </button>
                </div>
                <div className={`flex flex-col ml-[33%] gap-10 text-2xl`}>
                    <Link 
                        page ="Home"
                        selectedPage = {selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link
                        page ="Benefit"
                        selectedPage = {selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link
                        page ="Our Classes"
                        selectedPage = {selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link
                        page ="Contact Us"
                        selectedPage = {selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                </div>
            </div>
        )};
    </nav>
    )
}

export default Navbar