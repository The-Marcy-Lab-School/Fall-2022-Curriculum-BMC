# Introduction to Git and GitHub 

## Lesson Overview:

### Agenda

* **0:00-20:00**: Definitions and terms review
* **20:00-45:00**: guided practice
* **45:00-60:00**: recap + lab announcements

### Objectives
Fellows Will Be Able to...
* Understand Git as a tool for version control.
* Develop a sound mental model for the Git/GitHub workflow.
* Understand the difference between git and GitHub
* Initialize a Git repository from the command line
* Create a remote GitHub repository
* Stage and commit changes from the command line.
* Push commits to a remote repository.

### Vocabulary 
* Git
* GitHub
* version control system (VCS)
* repository
* commit
* push
* remote
* local

### What is Git?
<details><summary>Reveal</summary>

* Git is a **version control system**.
* Git tracks changes made to computer files.
* Git is primarily used for source-code management in software development (but it could be used to manage non-code files)
* Benefit of Git (Version Control)
    * Save multiple versions of your project.
    * Work on features without disrupting the "Live" version.

</details>

### What is Github?
<details><summary>Reveal</summary>

* GitHub is a **remote**, cloud hosting service for Git repositories.
* Benefits of GitHub (Host/backup these version-controlled projects)
    * Backing up your code 
    * Collaborate with a team of other developers using the same "Remote"
    * Coding social network

</details>

## Git & Github: Developing a Mental Model
> * Mental models are the stories or analogies used to explain complex topics.
> * A mental model allows us to understand how to USE the system effectively, even if we don't understand its intricacies.

Imagine working in Notepad/Microsoft Word (before Google Drive was a thing).

* What if there was a way that you could take a _snapshot_ of your file each time you pressed 'Save'. That way, you could go back to previous _versions_ of your work if something ever happened. **That's exactly why Git was created!**
* Don't you wish you had a place where you could _host_, or store your files so that they aren't gone forever when your computer combusts into flames? And wouldn't it be great if it lived in the cloud so that you could access them from any device with an internet connection? **Well, that's exactly why GitHub was created in 2008!**

Let's continue with our Notepad analogy. When working on your computer (A.K.A. "locally"), Git is a better way to "Save".
* In Git, our project folders are called **_repositories_**.
  * `git init` in the command line.
* The folder that is saved on your computer is called a **local repository**.
* Any time you make a significant change to your local repository, you **stage** them and **commit** them. This is like saving your document with one key difference:
  * In Notepad, when you press 'Save', you are writing over the previous copy and saving the new copy in its place.
  * In Git, when you `commit`, you are taking a "snapshot" of the current state of your repository and saving that snapshot. When you `commit` multiple times, you are saving multiple snapshots, essentially creating a living history of your repository.

Before long, you want to back your essay up in the cloud. So you create a Google Drive folder to store your files and the file history. You can access Google Drive from anywhere so you know your essay will be safe.
* Likewise, we can log on to [GitHub.com](Github.com) and create a repository (called the **remote repository**) that will be connected to our local repository.
* When we **push** to this repository, we are sending our local changes to our remote repository. Now our files/history lives in two places: on our laptop and on the internet!
* We can **pull** from the remote repository to sync up our local repository.
* If you wanted to collaborate, other people can **clone** the remote repository and work in parallel (more on that in the next lesson).

### A Visual Model

![Git workflow](https://github.com/The-Marcy-Lab-School/Fall-2022-Curriculum-BMC/blob/main/se-unit-0/lesson_1_git/git-workflow-1.png?raw=true)

This is a lot to unpack so let's take it in pieces:

* First, notice the two large areas: origin and your computer (local).
    * Origin represents Github
    * Local shows the Git workflow that occurs on your computer.
    * Remember, Git is all about version control and Github is all about backing up that version control in the cloud
* Next, look at the legend. 
    * The pink numbers show a typical workflow order (though its not absolute). 
    * The purple text shows git commands that you will become familiar with as we learn and practice.
    * The white text adds further context/explanation
* With the context set, put on your detective hat and pull out your magnifying glass. Dive into each step and figure out what is going on!

## How to create a remote repo on GitHub
* First, [create a repository on Github using the Github GUI](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)
* The repo you created on GitHub is your **remote** repository.
* You can `git clone` it down into a parent folder of your choice.
* The folder created from `git clone` is now your **local** repository

## How to commit changes through the Command Line?
* `git status` will show you the status of your project
* `git add <file-name>` will add certain files to the staging area 
    * `git add -A` will add ALL changed files to the staging area (`-A` can be replaced with `.` too)
* `git commit -m "commit message"` will take all changes files in the staging area and package them into a single commit 
* `git push` pushes the commited changes from the local repo to the remote repo 
* `git pull` pulls down any changes from the remote repo to the local repo

## How to create a local repo on your machine (or AWS)
* Create a folder for your git project  
* `cd` into that folder and `git init` (you can hit "Enter" through most of the setting prompts)
* That folder is now your **local** repository 
* You can make changes, but before you push it to Github, you'll have to make an empty **remote** repo to push to.
* Finally, connect the local repository to the remote with

```sh
git remote add origin git@github.com:benspector-mls/blah.git
git branch -M main
git push -u origin main
```

> * `git remote add <name> <URL>` sets a new remote repo. `origin` is the most common name. It is also the default name when creating a repo using the Github GUI.
> * The `-M` flag in `git branch -M main` renames the current branch to `main` (likely called `master` if created using `git init`)
> * `git push -u <remoteName> <brancName>` sets the "upstream" remote branch for future `git push` commands. `origin` is the name of the repo we just chose and `main` is the name of the branch.

BONUS: [Interesting configuration setup](https://git-scm.com/docs/git-config#Documentation/git-config.txt-pushdefault)

```sh
git config --global push.default current
```

> Run this command before the `git push` command and you'll never have to do the `-u` part again.

## How to commit changes through the Browser (GUI)?

* You can click on the edit button for any file. At the bottom, simply press the green "Commit" button and enter a message. The changes will be committed directly to the `main` branch, or another branch you specify.
* Use `git pull` to pull down changes from the remote to your local repository.

## FAQs

* Do I need to clone down the code each time I want to work on it?
    * No! Once you've cloned as repository, the connection has been made between your local repo and the remote repo. 
* Do I need to add, commit, and push, every time I want to make a change?
    * Yes! Adding (staging) and committing your code only saves a local snapshot of your code at that specific time. Pushing uploads that snapshot to the remote repository. Any changes made after the snapshot must be staged, committed, and pushed.