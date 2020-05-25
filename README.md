# Pre-Commit Hook

This npm package generates a git `pre-commit` hook that runs a set of customizable bash commands.

## Philosophy

### No package.json changes

Local commits are a very personal activity. Your own commit guards don't _need_ to be shared with other contributors to your repository.

### Not npm specific

This package's runtime is nodejs but you can add arbitrary bash commands as commit guards:

`.pre-commit-scripts`: 

```
npm run format:check
npm run format # format anyway to pass the next check
npm run lint
! git diff --staged | grep console.log # prevent accidentally sharing debug statements
```

## Install

```
npm install @jshawl/pre-commit
```

A post-install script will copy a `pre-commit` executable to `.git/hooks/pre-commit`.

## Usage

```
git commit --allow-empty -m "testing pre-commit hook"
```

A few npm scripts will run. If any of them fail, git will not
commit. You can skip the pre-commit hook by adding the `--no-verify` to a `git commit` command.

## Configuration

It's possible to override the default commands.

Create a `.pre-commit-scripts` file like this one:

```
npm run format:check
npm run format
npm run lint
npm run build
```

in your repository's root directory, and list whichever commands you want to `exit 0` before allowing a commit.

Optionally, consider ignoring this file so other contributors to the repository don't have to follow your own commit rules:

```
echo .pre-commit-scripts >> .git/info/exclude
```

## Uninstall

```
npm uninstall @jshawl/pre-commit
```

or just remove the pre-commit hook:

```
rm .git/hooks/pre-commit
```