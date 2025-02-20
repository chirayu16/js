//how to create a new promise ??
const myPromise = new Promise((resolve, reject) => {
    let success = true;

    setTimeout(() => {
        if(success) {
            resolve("Data fetched Succesfully");
        }
        else {
            reject("Error fetching")
        }
    }, 3000);
});
console.log(myPromise); //Promise { <pending> }

//consuming a promise using then ??

myPromise
.then(response => {
    console.log(response); // Runs if resolved
})
.catch(error => {
    console.log(error); // Runs if rejected
})
.finally(() => {
    console.log("Execution Completed") // Runs in both cases
})

// Data feteched Succesfully
// Execution 

// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(response => of(response.json()))
// .then(data => console.log(data))
// .catch(error => console.error("Error fetching data", error));


fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response) => {
    let data =  response.json();
    console.log('Data: ', data);
    return data;
})
.catch(error => console.error("Error fetching data", error));

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response) => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error fetching data", error));


