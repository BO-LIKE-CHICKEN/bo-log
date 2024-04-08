module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'style', 'chore', 'refactor', 'docs', 'test']],
    'scope-enum': [2, 'always', ['products', 'cart']],
    'subject-full-stop': [2, 'never', '.'],
  },
  ignores: [(commit) => commit.startsWith('Merge')],
};
