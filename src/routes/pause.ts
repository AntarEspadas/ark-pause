import { setServerPause } from "../helpers"

export async function get() {
    let success = await setServerPause(true)
    return ({
        body: {
            status: success ? "Ok" : "Error",
        }
    })
}