# App Tree
ref: https://zenn.dev/yodaka/articles/eca2d4bf552aeb

# PageTree
+ /pages
    + ui
        index.tsx 
    + index.tsx

- index.tsx: トップページ
- pages/ui/index.tsx: uiページエントリーポイント


# SASS Tree

+ /styles
    + sass
        + foundation
        + layout
        + global
        + library
        + obj-component
        + obj-project
        + obj-utility

const
pageTitle.ts: ページタイトルを規程

# 命名規則
- クラス名はBEMに準拠
- Block, Element, Modifierの内部にはハイフンは使わずキャメルケースとする
- IDはキャメルケース
