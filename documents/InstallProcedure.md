# Next.jsアプリ初期化

## Next.jsのインストール
```
mkdir hp-template--nextjs
cd hp-template--nextjs
npx create-next-app hp-template--nextjs --ts
// srcは仮プロジェクト名、--tsオプションでTypescriptを有効化
```


## SASSの有効化
```
npm i sass --save-dev
```

## CSSモジュールの有効化
```
npm i typed-scss-modules -D
```

## デフォルトglobals.cssのsass対応
1. globals.cssを削除
2. pages/_app.tsxでcssファイル読み込み元を変更

```
// import '../styles/globals.css'
import '../styles/sass/style.scss'
```

## sassファイルをTypeScriptで認識できるようにする。
next-end.tsに下記を追加
```
declare module '*.css';
declare module '*.scss';
```

tsconfig.jsonを修正
```
"include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
"include": ["next-env.d.ts", "**/*.ts", "**/*.tsx","next-env.d.ts","src/**/*"],
```


## 下層ページ作成
pagesフォルダに新しいフォルダを作成してindex.tsxファイルを作る
(例)pages/about/index.tsx

※Next.jsはpages以下にフォルダを作ってその下にindex.tsx(index.js)を作ったら/aboutに自動ルーティングされる