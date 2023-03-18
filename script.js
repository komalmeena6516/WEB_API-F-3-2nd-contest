// fetch("https://dummyjson.com/posts")
//     .then((res) => res.json())
//     .then((data) => {
//         console.log("this is data", data);
//         const posts = data.posts;
//         const output = posts.map(item => {
//        return `
//        <div class="post-box">
//        <h3>${item.id} : ${item.title} </h3>
//        <p>${item.body}</p>
//        </div>
//        `
//         });
//              document.getElementById("container").innerHTML = `<h2>${output}</h2>`
//     }
//     )

// solving contest ****************************************

const btn = document.getElementById("btn");
btn.addEventListener('click', fetchData);

const container = document.getElementById("container");
// promise=1
function PromiseAPI1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            container.innerHTML = `<h1 class="P-title"> Promise 1 </h1>`
            fetch("https://dummyjson.com/posts")
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    createPromise1_Table(data);
                })

            resolve(true);
        }, 1000);
    })
}
// promise =2
function PromiseAPI2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("p2 i am")
            // container.append(title);
            fetch("https://dummyjson.com/products")
                .then((res) => res.json())
                .then((data) => {
                    createPromise2_table(data);
                    console.log(data)
                })

            resolve(true);
        }, 2000);
    })
}

// /promise=3
function PromiseAPI3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("hello p-3")
            fetch("https://dummyjson.com/todos")
            .then((res) => res.json())
            .then((data) => {
                createPromise3_table(data);
                console.log(data)
            })
            resolve(true);
        }, 3000);
    })
}



// promise chaining
function fetchData() {
    PromiseAPI1().then((res) => {
        PromiseAPI2()
    })
    .then((res) => PromiseAPI3())
    

}

// function for promise 1 to create table
function createPromise1_Table(data) {
    console.log("hello")
    let table = document.createElement('table');
    table.classList = "post-table";
    let thead = document.createElement('thead')
    let th = `<tr> 
         <th> ID </th>
        <th> TITLE </th>
        <th> BODY </th>
   </tr>`;
    thead.innerHTML = th;
    table.append(thead);

    let tbody = document.createElement('tbody');

    let posts = data.posts;
    let out = "";
    for (let post of posts) {
        out += ` <tr> 
              <td>${post.id}</td>
              <td>${post.title}</td>
              <td>${post.body}</td>
    </tr>`
    }
    tbody.innerHTML = out;
    table.append(tbody);
    container.append(table);

}


// function for promise 2 to create table
function createPromise2_table(data){
    // console.log("hello")
    let title = document.createElement('h1');
    title.classList = "P-title"
    title.innerHTML = "Promise 2";
container.append(title);
    let table = document.createElement('table');
    
    table.classList = "post-table";
    let thead = document.createElement('thead')
    let th = `<tr class="table-head"> 
   <th> ID </th>
   <th> TITLE </th>
   <th> DESCRIPTION </th>
   <th> PRICE </th>
   <th> DISCOUNT </th>
   <th> RATE </th>
   <th> STOCK </th>
   <th> THUMBNAIL </th>
   <th> CATEGORY </th>
   <th> IMAGES </th>
   </tr>`;
    thead.innerHTML = th;
    table.append(thead);

    let tbody = document.createElement('tbody');

    let products = data.products;
    let out = "";
    for (let prod of products) {
        out += ` <tr> 
              <td>${prod.id}</td>
              <td>${prod.title}</td>
              <td>${prod.description}</td>
              <td>${prod.price}</td>
              <td>${prod.discountPercentage}</td>
              <td>${prod.rating}</td>
              <td>${prod.stock}</td>
              <td>${prod.thumbnail}</td>
              <td>${prod.category}</td>
              <td>${prod.images}</td>
    </tr>`
    }
    tbody.innerHTML = out;
    table.append(tbody);
    container.append(table);
}

// function for promise 3 to create table
function createPromise3_table(data){
    // console.log("hello")
    let title = document.createElement('h1');
    title.classList = "P-title"
    title.innerHTML = "Promise 3";
container.append(title);
    let table = document.createElement('table');
    
    table.classList = "post-table";
    let thead = document.createElement('thead')
    let th = `<tr class="table-head"> 
   <th> ID </th>
   <th> TODO </th>
   <th> COMPLETED </th>
   <th> USERID </th>
   
   </tr>`;
    thead.innerHTML = th;
    table.append(thead);

    let tbody = document.createElement('tbody');

    let todos = data.todos;
    let out = "";
    for(let todo of todos) {
        out += ` <tr> 
              <td>${todo.id}</td>
              <td>${todo.todo}</td>
              <td>${todo.completed}</td>
              <td>${todo.userId}</td>
              
    </tr>`
    }
    tbody.innerHTML = out;
    table.append(tbody);
    container.append(table);
}