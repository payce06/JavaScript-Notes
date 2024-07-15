const players = [
    {
        name: "Player 1",
        age: 21,
        male: true,
        favorites: ["Pasta", "Pizza"],
        favoriteDays: {
            "Sunday": true,
            "Monday": true,
            "Tuesday": false,
            "Wednesday": false,
            "Thursday": false,
            "Friday": false,
            "Saturday": false,
        },
        premierLeagueScores : {
            "League 1": 20,
            "League 2": 40
        }
    },
    {
        name: "Player 2",
        age: 25,
        male: true,
        favorites: ["Fries", "Soda"],
        favoriteDays: {
            "Sunday": false,
            "Monday": true,
            "Tuesday": true,
            "Wednesday": false,
            "Thursday": false,
            "Friday": false,
            "Saturday": false,
        },
        premierLeagueScores : {
            "League 1": 25,
            "League 2": 41
        }
    },
]

for(let i = 0; i < players.length; i++){
    const currentPlayer = players[i]
    const name = currentPlayer["name"]
    const age = currentPlayer["age"]
    const male = currentPlayer["male"]
    const favorites = currentPlayer["favorites"]
    const favoriteDays = currentPlayer["favoriteDays"]
    const premierLeagueScores = currentPlayer["premierLeagueScores"]
    const score1 = premierLeagueScores["League 1"]
    const score2 = premierLeagueScores["League 2"]
    const finalScore = score1 + score2
    const playerNameUpper = name.toUpperCase()
    
    console.log(`The player to Uppercase: ${playerNameUpper}`)
    console.log(`The age of the player: ${age}. Male? ${male}`)
    for(let j = 0; j < favorites.length; j++){
        const currentFavorite = favorites[j]
        const currentFavoritesToLowercase = favorites[j].toLowerCase()
        console.log(`The player's favorites in lowercase: ${currentFavoritesToLowercase}`)
    }
    
    
    const keys = Object.keys(favoriteDays)
    for(let k = 0; k < keys.length; k++){
        const currentKey = keys[k]
        if (favoriteDays[currentKey]) {
            console.log(`Favorite day: ${currentKey}`)
            
        }
    }
    console.log(`The final score: ${finalScore}`)
}

// Go through each of the players in a for loop (loop A). 15 points.
// Print the name of the player in upper case. 5 points
// Print the age and male or not. 5 points.
// Print favorite foods of the players one at a time in lowercase. 15 points.
// Just print the favorite days. 40 points.
// Final: print the total scores in both the leagues. 20 points.

// Hints: For loop in the beginning. Extract each key of the object in a separate variable and print them as needed.
// For favorites, you will need to do another for loop inside loop A
// For favoriteDays, you will need to do a separate for loop inside loop A and you need to check if the value for the key is true or not. if it is true, then print the key
