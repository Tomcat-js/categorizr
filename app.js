const animals = [
    {category: 'Animals', img: "url('images/animal_1.jpg')"},
    {category: 'Animals', img: "url('images/animal_2.jpg')"},
    {category: 'Animals', img: "url('images/animal_3.jpg')"},
    {category: 'Animals', img: "url('images/animal_4.jpg')"},
    {category: 'Animals', img: "url('images/animal_5.jpg')"}
];

const transport = [
    {category: 'Transport', img: "url('images/transport_1.jpg')"},
    {category: 'Transport', img: "url('images/transport_2.jpg')"},
    {category: 'Transport', img: "url('images/transport_3.jpg')"},
    {category: 'Transport', img: "url('images/transport_4.jpg')"},
    {category: 'Transport', img: "url('images/transport_5.jpg')"}
];

const people = [
    {category: 'People', img: "url('images/person_1.jpg')"},
    {category: 'People', img: "url('images/person_2.jpg')"},
    {category: 'People', img: "url('images/person_3.jpg')"},
    {category: 'People', img: "url('images/person_4.jpg')"},
    {category: 'People', img: "url('images/person_5.jpg')"}
];

const clothing = [
    {category: 'Clothing', img: "url('images/clothing_1.jpg')"},
    {category: 'Clothing', img: "url('images/clothing_2.jpg')"},
    {category: 'Clothing', img: "url('images/clothing_3.jpg')"},
    {category: 'Clothing', img: "url('images/clothing_4.jpg')"},
    {category: 'Clothing', img: "url('images/clothing_5.jpg')"}
];

const food = [
    {category: 'Food', img: "url('images/food_1.jpg')"},
    {category: 'Food', img: "url('images/food_2.jpg')"},
    {category: 'Food', img: "url('images/food_3.jpg')"},
    {category: 'Food', img: "url('images/food_4.jpg')"},
    {category: 'Food', img: "url('images/food_5.jpg')"}
];

const shapes = [
    {category: 'House', img: "url('images/house_1.jpg')"},
    {category: 'House', img: "url('images/house_2.jpg')"},
    {category: 'House', img: "url('images/house_3.jpg')"},
    {category: 'House', img: "url('images/house_4.jpg')"},
    {category: 'House', img: "url('images/house_5.jpg')"}
]


const gridClasses = ['.one', '.two', '.three', '.four', '.five', '.six', '.seven','.eight']

let allCategories = [animals, transport, people, clothing, food, shapes];

const refreshBtn = document.querySelector('button');
const squares = document.querySelectorAll('.square');
const submitAnswerBtn = document.querySelector('.submit_answer_btn');


const selectTargetCategory = () => {

   const randomCatIdx = Math.floor(Math.random() * allCategories.length);

   const targetCategory = allCategories[randomCatIdx]

   return targetCategory;
};

let targetCategory = selectTargetCategory();

const selectRemainingCategories = () => {

    const remainingCategories = [];

    // console.log(targetCategory)

    allCategories.forEach(cat => {
        if (cat !== targetCategory) {
            remainingCategories.push(cat);
        }
    });

    return remainingCategories;

};

let remainingCategories = selectRemainingCategories();

const defineTargetPositions = () => {

    const targetPositions = [];

    for (let i = 0; i < 3; i++) {

        const randomGridClassIndex = Math.floor(Math.random() * gridClasses.length);

        if (!targetPositions.includes(gridClasses[randomGridClassIndex])) {

            targetPositions.push(gridClasses[randomGridClassIndex]);

        } else {

            i--;
        }  
       
    };

    return targetPositions;

};

let targetPositions = defineTargetPositions();



const assignTargetImages = () => {

    let uniqueTargetImgs = [];

    for (let i = 0; i < 3; i++) {
        
        const randomImgIdx = Math.floor(Math.random() * targetCategory.length);

        if (!uniqueTargetImgs.includes(randomImgIdx)) {

            uniqueTargetImgs.push(randomImgIdx);

            document.querySelector(targetPositions[i]).style.backgroundImage = targetCategory[randomImgIdx].img

        } else {

            i--;

        }
    };

};

// assignTargetImages();

const selectRemainingImages = () => {

    const remainingImages = [];

    remainingCategories.forEach(cat => {

        const randomImgIdx = Math.floor(Math.random() * remainingCategories.length);


        remainingImages.push(cat[randomImgIdx]);

    });
     
    return remainingImages;
}


let remainingImages = selectRemainingImages();



const defineRemainingPositions = () => {

    const remainingPositions = [];

    gridClasses.forEach(gridClass => {
        if (!targetPositions.includes(gridClass)) {
            remainingPositions.push(gridClass);
        }
    });

    return remainingPositions;
}

let remainingPositions = defineRemainingPositions();



const assignRemainingImages = () => {

    remainingPositions.forEach((position, i) => {
        document.querySelector(position).style.backgroundImage = remainingImages[i].img;
    });

}

const theCorrectAnswers = [];

const refreshPage = () => {

    squares.forEach(square => {
        square.classList.remove('clicked');
    })

    targetCategory = selectTargetCategory();
    remainingCategories = selectRemainingCategories();
    targetPositions = defineTargetPositions();
    assignTargetImages(); 
    remainingImages = selectRemainingImages();
    remainingPositions = defineRemainingPositions();
    assignRemainingImages();

    theCorrectAnswers.push(targetPositions);
    
}








refreshBtn.addEventListener('click', refreshPage);

//Darken and add class of clicked toclicked square
squares.forEach(square => {
    square.addEventListener('click', function(e) {
        e.target.classList.toggle('clicked')
    });
});


const submitAnswer = () => {

    const answers = []

    squares.forEach(square => {

        let selectedSquares = square.className.split(/\s+/).length;
        let theCorrectLengthForASelectedSquare = 3;
        let selectedSquareClass = square.className.split(/\s+/)[1]

        if (selectedSquares === theCorrectLengthForASelectedSquare) {
            answers.push('.' + selectedSquareClass);
        }
    });
    const currentCorrectAnswer = theCorrectAnswers[theCorrectAnswers.length - 1];

    console.log(currentCorrectAnswer.sort())
    console.log(answers.sort())

    if (currentCorrectAnswer.sort().join() === answers.sort().join()) {
        console.log("YAY!")
    }

};

submitAnswerBtn.addEventListener('click', submitAnswer);


// assignRemainingImages();

console.log(targetCategory[0].category);