// composables/useMessages.ts
import { useState } from '#app';

interface Message {
    role: string;
    content: string;
}

export default function useMessages() {
    // Initialize or retrieve the existing 'messages' state
    const messages = useState<Message[]>('messages', () => []);

    function addMessage(message: Message) {
        messages.value.push(message);
    }

    function clearMessages() {
        messages.value = [];
    }

    return {
        messages,
        addMessage,
        clearMessages
    };
}
