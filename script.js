// ================= FILTER =================

const filterButtons = document.querySelectorAll(".categories button");
const cards = document.querySelectorAll(".gallery .card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        cards.forEach(card => {

            if (filter === "all" || card.classList.contains(filter)) {

                card.style.display = "block";

                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "scale(1)";
                }, 50);

            } else {

                card.style.opacity = "0";
                card.style.transform = "scale(.9)";

                setTimeout(() => {
                    card.style.display = "none";
                }, 250);

            }

        });

    });

});


// ================= LIGHTBOX =================

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxCategory = document.getElementById("lightbox-category");
const lightboxDescription = document.getElementById("lightbox-description");

const images = document.querySelectorAll(".gallery img");

const closeBtn = document.querySelector(".close-lightbox");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

function showImage(index){

    const img = images[index];

    lightboxImg.style.opacity = "0";

    setTimeout(()=>{

        lightboxImg.src = img.src;

        lightboxTitle.textContent = img.dataset.title;

        lightboxCategory.textContent = img.dataset.category;

        lightboxDescription.textContent = img.dataset.description;

        lightboxImg.style.opacity = "1";

    },200);

}

images.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        currentIndex = index;

        showImage(currentIndex);

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});

closeBtn.addEventListener("click",()=>{

    lightbox.classList.remove("active");

    document.body.style.overflow = "auto";

});

nextBtn.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex >= images.length){

        currentIndex = 0;

    }

    showImage(currentIndex);

});

prevBtn.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = images.length - 1;

    }

    showImage(currentIndex);

});

document.addEventListener("keydown",(e)=>{
    lightbox.addEventListener("click",(e)=>{

    if(e.target === lightbox){

        lightbox.classList.remove("active");

        document.body.style.overflow="auto";

    }

});

    if(!lightbox.classList.contains("active")) return;

    if(e.key === "Escape"){

        lightbox.classList.remove("active");

        document.body.style.overflow = "auto";

    }

    if(e.key === "ArrowRight"){

        nextBtn.click();

    }

    if(e.key === "ArrowLeft"){

        prevBtn.click();

    }

});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const overlay = document.getElementById("overlay");

function toggleMenu() {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
}

hamburger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

// Optional: close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", toggleMenu);
});