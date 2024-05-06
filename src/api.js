export async function getLeaderbord() {
    const response = await fetch ("https://wedev-api.sky.pro/api/leaderboard",{
        method:'GET'
    })
    if (!response.ok) {
        throw new Error("Ошибочка")
    }
    else {
        const responseData = await response.json()
        return responseData
    }
}

export async function postLeaderbord({name, time}) {
    const response = await fetch ("https://wedev-api.sky.pro/api/leaderboard",{
        method:'POST',
        body: JSON.stringify({ name, time }),
    })
    if (!response.ok) {
        throw new Error("Ошибочка")
    }
    else {
        const responseData = await response.json()
        return responseData
    }
}