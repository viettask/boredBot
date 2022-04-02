import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  <div>
        <h1 id="title">🤖 BoredBot 🤖</h1>
        <h4 id="idea">Find something to do</h4>
        
        <button id="bored-bot"></button>

  </div>,
  document.getElementById('root')
);

document.getElementById("bored-bot").addEventListener("click", getIdea)

function getIdea() {
    fetch("https://www.boredapi.com/api/activity")
        .then(res => res.json())
        .then(data => {
            document.body.classList.add("fun")
            document.getElementById("idea").textContent = data.activity
            document.getElementById("title").textContent = "🦾 HappyBot🦿"
        })
}


