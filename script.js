function bottlesOfBeer() {

    let numberInput = prompt("Enter the number of beer please : ")
    let numberOfBeer = parseInt(numberInput)
    for (let i = numberOfBeer; i >=0; i--) {
        
        if (i > 2) {
            console.log(`${i} bottles of beer on the wall`)
            console.log(`${i} bottles of beer`)
            console.log(`Take one down and pass it around`)
            console.log(`${i - 1} bottles of beer on the wall`)
            console.log(``)
        }

        if (i == 2) {
            console.log(`${i} bottles of beer on the wall`)
            console.log(`${i} bottles of beer`)
            console.log(`Take one down and pass it around`)
            console.log(`${i - 1} bottle of beer on the wall`)
            console.log(``)
        }
    
        if (i == 1) {
            console.log(`${i} bottle of beer on the wall`)
            console.log(`${i} bottle of beer`)
            console.log(`Take one down and pass it around`)
            console.log(`no bottle of beer on the wall`)
            console.log(``)
        }
    
        if (i == 0) {
            console.log(`no bottle of beer on the wall`)
            console.log(`no bottle of beer`)
        }
    }
}

bottlesOfBeer()