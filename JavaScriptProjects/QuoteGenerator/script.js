window.onload = function () {
  // all your JS code here

let quote=document.querySelector("#quote");
let name=document.querySelector("#name");
let btn=document.querySelector('#changer');

const quotes = [
  { quote: "The only way to do great work is to love what you do.", person: "Steve Jobs" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", person: "Winston Churchill" },
  { quote: "Imagination is more important than knowledge.", person: "Albert Einstein" },
  { quote: "Believe you can and you're halfway there.", person: "Theodore Roosevelt" },
  { quote: "Be the change that you wish to see in the world.", person: "Mahatma Gandhi" },
  { quote: "In the middle of every difficulty lies opportunity.", person: "Albert Einstein" },
  { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", person: "Ralph Waldo Emerson" },
  { quote: "The best way to predict your future is to create it.", person: "Peter Drucker" },
  { quote: "Life is what happens when you're busy making other plans.", person: "John Lennon" },
  { quote: "Happiness is not something ready made. It comes from your own actions.", person: "Dalai Lama" },
  { quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", person: "Albert Einstein" },
  { quote: "To live is the rarest thing in the world. Most people exist, that is all.", person: "Oscar Wilde" },
  { quote: "I have not failed. I've just found 10,000 ways that won't work.", person: "Thomas Edison" },
  { quote: "A day without laughter is a day wasted.", person: "Charlie Chaplin" },
  { quote: "Everything you can imagine is real.", person: "Pablo Picasso" },
  { quote: "Love all, trust a few, do wrong to none.", person: "William Shakespeare" },
  { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", person: "Ralph Waldo Emerson" },
  { quote: "Do one thing every day that scares you.", person: "Eleanor Roosevelt" },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", person: "Eleanor Roosevelt" },
  { quote: "If you judge people, you have no time to love them.", person: "Mother Teresa" },
  { quote: "You only live once, but if you do it right, once is enough.", person: "Mae West" },
  { quote: "The purpose of our lives is to be happy.", person: "Dalai Lama" },
  { quote: "The mind is everything. What you think you become.", person: "Buddha" },
  { quote: "Life is really simple, but we insist on making it complicated.", person: "Confucius" },
  { quote: "Simplicity is the ultimate sophistication.", person: "Leonardo da Vinci" },
  { quote: "The secret of getting ahead is getting started.", person: "Mark Twain" },
  { quote: "Whether you think you can or you think you can’t, you’re right.", person: "Henry Ford" },
  { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", person: "Ralph Waldo Emerson" },
  { quote: "We don’t see things as they are, we see them as we are.", person: "Anaïs Nin" },
  { quote: "A person who never made a mistake never tried anything new.", person: "Albert Einstein" },
  { quote: "To succeed in life, you need two things: ignorance and confidence.", person: "Mark Twain" },
  { quote: "If you're going through hell, keep going.", person: "Winston Churchill" },
  { quote: "Don't cry because it's over, smile because it happened.", person: "Dr. Seuss" },
  { quote: "Turn your wounds into wisdom.", person: "Oprah Winfrey" },
  { quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", person: "Aristotle" },
  { quote: "I think, therefore I am.", person: "René Descartes" },
  { quote: "You must be the change you wish to see in the world.", person: "Mahatma Gandhi" },
  { quote: "It is never too late to be what you might have been.", person: "George Eliot" },
  { quote: "Keep your face always toward the sunshine—and shadows will fall behind you.", person: "Walt Whitman" },
  { quote: "The journey of a thousand miles begins with one step.", person: "Lao Tzu" },
  { quote: "Dream big and dare to fail.", person: "Norman Vaughan" },
  { quote: "Do not take life too seriously. You will never get out of it alive.", person: "Elbert Hubbard" },
  { quote: "You miss 100% of the shots you don't take.", person: "Wayne Gretzky" },
  { quote: "Creativity is intelligence having fun.", person: "Albert Einstein" },
  { quote: "If you tell the truth, you don't have to remember anything.", person: "Mark Twain" },
  { quote: "Act as if what you do makes a difference. It does.", person: "William James" },
  { quote: "Stay hungry, stay foolish.", person: "Steve Jobs" },
  { quote: "An unexamined life is not worth living.", person: "Socrates" },
  { quote: "He who opens a school door, closes a prison.", person: "Victor Hugo" },
  { quote: "Knowing yourself is the beginning of all wisdom.", person: "Aristotle" }
];

    function typewriter(element, text, speed = 30, callback = null) {
  element.innerText = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text[i];
      i++;
      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  }
  type();
}


   function showRandomQuote() {
    const random = Math.floor(Math.random() * quotes.length);
    const fullQuote = `“${quotes[random].quote}”`;
    const author = `— ${quotes[random].person}`;

    name.innerText = ""; // clear author before typing

    typewriter(quote, fullQuote, 30, () => {
      name.innerText = author;
    });
  }


  // Show a random quote on page load
  showRandomQuote();

  // Change quote on button click
  btn.addEventListener("click", showRandomQuote);
};