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
  {
    id: 4,
    que: " What is Redux? ",
    ans: "It is an open-source JavaScript library which is often used with React and other libraries. It improves basic state management and keeps them in storage, which allows to easily check and debug UI elements' behavior.",
  },
  {
    id: 5,
    que: "How is React different from Angular?",
    ans: "React is the JavaScript library, while Angular is the framework which has a more complex structure. Angular has a lot of instruments for all steps of front-end development and uses TypeScript as the main language. React can be used only for UI components development and primarily use JSX in code.",
  },
  {
    id: 6,
    que: " What are props in React?",
    ans: "In React props are the arguments which we send to React components. The most similar thing like this is the function arguments in clear JavaScript. Their main characteristic is immutable - once set they can't be changed. Also they can be used both in functional and in class components.",
  },
  {
    id: 7,
    que: " What is a state in React?",
    ans: "It is part of a component which contains data or information about it. It can be changed dynamically and every change will cause component re-render. States can store properties but are available to use only in class components.",
  },
  {
    id: 8,
    que: "What is an event in React?",
    ans: "React has its own alternatives for DOM events. They mean and do the same as the original but their syntax uses the camel case instead lower case in DOM. One important difference is that in React we pass as an event handler a function instead of a string in DOM.",
  },
  {
    id: 9,
    que: "How to write comments in React?",
    ans: "As in JavaScript React supports one-line comments with slashes (//) before string. Also it support multi-line comments which starts from slash plus star sign (/*) and star plus sign (*/) combination at the end.",
  },
  {
    id: 10,
    que: "What are the components in React?",
    ans: "It is the basic structure in React, like classes in JavaScript.",
  },
  {
    id: 11,
    que: "Does React use HTML?",
    ans: "React doesn't use clear HTML but supports most of its functions and syntax, which must be realized via JSX.",
  },
  {
    id: 12,
    que: "What's the difference between Real DOM and Virtual DOM?",
    ans: "Real DOM is the object of a document with all content and dependencies. In React for each Real DOM is available Virtual DOM, which realizes its light-weight copy as it doesn't take a part in drawing documents. So it's faster to call and edit Virtual DOM then edit Real DOM while viewing it on the screen.",
  },
  {
    id: 13,
    que: "What are Synthetic events in React?",
    ans: "These are the events which are cross-browser and used to initiate events in browsers according to DOM. As some events which realize the same action, may have different names in different browsers, React allows to create events which will be versatile for all browsers. These events are called Synthetic events. Examples of Synthetic events: <b>onClick </b>,<b> onChange </b>etc.",
  },
  {
    id: 14,
    que: "What is the use of render() in React?",
    ans: "The <b>ReactDOM.render()</b> is the function which accepts HTML code and HTML element as arguments. After execution it creates code which shows how the received HTML code will look in the HTML element and save it in the separated HTML file located in the 'public' folder of the React project.",
  },
  {
    id: 15,
    que: "How is React different from React Native?",
    ans: "React is the JavaScript library which is oriented on creating UI parts of websites, using a DOM compatible approach. Instead of this React Native is the framework for developing cross-platform apps, especially for mobile platforms. It is also based on JavaScript and even has something like React library in structure but also it supports code integration on some other languages. Also it may require integration with SDK for target mobile platforms, like Android Studio.   ",
  },
  {
    id: 16,
    que: "What are the refs in React?",
    ans: "It is a React function which provides access to DOM nodes and React elements. They allow directly changing child objects or their values without using props. They are created by <b>React.createRef()</b> function and compatible with DOM nodes and class components only.",
  },
  {
    id: 17,
    que: "How to update the state of a component in React?",
    ans: "By scheduling and updating a component's state with <b>setState() </b> inside the function.",
  },
  {
    id: 18,
    que: "What's the difference between states and props in ReactJS?",
    ans: "They both can store data, but only states can accept changes in data and contain the opponent - props. Properties can be used in functional components that are unavailable for states. States updates directly, while props by parent component.",
  },
  {
    id: 19,
    que: "What are the Advantages of React JS?",
    ans: "React is optimized for fast website rendering and well configured for SEO, both these facts are big advantages as it improves search indexations. Despite this using components as a key and reusable entities together with their declarative changing their data makes it very easy to use.",
  },
  {
    id: 20,
    que: "What are the drawbacks of React?",
    ans: "This is a very large library with fast-changeable, and as a result difficult documentation. Instead of this, this library requires a lot of additional knowledge for normal integration of React in the development process. Also some developers think that JSX is also disadvantageous as it is very specific in using.",
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
  {
    id: 5,
    que: "How to work with files in in Node.js?",
    ans: "In Node.js input/output operations are realized in the fs module, which support synchronous and asynchronous operations. Key commands for sync interaction with files:<br> <b>fs.writeFileSync(file, data, option) </b> - create 'file' with 'data' <br> <b>fs.unlinkSync (path) </b> - delete file located on 'path'<br><b>fs.readFileSync (path, option) </b> - open and read file on 'path'<br> Key commands for async interaction with files:<br> <b>fs.writeFile(file, data, options, callback)</b> - creation 'file' with 'name'<br> <b>fs.unlink(path, callback)</b> - file deletion located on 'path' <br> <b>fs.readFile(path, option)</b> - open and read file on 'path'",
  },
  {
    id: 6,
    que: "What are the streams in Node.js?",
    ans: "Streams in Node.js are used for sequential reading and writing data in files. It is most usable for working with large files, as streams don't open the whole file, which is good for device memory usage. Instead of this, it reads (or writes) files step-by-step according to part of the file requested by the developer.",
  },
  {
    id: 7,
    que: "What is callback hell in Node.js?",
    ans: "As Node.js supports asynchronous operations, there can appear issues with callbacks execution orders. Developers who use complex callbacks must predict how to detect and avoid situations when script launches an <b>async </b> callback which requires data from other callbacks which doesn't finished execution yet.",
  },
  {
    id: 8,
    que: "What is the difference between dependencies and devDependencies in Node.js?",
    ans: "Both are a kind of package used for development. Packages required for application working after release must be installed as a - 'dependencies', while packages required only for development or testing as a - 'devDependencies'. The last one wouldn't be included in the product release.",
  },
  {
    id: 9,
    que: "How are 'Child Threads' handled in Node.js?",
    ans: "Child threads in Node.js can be handled with <b>clild_process</b> and <b>worker_threads </b> modules. The first one allows creating a child process inside the node, while the <b> worker_threads</b> can be used for parallel threads organization.",
  },
  {
    id: 10,
    que: " Is Node a single threaded application?",
    ans: "Yes, because it was developed for asynchronous operations, which as expected doesn't require multiple threads.",
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
  {
    id: 4,
    que: "What is the global variable?",
    ans: "It is the variable with global scope, so it is available from any part of the script.",
  },
  {
    id: 5,
    que: "What problems are associated with global variables?",
    ans: "Global variables stay in memory all time, have lower protection as inside the functions and may have conflicts with local variables with the same name.",
  },
  {
    id: 6,
    que: "What is the 'null' in JavaScript?",
    ans: "The JS script returns 'null' if the requested value is 'empty'. It may happen when you try to request a deleted element of the script or when a variable value was assigned with null to check it for changes during the script execution. <br><b>let a = null </b> <br> <b> console.log(a) </b> <br> <b> Output : null </b>",
  },
  {
    id: 7,
    que: "What is the 'undefined' in JavaScript?",
    ans: "The 'undefined' may be returned when you request a declared variable without any assigned value.<br><b>let a; </b> <br> <b> console.log(a) </b> <br> <b> Output : undefined </b>",
  },
  {
    id: 8,
    que: "What is the 'NaN' in JavaScript?",
    ans: "It's a bool property which shows that object is 'Not-a-Number' or vice versa. <br> <b>console.log(isNaN('Character')); </b> <br><b>//Output: </b> <br><b>true</b><br><b>console.log(isNaN('10'));</b><br><b>//Output:</b> <br><b>false</b>",
  },
  {
    id: 9,
    que: "What is the Array in JavaScript?",
    ans: "It is the kind of Object type which contains values placed in specified by user order and has special functions and properties to work with contained data.",
  },
  {
    id: 10,
    que: "What are the objects in JavaScript?",
    ans: "It is the basic entity of JavaScript with its own properties and their values. How to declare object: <br> <b> let obj = { x: 10, y: 20, z: 30 }; </b>",
  },
  {
    id: 11,
    que: "What is the scope in JavaScript?",
    ans: "The scope is the area of the accessibility, and visibility of variables. The main principle of this concept is that if a variable is not in the scope, it cannot be referenced by functions and variables outside this scope.<br><br> <b>let variableWithGlobalScope;</b><br><b> function someFunc(){</b><br><b>let variableWithLocalScope; </b> <br><b>} </b>",
  },
  {
    id: 12,
    que: "What is the callback?",
    ans: "It's a function which passed as an argument in another function, so they must be executed one-by-one.",
  },
  {
    id: 13,
    que: "What is an arrow function?",
    ans: "It is a short variant of declaring functions, using the '=>' symbol.<br><br> <b>const numbers = [63, 15, 92, 20, 44];</b><br><b>console.log(numbers.filter((number) => number === 20));</b><br><b>//Output: </b><br><b>20</b>",
  },
  {
    id: 14,
    que: "What is the difference between '=' '==' and '===' operators?",
    ans: "Their difference is in the used comparison algorithm.  The <b>'==='</b> compares values and data types, so it is more strict, while the <b>'=='</b> does the type conversion of operands before comparison. The '=' is the assignment operator used to assign value to variables.",
  },
  {
    id: 15,
    que: "What are the properties in JavaScript?",
    ans: "It is the basic characteristic of an object, generated by default and based on the structure of property name plus property value. For example all strings in JavaScript always have the property 'length', which describes how many characters in it.<br> <b> let testString = 'Random text';</b><br><b>console.log(testString.length); //length is the property of any string</b><br><b>//Output </b><br><b>11</b>",
  },
  {
    id: 16,
    que: "What are the attributes in JavaScript?",
    ans: "Attributes is the part of DOM, which describes additional attributes of the element as key-value pairs.<br> <b>let someAttribute = document.getElementById('My Login').attributes.length;</b>",
  },
  {
    id: 17,
    que: "What JS frameworks are in use?",
    ans: "The most known are: React (used for UI) Although React js not a framework, it is a library which is used to develope the UI of application based on component , Angular (web dev), Vue (UI), JQuery (client-side web dev), Ember (scalable web apps) and Node (server-side web dev). Node is also not the framework, it is a runtime environment for building server side web applications .",
  },
];
