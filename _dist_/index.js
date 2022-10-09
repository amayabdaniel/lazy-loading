import { registerImage } from "./lazy.js";
const maximum = 100
const minimum = 1
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

const createImageNode = () => {
    const container = document.createElement("div");
    container.className = "p-4";
    const imageNode = document.createElement('img');
    imageNode.className = "mx-auto";
    imageNode.width = "320";
    imageNode.dataset.src = `https://source.unsplash.com/collection/${random()}`;

    container.appendChild(imageNode);

    return container;
};

const newImage = createImageNode();
const mountNode = document.getElementById('imagenes')
const addButton = document.querySelector('button');

const addImage = () => {
  const newImage = createImageNode();
  mountNode.append(newImage);
  registerImage(newImage);
};


addButton.addEventListener('click', addImage);
