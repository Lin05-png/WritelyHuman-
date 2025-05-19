const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const languageSelect = document.getElementById('languageSelect');
const humanizeBtn = document.getElementById('humanizeBtn');
const copyBtn = document.getElementById('copyBtn');

// Dummy AI Humanization Function
function humanizeText(text, lang) {
  if (!text.trim()) return "Please enter some text first.";
  let transformed = text;

  // Basic simulated transformations
  transformed = transformed.replace(/\b(can't)\b/gi, "cannot");
  transformed = transformed.replace(/\b(I'm)\b/gi, "I am");
  transformed = transformed.replace(/\b(it's)\b/gi, "it is");
  transformed = transformed.replace(/\b(don't)\b/gi, "do not");

  // Color-coded for SEO-friendliness
  transformed = transformed.replace(/\b(important|essential|effective|ultimate|human-like|natural|engaging)\b/gi,
    '<span style="color:green;font-weight:bold;">$1</span>');

  // Language Simulation Note
  return `[${lang.toUpperCase()} Translation Simulation]\n\n` + transformed;
}

// Event Listeners
humanizeBtn.addEventListener('click', () => {
  const lang = languageSelect.value;
  const humanized = humanizeText(inputText.value, lang);
  outputText.innerHTML = humanized;
});

copyBtn.addEventListener('click', () => {
  const tempElement = document.createElement("textarea");
  tempElement.value = outputText.innerText;
  document.body.appendChild(tempElement);
  tempElement.select();
  document.execCommand("copy");
  document.body.removeChild(tempElement);
  alert("Humanized text copied to clipboard!");
});
