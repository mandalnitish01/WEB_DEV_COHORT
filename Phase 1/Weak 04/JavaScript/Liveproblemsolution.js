//create an array contaning diff type of tea.
const arr = ["Green tea", "Orange" , "black tea" , "orange"]
console.log(arr)

//add new tea in the exiating array 

arr.puch("New tead added")

//remove any tea from the list of an array
const index = arr.indexOf("Green tea") //if green tea is not avaliable then it return -1;
console.log(index)
if(index > -1){
    arr.splice(index, 1)
}
// herbel tea is not caffinated

// filter the list to only include tea that contain the cafffeen
arr.filter()