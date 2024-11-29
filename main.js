const arr = ['Emir', 'azim', 'Fayzulloh', 'Abdulloh', 'Sobir', 'sirjiddin']
const fivePass = []
const fiveFall = []

arr.forEach(e => {
    
    if ( e.length >= 5) {
        fivePass.push(e)
    } else {
        fiveFall.push(e)
    }
});

console.log(arr, 'berilgan')
console.log(fivePass, '5dan balan')
console.log(fiveFall, '5dan pas')