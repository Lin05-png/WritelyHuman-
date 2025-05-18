// script.js – Full functionality for WritelyHuman

// Language map (for future multilingual expansion if needed) const languageMap = { en: 'English', es: 'Spanish', fr: 'French', de: 'German', hi: 'Hindi', zh: 'Chinese', ar: 'Arabic', pt: 'Portuguese', ru: 'Russian', ja: 'Japanese', ko: 'Korean', it: 'Italian', tr: 'Turkish', pl: 'Polish', uk: 'Ukrainian', ro: 'Romanian', nl: 'Dutch', sv: 'Swedish', fi: 'Finnish', no: 'Norwegian', da: 'Danish', cs: 'Czech', el: 'Greek', th: 'Thai', vi: 'Vietnamese', ms: 'Malay', id: 'Indonesian', bn: 'Bengali', fa: 'Persian', he: 'Hebrew', ne: 'Nepali' };

// Humanize function – core text rewrite simulation function humanizeText() { const input = document.getElementById("inputText").value.trim(); const lang = document.getElementById("language").value; const output = document.getElementById("outputText");

if (!input) { output.value = "Please paste or type content to humanize."; return; }

// Simulate humanizing: replace robotic phrases, vary sentence structures let rewritten = input .replace(/\bmoreover\b/gi, "furthermore") .replace(/\bin conclusion\b/gi, "to sum it up") .replace(/\badditionally\b/gi, "what’s more") .replace(/\btherefore\b/gi, "so") .replace(/\bthus\b/gi, "as a result") .replace(/\bAI\b/gi, "artificial intelligence") .replace(/\bThis tool\b/gi, "WritelyHuman") .replace(/\btext\b/gi, "writing") .replace(/\bcontent\b/gi, "message") .replace(/\bgenerate\b/gi, "create") .replace(/\boptimize\b/gi, "refine") .replace(/\butilize\b/gi, "use") .replace(/\bdue to the fact that\b/gi, "because") .replace(/\bprovides\b/gi, "offers");

// Highlight changed parts by marking keywords (simple simulation) const highlights = ["furthermore", "to sum it up", "what’s more", "so", "as a result", "artificial intelligence", "WritelyHuman", "writing", "message", "create", "refine", "use", "because", "offers"];

highlights.forEach(word => { const regex = new RegExp(\\b${word}\\b, 'gi'); rewritten = rewritten.replace(regex, match => <mark>${match}</mark>); });

// Inject to output (render as HTML) document.getElementById("outputText").innerHTML = rewritten; }

// Optional: Voice input functionality (not active by default) function startListening() { if (!('webkitSpeechRecognition' in window)) { alert("Speech recognition not supported in this browser."); return; }

const recognition = new webkitSpeechRecognition(); recognition.lang = 'en-US'; recognition.interimResults = false; recognition.maxAlternatives = 1;

recognition.onresult = function(event) { const spokenText = event.results[0][0].transcript; document.getElementById("inputText").value += spokenText + " "; };

recognition.onerror = function(event) { alert("Speech error: " + event.error); };

recognition.start(); }

// Copy output function copyOutput() { const dummy = document.createElement("textarea"); dummy.value = document.getElementById("outputText").innerText; document.body.appendChild(dummy); dummy.select(); document.execCommand("copy"); document.body.removeChild(dummy); alert("Humanized content copied to clipboard."); }

