import words from "./wordList.json";
import {useEffect, useState} from "react";
import "./App.css";
import {HangmanDrawing} from "./HangmanDrawing.tsx";
import {HangmanWord} from "./HangmanWord.tsx";
import {Keyboard} from "./Keyboard.tsx";

function App() {
    const [wordToGuess, setWordToGuess] = useState(() => {
        return words[Math.floor(Math.random() * words.length)];
    });

    const [guessedLetters, setGuessLetters] = useState<string[]>([]);

    const incorrectLetters = guessedLetters.filter(
        letter => !wordToGuess.includes(letter)
    );

    const isLoser = incorrectLetters.length >= 6;
    const isWinner = wordToGuess.split("").every(letter =>
    guessedLetters.includes(letter));

    const addGuessedLetter = (letter: string) => {
        setGuessLetters((prev) => {
            if (prev.includes(letter) || isLoser || isWinner) {
                return prev;
            }
            return [...prev, letter];
        });
    };

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key;
            if (!key.match(/^[a-z]$/)){
                return;
            }

            e.preventDefault();
            addGuessedLetter(key);
        }

        document.addEventListener("keypress", handler);

        return () => {
            document.removeEventListener("keypress", handler);
        }
    }, [isWinner, isLoser]);

    return (
        <div className="App">
            <div className="result">
                {isWinner && "Winner!"}
                {isLoser && "Loser!"}
            </div>
            <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
            <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
            <div className="displayKeyBoard">
                <Keyboard activeLetters={guessedLetters.filter(letter =>
                wordToGuess.includes(letter))}
                          inactiveLetters={incorrectLetters}
                          addGuessedLetter={addGuessedLetter}
                          disabled={isWinner || isLoser}
                />
            </div>
        </div>
    )
}

export default App
