console.log("Hola Mundo");
/*
a = document.getElementById("contenedor");
for (let index = 0; index < 5; index++) {
  if (index == 0) {
    a.innerHTML = index;
  } else {
    a.innerHTML = a.innerHTML + "," + index;
  }
}
*/
const messageTypes = { LEFT: 'left', RIGHT: 'right', LOGIN: 'login' };

//chat stuff
const chatWindow = document.getElementById('chat');
const messagesList = document.getElementById('messagesList');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');

//login Stuff
let username = '';
const userNameInput = document.getElementById('userNameInput');
const loginBtn = document.getElementById('loginBtn');
const loginWindow = document.getElementById('login');

const messages = [
  {
    author: 'Byron',
    date: '11/11/2011',
    content: 'cool message',
    type: messageTypes.RIGHT
  },
  {
    author: 'Sofi',
    date: '11/11/2011',
    content: 'No tiene contenido',
    type: messageTypes.LEFT
  },
  {
    author: 'login',
    date: '11/11/2011',
    content: 'cool message',
    type: messageTypes.LOGIN
  }
]; //{authoer, date, content, type}


//take in message object, and return corresponding message HTML
const createMessageHTML = (message) => {
  if (message.type === messageTypes.LOGIN) {
    return `
      <p class="secondary-text text-center mb-2">${message.author} has joined the chat...</p>
    `;
  }

  return `
    <div class="message ${
      message.type === messageTypes.LEFT
        ? 'message-left'
        : 'message-right'
      }">
      <div id="message-details" class="flex">
        <p class="message-author">${
          message.author === messageTypes.RIGHT ? '' : message.author  
        }</p>
        <p class="message-date">${message.date}</p>
      </div>
      <p class="message-content">${message.content}</p>
    </div>
  `
};

const displayMessages = () => {
  const messagesHTML = messages
    .map((message) => createMessageHTML(message))
    .join('');
  messagesList.innerHTML = messagesHTML;

};

displayMessages();
