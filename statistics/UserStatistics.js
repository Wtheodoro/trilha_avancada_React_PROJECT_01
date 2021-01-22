class UserStatistics {
    constructor () {
        this.statistic = document.querySelector("#statistic")
    }
    showStatistics(params) {
        let cardStatistcs = ''
    
        cardStatistcs += 
        `   <li>
            <a>
                <span class="profile-stats-item profile-stats-item-label">Tweets</span>
                <span class="profile-stats-item profile-stats-item-number">${params[0].quantidade_tweets}</span>
            </a>
            </li>
            <li>
            <a>
                <span class="profile-stats-item profile-stats-item-label">Following</span>
                <span class="profile-stats-item profile-stats-item-number">${params[0].seguindo}</span>
            </a>
            </li>
            <li>
            <a>
                <span class="profile-stats-item profile-stats-item-label">Followers</span>
                <span class="profile-stats-item profile-stats-item-number">${params[0].seguidores}</span>
            </a>
            </li>
            <li>
            <a>
                <span class="profile-stats-item profile-stats-item-label">Likes</span>
                <span class="profile-stats-item profile-stats-item-number">${params[0].likes}</span>
            </a>
        `
        this.statistic.innerHTML = cardStatistcs
}




}