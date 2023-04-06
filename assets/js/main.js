function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.scr = profileData.photo
    photo.alt = profileData.name 
    
    const name = document.getElementById('profile.name')
    name.innerText = profileData.name
         
    const job = document.getElementById('profile.job')
    job.innerText = profileData.job
     
    const location = document.getElementById('profile.location')
    location.innerText = profileData.location
    
    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`
    
    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softskills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardskills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" title="${skill.name}" alt="${skill.name}"></li>`).join('')
}

function updateIdiomas(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(portfolio => `<li>
    <h3 ${portfolio.github ? 'class="title github"' : 'class="title"'}>${portfolio.name}</h3>
    <a href="${portfolio.url}" target="_blank">${portfolio.url}</a></li>`).join('')
}

function updateExperience(profileData) {
    const experience = document.getElementById('profile.experience')
    experience.innerHTML = profileData.professionalExperience.map(experience => `
    <li>
                        <h3 class="title">${experience.name}</h3>
                        <span class="period">${experience.period}</span>
                        <p>${experience.description}</p>
                    </li>
    `).join('')
}


(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateIdiomas(profileData)
    updatePortfolio(profileData)
    updateExperience(profileData)
})()