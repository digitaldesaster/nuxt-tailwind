<template>
    <main id="main">
        <div id="chat_messages" class="ml-2 mr-2 mt-3 mb-2 md:ml-16 md:mr-16 md:mt-6 overflow-auto flex flex-col">
            <div v-for="(message, index) in messages" :key="index" class="flex space-x-4 mb-6">
                <div
                    class="flex justify-center items-center w-10 h-10 bg-gray-500 text-white rounded-full flex-shrink-0">
                    {{ message.role.substring(0, 1).toUpperCase() }} <!-- Displays the first letter of the role -->
                </div>
                <div class="message content bg-gray-300 p-3 rounded-md flex-grow">
                    {{ message.content }}
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { useState } from '#app';

// Access the global 'messages' state managed by useState
const messages = useState('messages', () => [
  { role: "system", content: "Du bist ein hilfreicher Assistent" }
]);

// Function to clear messages if needed in this component
function clearMessages() {
  messages.value = [];
}
</script>
