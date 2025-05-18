const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const languageSelect = document.getElementById("languageSelect");
const toneSelect = document.getElementById("toneSelect");
const humanizeBtn = document.getElementById("humanizeBtn");

humanizeBtn.addEventListener("click", () => {
  const text = inputText.value.trim();
  const language = languageSelect.value;
  const tone = toneSelect.value;

  if (text === "") {
    outputText.value = "Please enter some text to humanize.";
    return;
  }

  // Simulated humanization (replace with API if needed)
  const humanized = simulateHumanize(text, language, tone);
  outputText.value = humanized;
});

function simulateHumanize(text, lang, tone) {
  // Replace common AI patterns
  let modified = text
    .replace(/In conclusion,|Therefore,|Hence,/gi, "To wrap it up,")
    .replace(/Furthermore,|Moreover,/gi, "Also,")
    .replace(/It is important to note that/gi, "Keep in mind that")
    .replace(/\butilize\b/gi, "use")
    .replace(/\bcommence\b/gi, "start")
    .replace(/\bassist\b/gi, "help");

  modified += `\n\n[Humanized in ${getLangName(lang)} | Tone: ${tone.charAt(0).toUpperCase() + tone.slice(1)}]`;
  return modified;
}

function getLangName(code) {
  const langs = {
    en: "English", hi: "Hindi", es: "Spanish", fr: "French",
    de: "German", ru: "Russian", zh: "Chinese", ja: "Japanese",
    ko: "Korean", ar: "Arabic"
  };
  return langs[code] || "Selected Language";
}

function copyOutput() {
  outputText.select();
  document.execCommand("copy");
  alert("Text copied to clipboard!");
}

function clearText() {
  inputText.value = "";
  outputText.value = "";
}

// Microphone / Speech-to-Text Feature
function startMicrophone() {
  if (!("webkitSpeechRecognition" in window)) {
    alert("Your browser doesn't support speech recognition.");
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = function (event) {
    inputText.value += event.results[0][0].transcript;
  };

  recognition.onerror = function (event) {
    alert("Error with microphone: " + event.error);
  };

  recognition.start();
}

function regenerateText() {
  humanizeBtn.click();
}
