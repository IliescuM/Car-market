import { ActionIcon, Burger, Header as HeaderMantine, MediaQuery, useMantineColorScheme } from "@mantine/core"
import { IconMoonStars, IconSun } from "@tabler/icons";
import { isThrowStatement } from "typescript"
import { DarkMode } from "../DarkMode"

export const Header = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';


    return (
        <>

            This is the Header
            <ActionIcon
                mt={10}
                sx={{ position: 'absolute', top: 0, right: 0 }}
                variant="outline"
                color={dark ? 'yellow' : 'blue'}
                onClick={() => toggleColorScheme()}
                title="Toggle color scheme"
            >
                {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
            </ActionIcon>
        </>
    )
}

