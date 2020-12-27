'use strict';

const TWITCH_USER = 'YOUR-CHANNEL-NAME-HERE';

const container = document.querySelector(".container");

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
    // Storing custom rewards instead
    
    // if (flags.customReward && extra.customRewardId === "60db8d01-96b2-4d08-9fcf-9b01eb2eefee") { 
    //     queue.enqueue(`Thank you ${user}!`);
    //     showMessage();
    // }
}

ComfyJS.Init(TWITCH_USER);

let isActive = false;
function showMessage() {
    if (isActive === false && !queue.isempty()) {
        isActive = true;
        container.classList.add("animation");
        container.innerHTML = queue.dequeue();
    }
}

function endHandler() {
    container.classList.remove("animation");
    void container.offsetWidth; // Hacky and necessary solution for animation reset
    container.innerHTML = null;
    isActive = false;
    showMessage();
}

container.addEventListener("animationend", endHandler);