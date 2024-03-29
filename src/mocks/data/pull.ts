import { Reviewer } from "./reviewer";
import { Team } from "./team";

export const getPull = (id: number) => {
  const copy: Pull = JSON.parse(JSON.stringify(pull));
  pull.id = id;
  pull.html_url = `https://google.com/search?q=${id}`;
  return copy;
};

type Pull = typeof pull;

const pull = {
  url: "https://api.github.com/repos/orgx/api/pulls/629",
  id: 1058662561,
  node_id: "PR_kwDOGMjCY84_Geih",
  html_url: "https://github.com/orgx/api/pull/629",
  diff_url: "https://github.com/orgx/api/pull/629.diff",
  patch_url: "https://github.com/orgx/api/pull/629.patch",
  issue_url: "https://api.github.com/repos/orgx/api/issues/629",
  number: 629,
  state: "open",
  locked: false,
  title: "Fix everything",
  user: {
    login: "randomuser",
    id: 49699333,
    node_id: "MDM6Qm90NDk2OTkzMzM=",
    avatar_url: "https://avatars.githubusercontent.com/in/29110?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/dependabot%5Bbot%5D",
    html_url: "https://github.com/apps/dependabot",
    followers_url: "https://api.github.com/users/dependabot%5Bbot%5D/followers",
    following_url:
      "https://api.github.com/users/dependabot%5Bbot%5D/following{/other_user}",
    gists_url:
      "https://api.github.com/users/dependabot%5Bbot%5D/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/dependabot%5Bbot%5D/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/dependabot%5Bbot%5D/subscriptions",
    organizations_url: "https://api.github.com/users/dependabot%5Bbot%5D/orgs",
    repos_url: "https://api.github.com/users/dependabot%5Bbot%5D/repos",
    events_url:
      "https://api.github.com/users/dependabot%5Bbot%5D/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/dependabot%5Bbot%5D/received_events",
    type: "User",
    site_admin: false,
  },
  body: 'Bumps [@babel/preset-env](https://github.com/babel/babel/tree/HEAD/packages/babel-preset-env) from 7.9.6 to 7.19.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a href="https://github.com/babel/babel/releases"><code>@​babel/preset-env</code>\'s releases</a>.</em></p>\n<blockquote>\n<h2>v7.19.1 (2022-09-14)</h2>\n<p>Thanks <a href="https://github.com/hegemonic"><code>@​hegemonic</code></a> for your first PR!</p>\n<h4>:bug: Bug Fix</h4>\n<ul>\n<li><code>babel-core</code>\n<ul>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/14930">#14930</a> Avoid fancy stack traces size computation (<a href="https://github.com/nicolo-ribaudo"><code>@​nicolo-ribaudo</code></a>)</li>\n</ul>\n</li>\n<li><code>babel-traverse</code>\n<ul>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/14932">#14932</a> fix: isForAwaitStatement is broken (<a href="https://github.com/JLHwung"><code>@​JLHwung</code></a>)</li>\n</ul>\n</li>\n<li>Other\n<ul>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/14872">#14872</a> Use the built-in class fields and private methods rules in ESLint 8 (<a href="https://github.com/JLHwung"><code>@​JLHwung</code></a>)</li>\n</ul>\n</li>\n<li><code>babel-parser</code>\n<ul>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/14920">#14920</a> [estree] attach comments after directives at the end of file (<a href="https://github.com/hegemonic"><code>@​hegemonic</code></a>)</li>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/14900">#14900</a> [ts] allow redeclaring a var/type with the same name as import (<a href="https://github.com/liuxingbaoyu"><code>@​liuxingbaoyu</code></a>)</li>\n</ul>\n</li>\n<li><code>babel-plugin-transform-typescript</code>\n<ul>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/14913">#14913</a> fix: do not remove type import used in TS import= (<a href="https://github.com/JLHwung"><code>@​JLHwung</code></a>)</li>\n</ul>\n</li>\n</ul>\n<h4>Committers: 5</h4>\n<ul>\n<li>Babel Bot (<a href="https://github.com/babel-bot"><code>@​babel-bot</code></a>)</li>\n<li>Huáng Jùnliàng (<a href="https://github.com/JLHwung"><code>@​JLHwung</code></a>)</li>\n<li>Jeff Williams (<a href="https://github.com/hegemonic"><code>@​hegemonic</code></a>)</li>\n<li>Nicolò Ribaudo (<a href="https://github.com/nicolo-ribaudo"><code>@​nicolo-ribaudo</code></a>)</li>\n<li><a href="https://github.com/liuxingbaoyu"><code>@​liuxingbaoyu</code></a></li>\n</ul>\n<h2>v7.19.0 (2022-09-05)</h2>\n<p>Blog post: <a href="https://babeljs.io/blog/2022/09/05/7.19.0">https://babeljs.io/blog/2022/09/05/7.19.0</a></p>\n<p>Thanks <a href="https://github.com/SukkaW"><code>@​SukkaW</code></a> for your first PR!</p>\n<h4>:eyeglasses: Spec Compliance</h4>\n<ul>\n<li><code>babel-parser</code>\n<ul>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/14666">#14666</a> Support private name in decorator member expression (<a href="https://github.com/JLHwung"><code>@​JLHwung</code></a>)</li>\n</ul>\n</li>\n<li><code>babel-helpers</code>, <code>babel-plugin-proposal-async-generator-functions</code>, <code>babel-preset-env</code>, <code>babel-runtime-corejs2</code>, <code>babel-runtime-corejs3</code>, <code>babel-runtime</code>\n<ul>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/14877">#14877</a><code>tc39/ecma262#2819</code><a href="https://github.com/nicolo-ribaudo"><code>@​nicolo-ribaudo</code></a>)</li>\n</ul>\n</li>\n</ul>\n<h4>:rocket: New Feature</h4>\n<ul>\n<li><code>babel-generator</code>, <code>babel-helpers</code>, <code>babel-parser</code>, <code>babel-plugin-proposal-decorators</code>, <code>babel-plugin-syntax-decorators</code>, <code>babel-runtime-corejs2</code>, <code>babel-runtime-corejs3</code>, <code>babel-runtime</code>\n<ul>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/14836">#14836</a> Add 2022-03 decorators version (stage 3) (<a href="https://github.com/nicolo-ribaudo"><code>@​nicolo-ribaudo</code></a>)</li>\n</ul>\n</li>\n<li><code>babel-parser</code>\n<ul>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/14695">#14695</a> [parser] Make <code>decoratorsBeforeExport</code> default to <code>false</code> (<a href="https://github.com/nicolo-ribaudo"><code>@​nicolo-ribaudo</code></a>)</li>\n</ul>\n</li>\n<li><code>babel-generator</code>, <code>babel-parser</code>\n<ul>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/14744">#14744</a> Default to hash syntax for Record&amp;Tuple (<a href="https://github.com/nicolo-ribaudo"><code>@​nicolo-ribaudo</code></a>)</li>\n</ul>\n</li>\n<li><code>babel-standalone</code>\n<ul>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/14867">#14867</a> feat: add proposal-record-and-tuple to standalone (<a href="https://github.com/JLHwung"><code>@​JLHwung</code></a>)</li>\n</ul>\n</li>\n<li><code>babel-helper-create-regexp-features-plugin</code>, <code>babel-helpers</code>, <code>babel-plugin-proposal-duplicate-named-capturing-groups-regex</code>, <code>babel-plugin-transform-named-capturing-groups-regex</code>, <code>babel-standalone</code>\n<ul>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/14805">#14805</a> Add support for the duplicate named capturing groups proposal (<a href="https://github.com/nicolo-ribaudo"><code>@​nicolo-ribaudo</code></a>)</li>\n</ul>\n</li>\n</ul>\n<h4>:bug: Bug Fix</h4>\n<ul>\n<li><code>babel-helper-function-name</code>, <code>babel-helper-wrap-function</code>, <code>babel-plugin-transform-classes</code></li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a href="https://github.com/babel/babel/blob/main/CHANGELOG.md"><code>@​babel/preset-env</code>\'s changelog</a>.</em></p>\n<blockquote>\n<h2>v7.19.1 (2022-09-14)</h2>\n<h4>:bug: Bug Fix</h4>\n<ul>\n<li><code>babel-core</code>\n<ul>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/14930">#14930</a> Avoid fancy stack traces size computation (<a href="https://github.com/nicolo-ribaudo"><code>@​nicolo-ribaudo</code></a>)</li>\n</ul>\n</li>\n<li><code>babel-traverse</code>\n<ul>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/14932">#14932</a> fix: isForAwaitStatement is broken (<a href="https://github.com/JLHwung"><code>@​JLHwung</code></a>)</li>\n</ul>\n</li>\n<li>Other\n<ul>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/14872">#14872</a> Use the built-in class fields and private methods rules in ESLint 8 (<a href="https://github.com/JLHwung"><code>@​JLHwung</code></a>)</li>\n</ul>\n</li>\n<li><code>babel-parser</code>\n<ul>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/14920">#14920</a> [estree] attach comments after directives at the end of file (<a href="https://github.com/hegemonic"><code>@​hegemonic</code></a>)</li>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/14900">#14900</a> [ts] allow redeclaring a var/type with the same name as import (<a href="https://github.com/liuxingbaoyu"><code>@​liuxingbaoyu</code></a>)</li>\n</ul>\n</li>\n<li><code>babel-plugin-transform-typescript</code>\n<ul>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/14913">#14913</a> fix: do not remove type import used in TS import= (<a href="https://github.com/JLHwung"><code>@​JLHwung</code></a>)</li>\n</ul>\n</li>\n</ul>\n<h2>v7.19.0 (2022-09-05)</h2>\n<h4>:eyeglasses: Spec Compliance</h4>\n<ul>\n<li><code>babel-parser</code>\n<ul>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/14666">#14666</a> Support private name in decorator member expression (<a href="https://github.com/JLHwung"><code>@​JLHwung</code></a>)</li>\n</ul>\n</li>\n<li><code>babel-helpers</code>, <code>babel-plugin-proposal-async-generator-functions</code>, <code>babel-preset-env</code>, <code>babel-runtime-corejs2</code>, <code>babel-runtime-corejs3</code>, <code>babel-runtime</code>\n<ul>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/14877">#14877</a><code>tc39/ecma262#2819</code><a href="https://github.com/nicolo-ribaudo"><code>@​nicolo-ribaudo</code></a>)</li>\n</ul>\n</li>\n</ul>\n<h4>:rocket: New Feature</h4>\n<ul>\n<li><code>babel-generator</code>, <code>babel-helpers</code>, <code>babel-parser</code>, <code>babel-plugin-proposal-decorators</code>, <code>babel-plugin-syntax-decorators</code>, <code>babel-runtime-corejs2</code>, <code>babel-runtime-corejs3</code>, <code>babel-runtime</code>\n<ul>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/14836">#14836</a> Add 2022-03 decorators version (stage 3) (<a href="https://github.com/nicolo-ribaudo"><code>@​nicolo-ribaudo</code></a>)</li>\n</ul>\n</li>\n<li><code>babel-parser</code>\n<ul>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/14695">#14695</a> [parser] Make <code>decoratorsBeforeExport</code> default to <code>false</code> (<a href="https://github.com/nicolo-ribaudo"><code>@​nicolo-ribaudo</code></a>)</li>\n</ul>\n</li>\n<li><code>babel-generator</code>, <code>babel-parser</code>\n<ul>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/14744">#14744</a> Default to hash syntax for Record&amp;Tuple (<a href="https://github.com/nicolo-ribaudo"><code>@​nicolo-ribaudo</code></a>)</li>\n</ul>\n</li>\n<li><code>babel-standalone</code>\n<ul>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/14867">#14867</a> feat: add proposal-record-and-tuple to standalone (<a href="https://github.com/JLHwung"><code>@​JLHwung</code></a>)</li>\n</ul>\n</li>\n<li><code>babel-helper-create-regexp-features-plugin</code>, <code>babel-helpers</code>, <code>babel-plugin-proposal-duplicate-named-capturing-groups-regex</code>, <code>babel-plugin-transform-named-capturing-groups-regex</code>, <code>babel-standalone</code>\n<ul>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/14805">#14805</a> Add support for the duplicate named capturing groups proposal (<a href="https://github.com/nicolo-ribaudo"><code>@​nicolo-ribaudo</code></a>)</li>\n</ul>\n</li>\n</ul>\n<h4>:bug: Bug Fix</h4>\n<ul>\n<li><code>babel-helper-function-name</code>, <code>babel-helper-wrap-function</code>, <code>babel-plugin-transform-classes</code>\n<ul>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/14897">#14897</a> Fix: class transform should not drop method definition when key contains non-BMP characters (<a href="https://github.com/JLHwung"><code>@​JLHwung</code></a>)</li>\n</ul>\n</li>\n<li><code>babel-plugin-transform-typescript</code>\n<ul>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/14890">#14890</a> fix: TS plugin shouldn\'t remove <code>#privateField!</code> (<a href="https://github.com/liuxingbaoyu"><code>@​liuxingbaoyu</code></a>)</li>\n</ul>\n</li>\n<li><code>babel-parser</code>\n<ul>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/14819">#14819</a> fix: parse a<!-- raw HTML omitted -->&gt;&gt;c as a<!-- raw HTML omitted -->c) (<a href="https://github.com/JLHwung"><code>@​JLHwung</code></a>)</li>\n</ul>\n</li>\n<li><code>babel-helper-builder-react-jsx</code>\n<ul>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/14886">#14886</a> Fix helper-builder-react-jsx compat with Babel 7.9 (<a href="https://github.com/JLHwung"><code>@​JLHwung</code></a>)</li>\n</ul>\n</li>\n</ul>\n<h4>:nail_care: Polish</h4>\n<ul>\n<li><code>babel-core</code>\n<ul>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/11612">#11612</a> Make error message prefixes more descriptive (<a href="https://github.com/eps1lon"><code>@​eps1lon</code></a>)</li>\n<li><a href="https://github-redirect.dependabot.com/babel/babel/pull/11554">#11554</a> Hide internal <code>@babel/core</code> functions in config errors (<a href="https://github.com/nicolo-ribaudo"><code>@​nicolo-ribaudo</code></a>)</li>\n</ul>\n</li>\n</ul>\n<h4>:memo: Documentation</h4>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a href="https://github.com/babel/babel/commit/eb621ac822df8d4656970b95394622957e1f6245"><code>eb621ac</code></a> v7.19.1</li>\n<li><a href="https://github.com/babel/babel/commit/bb8774df4ffb65a8251ac927025b58be301970c6"><code>bb8774d</code></a> chore: Update compat-data (<a href="https://github.com/babel/babel/tree/HEAD/packages/babel-preset-env/issues/14924">#14924</a>)</li>\n<li><a href="https://github.com/babel/babel/commit/70a13e49be1d5d5b33f60f4daed8096531c7028c"><code>70a13e4</code></a> v7.19.0</li>\n<li><a href="https://github.com/babel/babel/commit/05deb6040523c0af4847c5c8f6d1589a0d8d3e89"><code>05deb60</code></a> Enable <code>ban-ts-comment</code> (<a href="https://github.com/babel/babel/tree/HEAD/packages/babel-preset-env/issues/14908">#14908</a>)</li>\n<li><a href="https://github.com/babel/babel/commit/eec95740ca7680a6bd4ac5900b1a91d655449eaa"><code>eec9574</code></a> chore: add eslint rule <code>consistent-type-imports</code> (<a href="https://github.com/babel/babel/tree/HEAD/packages/babel-preset-env/issues/14901">#14901</a>)</li>\n<li><a href="https://github.com/babel/babel/commit/1516a42af21f65a4233eb7d66968da954882a162"><code>1516a42</code></a><code>tc39/ecma262#2819</code><a href="https://github.com/babel/babel/tree/HEAD/packages/babel-preset-env/issues/14877">#14877</a>)</li>\n<li><a href="https://github.com/babel/babel/commit/9f603cf84c32319bc86f1cbdc303500197b36c5a"><code>9f603cf</code></a> v7.18.10</li>\n<li><a href="https://github.com/babel/babel/commit/02df09133b30b78d0138acb46351053ce964bc1a"><code>02df091</code></a> Update babel-polyfills packages (<a href="https://github.com/babel/babel/tree/HEAD/packages/babel-preset-env/issues/14793">#14793</a>)</li>\n<li><a href="https://github.com/babel/babel/commit/a483aa2fbf24ce40d93d25566bf27b1f61e46e2f"><code>a483aa2</code></a> Convert <code>@babel/parser</code> to TypeScript (<a href="https://github.com/babel/babel/tree/HEAD/packages/babel-preset-env/issues/14783">#14783</a>)</li>\n<li><a href="https://github.com/babel/babel/commit/f1ac2906b1066e47503e4d82d0602acd4be94e60"><code>f1ac290</code></a> v7.18.9</li>\n<li>Additional commits viewable in <a href="https://github.com/babel/babel/commits/v7.19.1/packages/babel-preset-env">compare view</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility score](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=@babel/preset-env&package-manager=npm_and_yarn&previous-version=7.9.6&new-version=7.19.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don\'t alter it yourself. You can also trigger a rebase manually by commenting `@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits that have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after your CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge and block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating it. You can achieve the same result by closing it manually\n- `@dependabot ignore this major version` will close this PR and stop Dependabot creating any more for this major version (unless you reopen the PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop Dependabot creating any more for this minor version (unless you reopen the PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop Dependabot creating any more for this dependency (unless you reopen the PR or upgrade to it yourself)\n\n\n</details>',
  created_at: "2022-09-16T13:45:23Z",
  updated_at: "2022-09-16T13:45:25Z",
  closed_at: null,
  merged_at: null,
  merge_commit_sha: "538d37603d97b8d97ecfc5c798e7be13740aa25b",
  assignee: null,
  assignees: [],
  requested_reviewers: [] as Reviewer[],
  requested_teams: [] as Team[],
  labels: [
    {
      id: 3439634349,
      node_id: "LA_kwDOGMjCY87NBKet",
      url: "https://api.github.com/repos/orgx/api/labels/dependencies",
      name: "dependencies",
      color: "0366d6",
      default: false,
      description: "Pull requests that update a dependency file",
    },
  ],
  milestone: null,
  draft: false,
  commits_url: "https://api.github.com/repos/orgx/api/pulls/629/commits",
  review_comments_url:
    "https://api.github.com/repos/orgx/api/pulls/629/comments",
  review_comment_url:
    "https://api.github.com/repos/orgx/api/pulls/comments{/number}",
  comments_url: "https://api.github.com/repos/orgx/api/issues/629/comments",
  statuses_url:
    "https://api.github.com/repos/orgx/api/statuses/b3ff76a91d8a6efa146292afc9a28ea12f5eea0f",
  head: {
    label: "care:dependabot/npm_and_yarn/babel/preset-env-7.19.1",
    ref: "dependabot/npm_and_yarn/babel/preset-env-7.19.1",
    sha: "b3ff76a91d8a6efa146292afc9a28ea12f5eea0f",
    user: {
      login: "orgx",
      id: 74588599,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjc0NTg4NTk5",
      avatar_url: "https://avatars.githubusercontent.com/u/74588599?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/orgx",
      html_url: "https://github.com/orgx",
      followers_url: "https://api.github.com/users/orgx/followers",
      following_url: "https://api.github.com/users/orgx/following{/other_user}",
      gists_url: "https://api.github.com/users/orgx/gists{/gist_id}",
      starred_url: "https://api.github.com/users/orgx/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/orgx/subscriptions",
      organizations_url: "https://api.github.com/users/orgx/orgs",
      repos_url: "https://api.github.com/users/orgx/repos",
      events_url: "https://api.github.com/users/orgx/events{/privacy}",
      received_events_url: "https://api.github.com/users/orgx/received_events",
      type: "Organization",
      site_admin: false,
    },
    repo: {
      id: 415810147,
      node_id: "R_kgDOGMjCYw",
      name: "api",
      full_name: "care/api",
      private: true,
      owner: {
        login: "orgx",
        id: 74588599,
        node_id: "MDEyOk9yZ2FuaXphdGlvbjc0NTg4NTk5",
        avatar_url: "https://avatars.githubusercontent.com/u/74588599?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/orgx",
        html_url: "https://github.com/orgx",
        followers_url: "https://api.github.com/users/orgx/followers",
        following_url:
          "https://api.github.com/users/orgx/following{/other_user}",
        gists_url: "https://api.github.com/users/orgx/gists{/gist_id}",
        starred_url: "https://api.github.com/users/orgx/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/orgx/subscriptions",
        organizations_url: "https://api.github.com/users/orgx/orgs",
        repos_url: "https://api.github.com/users/orgx/repos",
        events_url: "https://api.github.com/users/orgx/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/orgx/received_events",
        type: "Organization",
        site_admin: false,
      },
      html_url: "https://github.com/orgx/api",
      description: " main API",
      fork: false,
      url: "https://api.github.com/repos/orgx/api",
      forks_url: "https://api.github.com/repos/orgx/api/forks",
      keys_url: "https://api.github.com/repos/orgx/api/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/orgx/api/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/orgx/api/teams",
      hooks_url: "https://api.github.com/repos/orgx/api/hooks",
      issue_events_url:
        "https://api.github.com/repos/orgx/api/issues/events{/number}",
      events_url: "https://api.github.com/repos/orgx/api/events",
      assignees_url: "https://api.github.com/repos/orgx/api/assignees{/user}",
      branches_url: "https://api.github.com/repos/orgx/api/branches{/branch}",
      tags_url: "https://api.github.com/repos/orgx/api/tags",
      blobs_url: "https://api.github.com/repos/orgx/api/git/blobs{/sha}",
      git_tags_url: "https://api.github.com/repos/orgx/api/git/tags{/sha}",
      git_refs_url: "https://api.github.com/repos/orgx/api/git/refs{/sha}",
      trees_url: "https://api.github.com/repos/orgx/api/git/trees{/sha}",
      statuses_url: "https://api.github.com/repos/orgx/api/statuses/{sha}",
      languages_url: "https://api.github.com/repos/orgx/api/languages",
      stargazers_url: "https://api.github.com/repos/orgx/api/stargazers",
      contributors_url: "https://api.github.com/repos/orgx/api/contributors",
      subscribers_url: "https://api.github.com/repos/orgx/api/subscribers",
      subscription_url: "https://api.github.com/repos/orgx/api/subscription",
      commits_url: "https://api.github.com/repos/orgx/api/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/orgx/api/git/commits{/sha}",
      comments_url: "https://api.github.com/repos/orgx/api/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/orgx/api/issues/comments{/number}",
      contents_url: "https://api.github.com/repos/orgx/api/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/orgx/api/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/orgx/api/merges",
      archive_url:
        "https://api.github.com/repos/orgx/api/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/orgx/api/downloads",
      issues_url: "https://api.github.com/repos/orgx/api/issues{/number}",
      pulls_url: "https://api.github.com/repos/orgx/api/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/orgx/api/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/orgx/api/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/orgx/api/labels{/name}",
      releases_url: "https://api.github.com/repos/orgx/api/releases{/id}",
      deployments_url: "https://api.github.com/repos/orgx/api/deployments",
      created_at: "2021-10-11T06:51:16Z",
      updated_at: "2022-08-29T12:25:00Z",
      pushed_at: "2022-09-19T10:39:43Z",
      git_url: "git://github.com/orgx/api.git",
      ssh_url: "git@github.com:care/api.git",
      clone_url: "https://github.com/orgx/api.git",
      svn_url: "https://github.com/orgx/api",
      homepage: "",
      size: 7632,
      stargazers_count: 2,
      watchers_count: 2,
      language: "JavaScript",
      has_issues: true,
      has_projects: false,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 1,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 11,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: "private",
      forks: 1,
      open_issues: 11,
      watchers: 2,
      default_branch: "development",
    },
  },
  base: {
    label: "care:development",
    ref: "development",
    sha: "c43acbe8b4f06233c3cefd547f26bafc376d6937",
    user: {
      login: "orgx",
      id: 74588599,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjc0NTg4NTk5",
      avatar_url: "https://avatars.githubusercontent.com/u/74588599?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/orgx",
      html_url: "https://github.com/orgx",
      followers_url: "https://api.github.com/users/orgx/followers",
      following_url: "https://api.github.com/users/orgx/following{/other_user}",
      gists_url: "https://api.github.com/users/orgx/gists{/gist_id}",
      starred_url: "https://api.github.com/users/orgx/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/orgx/subscriptions",
      organizations_url: "https://api.github.com/users/orgx/orgs",
      repos_url: "https://api.github.com/users/orgx/repos",
      events_url: "https://api.github.com/users/orgx/events{/privacy}",
      received_events_url: "https://api.github.com/users/orgx/received_events",
      type: "Organization",
      site_admin: false,
    },
    repo: {
      id: 415810147,
      node_id: "R_kgDOGMjCYw",
      name: "api",
      full_name: "care/api",
      private: true,
      owner: {
        login: "orgx",
        id: 74588599,
        node_id: "MDEyOk9yZ2FuaXphdGlvbjc0NTg4NTk5",
        avatar_url: "https://avatars.githubusercontent.com/u/74588599?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/orgx",
        html_url: "https://github.com/orgx",
        followers_url: "https://api.github.com/users/orgx/followers",
        following_url:
          "https://api.github.com/users/orgx/following{/other_user}",
        gists_url: "https://api.github.com/users/orgx/gists{/gist_id}",
        starred_url: "https://api.github.com/users/orgx/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/orgx/subscriptions",
        organizations_url: "https://api.github.com/users/orgx/orgs",
        repos_url: "https://api.github.com/users/orgx/repos",
        events_url: "https://api.github.com/users/orgx/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/orgx/received_events",
        type: "Organization",
        site_admin: false,
      },
      html_url: "https://github.com/orgx/api",
      description: " main API",
      fork: false,
      url: "https://api.github.com/repos/orgx/api",
      forks_url: "https://api.github.com/repos/orgx/api/forks",
      keys_url: "https://api.github.com/repos/orgx/api/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/orgx/api/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/orgx/api/teams",
      hooks_url: "https://api.github.com/repos/orgx/api/hooks",
      issue_events_url:
        "https://api.github.com/repos/orgx/api/issues/events{/number}",
      events_url: "https://api.github.com/repos/orgx/api/events",
      assignees_url: "https://api.github.com/repos/orgx/api/assignees{/user}",
      branches_url: "https://api.github.com/repos/orgx/api/branches{/branch}",
      tags_url: "https://api.github.com/repos/orgx/api/tags",
      blobs_url: "https://api.github.com/repos/orgx/api/git/blobs{/sha}",
      git_tags_url: "https://api.github.com/repos/orgx/api/git/tags{/sha}",
      git_refs_url: "https://api.github.com/repos/orgx/api/git/refs{/sha}",
      trees_url: "https://api.github.com/repos/orgx/api/git/trees{/sha}",
      statuses_url: "https://api.github.com/repos/orgx/api/statuses/{sha}",
      languages_url: "https://api.github.com/repos/orgx/api/languages",
      stargazers_url: "https://api.github.com/repos/orgx/api/stargazers",
      contributors_url: "https://api.github.com/repos/orgx/api/contributors",
      subscribers_url: "https://api.github.com/repos/orgx/api/subscribers",
      subscription_url: "https://api.github.com/repos/orgx/api/subscription",
      commits_url: "https://api.github.com/repos/orgx/api/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/orgx/api/git/commits{/sha}",
      comments_url: "https://api.github.com/repos/orgx/api/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/orgx/api/issues/comments{/number}",
      contents_url: "https://api.github.com/repos/orgx/api/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/orgx/api/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/orgx/api/merges",
      archive_url:
        "https://api.github.com/repos/orgx/api/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/orgx/api/downloads",
      issues_url: "https://api.github.com/repos/orgx/api/issues{/number}",
      pulls_url: "https://api.github.com/repos/orgx/api/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/orgx/api/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/orgx/api/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/orgx/api/labels{/name}",
      releases_url: "https://api.github.com/repos/orgx/api/releases{/id}",
      deployments_url: "https://api.github.com/repos/orgx/api/deployments",
      created_at: "2021-10-11T06:51:16Z",
      updated_at: "2022-08-29T12:25:00Z",
      pushed_at: "2022-09-19T10:39:43Z",
      git_url: "git://github.com/orgx/api.git",
      ssh_url: "git@github.com:care/api.git",
      clone_url: "https://github.com/orgx/api.git",
      svn_url: "https://github.com/orgx/api",
      homepage: "",
      size: 7632,
      stargazers_count: 2,
      watchers_count: 2,
      language: "JavaScript",
      has_issues: true,
      has_projects: false,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 1,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 11,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: "private",
      forks: 1,
      open_issues: 11,
      watchers: 2,
      default_branch: "development",
    },
  },
  _links: {
    self: {
      href: "https://api.github.com/repos/orgx/api/pulls/629",
    },
    html: {
      href: "https://github.com/orgx/api/pull/629",
    },
    issue: {
      href: "https://api.github.com/repos/orgx/api/issues/629",
    },
    comments: {
      href: "https://api.github.com/repos/orgx/api/issues/629/comments",
    },
    review_comments: {
      href: "https://api.github.com/repos/orgx/api/pulls/629/comments",
    },
    review_comment: {
      href: "https://api.github.com/repos/orgx/api/pulls/comments{/number}",
    },
    commits: {
      href: "https://api.github.com/repos/orgx/api/pulls/629/commits",
    },
    statuses: {
      href: "https://api.github.com/repos/orgx/api/statuses/b3ff76a91d8a6efa146292afc9a28ea12f5eea0f",
    },
  },
  author_association: "NONE",
  auto_merge: null,
  active_lock_reason: null,
  merged: false,
  mergeable: true,
  rebaseable: true,
  mergeable_state: "blocked",
  merged_by: null,
  comments: 0,
  review_comments: 0,
  maintainer_can_modify: false,
  commits: 1,
  additions: 2264,
  deletions: 680,
  changed_files: 2,
};
