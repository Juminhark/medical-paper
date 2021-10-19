# medical-pager

- [site](https://zen-northcutt-ae2aa7.netlify.app/)
- [Build and Deploy a Full Stack Realtime Chat Messaging App with Authentication & SMS Notifications - JavaScript Mastery
  ](https://www.youtube.com/watch?v=MJzbJQLGehs)

## client

```sh
> npx create-react-app client

> cd client

> code .

> yarn add stream-chat stream-chat-react universal-cookie
```

- [stream](https://getstream.io/)

## server

- init

```sh
> npm init -y
> npm install bcrypt crypto dotenv express getstream stream-chat nodemon twilio
> npm install cors
```

## [twilio](https://www.twilio.com/console/gate)

## Deployment

- [heroku](https://dashboard.heroku.com/)
- [netlify](https://www.netlify.com/)

```sh
> npm run build

// .env로 key를 숨겼기때문에 deploy 과정에서 key_value 기입필요
```
