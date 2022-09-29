import { Badge, Button, Card, Center, Group, Image, Paper, Text, Title } from "@mantine/core"
import { useColorScheme } from "@mantine/hooks"
import clsx from "clsx"
import { IUser } from "../../../types/userTypes/IUser"
import { useStyles } from "./style"


interface IUserDetailsProps {
    user: IUser;
}

export const UserDetails = ({ user }: IUserDetailsProps) => {
    const { classes } = useStyles()
    const colorScheme = useColorScheme();
    return (
        <div >

            <Card
                className={clsx(classes.carCard, true && classes.carCard2, classes)}
                shadow='sm'
                color={colorScheme === 'dark' ? '#343434' : 'white'}
                p='lg'
                radius='xs'
                withBorder>


                <Image

                    src={"https://t3.ftcdn.net/jpg/02/09/37/00/360_F_209370065_JLXhrc5inEmGl52SyvSPeVB23hB6IjrR.jpg"}
                    alt='Avatar Pic'
                    style={{
                        borderRadius: '50%',
                        overflow: 'hidden',
                        borderWidth: 3,
                        margin: 3

                    }}



                />

                <Badge color="green" variant="light">
                    Profile
                </Badge>
                <Group position="apart" mt="sm" mb="md">
                    <Text size='xl' color="dimmed" align="center" weight={800}>User name: {user.username}</Text>
                    <Text size='xl' color="dimmed" weight={800}> Email: {user.email}</Text>
                </Group>





            </Card >
        </div>

    )
}