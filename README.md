# simple-news-front

# build

building app:
```
$ npm install
$ ng build
```

next, you can optionally build docker image:
```
$ docker build -t simple-news-front .
```

# run

you can run app in dev mode:
```
$ npm start
```
and open your app at `http://localhost:4200`


Or you can run your docker container:
```
$ docker run -p 80:80 --name simple-news-front simple-news-front
```
than, you can open app at `http://localhost:80`
