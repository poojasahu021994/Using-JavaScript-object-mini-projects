let arrofobj = [
    {
        "id":1,
        "imageurl":"https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
        "pname":"shoes",
        "bname":"nike",
        "pprice":999
    }
    ,

    {
        "id":2,
        "imageurl":"https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
        "pname":"shoes",
        "bname":"nike",
        "pprice":999
    }
    ,

    {
        "id":3,
        "imageurl":"https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
        "pname":"shoes",
        "bname":"nike",
        "pprice":999
    }

    ,
    {
        "id":4,
        "imageurl":"https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
        "pname":"shoes",
        "bname":"nike",
        "pprice":999
    }
    ,

    {
        "id":5,
        "imageurl":"https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
        "pname":"shoes",
        "bname":"nike",
        "pprice":999
    }
    ,

    {
        "id":6,
        "imageurl":"https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
        "pname":"shoes",
        "bname":"nike",
        "pprice":999
    }
    ,

    {
        "id":7,
        "imageurl":"https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
        "pname":"shoes",
        "bname":"nike",
        "pprice":999
    }
    ,

    {
        "id":8,
        "imageurl":"https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
        "pname":"shoes",
        "bname":"nike",
        "pprice":999
    }
    ,

    {
        "id":9,
        "imageurl":"https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
        "pname":"shoes",
        "bname":"nike",
        "pprice":999
    }
    ,

    {
        "id":10,
        "imageurl":"https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
        "pname":"shoes",
        "bname":"nike",
        "pprice":999
    }
]

let seletdiv = document.querySelector('#ans');
seletdiv.innerHTML =arrofobj.map((card)=>` 
<div style="margin:20px; box-shadow:0px 0px 10px 2px black">
<img width ="200px" height="200px" src="${card.imageurl}" alt="">
    <div>${card.pname} </div>
    <div>${card.bname} </div>
    <div>${card.pprice} </div>
    <div>add to card </div>
    <div>by now</div>

    </div>`).join(" ") 
