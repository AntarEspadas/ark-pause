export async function setServerPause(paused: boolean) {
    const host = import.meta.env.VITE_IPC_HOST ?? "127.0.0.1"
    const port = import.meta.env.VITE_IPC_PORT ?? 8888
    const endpoint = paused ? "pause" : "play"
    const response = await fetch(`http://${host}:${port}/${endpoint}`)
    if (response.status === 200)
        return true
    return false
}