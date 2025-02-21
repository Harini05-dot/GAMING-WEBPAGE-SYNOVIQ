document.getElementById('send-btn').addEventListener('click', function () {
    let userInput = document.getElementById('user-input').value;
  
    if (userInput.trim() === '') return; // Don't send empty messages
  
    // Display user's message
    let userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('message', 'user-message');
    userMessageDiv.innerHTML = `<p>${userInput}</p>`;
    document.getElementById('chatbot-body').appendChild(userMessageDiv);
  
    // Clear the input field
    document.getElementById('user-input').value = '';
  
    // Scroll to the bottom of the chatbot
    document.getElementById('chatbot-body').scrollTop = document.getElementById('chatbot-body').scrollHeight;
  
    // Chatbot's response (you can add more responses here)
    setTimeout(function () {
      let botResponseDiv = document.createElement('div');
      botResponseDiv.classList.add('message', 'bot-message');
      let botResponse = getBotResponse(userInput);
      botResponseDiv.innerHTML = `<p>${botResponse}</p>`;
      document.getElementById('chatbot-body').appendChild(botResponseDiv);
  
      // Scroll to the bottom again after the bot's response
      document.getElementById('chatbot-body').scrollTop = document.getElementById('chatbot-body').scrollHeight;
    }, 1000); // Slight delay before bot responds
  });
  
  // Basic predefined responses (you can extend this logic)
  function getBotResponse(input) {
    input = input.toLowerCase();
  
    if (input.includes('hello')) {
      return "Hi! How can I assist you today?";
    } else if (input.includes('help')) {
      return "Sure! How can I help you? Please provide more details.";
    } else if (input.includes('services')) {
      return "We offer innovative gaming and software solutions. Check out our services page!";
    } else {
      return "Sorry, I didn't quite get that. Could you please rephrase?";
    }
  }
  