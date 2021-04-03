const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector(
  '#stack-container .warning-bottom'
);
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();

const clearStackInput = () => {
  stackInput.value = '';
};

const renderListStack = () => {
  warningTopStack.style.display = 'none';
  warningBottomStack.style.display = 'none';

  stackList.innerHTML = '';

  let dataArr = newStack.display();
  dataArr.forEach((item) => {
    let li = document.createElement('li');
    li.className = 'active';
    li.innerText = item;
    stackList.appendChild(li);
  });
  for (let i = dataArr.length; i < newStack.MAX_SIZE; i++) {
    let li = document.createElement('li');
    li.className = 'inactive';
    stackList.appendChild(li);
  }
};

renderListStack();

const generateWarningStack = (type) => {
  if (type === 'underflow') {
    warningBottomStack.innerText = 'underflow';
    warningBottomStack.style.display = 'block';
  } else if (type === 'overflow') {
    warningTopStack.innerText = 'overflow';
    warningTopStack.style.display = 'block';
  }
};

const addToStack = () => {
  let entry = newStack.push(stackInput.value);
  clearStackInput();
  if (typeof entry == 'string') {
    generateWarningStack('overflow');
  } else {
    renderListStack();
  }
};

const removeFromStack = () => {
  if (newStack.isEmpty()) {
    generateWarningStack('underflow');
  } else {
    newStack.pop();
    renderListStack();
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
