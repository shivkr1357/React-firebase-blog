export const reactQuestions = [
  {
    id: 1,
    que: "What is React?",
    ans: "It is an open source project released in 2013 by Meta (formerly Known as Facebook), for building user interfaces (UI). It is based on declarative programming principles, and using components as main entities.",
  },
  {
    id: 2,
    que: "What is JSX?",
    ans: "This is an extension for React, which changes syntax to create React elements, which contains both JavaScript b and elements markup for HTML at the same time.",
  },
  {
    id: 3,
    que: "Why can't browsers read JSX?",
    ans: "It can't read JSX because this is a specific form of b which is not fully clear JavaScript or HTML and browsers don't have engines to read it. To make this b understandable for browsers it must be converted with special tools like Babel.",
  },
];
export const nodeQuestions = [
  {
    id: 1,
    que: "What is npm?",
    ans: "This is a packages manager used in the Node.js environment. As a rule this software is installed on the user's PC together with other parts of Node.js.",
  },
  {
    id: 2,
    que: "Is it free to use Node.js?",
    ans: "Yes, it's a free and open-source project available on Github.",
  },
  {
    id: 3,
    que: "What differences are between Angular.js and Node.js?",
    ans: "Node is the environment which requires installation, while Angular is the framework which can be added by stroke in code. That's why Angular is used mostly in front-end and web-apps development, while Node is better for back-end and hard-weight applications. And as Angular is the framework it uses only JavaScript, while Node has components written on C++ together with C and JavaScript.",
  },
  {
    id: 4,
    que: " What are the advantages and disadvantages of using Node.js?",
    ans: "Among Node.js advantages most valuable are: easy scalability, comfortable environment for full stack development and active community support. In technical aspects worth mentioning event-based model, asynchronous requests handling and built-in JSON support. <br> As key disadvantages of Node.js community describes: bad optimization for heavy tasks, frequent changes into actual API, problems with documentation and things called <b>callback hell</b> which appear as result of asynchronous execution nature.",
  },
  {
    id: 5,
    que: "How to work with directories in the Node.js?",
    ans: "Module <b>fs</b> which realize interaction in Node.js allow sync and async operations with folders. To create and delete files in synchronous mode there are <b>fs.mkdirSync()</b> and <b>fs.unlinkSync()</b> methods, while in async these can be done with <b>fs.mkdir() </b> and <b>fs.unlink() </b> . To get a list of files in a folder can be used synchronous method <b>fs.readdirSync()</b> or asynchronous method <b>fs.readdir()</b>.",
  },
];
export const jsQuestions = [
  {
    id: 1,
    que: "What is JavaScript?",
    ans: "JavaScript is a scripting language used mostly in web programming. It is based on an object-oriented model and available in all modern browsers so it's a cross-platform language too. Mostly JavaScript is realized as part of HTML, where it can change itself and other elements of HTML scripts.",
  },
  {
    id: 2,
    que: "What are the differences between JavaScript and Java?",
    ans: "JavaScript isn't strongly typeed and requires additional integration in HTML to be executed, while Java supports multi-threading, and requires JDK installation to make it usable.",
  },
  {
    id: 3,
    que: " What data types are there in JavaScript?",
    ans: "There are two groups of data types in JavaScript: Primitive and Non-Primitive. The first group includes <b> String </b>,<b> Boolean </b>,<b> Number </b>, <b> BigInt </b>, <b> Null </b>, <b> undefined </b> and <b> Symbol </b>. The non-primitive data type is the Object.",
  },
];
