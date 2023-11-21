// script.js
document.addEventListener("DOMContentLoaded", function () {
    const sendMessageButton = document.getElementById("sendMessageButton");
    const messageInput = document.getElementById("messageInput");
    const usernameInput = document.getElementById("usernameInput");
    const chatList = document.querySelector(".chat");

    sendMessageButton.addEventListener("click", function () {
        const username = usernameInput.value;
        const message = messageInput.value;

        if (username && message) {
            const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            const newMessage = `
                <li class="self">
                    <div class="avatar"><img src="https://i.imgur.com/HYcn9xO.png" draggable="false"/></div>
                    <div class="msg">
                        <p>${message}</p>
                        <time>${currentTime}</time>
                    </div>
                </li>
            `;

            chatList.innerHTML += newMessage;
            messageInput.value = "";
        }
    });
});
