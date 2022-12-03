const wordCount = () => {
    let inputData = document.querySelector("#textArea").value
    let wordsCount = inputData.split(" ").join("")
    document.querySelector(".output").innerHTML = `The total number of characters you have entered is: ${wordsCount.length}`
 
}