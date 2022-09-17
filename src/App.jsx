import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import colors from './js/colors'
import Content from './components/Content'


function App() {

  const getIndex = idx => {
    return Math.floor(Math.random() * idx.length);
  }

  const ramdomElement = quotes[getIndex(quotes)];
  const ramdomColor = colors[getIndex(colors)]; 

  const [r_quote, setQuote] = useState(ramdomElement);
  const [r_color, setColor] = useState(ramdomColor);

  const getAllramdom = () => {
    setQuote(quotes[getIndex(quotes)]);
    setColor(colors[getIndex(colors)]);
  }

  return (
    <div style={{backgroundColor: r_color}} className="App">
      <QuoteBox quote_prop={r_quote} color_prop={r_color} all_again={getAllramdom}/>
    </div>
  )
}

export default App
