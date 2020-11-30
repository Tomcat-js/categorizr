// console.log("category");

const a = ['a1','a2','a3','a4','a5','a6','a7','a8'];
const b = ['b1','b2','b3','b4','b5','b6','b7','b8'];
const c = ['c1','c2','c3','c4','c5','c6','c7','c8'];
const d = ['d1','d2','d3','d4','d5','d6','d7','d8'];
const e = ['e1','e2','e3','e4','e5','e6','e7','e8'];
const f = ['f1','f2','f3','f4','f5','f6','f7','f8'];
const g = ['g1','g2','g3','g4','g5','g6','g7','g8'];

const squareNums = ['.one', '.two', '.three', '.four', '.five', '.six', '.seven','.eight']

const allCategories = [a, b, c, d, e, f, g];


const populateGrid = () => {

    let usedImages = []
    const targetCategoryIdx = Math.floor(Math.random() * allCategories.length);
    const targetCategory = allCategories[targetCategoryIdx];
    // console.log(targetCategoryIdx)
    console.log(targetCategory)
    const remainingCategories = [];

    allCategories.forEach((cat, index)  => {
        if (index !== targetCategoryIdx) {
            remainingCategories.push(cat)
        }
    })

    // console.log(remainingCategories)

    for (let i = 0; i < 3; i++) {
        let randomIdx = Math.floor(Math.random() * 7);

        if (!usedImages.includes(randomIdx)) {
            usedImages.push(randomIdx);
            document.querySelector(squareNums[randomIdx]).innerHTML = targetCategory[randomIdx];        

        } else {
            i--
        }
        
    }
    
    const nonCategoryImages = [];

    remainingCategories.forEach(cat => {
        let randomNonCatIdx = Math.floor(Math.random() * 8);
        nonCategoryImages.push(cat[randomNonCatIdx]);
    })

    console.log(nonCategoryImages)
    // console.log(usedImages)
    

}

populateGrid();