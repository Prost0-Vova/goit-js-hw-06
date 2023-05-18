const images = [
  {
    height: 320,
    width: 500,
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    height: 320,
    width: 500,
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    height: 320,
    width: 500,
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector('.gallery')
const makeGalleryCard = ({
  url,
  alt,
  width,
  height,
}) => `<li class="gallery-item">
<a href="#">
<img src="${url}" alt="${alt}" width="${width}" height="${height}">
</a>

</li>`;

const galleryCardsList = images.map((el) =>
  makeGalleryCard(el));

galleryList.insertAdjacentHTML("afterbegin",
  galleryCardsList.join(''));