// classe define
class CardFollowers {
    constructor() {
        this.follower = document.querySelector("#follower")
    }
    showFollowers(data) {
        let cardFollowers = ''

       data.followers.map( (params) => {
           cardFollowers += 
            `
                <li class="tweet-card">
                  <div class="tweet-content">
                    <img class="tweet-card-avatar" src="${params.avatar}" alt="">
                    <div class="tweet-header">
                      <span class="fullname">
                        <strong>${params.nome}</strong>
                      </span></br>
                      <span class="username">${params.usuario}</span>
                    </div>

                    <button class="btn btn-follow">Follow</button>
                  </div>
                </li>
            `
       })

       this.follower.innerHTML = cardFollowers
    }

}