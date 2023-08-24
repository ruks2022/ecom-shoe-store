const wrapper = document.querySelector(".sliderWrapper");
const menuItems =  document.querySelectorAll(".menuItem");

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quas rem blanditiis ipsam vero earum aliquam ad labore vitae repudiandae pariatur, nemo debitis mollitia a similique, iure, quis fugit quod!",
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quas rem blanditiis ipsam vero earum aliquam ad labore vitae repudiandae pariatur, nemo debitis mollitia a similique, iure, quis fugit quod!",
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quas rem blanditiis ipsam vero earum aliquam ad labore vitae repudiandae pariatur, nemo debitis mollitia a similique, iure, quis fugit quod!",
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quas rem blanditiis ipsam vero earum aliquam ad labore vitae repudiandae pariatur, nemo debitis mollitia a similique, iure, quis fugit quod!",
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quas rem blanditiis ipsam vero earum aliquam ad labore vitae repudiandae pariatur, nemo debitis mollitia a similique, iure, quis fugit quod!",
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];


let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentproductTitle = document.querySelector(".productTitle");
const currentproductPrice = document.querySelector(".productPrice");
const currentProductDesc = document.querySelector(".productDesc");
const currentproductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelector(".size");


menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index];

        //change of current product
        currentproductTitle.textContent = choosenProduct.title;
        currentproductPrice.textContent = "$" + choosenProduct.price;
        currentProductDesc.textContent = choosenProduct.desc;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assigning new colors
        currentproductColors.forEach((color, index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });

    });
});


//changing img based on color button click
currentproductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

// wrapper.style.transform = "translateX(-400vw)";