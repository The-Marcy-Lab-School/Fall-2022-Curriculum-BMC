# Git Cheatsheet

**Table of Contents**

- [Review Branching](#review-branching)
- [Creating Branches](#creating-branches)
- [Commit Changes](#commit-changes)
- [Merge before you push](#merge-before-you-push)
- [Push and make a PR](#push-and-make-a-pr)

## Review Branching

<details><summary>When should we create a new branch?</summary><br>

Branches are used to diverge from the main code base. They are useful because they create a copy of existing code without modifying the existing code. Think of it as your very own sandbox where you can create anything new.

Therefore, a new branch should be created for any new change to any of the files in the project. This includes but is not limited to creating a new feature in the repo and/or fixing a bug in the repo.

</details>

<details><summary>When do merge conflicts occur?</summary><br>

Merge conflicts occur when we have code that could possibly overwrite code that was already there. They are bound to happen if multiple people are working on the same file.

</details>

<details><summary>Things to avoid</summary><br>

The main branch should always have working code so as a best practice, we shouldn't

- Work off of the `main` branch.
- Merge code that hasn't been tested into the `main` branch .

</details>

## Creating Branches

Each team member should own their own branch and work exclusively on that branch.

First, create a branch and switch to it:

```
git checkout -b ben-feature-A
```

Then see all branches:

```sh
git branch
```

You should then see: (the `*` indicates the current branch)

```
  main
* ben-feature-A
```

> TIP: Always check to make sure that you are NOT working in the `main` branch

To switch back and forth between `main` and your branch, run:

```sh
git checkout main
git checkout ben-feature-A
```

## Commit Changes

When you're ready to save your current changes, create a _local commit_.

In your feature branch, run:

```sh
git add -A
git commit -m 'a message describing your changes'
```

## Merge before you push

While you have been working on your code, your teammates may have pushed changes.

First, switch to the `main` branch and `pull` the changes:

```sh
git checkout main
git pull
```

Then, switch back to your feature branch and merge the changes from `main` _into your branch_.

```sh
git checkout ben-feature-A
git merge main
```

You may need to resolve merge conflicts at this point.

> If you see this screen asking you to enter a commit message, simply type <kbd>:q</kbd> to quit and accept the default merge message.

![](assets/git-merge-message.png)

## Push and make a PR

Once you have merged `main` into your branch, go ahead and `git push`.

> If it is your first time pushing from this branch, you will be told to use the `--set-upstream` flag.

- Go to Github.com and open up your repository.
- Then, click on the <kbd>Pull Requests</kbd> tab to create a new pull request to merge your branch into `main`.
- Ask your teammates to review your code and then merge!
- If you want to continue working on your branch, do NOT delete the branch.

Your teammates can then follow the steps listed in [merge before you push](#merge-before-you-push) to update their local repositories.
