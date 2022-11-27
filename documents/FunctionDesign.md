# App Tree
ref: https://zenn.dev/yodaka/articles/eca2d4bf552aeb

# PageTree
+ components
    + elements
        + _texts.tsx
        + _text.module.scss
        + _titles.tsx
+ /pages
    + index.tsx
    + ui.tsx

- index.tsx: トップページ
- pages/ui/index.tsx: uiページエントリーポイント


# SASS Tree

+ /styles
    + sass
        + foundation
            + _index.scss
            + _reset.scss
            + _base.scss
            + _custom-property.scss
            + _fonts.scss
            + _title.scss
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

# ブレイクポイント
- clampのデフォルトは768pxで計算する。
- clampの計算結果は小数点3桁切り捨てとする

