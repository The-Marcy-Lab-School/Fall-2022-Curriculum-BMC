# Introduction to the Command Line Interface

## Agenda:

* **0:00-20:00**: Definitions and terms review
* **20:00-45:00**: guided practice
* **45:00-60:00**: recap + lab announcements

## Objectives
FWBAT...
- Understand the origins of the command line interface
- Navigate their file tree using the command line interface
- Create, copy, delete, and move files and directories using the command line interface.
- Understand key file and directory naming conventions

## Vocabulary
* Interface
* Graphical User Interface
* Command Line Interface

## Definitions and terms review
	
- Pre-requisites: Everyone should have a Unit 0 folder. If you don't, make one using either the GUI or the CLI
- Create a new file called notes.txt and write out the usefulness (the what) and purpose (the why) of the following:
	  - Interface
	  - Command Line Interface (CLI)
	  - Graphical User Interface (GUI)
	- Then, make a list of the CLI commands that you know
	- Finally, add any fun facts / cool "pro" tricks that you learned about beyond what's above.

_________________


## The What & The Why
* We are used to navigating our technology with an **_interface_** that is visually driven.
* **Graphical User Interfaces (GUIs)** use the **mouse** as the primary tool for interacting with what's on the screen. We can click and double-click on icons and menus, drag and drop them, and scroll through pages all using our mouse.
* Before screen graphics got more advanced, **Command Line Interfaces (CLIs)** were used. CLIs use the keyboard to and the "Enter" key to manipulate the computer. 
* Comparing and contrasting CLIs/GUIs
  * GUIs can be more user-friendly and easier to develop foundational proficiency
  * CLIs can be more _efficient_ and "expressive" (you have finer control to perform complex tasks).
* How will we use the CLI? 
  * Installing software
  * Interacting with software
  * manipulating your directory tree
  * Using Git!


## Class/Instructor "Pair" Programming:

> Fellows navigate while the instructor drives

Using the command line, how would I make this structure?

```
Lecture-1/
|
|-----team-leaders/
|      |
|      |--ben.md
|      |--motun.md
|      |--carmen.md
|
|-----hobbies/
|      |
|      |---indoors/
|      |    |--BakingCookies.md
|      |    |--WatchingTV.md
|      |    |--Gaming.md
|      |
|      |---outdoors/
|            |--running.md
|            |--walking-the-dog.md
|            |--hanging-with-friends.md
|
|-----food/ 
```

### Followup Questions

* **Challenge**: what is the fewest number of commands I can use to complete this task?
* If I were in the `/outdoors` folder, how would I change my working directory to be `/team-leaders`?
* From `/team-leaders`, how could I create a `desserts.md` file inside of the `/food` folder?


## Commands to know
- `pwd` prints the "working directory" (the directory you are currently "in")
- `mkdir dirName` makes a new directory
- `ls` lists the contents of the working directory
  - `ls -a` includes hidden files
  - `ls -l` shows File type, File permissions, Hard links, Ownership, Group, Size, Date and time of the listed files
  - `ls -la` combines the two flags above
- `cd` changes the working director
  - `cd ~` changes directory to the "root"
  - `cd ..` changes directory to the directory "above" the current directory 
- `touch app.js` creates a new file
- `mv app.js dirName` moves a file to a new directory
- `rm app.js` deletes a file 
  - `rm -r dirName` deletes a folder recursively

Advanced CLI commands that we can Google:
- `echo`
- `cat`

## FAQs:
	- What's the difference between a "CLI" and a  "terminal"?
	