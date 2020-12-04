const animals = [
    {category: 'Animals', img: "url('images/animal_1.jpg')"},
    {category: 'Animals', img: "url('images/animal_2.jpg')"},
    {category: 'Animals', img: "url('images/animal_3.jpg')"},
    {category: 'Animals', img: "url('images/animal_4.jpg')"},
    {category: 'Animals', img: "url('images/animal_5.jpg')"}
]

const transport = [
    {category: 'Transport', img: "url('images/transport_1.jpg')"},
    {category: 'Transport', img: "url('images/transport_2.jpg')"},
    {category: 'Transport', img: "url('images/transport_3.jpg')"},
    {category: 'Transport', img: "url('images/transport_4.jpg')"},
    {category: 'Transport', img: "url('images/transport_5.jpg')"}
]

const people = [
    {category: 'People', img: "url('images/person_1.jpg')"},
    {category: 'People', img: "url('images/person_2.jpg')"},
    {category: 'People', img: "url('images/person_3.jpg')"},
    {category: 'People', img: "url('images/person_4.jpg')"},
    {category: 'People', img: "url('images/person_5.jpg')"}
]

const clothing = [
    {category: 'Clothing', img: "url('images/clothing_1.jpg')"},
    {category: 'Clothing', img: "url('images/clothing_2.jpg')"},
    {category: 'Clothing', img: "url('images/clothing_3.jpg')"},
    {category: 'Clothing', img: "url('images/clothing_4.jpg')"},
    {category: 'Clothing', img: "url('images/clothing_5.jpg')"}
]

const food = [
    {category: 'Food', img: "url('images/food_1.jpg')"},
    {category: 'Food', img: "url('images/food_2.jpg')"},
    {category: 'Food', img: "url('images/food_3.jpg')"},
    {category: 'Food', img: "url('images/food_4.jpg')"},
    {category: 'Food', img: "url('images/food_5.jpg')"}
]

const shapes = [
    {category: 'House', img: "url('images/house_1.jpg')"},
    {category: 'House', img: "url('images/house_2.jpg')"},
    {category: 'House', img: "url('images/house_3.jpg')"},
    {category: 'House', img: "url('images/house_4.jpg')"},
    {category: 'House', img: "url('images/house_5.jpg')"}
]


let attempts = 0
let wins = 0
let score = 0

const squareClasses = ['.one', '.two', '.three', '.four', '.five', '.six', '.seven','.eight']

let allCategories = [animals, transport, people, clothing, food, shapes]

const squares = document.querySelectorAll('.square')
const refreshBtn = document.querySelector('.refresh')
const submitAnswerBtn = document.querySelector('.submit_answer_btn')
const board = document.querySelector('.board')
const winnerText = document.querySelector('.winner_text')
const loserText = document.querySelector('.loser_text')
let scoreDisplayed = document.querySelector('.score')


const selectTargetCategory = () => {

   const randomCatIdx = Math.floor(Math.random() * allCategories.length)

   const targetCategory = allCategories[randomCatIdx]

   return targetCategory
};

let targetCategory = selectTargetCategory()

const selectRemainingCategories = () => {

    const remainingCategories = []

    // console.log(targetCategory)

    allCategories.forEach(cat => {
        if (cat !== targetCategory) {
            remainingCategories.push(cat)
        }
    })

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

// assignTargetImages();

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

    scoreDisplayed.textContent = ""

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

    return scoreDisplayed.textContent = score + "%"
    
}








refreshBtn.addEventListener('click', refreshPage)


//Darken and add class of clicked to clicked square
squares.forEach(square => {
    square.addEventListener('click', function(e) {
        e.target.classList.toggle('clicked')
    })
})

const announceWinner = () => {

    wins += 0.1
    console.log(wins)
    refreshBtn.classList.remove('hidden')
    submitAnswerBtn.classList.add('hidden')
    winnerText.classList.remove('hidden')


    squares.forEach(square => {
        if (square.classList.contains('clicked')) {
            square.classList.remove('clicked')
        } else {
            square.classList.add('clicked')
        }
    })

    
    
    score = (Math.floor((wins / attempts) * 100))
    console.log(score)
    
    return scoreDisplayed.textContent = score + "%"
};

const announceLoser = () => {    
    refreshBtn.classList.remove('hidden')
    submitAnswerBtn.classList.add('hidden')
    loserText.classList.remove('hidden')

    squares.forEach(square => {
        if (!square.classList.contains('clicked')) {
            square.classList.add('clicked')
        }
    });

    score = (Math.floor((wins / attempts) * 100))
    console.log(score)
    
    return scoreDisplayed.textContent = score + "%"
}


const submitAnswer = () => {

    attempts += 0.1
    console.log(attempts)

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

    // console.log(currentCorrectAnswer.sort())
    // console.log(answer.sort())

    const currentCorrectAnswerAsString = currentCorrectAnswer.sort().join();
    const answerAsString = answer.sort().join()

    if (currentCorrectAnswerAsString === answerAsString) {
        announceWinner()
    } else {
        announceLoser()
    }

};

submitAnswerBtn.addEventListener('click', submitAnswer)




// assignRemainingImages();

// console.log(targetCategory[0].category);

// assignTargetImages(); 
// assignRemainingImages();