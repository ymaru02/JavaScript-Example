// 3-0
// const title = document.getElementById("title");

// console.dir(title);

// title.innerText = "Got you!";

// console.log(title.id);
// console.log(title.className);

//  3-1
// const hellos = document.getElementsByClassName("hello");

// console.log(hellos);

// 3-2
// const title = document.getElementsByTagName("h1");

// console.log(title);

// const title = document.querySelector(".hello h1");
// const title = document.querySelectorAll(".hello h1");

// console.log(title);

// 3-3
// const title = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//   console.log("title was clicked!");
//   title.innerText = "title was clicked!";
// }

// function handleTitleMouseEnter() {
//   console.log("handle Title Mouse Enter!");
//   title.innerText = "handle Title Mouse Enter!";
// }

// function handleTitleMouseLeave() {
//   console.log("handle Title Mouse Leave");
//   title.innerText = "handle Title Mouse Leave";
// }

// function handleWindowResize() {
//   document.body.style.backgroundColor = "tomato";
// }
// function handleWindowCopy() {
//   alert("copier!");
// }
// function handleWindowOffline() {
//   alert("SOS no Wifi!");
// }
// function handleWindowOnline() {
//   alert("All Gooood!");
// }

// title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseenter", handleTitleMouseEnter);
// title.addEventListener("mouseleave", handleTitleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

// 3-10

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//   // console.log(h1.style.color);
//   // h1.style.color = "blue";
//   // console.log(h1.style.color);

//   const currentColor = h1.style.color;
//   let newColor;
//   if (currentColor === "blue") {
//     newColor = "tomato";
//   } else {
//     newColor = "blue";
//   }
//   h1.style.color = newColor;
// }

// h1.addEventListener("click", handleTitleClick);

// 3 -11
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  // const clickedClass = "clicked";

  // if (h1.className === 'clicked') {
  //   h1.className = ""
  // } else {
  //   h1.className = clickedClass
  // }

  // if (h1.classList.contains(clickedClass){
  //   h1.classList.remove(clickedClass)
  // } else {
  //   h1.classList.add(clickedClass)
  // }

  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
