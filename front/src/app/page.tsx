"use client";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function cleanString(str: string) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^0-9a-zA-Z]/g, "")
    .toLowerCase();
}

function isPalindrome(str: string) {
  const cleaned = cleanString(str);
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

const codeHtml = `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>Palindrome Checker</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>APP PALINDROME</h1>
    <input type="text" id="text-input" placeholder="Ingrese el texto">

    <button id="check-btn">Enviar</button>
    <div id="result"></div>

    <script src="script.js"></script>
  </body>
</html>
`;

const codeCss = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
}

h1 {
  margin-bottom: 40px;
  font-size: 2.5em;
  color: #007BFF;
}

#text-input {
  padding: 10px;
  font-size: 16px;
  width: 300px;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
}

#text-input:focus {
  border-color: #007BFF;
  outline: none;
}

#check-btn {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #007BFF;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#check-btn:hover {
  background-color: #0056b3;
}

#result {
  margin-top: 20px;
  font-size: 18px;
  text-align: center;
}
`;

const codeJs = `
function cleanString(str) {
  return str.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
}

function isPalindrome(str) {
  const cleaned = cleanString(str);
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

document.getElementById("check-btn").addEventListener("click", function() {
  const inputElem = document.getElementById("text-input");
  const resultElem = document.getElementById("result");
  const text = inputElem.value;

  if (text.trim() === "") {
    alert("Please input a value");
    return;
  }

  if (isPalindrome(text)) {
    resultElem.textContent = text + " is a palindrome";
  } else {
    resultElem.textContent = text + " is not a palindrome";
  }
});
`;

export default function Home() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [htmlCode] = useState(codeHtml);
  const [cssCode] = useState(codeCss);
  const [jsCode] = useState(codeJs);

  const checkPalindrome = () => {
    if (text.trim() === "") {
      setResult("Por favor, ingrese un valor");
      return;
    }
    setResult(
      isPalindrome(text)
        ? `${text}, es una palabra palíndroma`
        : `${text}, no es una palabra palíndroma`
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-400 text-center">
          App proceso de selección Ethereum Developer Pack
        </h1>
        <h2 className="mt-2 text-2xl text-gray-300 text-center">
          By Javier Plata
        </h2>
        <p className="mt-2 text-gray-300 text-center">
          Aquí encontrarás una demostracion del desafío técnico de freeCodeCamp
          para la selección del Ethereum Developer Pack.
        </p>

        <Card className="mt-6 bg-gray-800 border border-gray-700">
          <CardContent className="p-6 flex flex-col items-center">
            <h1 className="text-xl font-semibold text-green-400 text-center">
              App Palindrome Checker
            </h1>
            <p className="mt-2 text-gray-300 mb-2">
              Verifica si una palabra o frase es un palíndromo.
            </p>
            <Input
              className="text-white text-center"
              type="text"
              placeholder="Ingrese un texto"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button
              className="mt-4 bg-blue-500 hover:bg-blue-700"
              onClick={checkPalindrome}
            >
              Verificar
            </Button>
            {result && <p className="mt-4 text-lg text-white">{result}</p>}
          </CardContent>
        </Card>

        <Card className="mt-6 bg-gray-800 border border-gray-700">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold text-green-400 text-center">
              Código utilizado en freeCodeCamp
            </h2>
            <h3 className="mt-2 text-xl font-semibold text-red-400">HTML</h3>
            <SyntaxHighlighter
              language="html"
              style={dracula}
              className="rounded-lg mt-2"
            >
              {htmlCode}
            </SyntaxHighlighter>
            <h3 className="mt-2 text-xl font-semibold text-blue-400">CSS</h3>
            <SyntaxHighlighter
              language="css"
              style={dracula}
              className="rounded-lg mt-2"
            >
              {cssCode}
            </SyntaxHighlighter>
            <h3 className="mt-2 text-xl font-semibold text-yellow-400">
              JavaScript
            </h3>
            <SyntaxHighlighter
              language="javascript"
              style={dracula}
              className="rounded-lg mt-2"
            >
              {jsCode}
            </SyntaxHighlighter>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
