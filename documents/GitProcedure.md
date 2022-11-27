# Branch
## Main branch
- main
- develop

## Support branch
feature
release
hotfix


# Switch Branch
## create feature branch
```
git checkout develop
git pull origin develop
git checkout -b feature/[BRANCH NAME]
git push origin feature/[BRANCH NAME]
```

## after finishing updating branch
```
git push origin feature/[BRANCH NAME]
```

その後Githubでプルリクを出しdevelopブランチにマージする。

ローカルリポジトリにdevelopブランチを反映する

リモート・ローカルリポジトリからfeatureブランチを削除する

```
git branch -d feature/[BRANCH NAME]
```
