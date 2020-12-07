const animals = [
    {category: 'Animals', img: "url('images/animal_1.jpg')"},
    {category: 'Animals', img: "url('images/animal_2.jpg')"},
    {category: 'Animals', img: "url('images/animal_3.jpg')"},
    {category: 'Animals', img: "url('images/animal_4.jpg')"},
    {category: 'Animals', img: "url('images/animal_5.jpg')"},
    {category: 'Animals', img: "url('images/animal_6.jpg')"},
    {category: 'Animals', img: "url('images/animal_7.jpg')"},
    {category: 'Animals', img: "url('images/animal_8.jpg')"},
    {category: 'Animals', img: "url('images/animal_9.jpg')"},
    {category: 'Animals', img: "url('images/animal_10.jpg')"},
    {category: 'Animals', img: "url('images/animal_11.jpg')"},
    {category: 'Animals', img: "url('images/animal_12.jpg')"}
]

const transport = [
    {category: 'Transport', img: "url('images/transport_1.jpg')"},
    {category: 'Transport', img: "url('images/transport_2.jpg')"},
    {category: 'Transport', img: "url('images/transport_3.jpg')"},
    {category: 'Transport', img: "url('images/transport_4.jpg')"},
    {category: 'Transport', img: "url('images/transport_5.jpg')"},
    {category: 'Transport', img: "url('images/transport_6.jpg')"},
    {category: 'Transport', img: "url('images/transport_7.jpg')"},
    {category: 'Transport', img: "url('images/transport_8.jpg')"},
    {category: 'Transport', img: "url('images/transport_9.jpg')"},
    {category: 'Transport', img: "url('images/transport_10.jpg')"},
    {category: 'Transport', img: "url('images/transport_11.jpg')"},
    {category: 'Transport', img: "url('images/transport_12.jpg')"}
]

const people = [
    {category: 'People', img: "url('images/person_1.jpg')"},
    {category: 'People', img: "url('images/person_2.jpg')"},
    {category: 'People', img: "url('images/person_3.jpg')"},
    {category: 'People', img: "url('images/person_4.jpg')"},
    {category: 'People', img: "url('images/person_5.jpg')"},
    {category: 'People', img: "url('images/person_6.jpg')"},
    {category: 'People', img: "url('images/person_7.jpg')"},
    {category: 'People', img: "url('images/person_8.jpg')"},
    {category: 'People', img: "url('images/person_9.jpg')"},
    {category: 'People', img: "url('images/person_10.jpg')"},
    {category: 'People', img: "url('images/person_11.jpg')"},
    {category: 'People', img: "url('images/person_12.jpg')"}
]

const clothing = [
    {category: 'Clothing', img: "url('images/clothing_1.jpg')"},
    {category: 'Clothing', img: "url('images/clothing_2.jpg')"},
    {category: 'Clothing', img: "url('images/clothing_3.jpg')"},
    {category: 'Clothing', img: "url('images/clothing_4.jpg')"},
    {category: 'Clothing', img: "url('images/clothing_5.jpg')"},
    {category: 'Clothing', img: "url('images/clothing_6.jpg')"},
    {category: 'Clothing', img: "url('images/clothing_7.jpg')"},
    {category: 'Clothing', img: "url('images/clothing_8.jpg')"},
    {category: 'Clothing', img: "url('images/clothing_9.jpg')"},
    {category: 'Clothing', img: "url('images/clothing_10.jpg')"},
    {category: 'Clothing', img: "url('images/clothing_11.jpg')"},
    {category: 'Clothing', img: "url('images/clothing_12.jpg')"}
]

const food = [
    {category: 'Food', img: "url('images/food_1.jpg')"},
    {category: 'Food', img: "url('images/food_2.jpg')"},
    {category: 'Food', img: "url('images/food_3.jpg')"},
    {category: 'Food', img: "url('images/food_4.jpg')"},
    {category: 'Food', img: "url('images/food_5.jpg')"},
    {category: 'Food', img: "url('images/food_6.jpg')"},
    {category: 'Food', img: "url('images/food_7.jpg')"},
    {category: 'Food', img: "url('images/food_8.jpg')"},
    {category: 'Food', img: "url('images/food_9.jpg')"},
    {category: 'Food', img: "url('images/food_10.jpg')"},
    {category: 'Food', img: "url('images/food_11.jpg')"},
    {category: 'Food', img: "url('images/food_12.jpg')"}
]

