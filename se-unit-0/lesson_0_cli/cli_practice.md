# Command Line Interface Practice

## Prerequisites
* Complete the "Navigating the File System" and "Viewing and Changing the File System" sections of [Learn the Command Line](https://www.codecademy.com/learn/learn-the-command-line) on Codecademy.
Set up your coding environment on [Windows](https://github.com/The-Marcy-Lab-School/local-environment-setup-wsl), [Mac](https://github.com/The-Marcy-Lab-School/local-environment-setup-mac), or [AWS Cloud9](https://github.com/The-Marcy-Lab-School/aws-cloud9-environment-setup)

## Guided Practices

If you _could not_ set up your environment, you can practice using [Repl.it](https://repl.it/languages/bash). Otherwise, you should complete the exercises below in your Cloud9 environment.

### Directory Set-Up
1. Type `pwd` to see your working directory.
2. For this practice, we will be creating folders and files using only the command line. Determine where you want to create them and `cd` to that folder.
3. Create the following directory structure:
   ```
   cli_practice/
   |
   |-----my_friends/
   |      |
   |      |--kene.txt
   |      |--kenny.txt
   |      |--maya_siliman_bhattacharjee-marcantonio.txt
   |
   |-----my_fellows/
   |      |
   |      |---codenation/
   |      |    |--devonte.txt
   |      |    |--enmanuel.md
   |      |    |--carmen.md
   |      |
   |      |---music/
   |            |--anne.txt
   |            |--kirk.txt
   |
   |-----my_family/            
   ```

  **Be sure to demonstrate the following:**

    - mkdir
      - mkdir -p
    - ls
      - ls with **_options flags_**
        - ls -a
        - ls -l
        - ls -la
    - cd
      - ~
      - .
      - ..
    - touch
    - mv
      - moving a file to a new directory
      - renaming a file using mv
    - rm (-r)
    - cp
    - echo
    - cat
    - more
    - pwd

## Optional Practice 
Recreate the following directory structure using only the command line:
```
 Your Workspace/
 |
 |-----my_interests/
 |      |
 |      |--interest1.txt
 |      |--interest2.txt
 |
 |-----my_entertainment/
 |      |
 |      |---music/
 |      |    |--artist1.md
 |      |    |--artist2.md
 |      |
 |      |---television/
 |           |--show1.txt
 |           |--show2.txt
 |
 |-----my_family/            
        |
        |---family_member1.md
        |---family_member2.md
        |---family_member3.md
```
