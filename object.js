// let obj ={
//     "name":"Deepak",
//     "age":24
// }
// console.log(obj.age);

// let obj1 ={
//     name:"pooja",
//     age:24
// };
// let document1 ={
//     "querySelector":function(){
//         console.log("hello");
//     }
// }

// document1.querySelector();


let objec =[
    {
        "id":1,
        "img":"Banner.png",
        "name":"pooja",
        "course":"python",
        "mobileno":255366523525,
    },
    {
        "id":2,
        "img":"Banner-2.png",
        "name":"deepak",
        "course":"java",
        "mobileno":25585523525,
    }
];
// console.log(object1[0].mobileno);
// console.log(object1[1].name)

let selecttable = document.querySelector('#output');

selecttable.innerHTML =objec.map((e)=>
`<tr>
<td>${e.id}</td>
<td><img width="100" src="${e.img}"></td>
<td>${e.name}</td>
<td>${e.course}</td>
<td>${e.mobileno}</td>
</tr>`
).join (" ")




// let obj = [
//     {
//         "id":1,
//         "img":"Banner.png",
//         "name":"vikas",
//         "course":"mern",
//         "mobno":1234567890,
//     },
//     {
//         "id":1,
//         "img":"google.png",
//         "name":"vr",
//         "course":"mern",
//         "mobno":1345678921, 
//     }
// ];

// // console.log(obj[0].mobno)
// // console.log(obj[1].course) 

// let selecttable = document.querySelector('#output');

// selecttable.innerHTML = obj.map((e)=>`
//     <tr> 
//     <td>${e.id}</td>
//     <td><img width="100" src="${e.img}"></td>
//     <td>${e.name}</td>
//     <td>${e.course}</td>
//     <td>${e.mobno}</td>
//     </tr>
// `).join(" ")
