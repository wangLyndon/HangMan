import "./HangmanWord.css";

type HangmanWordProps = {
    reveal?: boolean;
    guessedLetters: string[],
    wordToGuess: string,
}

export const HangmanWord = ({guessedLetters, wordToGuess, reveal = false}: HangmanWordProps) => {

    return (
        <div className="word">
            {wordToGuess.split("").map((letter, index) => (
                <span className="baseLetter" key={index}>
                    <span style={{
                        visibility: guessedLetters.includes(letter) || reveal ?
                            "visible" : "hidden",
                        color: !guessedLetters.includes(letter) && reveal ? "red" : "black",
                    }}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    );
};