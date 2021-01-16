// classe define
class CardTweets {
    constructor() {
        this.tweet = document.querySelector(".tweet-list")
    }
    showFollowers(data) {
        let cardTweet = ''

       data.tweets.map( (params) => {
           cardTweet += 
            `
            <li class="tweet-card">
              <div class="tweet-content">
                <div class="tweet-header">
                  <span class="fullname">
                    <strong>${params.nome}</strong>
                  </span>
                  <span class="username">${params.usuario}</span>
                  <span class="tweet-time">- ${params.data}</span>
                </div>
                <a>
                  <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/20.jpg" alt="">
                </a>
                <div class="tweet-text">
                  <p class="" lang="es" data-aria-label-part="0">${params.mensagem} <a href="https://t.co/dqg5hVQXA0"
                      class="twitter-timeline-link" target="_blank"><span
                        class="">https://www.mozilla-hispano.org/</span></a> <a href=""
                      class="twitter-hashtag"><s>#</s><b>firefox</b></a> <a href=""
                      class="twitter-hashtag"><s>#</s><b>comunidad</b></a>
                    <a href="" class="twitter-hashtag" dir="ltr"></a>
                  </p>
                </div>
                <div class="tweet-footer">
                  <a class="tweet-footer-btn">
                    <i class="octicon octicon-comment" aria-hidden="true"></i><span> ${params.comentarios}</span>
                  </a>
                  <a class="tweet-footer-btn">
                    <i class="octicon octicon-sync" aria-hidden="true"></i><span> ${params.compartilhamentos}</span>
                  </a>
                  <a class="tweet-footer-btn">
                    <i class="octicon octicon-heart" aria-hidden="true"></i><span> ${params.likes}</span>
                  </a>
                </div>
              </div>
            </li>
            `
       })

       this.tweet.innerHTML = cardTweet
    }

}