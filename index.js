let numberStyle = document.getElementById("number-style")
let num = 0
function increaseByOne() {
num += 1
numberStyle.textContent = num
}

function increaseByTwo() {
    num += 2
    numberStyle.textContent = num
    }

    function increaseByThree() {
        num += 3
        numberStyle.textContent = num
        }

        let numStyle = document.getElementById("num-style")
        let number = 0
        function increaseByOneE() {
            number += 1
            numStyle.textContent = number
            }

            function increaseByTwoO() {
                number += 2
                numStyle.textContent = number
                }

                function increaseByThreeE() {
                    number += 3
                    numStyle.textContent = number
                    }

function resetBtn() {
    numberStyle.textContent = 0
    num = 0
    numStyle.textContent = 0
    number = 0
}
   

function showFoul(elem) {
    let tmp = elem.textContent
    elem.textContent = "FOUL"
    setTimeout(() => elem.textContent = tmp, 2000)
}

function homeFoul() {
    showFoul(numberStyle)
}

function awayFoul(){
    showFoul(numStyle)
}
















