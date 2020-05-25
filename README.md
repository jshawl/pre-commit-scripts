# Pre-Commit Scripts

This npm package generates a git `pre-commit` hook that runs a set of bash commands.

## Philosophy

### Private by default

Local commits are a very personal activity. Your own commit guards don't _need_ to be shared with other contributors to your repository.

By default, `.pre-commit-scripts` is added to `.git/info/exclude`

To share changes with others:

- add `pre-commit-scripts` as a `devDependency`
- remove `.pre-commit-scripts` from `.git/info/exclude`

### Index safe by default

No changes are ever applied to the staging area programmatically.

The general workflow is:

1. Try to commit
2. See commit guard errors
3. Fix errors
4. Stage changes
5. Try to commit (and succeed this time)

### Not npm specific

This package's runtime is nodejs but you can add arbitrary bash commands as commit guards:

`.pre-commit-scripts`: 

```
npm run format:check
npm run format # format anyway to pass the next check
npm run lint
! git diff --staged | grep console.log # prevent accidentally sharing debug statements
```

## Installation

```
npm install pre-commit-scripts --no-save
```

A post-install script will copy a `pre-commit` executable to `.git/hooks/pre-commit` and ignore a local `.pre-commit-scripts` file.

## Usage

```
git commit --allow-empty -m "testing pre-commit hook"
```

A few npm scripts will run. If any of them fail, git will not
commit. You can skip the pre-commit hook by adding the `--no-verify` to a `git commit` command.

## Configuration


A `.pre-commit-scripts` file like this one is created automatically:

```
npm run format:check
npm run format
npm run lint
npm run build
```

in your repository's root directory.

## Uninstall

```
npm uninstall pre-commit-scripts
```

or just remove the pre-commit hook:

```
rm .git/hooks/pre-commit
```