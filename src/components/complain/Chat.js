import React from 'react'

function Chat() {
  return (
    <div class="flex-1 p:2 border-l-2 mx-5 pl-5 border-neutral-700 justiwhiteen flex flex-col h-[80vh]">
      {/* <div class="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
          <div class="relative flex items-center space-x-4">
            <div class="relative">
                <span class="absolute text-green-500 right-0 bottom-0">
                  <svg width="20" height="20">
                      <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                  </svg>
                </span>
            <img src="./assets/a.jpg" alt="" class="w-10 sm:w-16 h-10 sm:h-16 rounded-full"/>
            </div>
            <div class="flex flex-col leading-tight">
                <div class="text-2xl mt-1 flex items-center">
                  <span class="text-gray-700 mr-3">Anderson Vanhron</span>
                </div>
                <span class="text-lg text-white">Junior Developer</span>
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <button type="button" class="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-neutral-700 focuswhite-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </button>
            <button type="button" class="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-neutral-700 focuswhite-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
            </button>
            <button type="button" class="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-neutral-700 focuswhite-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
            </button>
          </div>
      </div> */}
      <div id="messages" class="flex flex-col space-y-4 overflow-y-scroll">
        <div class="chat-message">
          <div class="flex items-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div>
                <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-neutral-700 text-white">Can be verified on any platform using docker</span>
              </div>
            </div>
            <img
              src="./assets/a.jpg"
              alt="My profile"
              class="w-6 h-6 rounded-full order-1"
            />
          </div>
        </div>
        <div class="chat-message">
          <div class="flex items-end justify-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
              <div>
                <span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-neutral-900 text-white ">Your error message says permission denied, npm global installs must be given root privileges.</span>
              </div>
            </div>
          </div>
        </div>
        <div class="chat-message">
          <div class="flex items-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div>
                <span class="px-4 py-2 rounded-lg inline-block bg-neutral-700 text-white">Command was run with root privileges. I'm sure about that.</span>
              </div>
              <div>
                <span class="px-4 py-2 rounded-lg inline-block bg-neutral-700 text-white">I've update the description so it's more obviously now</span>
              </div>
              <div>
                <span class="px-4 py-2 rounded-lg inline-block bg-neutral-700 text-white">FYI https://askubuntu.com/a/700266/510172</span>
              </div>
              <div>
                <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-neutral-700 text-white">
                  Check the line above (it ends with a # so, I'm running it as root )<pre># npm install -g @vue/devtools</pre>
                </span>
              </div>
            </div>
            <img
              src="./assets/a.jpg"
              alt="My profile"
              class="w-6 h-6 rounded-full order-1"
            />
          </div>
        </div>
        <div class="chat-message">
          <div class="flex items-end justify-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
              <div>
                <span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-neutral-900 text-white ">Any updates on this issue? I'm getting the same error when trying to install devtools. Thanks</span>
              </div>
            </div>
          </div>
        </div>
        <div class="chat-message">
          <div class="flex items-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div>
                <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-neutral-700 text-white">Thanks for your message David. I thought I'm alone with this issue. Please, 👍 the issue to support it :</span>
              </div>
            </div>
            <img
              src="./assets/a.jpg"
              alt="My profile"
              class="w-6 h-6 rounded-full order-1"
            />
          </div>
        </div>
        <div class="chat-message">
          <div class="flex items-end justify-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
              <div>
                <span class="px-4 py-2 rounded-lg inline-block bg-neutral-900 text-white ">Are you using sudo?</span>
              </div>
              <div>
                <span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-neutral-900 text-white ">Run this command sudo chown -R `whoami` /Users//.npm-global/ then install the package globally without using sudo</span>
              </div>
            </div>
          </div>
        </div>
        <div class="chat-message">
          <div class="flex items-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div>
                <span class="px-4 py-2 rounded-lg inline-block bg-neutral-700 text-white">It seems like you are from Mac OS world. There is no /Users/ folder on linux 😄</span>
              </div>
              <div>
                <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-neutral-700 text-white">I have no issue with any other packages installed with root permission globally.</span>
              </div>
            </div>
            <img
              src="./assets/a.jpg"
              alt="My profile"
              class="w-6 h-6 rounded-full order-1"
            />
          </div>
        </div>
        <div class="chat-message">
          <div class="flex items-end justify-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
              <div>
                <span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-neutral-900 text-white ">yes, I have a mac. I never had issues with root permission as well, but this helped me to solve the problem</span>
              </div>
            </div>
          </div>
        </div>
        <div class="chat-message">
          <div class="flex items-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div>
                <span class="px-4 py-2 rounded-lg inline-block bg-neutral-700 text-white">I get the same error on Arch Linux (also with sudo)</span>
              </div>
              <div>
                <span class="px-4 py-2 rounded-lg inline-block bg-neutral-700 text-white">I also have this issue, Here is what I was doing until now: #1076</span>
              </div>
              <div>
                <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-neutral-700 text-white">even i am facing</span>
              </div>
            </div>
            <img
              src="./assets/a.jpg"
              alt="My profile"
              class="w-6 h-6 rounded-full order-1"
            />
          </div>
        </div>
      </div>
      <div class="border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
        <div class="relative flex">
          <span class="absolute inset-y-0 flex items-center">
            <button type="button" class="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-neutral-700 focuswhite-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
              </svg>
            </button>
          </span>
          <input type="text" placeholder="Write your message!" class="w-full focus:outline-none focus:placeholder-gray-400 text-white placeholder-white pl-12 bg-neutral-800 rounded-md py-3" />
          <div class="absolute right-0 items-center inset-y-0 hidden sm:flex">
            <button type="button" class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-neutral-700 focuswhite-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
              </svg>
            </button>
            <button type="button" class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-neutral-700 focuswhite-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-white">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                ></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </button>
            <button type="button" class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-neutral-700 focuswhite-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </button>
            <button type="button" class="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
              <span class="font-bold">Send</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-6 w-6 ml-2 transform rotate-90">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat