<template>
    <main id="main">
        <div id="chat_messages" class="ml-2 mr-2 mt-3 mb-2 md:ml-16 md:mr-16 md:mt-6 overflow-auto flex flex-col">
            <div class="flex space-x-4 mb-6">
                <div class="flex justify-center items-center w-10 h-10 bg-gray-500 text-white rounded-full">
                    B
                </div>
                <div class="message content bg-gray-300 p-3 rounded-md"> Wie kann ich helfen?
                </div>
            </div>
            <div class="flex space-x-4 mb-6">
                <div class="flex justify-center items-center w-10 h-10 bg-gray-500 text-white rounded-full">
                    A
                </div>
                <div class="message content bg-gray-100 p-3 rounded-md"> Wer war Ada Lovelace?
                </div>
            </div>
            <div class="flex space-x-4 mb-6">
                <div
                    class="flex justify-center items-center w-10 h-10 bg-gray-500 text-white rounded-full flex-shrink-0">
                    B
                </div>
                <div id="response" class="message content bg-gray-300 p-3 rounded-md flex-grow">
                </div>
            </div>


        </div>
    </main>
</template>

<script>
</script>
