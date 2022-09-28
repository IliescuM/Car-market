import { Button, Center, Group, Stack } from "@mantine/core"
import { Logo } from "../../components/layout/Logo"
import { CarCardCarousel } from "./components/CarCardCarousel"
import { Landing } from "./components/Landing"
export const Home = () => {
    return <>
        <Stack spacing="xs">
            <Center>
                <Logo width={235} height={235} ></Logo>
            </Center>
            <Landing></Landing>
            <CarCardCarousel />
        </Stack>



    </>
}