export type InitialStateApp ={
    user: {
        login: string
        password: string
        id: string
        favorites:object
        likes: object
    }
}
export type ActionApp = {
    login: string
    password: string
    id: string
    favorites:object
    likes: object
}