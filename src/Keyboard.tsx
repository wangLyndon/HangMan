import "./keyboard.css";

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

type KeyboardProps = {
    disabled?: boolean;
    activeLetters: string[];
    inactiveLetters: string[];
    addGuessedLetter: (letter: string) => void
}

export const Keyboard = ({activeLetters, inactiveLetters, addGuessedLetter, disabled = false}: KeyboardProps) => {

    return (
        <div className="keyboard">
            {KEYS.map(key => {
                const isActive = activeLetters.includes(key);
                const isInactive = inactiveLetters.includes(key);

                return (
                    <button
                        onClick={() => addGuessedLetter(key)} key={key}
                        disabled={isActive || isInactive || disabled}
                        className={`btn ${isActive ? "active" : ""} ${isInactive ? "inactive" : ""}`}>{key}</button>
                )
            })}
        </div>
    );
};