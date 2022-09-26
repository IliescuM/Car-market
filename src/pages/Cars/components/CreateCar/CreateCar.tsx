import { Alert, Button, TextInput } from "@mantine/core"
import { IconCheck } from "@tabler/icons"
import { useState } from "react"
import { useCreateCarMutation } from "../../../../hooks/mutations/useCreateCarMutation"
import { useForm } from "react-hook-form"
import { ICreateCarReq } from "../../../../types/ICreateCarReq"
import { z as zod } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod/lib"
import { CarSchema } from "../../../../carsSchema/CarSchema"
export const CreateCar = () => {
    // const [name, setName] = useState("")
    // const [year, setYear] = useState(0)
    // const [km_driven, setKmDriven] = useState(0)
    // const [seller_type, setSeller_type] = useState("")
    // const [transmission, setTransmission] = useState("")
    // const [owner, setOwner] = useState("")
    // const [selling_price, setSelling_price] = useState(0)
    // const [fuel, setFuel] = useState("")
    const { carSchema: createCarSchema } = CarSchema()
    type FormFields = zod.infer<typeof createCarSchema>
    const { register, handleSubmit, reset, formState } = useForm<FormFields>({
        defaultValues: {
            name: "",
            year: "0",
            km_driven: "0",
            seller_type: "",
            transmission: "",
            owner: "",
            selling_price: "0",
            fuel: ""
        },
        mode: "onBlur",
        resolver: zodResolver(createCarSchema)
    })

    // const { isError, isLoading, createCar, car } = useCreateCar()
    const { isError, isLoading, mutate: createCar, data } = useCreateCarMutation();

    const onSubmit = async (values: FormFields) => {
        const { year, km_driven, selling_price, ...rest } = values
        createCar(
            {
                year: Number(year),
                km_driven: Number(km_driven),
                selling_price: Number(selling_price),
                ...rest,
            },
            {
                onSuccess: () => {
                    console.log("sumbmiting")
                    // setName("")
                    // setYear(0)
                    // setKmDriven(0)
                    // setSeller_type("")
                    // setTransmission("")
                    // setOwner("")
                    // setSelling_price(0)
                    // setFuel("")
                    reset()
                }
            })
    }


    return (<div>
        {data?.items[0] &&
            <Alert
                icon={<IconCheck size={16} />}
                title="Succces!"
                color="teal">
                You created the car {data.items[0].name}
            </Alert>}
        <form onSubmit={handleSubmit(onSubmit)} >
            <TextInput
                // onChange={e => setName(e.target.value)}
                placeholder="Name"
                label='Name'
                // value={name}
                withAsterisk
                error={formState.errors?.name?.message}
                {...register('name')}
            />
            <TextInput
                // onChange={e => setYear(Number(e.target.value))}
                placeholder="Year"
                label='Year'
                // value={year}
                withAsterisk
                type='number'
                error={formState.errors?.year?.message}
                {...register('year')}
            />
            <TextInput
                // onChange={e => setKmDriven(Number(e.target.value))}
                placeholder="Km Driven"
                label='Km Driven'
                // value={km_driven}
                withAsterisk
                error={formState.errors?.km_driven?.message}
                {...register('km_driven')}
            />
            <TextInput
                // onChange={e => setFuel(e.target.value)}
                placeholder="Fuel"
                label='Fuel'
                // value={fuel}
                withAsterisk
                error={formState.errors?.fuel?.message}
                {...register('fuel')}
            />
            <TextInput
                // onChange={e => setSeller_type(e.target.value)}
                placeholder="Seller"
                label='Seller'
                // value={seller_type}
                withAsterisk
                error={formState.errors?.seller_type?.message}
                {...register('seller_type')}
            />
            <TextInput
                // onChange={e => setTransmission(e.target.value)}
                placeholder="Transmission"
                label='Transmission'
                // value={transmission}
                withAsterisk
                error={formState.errors?.transmission?.message}
                {...register('transmission')}

            />
            <TextInput
                // onChange={e => setOwner(e.target.value)}
                placeholder="Owner"
                label='Owner'
                // value={owner}
                withAsterisk
                error={formState.errors?.owner?.message}
                {...register('owner')}
            />
            <TextInput
                // onChange={e => setSelling_price(Number(e.target.value))}

                placeholder="Price"
                label='Price'
                // value={selling_price}
                withAsterisk
                type='number'
                error={formState.errors?.selling_price?.message}
                {...register('selling_price')}
            />
            <Button loading={isLoading} type="submit" mt={20}>Create Car</Button>

        </form>
    </div>
    )
}
