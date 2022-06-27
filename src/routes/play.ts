import { setServerPause } from "../helpers"

export async function get() {
    let success = await setServerPause(false)
    return ({
        body: {
            status: success ? "Ok" : "Error",
        }
    })
}