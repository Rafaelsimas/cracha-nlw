/* Criando objeto para redes sociais */
const linksSocialMedia = {
  github: 'Rafaelsimas',
  facebook: 'rafael.silvadesimas',
  instagram: 'rafaelsimas_01',
  twiter: 'jakelinytec'
}

/* =============CRIAR URL'S PERSONALIZADAS=============== */

function changeSocialMediaLinks() {
  /* Aqui estamos buscando os filhos dentro de social links(li)*/
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    /*  alert(li.children[0].href) */
  }
}
changeSocialMediaLinks()

/* =============BUSCAR INFORMAÇÕES NO GITHUB=============== */
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  /* O fetch vai bater na porta da url pegar as informações e trazer 
  Promisse = eu prometo que terei um valor para retornar
  */
  fetch(url)
    /* Informando para o then que o arquivo é um json */
    .then(response => response.json())
    /* aqui o data já é um json */
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
