import { Navigation } from "./navigation/Navigation";
import { Outlet } from "react-router-dom";
import { AppShell, useMantineTheme, Header as HeaderMantine, MediaQuery, Burger, Navbar, Box } from "@mantine/core";
import { Header } from "./header/Header";
import { useState } from "react";
import { PremadeFooterLinks } from "./footer/PremadeFooterLinks";
import footerData from '../../MockData/footerData.json'
import { PremadeHeader } from "./header/PremadeHeader";


export const Layout = () => {
    const themeLayout = useMantineTheme();
    const [opened, setOpened] = useState(false);
    const data = footerData.data

    return (
        <div>

            <AppShell
                styles={{
                    main: {
                        backgroundColor: themeLayout.colorScheme === 'dark'
                            ? themeLayout.colors.dark[6]
                            : themeLayout.colors.gray[0]
                    },
                }}
                navbarOffsetBreakpoint="sm"
                asideOffsetBreakpoint="sm"
                padding="md"
                navbar={
                    <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
                        <Navigation></Navigation>
                    </Navbar>
                }
                header={<PremadeHeader />
                    // <Box pb={120}>
                    //     <HeaderMantine height={60} p="md">
                    //         <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                    //             <Burger
                    //                 opened={opened}
                    //                 onClick={() => setOpened((o) => !o)}
                    //                 size="sm"
                    //                 color={themeLayout.colors.gray[6]}
                    //                 mr="xl"
                    //             />
                    //         </MediaQuery>
                    //         <Header></Header>


                    //     </HeaderMantine>
                    // </Box>
                }
                footer={<PremadeFooterLinks data={data} />}


            > <Outlet /> </AppShell>
        </div >
    )
}