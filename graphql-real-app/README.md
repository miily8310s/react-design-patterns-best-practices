# 環境構築について

## postgresql のインストール設定

### postgresql インストール 〜データベース作成まで

macOS の場合は homebrew でインストールできる

```bash
brew update
brew install postgresql

// postgresqlを立ち上げる
brew services start postgresql

// DBを作成
createdb `whoami`

// SQLを発行できるように
psql

// 存在するテーブル一覧の確認
psql -l

// postgresqlを止める
brew services stop postgresql
```

### 参照ページ

- https://www.sqlshack.com/setting-up-a-postgresql-database-on-mac/
- https://gist.github.com/sgnl/609557ebacd3378f3b72
