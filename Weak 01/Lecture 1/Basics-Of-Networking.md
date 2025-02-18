# All About HTTP & HTTPS

# Http [Hyper text transfer protocol]

- HyperText - it is a kind of web decument.
- Transfer - we can transfer content between different domains and different protocols.
- Protocol - It is a set of rule that the browser is following.

# Important information about the http

# Human readable

- Network Tab visibility
- Inspect elements [Go to the browser, write click on the mouse and there you will see the option inspect element]
- Page Source [Go to the browser, write click on the mouse and there you will see the option page source]

# Stateless Protocol

- when you play the game and that time you have some work then you pause the game and then after some time you go back to your game again(re-open) then you have the state that they follow.
- but in browser case http does not follow any state.if you close your browser and reopen it at that time you will se the browser will close your information and again restart you browsing.

# Session

- Stored data between fronted and backended sessions

      [Browser]  -------------------  [Server]
                          |
                          |
       Exchange/stored data in Cookies formate

# Http - Headers

    - Client --> User
    - Browser info --> Saffari,yahoo etc.
    - Date & Time
    - Cookies to store

# Request - Response Model

<!-- [Get,Post,Delete] ---> Verb -->
<!-- http://www.google.com ---> URL(Uniform resource locator) -->
                    Get
- [Browser] -------------------> [Server]   
            <-------------------
                       Post
<!-- [This is TCP connection for now(but connection is multiple types(it can be TCP,UDP,FTP,etc.))] -->
# Summary of R-R Model:-

- Setup TCP connection
- Exchange TLS Certification/configuration
- send - [verb + URL + data to server]
- get the Response back with status code(200,404,500) and data(img,svg,text,etc)
- TCP connection is closed (state less)

<!-- Question -->
<!-- How may port in internet. -->
