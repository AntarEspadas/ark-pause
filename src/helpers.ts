export async function setServerPause(paused: boolean) {
    const host = import.meta.env.VITE_HOST
    const port = import.meta.env.VITE_PORT
    const endpoint = paused ? "pause" : "play"
    const response = await fetch(`http://${host}:${port}/${endpoint}`)
    if (response.status === 200)
        return true
    return false
}