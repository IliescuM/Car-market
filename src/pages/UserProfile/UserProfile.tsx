import { Center } from "@mantine/core"
import { Layout } from "../../components/layout/Layout"
import { useUserSelector } from "../../hooks/selectors/useUserSelector"
import { UserDetails } from "./components/UserDetails"

export const UserProfile = () => {
    const user = useUserSelector()
    return <div>
        <Center>
            <UserDetails user={user} ></UserDetails>
        </Center>
    </div>
}