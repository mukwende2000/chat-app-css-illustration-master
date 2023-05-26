const input = document.querySelector('.input p')
const typing = document.querySelector('.typing')
const chat = document.querySelector('.chat')

const conversation = [
    {message: `I Just can't believe after all this while, i can't do something as simple as this`, sender: 'walker' },
    {message: `You can't learn by watching tutorials, build projects`, sender: 'client'},
    {message:`Everyone says that, but how can you build something if you have no knowledge how to`, sender: 'walker'},
    {message:`It's not like you have to cram everything in your brain, just grasp a few basics`, sender: 'client'},
    {message:`And try to put it into practice, you will amazed at what you can create`, sender: 'client'},
    {message:`Oh is that so`, sender: 'walker'},
    {message:`yea, as you build stuff, you will realize that you will gather more knowledge by building than by doing anything else`, sender: 'client'},
    {message:`sounds great, let me try then, but what should i build`, sender: 'walker'},
    {message:`check out frontend mentor, they have amazing designs premade to help people become great as developer`, sender: 'client'},
    {message:`And i will suggest you start with a fairly simple one like the 'QR code component' since you are just beginning`, sender: 'client'},
    {message:`Wow thanks a lot for this info, i really need to switch careers, am tired of being a dog walker`, sender: 'walker'},
    {message:`Just put in the work, coding is hard yes, but it get easier the more you do it, just like any other skill `, sender: 'client'},
    {message:`I will do all that you've adviced me to do, but until then, back to business`, sender: 'walker'},
    {message:`Could you send over some pictures of your dog`, sender: 'walker'},
    {message: ['images/dog-image-1.jpg', 'images/dog-image-2.jpg', 'images/dog-image-3.jpg'], sender: 'client'},
    {message:`Here are a few, she's a happy girl`, sender: 'client'},
    {message:`Can you make it`, sender: 'client'},
    {message:`She looks happy, the time we discussed works, how long shall i take her out for`, sender: 'walker'},
    {message:`30 minutes walk $29`, sender: 'walker'},
    {message:`60 minutes walk $49`, sender: 'walker'},
    {message:`I will give you 100 dollars for a 30min walk my friend`, sender: 'client'},
    {message:`wow, really, that is so generous of you, thank you so much`, sender: 'walker'},
    {message:`You are welcome, have a good day`, sender: 'client'},
]

let isTyping = true
let currentElement = 0

function showIsTyping() {
    if(isTyping) {
        typing.classList.remove('hide')
    } else {
        typing.classList.add('hide')
    }
}

function init() {
    setInterval(() => {
        if(currentElement === conversation.length) {
            input.textContent = 'Type a message...'
            return
        } 
    const sender = conversation[currentElement].sender
    const message = conversation[currentElement].message
    if(sender === 'walker') {
        input.textContent = 'Type a message...'
        isTyping = true
        showIsTyping()
    } else {
        isTyping = false
        showIsTyping()
    }
    if(sender === 'client' && !Array.isArray(message)) type(message, 0)

    setTimeout(() => {
        createEl(sender, message)
        currentElement = currentElement + 1
    }, 2500);

   }, 3000);

}

function type(message, char) {
    setTimeout(() => {
        input.textContent = ''
    }, 20);

    setInterval(() => {
        if(char === message.length) {
            input.textContent += message.charAt(char)
        }
        input.textContent += message.charAt(char)
        char++
    }, 20);
}

function createEl(sender, content) {
    const el = document.createElement('div')
    if (Array.isArray(content)) {
        el.className = 'message client images'

        el.innerHTML += `
        <img src="${content[0]}" alt="an image of a dog">
        <img src="${content[1]}" alt="an image of a dog">
        <img src="${content[2]}" alt="an image of a dog">
        `
    } else if(content.includes('$')) {
        el.className = 'payment message'
        el.innerHTML = `
            <div class="checkbox"></div>
            <p>${content.slice(0, content.indexOf('$'))}</p>
            <h3>${content.slice(content.indexOf('$'))}</h3>
        `
    } else {
        el.className = `message ${sender}`
        el.textContent = content
    }
    chat.appendChild(el)
    el.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    })
}
window.addEventListener('DOMContentLoaded', init)
