import words from "./wordList.json";
import {useState} from "react";
import "./App.css";
import {HangmanDrawing} from "./HangmanDrawing.tsx";
import {HangmanWord} from "./HangmanWord.tsx";
import {Keyboard} from "./Keyboard.tsx";

function App() {
    const [wordToGuest, setWordToGuess] = useState(() => {
        return words[Math.floor(Math.random() * words.length)];
    });

    const [guessedLetters, setGuessLetters] = useState<string[]>([]);

    return (
        <div className="App">
            <div className="result">
                Win
            </div>
            <HangmanDrawing />
            <HangmanWord />
            <Keyboard />
        </div>
    )
}

export default App
