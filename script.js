const poemLines = [
    "Roses are red,",
    "Violets are blue,",
    "I have 8-bit hearts,",
    "All just for you.",
    "My code is buggy,",
    "But my love is true,",
    "So here is a question,",
    "I must ask of you..."
];
// Final rhyme: true -> you (already used), let's try another flow.
// User requirement: "The last word in the 2nd to last sentence before the 'Will you be my Valentine?' should rhyme with Valentine."
// 2nd to last sentence.
// Let's re-write.

const poemLinesRevised = [
    "My heart is 8-bit,",
    "It beats just for you.",
    "No glitch in the system,",
    "My feelings are true.",
    "I've searched through the code,",
    "Looking for a sign,",
    "To ask you a question,",
    "My sweet Valentine." 
    // Wait, "Valentine" is the last word.
    // Requirement: "The last word in the 2nd to last sentence ... should rhyme with Valentine."
    // Sentence structure:
    // 1. Line 1
    // ...
    // N-1. ... (rhymes with Valentine)
    // N. ... (leads to question)
    
    // Let's try:
    // ...
    // "So please be mine," (rhymes with Valentine)
    // "And answer this line..." 
    
    // Actually, "Will you be my Valentine?" IS the question section. 
    // So the poem ends, then the question prompt appears.
    // "2nd to last sentence BEFORE the 'Will you be my Valentine?'"
    
    // Poem:
    // 1. 
    // ...
    // 2nd to last: "You make everything shine," (Rhymes with Valentine)
    // Last: "So read this next line..."
    // (Click Continue) -> "Will you be my Valentine?"
];

const finalPoem = [
    "Hey there cutie! 👾",
    "I have something to say,",
    "It's about a special day.",
    "You make my heart race,",
    "Like a CPU in a chase.",
    "Everything is fine,", // Rhymes with Valentine
    "When I call you mine."  // Also rhymes. Let's stick to the constraint properly.
];

// Let's align exactly with: "last word in the 2nd to last sentence ... rhyme with Valentine."
// Sentence 1...
// Sentence 2...
// ...
// Sentence (N-1): "... XXX" (XXX rhymes with Valentine)
// Sentence N: "..."
// -> QUESTION PHASE

const poemTextData = [
    "Hello my bear! 🐻",
    "I coded this just for you,",
    "A digital heartbeat,",
    "With feelings deep and true.",
    "You light up my world,",
    "You make my stars align,",
    "So I have one question...",
];

let currentLineIndex = 0;
const poemTextElement = document.getElementById('poem-text');
const continueBtn = document.getElementById('continue-btn');
const poemSection = document.getElementById('poem-section');
const questionSection = document.getElementById('question-section');
const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');

poemTextElement.textContent = poemTextData[0];

continueBtn.addEventListener('click', () => {
    currentLineIndex++;
    if (currentLineIndex < poemTextData.length) {
        poemTextElement.textContent = poemTextData[currentLineIndex];
    } else {
        // Poem finished
        poemSection.classList.add('hidden');
        questionSection.classList.remove('hidden');
    }
});

const noPhrases = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
    "Plsss",
    "Pretty please?",
    "No :("
];

let noClickCount = 0;

noBtn.addEventListener('click', () => {
    noClickCount++;
    
    // Update No button text
    // Loop back to the last one if we run out, or just stay at the last one
    if (noClickCount < noPhrases.length) {
        noBtn.textContent = noPhrases[noClickCount];
    } else {
        noBtn.textContent = noPhrases[noPhrases.length - 1];
    }

    // Grow Yes button
    // We can multiply the scale or font-size logic
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    const newSize = currentSize * 1.5; 
    yesBtn.style.fontSize = `${newSize}px`;
    
    // Also increase padding slightly perhaps to keep aspect? 
    // But font-size usually handles it for standard buttons.
});

yesBtn.addEventListener('click', () => {
    window.location.href = 'yes_page.html';
});
