const animals = [
    {category: 'Animals', img: "url('images/animal_1.jpg')"},
    {category: 'Animals', img: "url('images/animal_2.jpg')"},
    {category: 'Animals', img: "url('images/animal_3.jpg')"},
    {category: 'Animals', img: "url('images/animal_4.jpg')"},
    {category: 'Animals', img: "url('images/animal_5.jpg')"}
];

const transport = [
    {category: 'Transport', img: 'transportPic1'},
    {category: 'Transport', img: 'transportPic2'},
    {category: 'Transport', img: 'transportPic3'},
    {category: 'Transport', img: 'transportPic4'},
    {category: 'Transport', img: 'transportPic5'}
];

const people = [
    {category: 'People', img: 'personPic1'},
    {category: 'People', img: 'personPic2'},
    {category: 'People', img: 'personPic3'},
    {category: 'People', img: 'personPic4'},
    {category: 'People', img: 'personPic5'}
];

const clothing = [
    {category: 'Clothing', img: 'clothinPic1'},
    {category: 'Clothing', img: 'clothinPic2'},
    {category: 'Clothing', img: 'clothinPic3'},
    {category: 'Clothing', img: 'clothinPic4'},
    {category: 'Clothing', img: 'clothinPic5'}
];

const food = [
    {category: 'Food', img: 'foodPic1'},
    {category: 'Food', img: 'foodPic2'},
    {category: 'Food', img: 'foodPic3'},
    {category: 'Food', img: 'foodPic4'},
    {category: 'Food', img: 'foodPic5'}
];

const shapes = [
    {category: 'Shapes', img: 'shapePic1'},
    {category: 'Shapes', img: 'shapePic2'},
    {category: 'Shapes', img: 'shapePic3'},
    {category: 'Shapes', img: 'shapePic4'},
    {category: 'Shapes', img: 'shapePic5'}
]


const gridClasses = ['.one', '.two', '.three', '.four', '.five', '.six', '.seven','.eight']

let allCategories = [animals, transport, people, clothing, food, shapes];



const selectTargetCategory = () => {

   const randomCatIdx = Math.floor(Math.random() * allCategories.length);

   const targetCategory = allCategories[randomCatIdx]

   return targetCategory;
};

const targetCategory = selectTargetCategory();

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

const remainingCategories = selectRemainingCategories();

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

const targetPositions = defineTargetPositions();



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

assignTargetImages();

const selectRemainingImages = () => {

    const remainingImages = [];

    remainingCategories.forEach(cat => {

        const randomImgIdx = Math.floor(Math.random() * remainingCategories.length);


        remainingImages.push(cat[randomImgIdx]);

    });
     
    return remainingImages;
}


const remainingImages = selectRemainingImages();

// console.log(remainingImages)

const defineRemainingPositions = () => {

    const remainingPositions = [];

    gridClasses.forEach(gridClass => {
        if (!targetPositions.includes(gridClass)) {
            remainingPositions.push(gridClass);
        }
    });

    return remainingPositions;
}

const remainingPositions = defineRemainingPositions();



const assignRemainingImages = () => {

    remainingPositions.forEach((position, i) => {
        document.querySelector(position).style.backgroundImage = remainingImages[i].img;
    });

}

assignRemainingImages();

console.log(targetCategory[0].category)