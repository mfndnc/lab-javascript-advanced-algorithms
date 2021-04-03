const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector(
  '#queue-container .warning-bottom'
);
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  queueInput.value = '';
};

const generateListQueue = () => {
  warningTopQueue.style.display = 'none';
  warningBottomQueue.style.display = 'none';

  queueUL.innerHTML = '';

  let dataArr = queue.display();
  dataArr.forEach((item) => {
    let li = document.createElement('li');
    li.className = 'active';
    li.innerText = item;
    queueUL.appendChild(li);
  });
  for (let i = dataArr.length; i < queue.MAX_SIZE; i++) {
    let li = document.createElement('li');
    li.className = 'inactive';
    queueUL.appendChild(li);
  }
};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'underflow') {
    warningBottomQueue.innerText = 'underflow';
    warningBottomQueue.style.display = 'block';
  } else if (type === 'overflow') {
    warningTopQueue.innerText = 'overflow';
    warningTopQueue.style.display = 'block';
  }
};

const addToQueue = () => {
  let entry = queue.enqueue(queueInput.value);
  clearQueueInput();
  if (typeof entry == 'string') {
    generateWarningQueue('overflow');
  } else {
    generateListQueue();
  }
};

const removeFromQueue = () => {
  if (queue.isEmpty()) {
    generateWarningQueue('underflow');
  } else {
    queue.dequeue();
    generateListQueue();
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
