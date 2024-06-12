// Start Nav
// Catch elements
let icon = document.querySelector("header nav i"),
  navUl = document.querySelector("header nav ul");

// Handle the icon click event
icon.addEventListener("click", function () {
  // Check if the ul has the appear class or not
  if (navUl.classList.contains("appear")) {
    // Remove the appear class
    navUl.classList.remove("appear");
  } else {
    // Add the appear class
    navUl.classList.add("appear");
  }
});
// End Nav

// Start The Landing Section
// Catch elements
let landingImgs = document.querySelectorAll(".landing .imgs img"),
  landingBullets = document.querySelectorAll(".landing .bullets li"),
  arrows = document.querySelectorAll(".landing .arrow"),
  currentPhoto = 1;

// Get the next photo
arrows[1].onclick = nextPhoto;
// Get the previous photo
arrows[0].onclick = previousPhoto;
// Handle the bullets
landingBullets.forEach((bullet, index) => {
  bullet.onclick = () => {
    // Make the current photo equal the current index of the bullet
    currentPhoto = index;
    removeAllAndActiveTheCurrent(landingBullets, currentPhoto);
    removeAllAndActiveTheCurrent(landingImgs, currentPhoto);
  };
});

// Remove and add function
function removeAllAndActiveTheCurrent(arr, index) {
  // Remove all active class from the elements
  arr.forEach((ele) => {
    ele.classList.remove("active");
  });
  // add the active class to the current element
  arr[index].classList.add("active");
}

// Next photo function
function nextPhoto() {
  // Check if the current photo is the last
  if (currentPhoto !== 2) {
    // Increament the current photo
    currentPhoto++;
    removeAllAndActiveTheCurrent(landingBullets, currentPhoto);
    removeAllAndActiveTheCurrent(landingImgs, currentPhoto);
  }
}

// Previous photo function
function previousPhoto() {
  // Check if the current photo is the first
  if (currentPhoto !== 0) {
    // Decreament the current photo
    currentPhoto--;
    removeAllAndActiveTheCurrent(landingBullets, currentPhoto);
    removeAllAndActiveTheCurrent(landingImgs, currentPhoto);
  }
}

// End The Landing Section
// Start The Portfolio Section
// Catch elements
let categoryTab = document.querySelectorAll(".portfolio .shuffle li"),
  boxs = document.querySelectorAll(".portfolio .box"),
  moreBtn = document.querySelector(".portfolio .more"),
  moreLatest = document.querySelectorAll(".moreLatest");

// Handle the categorys
categoryTab.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    removeAllAndActiveTheCurrent(categoryTab, index);
    // Display all boxs to none
    boxs.forEach((box) => {
      box.style.display = "none";
    });
    // Get the selected boxs
    let currentboxs = document.querySelectorAll(`.${tab.dataset.cat}`);
    // Display the selected box to block
    currentboxs.forEach((box) => {
      box.style.display = "block";
    });
    if (currentboxs.length <= 7) {
      moreBtn.style.display = "none";
    } else {
      moreBtn.style.display = "block";
      moreLatest.forEach((con) => {
        con.style.display = "none";
      });
    }
  });
});

// Handle More Button
moreBtn.addEventListener("click", function () {
  // Check if the more button content is more or no
  if (moreBtn.textContent.toLowerCase() === "more") {
    // Appear more content
    moreLatest.forEach((con) => {
      con.style.display = "block";
    });
    // Change the more button content
    moreBtn.textContent = "less";
  } else {
    // Disappear more content
    moreLatest.forEach((con) => {
      con.style.display = "none";
    });
    moreBtn.textContent = "more";
  }
});
// End The Portfolio Section
// Start The Testmonial Section
// Catch elements
let portfolioBullets = document.querySelectorAll(".our-skills .bullets li"),
  allContent = document.querySelectorAll(".our-skills .contentContainer .con");

// Handle the bullets and the content
portfolioBullets.forEach((bullet, index) => {
  bullet.addEventListener("click", function () {
    removeAllAndActiveTheCurrent(portfolioBullets, index);
    removeAllAndActiveTheCurrent(allContent, index);
  });
});
// End The Testmonial Section
