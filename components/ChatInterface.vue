<template>
  <div id="chat_ui" class="fixed bottom-0 w-full h-40 bg-gray-200 rounded-xl ">
    <div
      class="flex flex-col absolute bottom-0 left-0 right-0 h-32 ml-2 mr-2 mb-2 md:ml-12 md:mr-12 md:mb-4 rounded-xl bg-white">

      <div class="p-3 pr-16 overflow-hidden">

        <!-- Removed h-full class and kept rows="3" -->

        <textarea v-model="newMessage" placeholder="Type your message and press Command or Strg + Enter" rows="3"
          class="border-none ring-0 w-full rounded-lg focus:outline-none focus:ring-0 resize-none"></textarea>

      </div>
      <label id="selected_model" class="w-fit h-4 ml-6 mb-4 text-gray-400"></label>




      <div class="absolute bottom-0 right-0 p-3 flex flex-col gap-2">

        <button @click="reset" class="bg-slate-800 hover:bg-slate-600 text-white font-extralight p-2.5 rounded">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>



        </button>

        <button @click="sendMessage" class="bg-slate-800 hover:bg-slate-600 text-white font-extralight p-2.5 rounded">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">

            <path stroke-linecap="round" stroke-linejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />

          </svg>

        </button>
        <button class="hidden bg-red-500 hover:bg-red-400 text-white font-extralight p-2.5 rounded">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z" />
          </svg>

        </button>


      </div>

    </div>
  </div>
</template>

<script setup>

const messages = useState('messages', () => []);
const newMessage = ref('');

function addMessage(message) {
  messages.value.push(message);
  console.log("Current Messages:", JSON.stringify(messages.value)); // Logs the current state of messages
}

function clearMessages() {
  messages.value = [];
  console.log('Messages cleared'); // Logs when messages are cleared
}

const sendMessage = async () => {
  console.log('Send_Message clicked!');
  if (newMessage.value.trim()) {
    addMessage({ role: "user", content: newMessage.value });
    newMessage.value = ''; // Clear the input after sending
    const response = await $fetch('/api/chat', {
      method: 'post',
      body: {
        "messages": messages.value
      }

    })

    addMessage({ role: "system", content: response });
    
  }
};


const reset = () => {
  clearMessages();
  console.log('Reset clicked!');
};
</script>