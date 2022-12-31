function getElement(selection) {
    const element = document.querySelector(selection);
    if (element) {
        return element
    }
    throw new Error(`Please check ${selection} selector, which is not available`);
}

function Counter(element, count) {
    this.counter = element;
    this.value = count;
    this.resetBtn = element.querySelector('.reset');
    this.decreaseBtn = element.querySelector('.decrease');
    this.increaseBtn = element.querySelector('.increase');
    this.valueDom = element.querySelector('.value');
    this.valueDom.textContent = this.value;
    // bind this to all function
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);

    this.increaseBtn.addEventListener('click', this.increase);
    this.decreaseBtn.addEventListener('click', this.decrease);
    this.resetBtn.addEventListener('click', this.reset);
}

Counter.prototype.increase = function() {
    this.value++;
    this.valueDom.textContent = this.value;
}

Counter.prototype.decrease = function() {
    this.value--;
    this.valueDom.textContent = this.value;
}

Counter.prototype.reset = function() {
    this.value = 0;
    this.valueDom.textContent = this.value;
}


