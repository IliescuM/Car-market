
import { Button, Center } from "@mantine/core";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, NavLink as MantineNavLink } from "@mantine/core";
import { IconHome, IconQuestionMark, IconCar } from "@tabler/icons";
import { Counter } from "./Counter";
import { useState } from "react";
export const Navigation = () => {
    const navigate = useNavigate()


    const handleRedirect = () => {
        navigate('/')
    }
    return <>


        <div>
            <Center><Counter></Counter></Center>

            <NavLink to="/home">
                {
                    ({ isActive }) => <MantineNavLink
                        active={isActive}
                        label="Home"
                        icon={<IconHome />}
                    />
                }

            </NavLink>
            <NavLink to="/about">
                {
                    ({ isActive }) => <MantineNavLink
                        active={isActive}
                        label="About"
                        icon={<IconQuestionMark />}
                    />
                }

            </NavLink>

            <NavLink to="/cars">
                {
                    ({ isActive }) => <MantineNavLink
                        active={isActive}
                        label="Cars"
                        icon={<IconCar />}

                    />

                }
            </NavLink>



        </div>
    </>














    // return <div>
    //     {/* <div>
    //         <Button color="cyan" radius="lg" onClick={handleRedirect}>Logo</Button>
    //         <nav>
    //             <ul>
    //                 <li>
    //                     <NavLink className={({ isActive }) => (isActive ? 'isActive' : '')}
    //                         to="/">
    //                         Homepage{" "}
    //                     </NavLink>
    //                 </li>
    //                 <li>
    //                     <NavLink className={({ isActive }) => (isActive ? 'isActive' : '')}
    //                         to="/about">
    //                         About{" "}
    //                     </NavLink>
    //                 </li>
    //                 <li>
    //                     <NavLink className={({ isActive }) => (isActive ? 'isActive' : '')}
    //                         to="/cars">
    //                         Cars{" "}
    //                     </NavLink>
    //                 </li>
    //             </ul>
    //         </nav>
    //     </div>
    // </div> */}
}