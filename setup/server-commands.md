Create App and Repo folder

```
git init repo --bare
mkdir app
```

Sets up another folder to show files

```
git config core.bare false
git config core.worktree ../app
```

Create Post-receive hook

```
touch hooks/post-receive && chmod +x hooks/post-receive && nano hooks/post-receive 
```

So I can push up the master branch

```
git config receive.denyCurrentBranch ignore
```