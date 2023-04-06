
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/juanjgtd/PORTFOLIO/main/assets/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}