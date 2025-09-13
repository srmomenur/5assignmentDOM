1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Here are some differece between them -
getElementById("id") → gets one element with that specific id.
getElementsByClassName("class") → gets all elements with that class, returns a collection (like an array).
querySelector("selector") → gets the first element that matches any CSS selector.
querySelectorAll("selector") → gets all elements that match the selector, returns a NodeList.


2. How do you **create and insert a new element into the DOM**?
    First, create an element:
    let div = document.createElement("div");

    Add content or classes if needed:

    div.textContent = "Hello World!";
    div.className = "myDiv";

    Then insert it somewhere in the DOM:

    document.body.appendChild(div); 


3. What is **Event Bubbling** and how does it work?

Event Bubbling is the default way events work in JavaScript. When an event happens on a child element, it bubbles up through its parent elements all the way to the root (document).

Example: Clicking a <button> inside a <div> will first trigger the button’s click, then the div’s click, then the body’s click, and so on.

How Event Bubbling Works
The event happens on the target element first.
Then it moves up to the parent, triggering any listeners on that parent.
It keeps going up the DOM tree until it reaches the document.

4. What is **Event Delegation** in JavaScript? Why is it useful?


Event Delegation is when you put one event listener on a parent element instead of adding listeners to every child element. The parent catches events from its children using event.target.

Example: Instead of adding a click listener to every button, just add one to their parent container.

Why it’s useful:
Saves memory because there are fewer listeners.
Works for new elements added later without needing extra listeners.


5. What is the difference between **preventDefault() and stopPropagation()** methods?
preventDefault() → stops the default browser action (like form submission or link navigation).
stopPropagation() → stops the event from bubbling up or triggering parent handlers.