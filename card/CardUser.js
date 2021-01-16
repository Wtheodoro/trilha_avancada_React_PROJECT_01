// classe define
class CardUser {
    constructor() {
        this.user = document.querySelector(".profile-header")
    }
    showUser(params) {
        localStorage.setItem("user_name", params[0].nome)
        let userLocalStorage = localStorage.getItem("user_name")
        let cardUser = ''

        cardUser +=
            `
                <h3 class="profile-fullname"><a>${userLocalStorage}<a></h3>
                <h2 class="profile-element"><a>@${params[0].usuario}</a></h2>
                <a class="profile-element profile-website" hrerf="">
                    <i class="octicon octicon-link"></i>&nbsp;${params[0].usuario}.com</a>
                <a class="profile-element profile-website" hrerf="">
                    <i class="octicon octicon-location"></i>&nbsp;${params[0].local}</a>
                <h2 class="profile-element"><i class="octicon octicon-calendar"></i>${params[0].cadastro}</h2>
                <button class="btn btn-search-bar tweet-to-btn">Tweet to ${params[0].nome}</button>
                `

        this.user.innerHTML = cardUser
    }

}