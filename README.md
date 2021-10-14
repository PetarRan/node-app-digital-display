# Software Solution for Finding the Longest Word in English dictionary Suitable for 7-Segment Display
IEEESTEC Student Project 2020

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

## This Node.js app aims to find the longest suitable word in English dictionary suitable for displaying on 7-segment displays.

## Inspiration
If we take a look at 7-segment displays, used primarily to display `hexadecimal` characters, we wonder what is the longest word that we can form out of a sequence of these things?
Also, that launches a sequence of questions regarding it, like:
- Are there any letters that cannot be displayed properly on limited 7 segments we have?
- Is there a way to tell which letters can be showed on these displays?
- Is it even worth trying?

![](https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/7-segment_bcdfg.svg/24px-7-segment_bcdfg.svg.png) ![](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/7-segment_abefg.svg/24px-7-segment_abefg.svg.png) ![](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/7-segment_aefg.svg/24px-7-segment_aefg.svg.png) ![](https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/7-segment_abcefg.svg/24px-7-segment_abcefg.svg.png)


## Solution
If we do it manually, it will take us days, weeks, even months depening on how much time we put into this tiring process daily. There is roughly around **300,000** words in English lanugage, therefore we need help from our friends, machines.
- data is segmented in a single text file and read by the machine
- a regular expression is used to single out the words that can be displayed
- how did we find the letters that cannot be displayed? Well we tried. (M, V, W, X in the Latin alphabet)
- compare the lenght of the words that met the criteria of a **regex**
- display all of these words
And there you have it. Smooth like a limestone.

## Purpose
The purpose of this project is not mainly in representing data on 7-segment displays, it's main purpose is a smooth traversal through large data-file sets and lookin for something of importance. This algorithm can be further use to traversal any textfile and if updated, any .csv / excel files of sort.


This project is licensed by University of Nis, Serbia
| License      | Owner |
| ----------- | ----------- |
| Student Project | Petar Randjelovic |
