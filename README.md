After install the package：

npm run dev to start the project

After auth the login user, you can use getGithubUserId function in index.tsx file to retrieve user info

the api response looks like this:

{
  "login": "ZelinTian",
  "id": 40151653,
  "node_id": "MDQ6VXNlcjQwMTUxNjUz",
  "avatar_url": "https://avatars.githubusercontent.com/u/40151653?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ZelinTian",
  "html_url": "https://github.com/ZelinTian",
  "followers_url": "https://api.github.com/users/ZelinTian/followers",
  "following_url": "https://api.github.com/users/ZelinTian/following{/other_user}",
  "gists_url": "https://api.github.com/users/ZelinTian/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ZelinTian/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ZelinTian/subscriptions",
  "organizations_url": "https://api.github.com/users/ZelinTian/orgs",
  "repos_url": "https://api.github.com/users/ZelinTian/repos",
  "events_url": "https://api.github.com/users/ZelinTian/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ZelinTian/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 10,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2018-06-10T21:48:16Z",
  "updated_at": "2023-06-30T21:28:38Z"
}


TODO:
1. After the user login, the url is redirect to dashboard, but the UI needs to be rendered by mannually refreshing the browser.
2. The signout button has no css style now. It is next to the user icon on the right side of topbar.
3. Landing page and dashboard are just structure.