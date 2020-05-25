# Pre-Commit Hook

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

## Uninstall

```
npm uninstall @jshawl/pre-commit
```

or just remove the pre-commit hook:

```
rm .git/hooks/pre-commit
```