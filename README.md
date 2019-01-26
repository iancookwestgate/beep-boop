# Beep Boop Web Application

#### A program that allows users to input a number. A list of numbers are returned leading up to that number with some replaced by 2001: A Space Odyssey references.

#### By **Ian Cook Westgate**

## Description

A website created with HTML, CSS, Bootstrap, JavaScript, jQuery where a user can submit a number and see how numbers leading up to that input can change based on three separate number triggers.

### Specs

Spec: The program returns a range of numbers from 0 to the user's inputted number.
  - Input: "4"
  - Output: "0, 1, 2, 3, 4"

Spec: Numbers that contain a "1" return a "Beep!" This pertains to any digits of a number, and replace the entire number.
  - Input: "1" or "10"
  - Output: "Beep!"

Spec: Numbers that contain a "2" return a "Boop!" This pertains to any digits of a number, and replace the entire number. This is executed at a higher priority than the previous function.
  - Input: "2" or "12"
  - Output: "Boop!"

Spec: Numbers that contain a "3" return a "I'm sorry, Dave. I'm afraid I can't do that." This pertains to any digits of a number, and replace the entire number. This is executed at a higher priority than all previous functions.
  - Input: "3" or "32"
  - Output: "I'm sorry, Dave. I'm afraid I can't do that."

Spec: Numbers that do not meet any of the prior criteria are passed through and reproduced normally in the text range.
  - Input: "4" or "78"
  - Output: "4" or "78"

## Setup/Installation Requirements

1. Clone this repository @ https://github.com/iwestgate931/beep-boop.git
2. Use a terminal of your choice (I use Git Bash) to access the webpage and its files by inputting: "git clone {the above clone link}"
3. Open the folder you receive and open the index.html link in the web browser of your choice (I use Google Chrome).

Alternatively, click this gh-pages link to view it directly in the web browser of your choice: https://iwestgate931.github.io/beep-boop/

## Known Bugs
* No known bugs at this time.

## Technologies Used
* HTML
* CSS
  * Bootstrap
* JavaScript
  * jQuery

## Support and contact details

_Email iwestgate@hotmail.com with any questions, comments, or concerns._

## License

*{This software is licensed under the MIT license}*
Copyright (c) 2017 **_{Ian Cook Westgate}_**
