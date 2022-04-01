const questionList = [
    {
      questionText: "1. What is the HTML element which contains the JavaScript?",
      answerOptions: [
        { text: "js", correct: false },
        { text: 'script', correct: true },
        { text: "src", correct: false },
        { text: "a href", correct: false },
      ],
    },
  
    {
      questionText:
        "2. What is the correct JavaScript syntax to update the text to 'Hello World' <p id='demo'></p>?",
      answerOptions: [
        {
          text: "#demo.innerHTML = 'Hello World",
          correct: false,
        },
  
        {
          text: "document.getElementByName('p').innerHTML = 'Hello World",
          correct: false,
        },
        {
          text: "document.getElement('p').innerHTML = 'Hello World'",
          correct: false,
        },
  
        {
          text: "document.getElementById('demo').innerHTML = 'Hello World'",
          correct: true,
        },
      ],
    },
  
    {
      questionText: "3. Where is the correct place in the HTML to put the JS?",
      answerOptions: [
        { text: "both the <head> and the <body> section", correct: false },
  
        {
          text: "the <head>",
          correct: false,
        },
  
        {
          text: "the <body>",
          correct: true,
        },
  
        { text: "either the <head> or the <body> is fine", correct: false },
      ],
    },
  
    {
      questionText:
        "4. What is the correct syntax for adding an external script to your HTML?",
      answerOptions: [
        { text: "<script src='script.js'>", correct: true },
        { text: "<script name='script.js'>", correct: false },
        { text: "<script href='script.js'>", correct: false },
      ],
    },
  
    {
      questionText:
        "5. True or False: an external JS file must contain the script tag.",
      answerOptions: [
        { text: "true", correct: false },
        { text: "false", correct: true },
      ],
    },
  
    {
      questionText: "6. how do you create a JS alert that says 'Hello World",
      answerOptions: [
        { text: "msgBox('Hello World)", correct: false },
        { text: "alertBox('Hello World')", correct: false },
        { text: "alert('Hello World)", correct: true },
        { text: "msg('Hello World')", correct: false },
      ],
    },
  
    {
      questionText: "7. How do you create a JS function? ",
      answerOptions: [
        { text: "function myFunction()", correct: true },
        { text: "function:myFunction()", correct: false },
        { text: "function = myFunction()", correct: false },
      ],
    },
  
    {
      questionText: "8. How do you call a function named myFunction?",
      answerOptions: [
        { text: "call myfunction", correct: false },
        { text: "myFunction()", correct: true },
        { text: "call function myFunction()", correct: false },
      ],
    },
  
    {
      questionText: "9. What is the proper syntax for an if statement?",
      answerOptions: [
        { text: "if i = 5 then", correct: false },
        { text: "if i == 5 then", correct: false },
        { text: "if i=5", correct: false },
        { text: "if(i==5)", correct: true },
      ],
    },
  
    {
      questionText: "10. How do you add a comment to JS?",
      answerOptions: [
        { text: "<!--This is a comment-->", correct: false },
        { text: "'This is a comment'", correct: false },
        { text: "//This is a comment", correct: true },
      ],
    },
  ];
  