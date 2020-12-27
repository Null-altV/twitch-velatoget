'use strict';

const TWITCH_USER = 'YOUR-CHANNEL-NAME-HERE';

const container = document.querySelector(".container");
const egg = document.querySelector(".image");

class Queue {
    items   = [];
    enqueue = (item) => this.items.unshift(item);
    dequeue = () => this.items.pop();
    isempty = () => this.items.length === 0;
    size    = () => this.items.length;
}

const queue = new Queue();

ComfyJS.onChat = ( user, message, flags, self, extra ) => {
    if (message) {
        queue.enqueue(`${user} : ${message}`);
        showMessage();
    }
}

ComfyJS.Init(TWITCH_USER);

let isActive = false;
function showMessage() {
    if (isActive === false && !queue.isempty()) {
        isActive = true;
        container.classList.add("animation");
        egg.classList.add("move");
        container.innerHTML = queue.dequeue();
    }
}

function endHandler() {
    container.classList.remove("animation");
    void container.offsetWidth; // Hacky and necessary solution for animation reset
    egg.classList.remove("move");
    void egg.offsetWidth; // Hacky and necessary solution for animation reset
    container.innerHTML = null;
    isActive = false;
    showMessage();
}

container.addEventListener("animationend", endHandler);