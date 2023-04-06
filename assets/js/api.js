
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/juanjgtd/DIO-CURSO-JAVASCRIPT/main/Exerc%C3%ADcios/07%20-%20Porf%C3%B3lio/assets/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}