const houses = [
    {category: 'House', img: "url('images/house_1.jpg')"},
    {category: 'House', img: "url('images/house_2.jpg')"},
    {category: 'House', img: "url('images/house_3.jpg')"},
    {category: 'House', img: "url('images/house_4.jpg')"},
    {category: 'House', img: "url('images/house_5.jpg')"},
    {category: 'House', img: "url('images/house_6.jpg')"},
    {category: 'House', img: "url('images/house_7.jpg')"},
    {category: 'House', img: "url('images/house_8.jpg')"},
    {category: 'House', img: "url('images/house_9.jpg')"},
    {category: 'House', img: "url('images/house_10.jpg')"},
    {category: 'House', img: "url('images/house_11.jpg')"},
    {category: 'House', img: "url('images/house_12.jpg')"}
]


let attempts = 0
let wins = 0
let score = 0
let rounds = 0

const allObjs = [...animals, ...transport, ...food, ...clothing, ...people,...houses]

const allImgUrls = allObjs.map(function(item) { return item["img"].replace('url(','').replace(')', '').replace(/['"]+/g, '') })

//preload images
for (let i = 0; i < allImgUrls.length; ++i) {
    let img = new Image();
    img.src = allImgUrls[i]
 }


const squareClasses = ['.one', '.two', '.three', '.four', '.five', '.six', '.seven','.eight']

let allCategories = [animals, transport, people, clothing, food, houses]

const squares = document.querySelectorAll('.square')
const refreshBtn = document.querySelector('.refresh')
const submitAnswerBtn = document.querySelector('.submit_answer_btn')
const board = document.querySelector('.board')
const winnerText = document.querySelector('.winner_text')
const loserText = document.querySelector('.loser_text')
let scoreDisplayed = document.querySelector('.score')
const welcomeText = document.querySelector('.welcome_text')
const instructions = document.querySelector('.instructions')
const squareTwo = document.querySelector('.two')
const squareSeven = document.querySelector('.seven')
const round = document.querySelector('.rounds')
const scoreBoard = document.querySelector('.score_board')



const selectTargetCategory = () => {

   const randomCatIdx = Math.floor(Math.random() * allCategories.length)

   const targetCategory = allCategories[randomCatIdx]

   return targetCategory
};


let targetCategory = selectTargetCategory()


const selectRemainingCategories = () => {

    const remainingCategories = allCategories.filter(category => category !== targetCategory)
    return remainingCategories

};

let remainingCategories = selectRemainingCategories()

const defineTargetPositions = () => {

    const targetPositions = []

    for (let i = 0; i < 3; i++) {

        const randomGridClassIndex = Math.floor(Math.random() * squareClasses.length)

        if (!targetPositions.includes(squareClasses[randomGridClassIndex])) {

            targetPositions.push(squareClasses[randomGridClassIndex])

        } else {

            i--
        }  
       
    }

    return targetPositions

};

let targetPositions = defineTargetPositions()



const assignTargetImages = () => {

    let uniqueTargetImgs = []

    for (let i = 0; i < 3; i++) {
        
        const randomImgIdx = Math.floor(Math.random() * targetCategory.length)

        if (!uniqueTargetImgs.includes(randomImgIdx)) {

            uniqueTargetImgs.push(randomImgIdx)

            document.querySelector(targetPositions[i]).style.backgroundImage = targetCategory[randomImgIdx].img

        } else {

            i--

        }
    }

}


const selectRemainingImages = () => {

    const remainingImages = []

    remainingCategories.forEach(cat => {

        const randomImgIdx = Math.floor(Math.random() * remainingCategories.length)


        remainingImages.push(cat[randomImgIdx])

    })
     
    return remainingImages
}


let remainingImages = selectRemainingImages()



const defineRemainingPositions = () => {

    const remainingPositions = []

    squareClasses.forEach(gridClass => {
        if (!targetPositions.includes(gridClass)) {
            remainingPositions.push(gridClass)
        }
    })

    return remainingPositions
}

let remainingPositions = defineRemainingPositions()


const assignRemainingImages = () => {

    remainingPositions.forEach((position, i) => {
        document.querySelector(position).style.backgroundImage = remainingImages[i].img
    })

}




const theCorrectanswer = []

const refreshPage = () => {

    squares.forEach(square => {
        square.classList.remove('clicked')
    })

    rounds += 1
    playSound()
    scoreBoard.classList.remove('hidden')
    welcomeText.className ='hidden'
    instructions.className = 'hidden'
    scoreDisplayed.textContent = ""
    clickable = true
    winnerText.classList.add('hidden')
    loserText.classList.add('hidden')
    refreshBtn.classList.add('hidden')
    submitAnswerBtn.classList.remove('hidden')
    targetCategory = selectTargetCategory()
    remainingCategories = selectRemainingCategories()
    targetPositions = defineTargetPositions()
    assignTargetImages() 
    remainingImages = selectRemainingImages()
    remainingPositions = defineRemainingPositions()
    assignRemainingImages()

    theCorrectanswer.push(targetPositions)

    round.textContent = rounds
    scoreDisplayed.textContent = score + "%"
    
}


refreshBtn.addEventListener('click', refreshPage)

let clickable = true

function clickSound(){
    const click = new Audio("sounds/click.mp3");
    click.play()
}

//Darken and add class of clicked to clicked square if clickabe
squares.forEach(square => {
    square.addEventListener('click', function(e) {
        if (clickable) {
            clickSound()
            e.target.classList.toggle('clicked')
        }
    })
})



const announceWinner = () => {

    winnerSound()
    wins += 0.1

    refreshBtn.classList.remove('hidden')
    submitAnswerBtn.classList.add('hidden')
    winnerText.classList.remove('hidden')
    clickable = false

    squares.forEach(square => {
        if (square.classList.contains('clicked')) {
            square.classList.remove('clicked')
        } else {
            square.classList.add('clicked')
        }
    })
    
    score = (Math.floor((wins / attempts) * 100))
    
    return scoreDisplayed.textContent = score + "%"
};

const announceLoser = () => {    
    loserSound()
    refreshBtn.classList.remove('hidden')
    submitAnswerBtn.classList.add('hidden')
    loserText.classList.remove('hidden')
    clickable = false

    squares.forEach(square => {
        if (!square.classList.contains('clicked')) {
            square.classList.add('clicked')
        }
    });

    score = (Math.floor((wins / attempts) * 100))
    
    return scoreDisplayed.textContent = score + "%"
}


const submitAnswer = () => {

    attempts += 0.1

    const answer = []

    squares.forEach(square => {

        let selectedSquares = square.className.split(/\s+/).length
        let theCorrectLengthForASelectedSquare = 3
        let selectedSquareClass = square.className.split(/\s+/)[1]

        if (selectedSquares === theCorrectLengthForASelectedSquare) {
            //push a dot to match square class name
            answer.push('.' + selectedSquareClass)
        }
    })
    const currentCorrectAnswer = theCorrectanswer[theCorrectanswer.length - 1]


    const currentCorrectAnswerAsString = currentCorrectAnswer.sort().join();
    const answerAsString = answer.sort().join()

    if (currentCorrectAnswerAsString === answerAsString) {
        announceWinner()
    } else {
        announceLoser()
    }

}


submitAnswerBtn.addEventListener('click', submitAnswer)

function playSound(){
    var audio = new Audio("sounds/playArp.mp3");
    audio.play()
}

function winnerSound(){
    const winner = new Audio("sounds/winner.mp3");
    winner.play();
}

function loserSound(){
    const loser = new Audio("sounds/loser.mp3");
    loser.play();
}