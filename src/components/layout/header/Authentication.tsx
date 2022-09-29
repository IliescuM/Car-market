import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from "react-hook-form";
import { z as zod } from "zod"
import {
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    PaperProps,
    Button,
    Divider,
    Checkbox,
    Anchor,
    Stack,
    Modal,
    Alert,
} from '@mantine/core';
import { AuthUserSchema } from '../../../zodSchema/AuthUserSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateUserMutation } from '../../../hooks/mutations/useCreateUserMutation';
import { IconCheck } from '@tabler/icons';
import { useCreateUser } from '../../../hooks/useCreateUser';


export function AuthenticationForm(props: PaperProps) {
    const [type, toggle] = useToggle(['login', 'register']);
    const { authUserSchema } = AuthUserSchema();
    type FormFields = Zod.infer<typeof authUserSchema>
    const { register, handleSubmit, reset, formState } = useForm<FormFields>({
        defaultValues: {

            email: 'email@gmail.com',
            username: '',
            password: '*********',


        },
        mode: "onBlur",
        resolver: zodResolver(authUserSchema)
    })
    const { isError, isLoading, users, createUser } = useCreateUser();
    const handleSubmitForm = (values: FormFields) => {
        createUser({
            ...values,
        })

    }
    if (!isError) {
        localStorage.setItem('user', users.username)
    }
    // const { isError, isLoading, mutate: createUser, data } = useCreateUserMutation();
    // const handleSubmitForm = async (values: FormFields) => {
    //     createUser({
    //         ...values,
    //     },
    //         {
    //             onSuccess: () => {
    //                 console.log("user created")
    //                 localStorage.setItem('user', values.username)
    //                 reset()


    //             },
    //             onError: (e) => {
    //                 console.log(e)
    //             }
    //         }
    //     )

    // }



    return (
        <div> {!isError &&
            <Alert
                icon={<IconCheck size={16} />}
                title="Succces!"
                color="teal">
                You authenticated {users?.username}
            </Alert>}
            <Paper radius="md" p="xl" withBorder {...props}>
                <Text size="lg" weight={500}>
                    Welcome to Car Market, {type}
                </Text>



                <Divider labelPosition="center" my="lg" />

                <form onSubmit={handleSubmit(handleSubmitForm)}>
                    <Stack>
                        {type === 'register' && (
                            <TextInput
                                withAsterisk
                                label="Username"
                                placeholder="Your username"
                                {...register('username')}
                                error={formState.errors?.username?.message}

                            />
                        )}

                        <TextInput
                            withAsterisk
                            label="Email"
                            placeholder="hello@carmarket.dev"
                            {...register('email')}
                            error={formState.errors?.email?.message}
                        />

                        <PasswordInput
                            withAsterisk
                            label="Password"
                            placeholder="Your password"
                            {...register('password')}

                            error={formState.errors?.password?.message}
                        />

                        {type === 'register' && (
                            <Checkbox
                                label="I accept terms and conditions"
                            />
                        )}
                    </Stack>

                    <Group position="apart" mt="xl">
                        <Anchor
                            component="button"
                            type="button"
                            color="dimmed"
                            onClick={() => toggle()}
                            size="xs"
                        >
                            {type === 'register'
                                ? 'Already have an account? Login'
                                : "Don't have an account? Register"}
                        </Anchor>
                        <Button loading={isLoading} type="submit">{upperFirst(type)}</Button>
                    </Group>
                </form>
            </Paper>
        </div>
    );
}