import galleryItems from './gallery-items.js';

const galleryNode = document.querySelector('.js-gallery');
const lightBoxNode = document.querySelector('.js-lightbox');

const boxImageNode = document.querySelector('.lightbox__image');
const closeBtn = document.querySelector('.lightbox__button');
const closeOverlay = document.querySelector('.lightbox__overlay');

const elements = galleryItems.map((image, idx) => 
    
 ` <li class="gallery__item">
        <a class="gallery__link" href = "${image.original}"
        >
            <img class="gallery__image"
                src = "${image.preview}"       
                data-source="${image.original}"
                data-idx="${idx}"
                alt="${image.description}"
            />        
        </a>
    </li>
 `
    
    
    
    // const liNode = document.createElement("li");
    
    // liNode.classList.add('gallery__item');
    
    // const aNode = document.createElement("a");
    
    // aNode.classList.add('gallery__link');
    // aNode.href = original;
       
    // const imgNode = document.createElement("img");
    // <img data-index = "${idx}" />
    // imgNode.classList.add('gallery__image');
    // imgNode.src = original;
    // imgNode.alt = description;
    // imgNode.dataset.source = preview;
    
    // imgNode.dataset.index = idx;
    // aNode.appendChild(imgNode);
    // liNode.append(aNode);
    // return liNode;
    
    
    

).join("");

galleryNode.insertAdjacentHTML("beforeend", elements);

let indexImg = 0;


galleryNode.addEventListener("click", (evt) => {
    
    evt.preventDefault();
    if (evt.target.tagName !== "IMG")
    return;
    lightBoxNode.classList.add("is-open");
      
    isOpen();
    

    resetImg(evt.target.dataset.source, evt.target.alt)

    indexImg = +evt.target.dataset.idx;

    return boxImageNode;
});

closeBtn.addEventListener("click", ((evt) => {
    
    if (evt.target.tagName === "BUTTON") {
        closeItems();
    }

    return;
}));

closeOverlay.addEventListener("click", ((evt) => {
    
    if (evt.target.tagName === "DIV") {
        closeItems();
    }
    
    return;

}));

function closeItems() {
    
    lightBoxNode.classList.remove("is-open");
    resetImg();
};

function resetImg(src = "", alt = "") {
    boxImageNode.src = src;
    boxImageNode.alt = alt;  
};

function isOpen() {
    window.addEventListener("keydown", ((evt) => {
    
    
    const ESC_KEY_CODE = "Escape";
    const arrowRight = "ArrowRight";
    const arrowLeft = "ArrowLeft";
    
    
    
    if (evt.code === arrowRight) {
        indexImg += 1;
        if (indexImg > galleryItems.length -1 ) {
            indexImg = 0;
        };
        
    };
    if (evt.code === arrowLeft) {
        indexImg -= 1;
        if (indexImg < 0) {
            indexImg = galleryItems.length -1;
        };
        
        };
    if (evt.code === ESC_KEY_CODE) {
    closeItems();

    }
 
    


    resetImg(galleryItems[indexImg].original, galleryItems[indexImg].description);

    return;
}))
};




