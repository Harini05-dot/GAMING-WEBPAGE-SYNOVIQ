// chatbot.js

document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === "") {
        return; // Do not process empty input
    }

    // Show user message
    displayMessage(userInput, 'user');

    // Clear input field
    document.getElementById('user-input').value = "";

    // Simple chatbot responses
    setTimeout(function() {
        const botResponse = getBotResponse(userInput);
        displayMessage(botResponse, 'bot');
    }, 500);
});

function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.textContent = message;
    
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to latest message
}

function getBotResponse(userInput) {
    // Simple predefined responses based on user input
    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.includes("hello")) {
        return "Hi there! How can I assist you today?";
    } else if (lowerInput.includes("how are you")) {
        return "I'm just a bot, but I'm doing fine! How about you?";
    } else if (lowerInput.includes("help")) {
        return "Sure! What do you need help with?";
    } else {
        return "I'm sorry, I didn't quite understand that. Can you try again?";
    }
}
