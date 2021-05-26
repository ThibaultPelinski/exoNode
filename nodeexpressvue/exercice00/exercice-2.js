let result = 0, count = 0

const randomNb = (int) => {
      return int * Math.ceil(Math.random() * 100)
}


const repMultiplication =  setInterval( () => {
    result += randomNb(Math.ceil(Math.random() * 100))
    count ++
    console.log(count," ",result)
    if (count == 10) {
      clearInterval(repMultiplication)
    }
  }, 500)