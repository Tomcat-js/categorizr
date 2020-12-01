const animals = [
    {category: 'Animals', img: 'animalPic1'},
    {category: 'Animals', img: 'animalPic2'},
    {category: 'Animals', img: 'animalPic3'},
    {category: 'Animals', img: 'animalPic4'},
    {category: 'Animals', img: 'animalPic5'}
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


const gridClasses = ['.one', '.two', '.three', '.four', '.five', '.six', '.seven','.eight']

let allCategories = [animals, transport, people, clothing];



const selectTargetCategory = () => {

   const randomCatIdx = Math.floor(Math.random() * allCategories.length);

   const targetCategory = allCategories[randomCatIdx]

   return targetCategory;
};

const targetCategory = selectTargetCategory();

const selectRemainingCategories = () => {

    const remainingCategories = [];

    console.log(targetCategory)

    allCategories.forEach(cat => {
        if (cat !== targetCategory) {
            remainingCategories.push(cat);
        }
    });

    return remainingCategories;

};

console.log(selectRemainingCategories())

const defineTargetPositions = () => {

    const targetLocations = [];

    for (let i = 0; i < 3; i++) {

        const randomGridClassIndex = Math.floor(Math.random() * gridClasses.length);

        if (!targetLocations.includes(gridClasses[randomGridClassIndex])) {

            targetLocations.push(gridClasses[randomGridClassIndex]);

        } else {

            i--;
        }  
       
    };

    return targetLocations;

};

const targetPositions = defineTargetPositions();



const assignTargetImages = () => {

    let uniqueTargetImgs = [];

    for (let i = 0; i < 3; i++) {
        
        const randomImgIdx = Math.floor(Math.random() * targetCategory.length);

        if (!uniqueTargetImgs.includes(randomImgIdx)) {

            uniqueTargetImgs.push(randomImgIdx);

            document.querySelector(targetPositions[i]).textContent = targetCategory[randomImgIdx].img

        } else {

            i--;

        }
    };

};

assignTargetImages();


