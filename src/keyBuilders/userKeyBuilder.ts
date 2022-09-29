export const userKeyBuilder = {
    users: () => ["users"],
    user: (uuid: string) => ["user", uuid]
}