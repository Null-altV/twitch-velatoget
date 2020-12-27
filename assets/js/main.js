'use strict';

class Queue {
    items = [];
    enqueue = (item) => this.items.unshift(item);
    dequeue = () => this.items.pop();
    isempty = () => this.items.length === 0;
    size = () => this.items.length;
}

const queue = new Queue()

const container = document.querySelector(".container");

ComfyJS.onChat = ( user, message, flags, self, extra ) => {
    if (message) {
        queue.enqueue(message);
        showMessage();
    }
}

let active = false;

function showMessage() {
    if (active === false && !queue.isempty()) {
        active = true;
        container.classList.add("animation");
        container.innerHTML = queue.dequeue();
    }
}

function endHandler() {
    container.classList.remove("animation");
    void container.offsetWidth; // HACKYYY AND NECESSARY X D
    container.innerHTML = null;
    active = false;
    showMessage();
}

container.addEventListener("animationend", endHandler);

ComfyJS.Init ( "nullfromdiscord" );
