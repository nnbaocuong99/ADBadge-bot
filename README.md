<h1 align="center"> ✨ 1 time use-bot to get the active devloper badge ✨ </h1>

> this is new version. I've deleted the old one because the old code no longer works.

# ✨ As you know, Summary
- Discord has launched a brand-new badge called [Active Developer Badge](https://support-dev.discord.com/hc/en-us/articles/10113997751447-Active-Developer-Badge) and this is not a limited-time event, and there are no plans to stop offering it.
- used and got myself and a few more accounts this badges so i decided to share it. i really dont mind everybody can make basic bot, just take it. i dont have any license or tried to claim or steal from anyone.

---

# ✨ usage / locahosting 


if u r not plan to host ur bot on the vps or a cloud server pls follow these step:
1. on [Discord Developer Portal](https://discord.com/developers/applications) create an appplication and build a bot.
2. click `reset token` to get or bot token (dont forget to storage and DO NOT let anyone know ur bot token!)
3. on your device, install [Node](https://nodejs.org/en/) to run your bot and you also need [Git](https://git-scm.com) to control your source code, repo,...
4. if u dont have any IDE get urself 1 (for example VScode) or a `terminal` in the directory. 
5. there are 2 ways, if you

#### dont have this repo on ur device: 

- run this command to clone the repo 
```
$ git clone https://github.com/nnbaocuong99/archived-badge-bot
``` 
- *use an IDE (Integrated Development Environment)* to open the project or basically open a terminal in the directory. if you opened a terminal in another location remember to `cd/path-of-your-project` into the project folder. (for example: `cd/users/Desktop/Downloaded-folder`)
- run `npm install` or `npm i` to install the dependencies.
- run this but replace my example token to ur own token
```
$ npm run ur_bot_token
$ npm run OTg5MDE1MjM0NjU0MTM0MzAy.G2dFj9.MtVIU-1XM37rNp7HjsXm76a0kpkwhV9S-9-ZM8
``` 

#### already cloned or downloaded the source code: 

- use vscode to open it and run `npm install` / `npm i` on the terminal. cd into the directory if u use any single terminal and run the same command to install the dependencies.

- run this command 
```
$ npm run ur_bot_token
$ npm run OTg5MDE1MjM0NjU0MTM0MzAy.G2dFj9.MtVIU-1XM37rNp7HjsXm76a0kpkwhV9S-9-ZM8
```` 

---

## ✨ run the command and get ur own the badge

- if ur bot successfully started and got an `online` status, invite it using the URL created on the Dev portal site.
- use the `/hithere` command by type `/` on the chat and select you bot
- if u still uneligible, that is because ur bot is new even brand new and it take abt 24h for ur bot to be fully registered as "active" on discord 
- dont forget to turn on the `"Use data to improve Discord"` in User `settings -> privacy` because at least one person using ur bot need that turned on in order for us to track command events.

---

## ✨ others:

- package: https://www.npmjs.com/settings/nnbaocuong99/packages
- Dockerfile: [here](https://github.com/nnbaocuong99/Activedev-badge-bot/blob/main/Dockerfile)

---

## ✨ bonus some extra command if u use docker:

1. if u dont wanna use my Dockerfile, just create ur own
`nano` or `touch` Dockerfile

2. move to ur discord bot directory.
```
$ cd ~/your-directory
```

3. build it (. means u gonna build it from th
```
$ docker build -t -d your-directory .
```

4. run it
```
$ docker run -d your-directory
```

## common commands:
1. list all docker processes:
```
$ docker ps or docker ps -a
```

2. stop the docker container (discord bot):
```
$ docker stop <CONTAINER ID>
```

3. restart the docker container:
```
$ docker restart <CONTAINER ID>
```
