import { zodResolver } from "@hookform/resolvers/zod"
import { Alert, TextInput, Button } from "@mantine/core"
import { IconCheck } from "@tabler/icons"
import { useForm } from "react-hook-form"
import { CarSchema } from "../../../carsSchema/CarSchema"
import { useUpdateCarMutation } from "../../../hooks/mutations/useUpdateCarMutation"
import { ICar } from "../../../types/ICar"
import { z as zod } from 'zod'

type IUpdate = {
    car: ICar;
}

export const UpdateCar = ({ car }: IUpdate) => {
    // const [name, setName] = useState(car.name)
    // const [year, setYear] = useState(car.year)
    // const [km_driven, setKmDriven] = useState(car.km_driven)
    // const [seller_type, setSeller_type] = useState(car.seller_type)
    // const [transmission, setTransmission] = useState(car.transmission)
    // const [owner, setOwner] = useState(car.owner)
    // const [selling_price, setSelling_price] = useState(car.selling_price)
    // const [fuel, setFuel] = useState(car.fuel)
    // const { isError, isLoading, updateCar, car: updatedCar } = useUpdateCar()

    const { carSchema: updateCarSchema } = CarSchema()
    type FormFields = zod.infer<typeof updateCarSchema>
    const { register, handleSubmit, formState } = useForm<FormFields>({
        defaultValues: {
            name: car.name,
            year: String(car.year),
            km_driven: String(car.km_driven),
            seller_type: car.seller_type,
            transmission: car.transmission,
            owner: car.owner,
            selling_price: String(car.selling_price),
            fuel: car.fuel,
            image: car.image
        },
        mode: "onBlur",
        resolver: zodResolver(updateCarSchema)
    })

    const { isError, isLoading, mutate: updateCar, data: updatedCar } = useUpdateCarMutation()
    const handleUpdate = async (values: FormFields) => {
        const { year, km_driven, selling_price, ...rest } = values
        updateCar({
            _uuid: car._uuid,
            year: Number(year),
            km_driven: Number(km_driven),
            selling_price: Number(selling_price),
            ...rest,


        });
        console.log("update")
    }
    return (
        <div>
            {updatedCar && <Alert icon={<IconCheck size={16} />} title="Succces!" color="teal">
                You updated the car: {car.name}
            </Alert>}
            <form onSubmit={handleSubmit(handleUpdate)} >
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
                    withAsterisk type='number'
                    error={formState.errors?.selling_price?.message}
                    {...register('selling_price')}
                />
                <TextInput
                    // onChange={e => setName(e.target.value)}
                    placeholder="Image URL"
                    label='Image URL'
                    // value={name}
                    withAsterisk
                    error={formState.errors?.image?.message}
                    {...register('image')}
                />
                <Button loading={isLoading} type="submit" mt={20}>Update Car</Button>

            </form>
        </div>
    )
}
