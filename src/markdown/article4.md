Here's a comprehensive Markdown tutorial for using GitHub and Git for daily project management. This guide covers the basic commands and workflows to help you get started and maintain your projects efficiently.

---

# GitHub & Git Daily Use Tutorial

## Table of Contents

1. [Introduction](#introduction)
2. [Basic Git Commands](#basic-git-commands)
3. [Daily Workflow](#daily-workflow)
4. [Branching Strategy](#branching-strategy)
5. [Common Git Commands for Daily Use](#common-git-commands-for-daily-use)
6. [Additional Tips](#additional-tips)

## Introduction

Git is a distributed version control system that helps you manage changes to your project files over time. GitHub is a platform that hosts Git repositories and provides tools for collaboration and project management. This tutorial provides essential commands and workflows to use Git and GitHub daily.

## Basic Git Commands

Before starting, ensure Git is installed on your machine. You can check by running:

```bash
git --version
```

If Git is not installed, download and install it from [git-scm.com](https://git-scm.com/).

### Configure Git

Set up your Git user name and email (this is important for commit tracking):

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Create a New Repository

To start a new project, create a local repository:

```bash
mkdir my-new-project
cd my-new-project
git init
```

Alternatively, clone an existing repository:

```bash
git clone https://github.com/your-username/repo-name.git
cd repo-name
```

## Daily Workflow

1. **Start Your Day by Syncing with Remote**  
   Always pull the latest changes from the remote repository to keep your local repository up-to-date:

   ```bash
   git pull origin main
   ```

2. **Create a New Branch for Your Task**  
   Create a new branch for each task or feature:

   ```bash
   git checkout -b feature/my-new-feature
   ```

3. **Make Changes and Commit Regularly**  
   As you work on your task, make regular commits:

   ```bash
   git add .
   git commit -m "Add feature X"
   ```

4. **Push Your Changes to Remote**  
   When you are ready to push your changes to the remote repository:

   ```bash
   git push origin feature/my-new-feature
   ```

5. **Create a Pull Request (PR)**  
   Go to your repository on GitHub and create a Pull Request from your branch to the `main` branch.

6. **Review and Merge the PR**  
   After your code is reviewed, merge the PR into the `main` branch and delete the branch if no longer needed.

7. **Pull the Latest Changes to Keep Your Branch Updated**  
   After merging, pull the latest changes to ensure your local branch is up-to-date:

   ```bash
   git checkout main
   git pull origin main
   ```

## Branching Strategy

A good branching strategy is essential for project management. Here’s a simple strategy:

- `main`: The stable version of your project.
- `develop`: The main development branch.
- `feature/branch-name`: For new features or tasks.
- `hotfix/branch-name`: For urgent fixes.

## Common Git Commands for Daily Use

### Check Current Status

```bash
git status
```

### See Recent Commit Logs

```bash
git log --oneline --graph --all
```

### Stage Files for Commit

Add all changes:

```bash
git add .
```

Add specific files:

```bash
git add file1.txt file2.txt
```

### Commit Changes

```bash
git commit -m "Your commit message"
```

### Push Changes

```bash
git push origin branch-name
```

### Pull Latest Changes

```bash
git pull origin branch-name
```

### Create a New Branch

```bash
git checkout -b new-branch-name
```

### Switch Between Branches

```bash
git checkout branch-name
```

### Merge a Branch

```bash
git checkout main
git merge feature-branch-name
```

### Delete a Branch

Delete a local branch:

```bash
git branch -d branch-name
```

Delete a remote branch:

```bash
git push origin --delete branch-name
```

## Additional Tips

- **Use Descriptive Commit Messages**: Make sure your commit messages are clear and describe the changes.
- **Pull Regularly**: Frequently pull changes to minimize merge conflicts.
- **Review Code**: Always review code in Pull Requests to maintain code quality.
- **Backup Regularly**: Push your local changes to remote often to avoid losing work.
- **Use `.gitignore`**: Manage your `.gitignore` file to exclude files that shouldn't be tracked (e.g., `node_modules`, `.env`).

---

By following this workflow and using these commands daily, you will effectively manage your projects on GitHub and ensure smooth collaboration with your team. Happy coding!