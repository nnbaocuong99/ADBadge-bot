FROM node:16 
#you dont have to maintainer because this step gonna fail if u dont have config file so better leave it empty

#this part will create the bot's directory
RUN mkdir -p /usr/src/bot
WORKDIR /usr/src/bot

#copy the files
COPY package.json . /usr/src/bot/ 
RUN npm install
COPY . /usr/src/bot

CMD ["node", "index.js"]