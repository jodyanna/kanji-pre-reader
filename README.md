# Kanji Pre-Reader
Create custom kanji character study sheets from Japanese text. 

Each kanji entry on the study sheet contains (if applicable) a brief overview of kanji details (grade, JLPT level, stroke count), On and Kun readings, English meaning translation, and an area to practice writing. 

All kanji character information is from the kanjiapi.dev API. 

## Technology 
- React
- JavaScript 
- styled-components / CSS
- html2canvas
- jsPDF

## How to use
This application has three steps for creating study sheets. 
1. Enter Japanese text into the provided textarea input. 
All Japanese kanji characters will be parsed from the text and all non-kanji characters will be ignored. 
2. Select desired kanji characters to appear on study sheet. 
Each study sheet holds a maximum of 8 kanji entries, current limit for download is 2 sheets. 
3. View preview of first page and download pdf file. 

## How it’s made
Step 1 contains a simple textarea input form for users to enter the text they would like to process. 
Clicking next will parse the text using a regular expression into an array containing single kanji characters.
Duplicate characters are removed by converting the array to a set and back again.

Step 2 contains another form for selecting the kanji from step 1 that will be rendered into study sheets.
Clicking next will put the selected kanji characters into a new array for rendering.
Immutable data handling allows for data to persist when navigating the application with the next and back buttons.

Step 3 requests the JSON of each kanji selected from the kanjiapi.dev API and groups the data into groups of 8 using a 2-dimensional array.
These groups are then used to render the StudySheet components off-screen.
A preview is rendered on a canvas using the html2canvas library and query selecting the first StudySheet component.
Clicking download will render each StudySheet component into a PDF document using html2canvas to convert the component into an image, and jsPDF to create the document.

## Installation
To start, clone this repo from GitHub.

Then, run this command from the root directory to install dependencies:
```npm install```

To start development server, run: 
```npm start```

To run tests: ```npm test```
