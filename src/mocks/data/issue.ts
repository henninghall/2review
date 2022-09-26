type _2reviewType = "bot" | "default" | "personal";

export const issue = (type: _2reviewType) => {
  let id = Math.floor(Math.random() * 100000);
  const userType = type === "bot" ? "Bot" : "User";
  return {
    url: `https://api.github.com/repos/care/cognito-lambdas/issues/${id}`,
    repository_url: "https://api.github.com/repos/care/cognito-lambdas",
    labels_url:
      "https://api.github.com/repos/care/cognito-lambdas/issues/298/labels{/name}",
    comments_url:
      "https://api.github.com/repos/care/cognito-lambdas/issues/298/comments",
    events_url:
      "https://api.github.com/repos/care/cognito-lambdas/issues/298/events",
    html_url: `https://github.com/care/cognito-lambdas/pull/${id}`,
    id: id,
    node_id: "PR_kwDOFZ6Jpc4_M3k0",
    number: id,
    title: "Upgrading to node 1600",
    user: {
      login: "dscdac",
      id: 6484161,
      node_id: "MDQ6VXNlcjY0ODQxNjE=",
      avatar_url: "https://avatars.githubusercontent.com/u/6484161?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/dscdac",
      html_url: "https://github.com/dscdac",
      followers_url: "https://api.github.com/users/dscdac/followers",
      following_url:
        "https://api.github.com/users/dscdac/following{/other_user}",
      gists_url: "https://api.github.com/users/dscdac/gists{/gist_id}",
      starred_url: "https://api.github.com/users/dscdac/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/dscdac/subscriptions",
      organizations_url: "https://api.github.com/users/dscdac/orgs",
      repos_url: "https://api.github.com/users/dscdac/repos",
      events_url: "https://api.github.com/users/dscdac/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/dscdac/received_events",
      type: userType,
      site_admin: false,
    },
    labels: [],
    state: "open",
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 0,
    created_at: "2022-09-19T13:46:34Z",
    updated_at: "2022-09-19T13:46:34Z",
    closed_at: null,
    author_association: "CONTRIBUTOR",
    active_lock_reason: null,
    draft: false,
    pull_request: {
      url: `https://api.github.com/repos/care/cognito-lambdas/pulls/${id}`,
      html_url: `https://github.com/care/cognito-lambdas/pull/${id}`,
      diff_url: "https://github.com/care/cognito-lambdas/pull/298.diff",
      patch_url: "https://github.com/care/cognito-lambdas/pull/298.patch",
      merged_at: null,
    },
    body: "Preparing for release week 39 🤞 ",
    reactions: {
      url: "https://api.github.com/repos/care/cognito-lambdas/issues/298/reactions",
      total_count: 0,
      "+1": 0,
      "-1": 0,
      laugh: 0,
      hooray: 0,
      confused: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
    timeline_url:
      "https://api.github.com/repos/care/cognito-lambdas/issues/298/timeline",
    performed_via_github_app: null,
    state_reason: null,
    score: 1.0,
    _2reviewType: type,
  };
};
