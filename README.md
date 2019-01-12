
## Demo Gif Image ##

![Demo Gif](https://drive.google.com/uc?export=view&id=148aArRyQoN4Jg6-HpXCs6pEwL67H-mAu)

## Youtube Instalation Guide ##

[![Youtube Instalation Guide](http://img.youtube.com/vi/TGWlZkFIuV8/0.jpg)](https://www.youtube.com/watch?v=TGWlZkFIuV8 "Youtube Instalation Guide")

## Getting started ##

### Get a copy of the plugin ###

You can install it through npm.
 
```js
$ npm install rs-chat
```

### Setup for nodejs ###

Open index.js file and put the below code and start nodejs server

```js
var app = require('http')
var chat = require('chat')(app);

chat.init({
  host     : 'localhost', // DB host
  user     : 'user', // DB User
  password : 'password', // DB Password
  database : 'database' // DB Name
});

```

### Create table ### 

```js
CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `toId` int(11) NOT NULL,
  `msg` mediumtext COLLATE utf8mb4_bin NOT NULL,
  `type` int(1) UNSIGNED NOT NULL DEFAULT '0' COMMENT '0 / null = text, 1 = image, 2=video',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `read_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;


```

### Load the required files ### 

Inside the page's head tag include the CSS file.

```js
<link rel="stylesheet" type="text/css" href="https://unpkg.com/rs-chat@1.0.7/dist/rs-chat.min.css">
```

In the page's footer, just before &lt;/body&gt;, include the required JavaScript files.

```js
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js"></script>

<script type="text/javascript" href="https://unpkg.com/rs-chat@1.0.7/dist/rs-chat.min.js"></script>

```

### Instantiate the chat plugin ### 

```js
<script type="text/javascript">
  RSChat.init({
    socketUrl: 'http://localhost:8080/' // server url,
    userId: '1', // logged in user id
    name: 'ravi shukla', // logged in user name
  });
</script>
```


### Call the below function to open chat box ### 

```js
RSChat.start('user_id', 'username')
```


## Global Settings

S.No|Options|Type|Purpuse
---|---|---|---
1|emoji(optional)|Bool|Enable emoji feature or not
3|iconSize(optional)|Integer|Emoji size
2|media(optional)|Bool|Enable / Disable media
4|assetPath|String|Asset path for the media
6|supportedFile(optional)|Array|Supported media file
5|invalidFileMessage(optional)|String|Message on wrong media file
7|perPage(optional)|Integer|Pagination for the chat list
8|marginRight(optional)|Integer|Margin for each chat window
9|beforeDialogOpen(optional)|Promise|Callback before chat box open


### Example ###

Online examples: [https://rschatplugin.wordpress.com](https://rschatplugin.wordpress.com)


### Support ###

If you found a bug please submit it in the Issues.

If you need help with implementing the chat in your project, You can mail me at ravishkl5@gmail.com

### Suggestion ###

If you have any suggestion, You can write mail to me at ravishkl5@gmail.com

