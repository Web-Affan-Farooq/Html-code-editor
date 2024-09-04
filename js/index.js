let runButton = document.querySelector("#run-button");
let editor = document.querySelector("#editor");
editor.value = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    hello world
</body>
</html>`;

function runCode() {
    const editorContent = document.getElementById('editor').value;
    const iframe = document.getElementById('output');
    iframe.srcdoc = editorContent;
    window.open();
};
runButton.addEventListener("click",runCode);