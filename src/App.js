import React from "react";
import "./App.css";

const quotes = require("./quotes.json");
console.log(quotes);


const color = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
  "#94ccb0",
  "#1e1c0e",
  "#ea12c6",
  "#520775",
];

const Quote = () =>{
  return <h1>Random Quote Generator</h1>
} 

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[0].quoteText,
      author: quotes[0].quoteAuthor,
    };
  }

  randomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  shuffleQuotes(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    this.setState({
      quote: generateRandomQuote.quoteText,
      author: generateRandomQuote.quoteAuthor,
    });
    this.shuffleQuotes(quotes);
  };

  
  randomColor() {
    return Math.floor(Math.random() * color.length);
  }

  render() {
    const colors = this.randomColor();
    const colo = color[colors]
    return (
      <div>
        <Quote/>

        <QuoteAndAuthor
          dispalyColor={colo}
          handleClick={this.handleClick}
          {...this.state}
        />
      </div>
    );
  }
}

class QuoteAndAuthor extends React.Component {
  render() {
    const randomColor = this.props.dispalyColor;
    const html = document.documentElement;
    html.style.backgroundColor = randomColor;

    return (
      <div>
        <div id="wrapper">
          <div id="quote-box">
            <div
              className="animate__fadeIn"
              key={Math.random()}
              style={{ color: randomColor }}
            >
              <div className="quote-text ">
                <i class="fa fa-quote-left" aria-hidden="true"></i>
                <span id="text">{this.props.quote}</span>
              </div>

              <div className="quote-author">
                <span id="author">
                  -{this.props.author ? this.props.author : "Unknown"}
                </span>
              </div>
            </div>

            <a
              href={
                "https://twitter.com/intent/tweet?text=" +
                quotes.quoteText +
                " - " +
                quotes.quoteAuthor
              }
              id="tweet-quote"
              target={"_blank"}
              rel={"noopener noreferrer"}
              className="twitter"
              style={{ backgroundColor: randomColor }}
            >
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>

            <button
              className="button"
              id="new-quote"
              style={{ backgroundColor: randomColor }}
              onClick={this.props.handleClick}
            >
              <span id="new">New Quote</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
