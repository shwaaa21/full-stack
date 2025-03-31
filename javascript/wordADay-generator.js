const funWords = {
    quirky: "Characterized by peculiar or unexpected traits.",
    bamboozle: "To fool or cheat someone.",
    serendipity: "The occurrence of events by chance in a happy or beneficial way.",
    flabbergasted: "Extremely surprised or shocked.",
    whimsical: "Playfully quaint or fanciful, especially in an appealing way."
};

const randomWord = () => {
    const words = Object.keys(funWords);
    const randomIndex = Math.floor(Math.random() * words.length);
    const word = words[randomIndex];
    const definition = funWords[word];
    return { word, definition };
}

const { word, definition } = randomWord();
console.log(`Your random word is: "${word}"`);
console.log(`Definition: ${definition}`);