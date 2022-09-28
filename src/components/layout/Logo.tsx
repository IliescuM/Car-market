import { Image } from "@mantine/core"
export const Logo = (prop: { width: number, height: number }) => {
    return (
        <Image

            src='https://i.ibb.co/Ybpzhwj/White-and-Brown-Vintage-Car-Logo.png'
            alt='Logo'
            style={{
                width: prop.width,
                height: prop.height,
                borderRadius: '50%',
                overflow: 'hidden',
                borderWidth: 3,
                margin: 5

            }}

        />
    )

}