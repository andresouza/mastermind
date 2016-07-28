# Mastermind Challenge

This is a Challenge for the company AxiomZen made during the VanHackathon 2016.

This project is using the API made by [Adão Raul](https://github.com/adaoraul/mastermind).

## Screens

### Login
![ScreenShot](https://s3-sa-east-1.amazonaws.com/axiomzen-mastermind/authentication.png)

### Games
![ScreenShot](https://s3-sa-east-1.amazonaws.com/axiomzen-mastermind/games.png)

### Create game
![ScreenShot](https://s3-sa-east-1.amazonaws.com/axiomzen-mastermind/create.png)

### Trying to play your own game
![ScreenShot](https://s3-sa-east-1.amazonaws.com/axiomzen-mastermind/error.png)

### Play game
![ScreenShot](https://s3-sa-east-1.amazonaws.com/axiomzen-mastermind/gameplay.png)

### Win game
![ScreenShot](https://s3-sa-east-1.amazonaws.com/axiomzen-mastermind/game-won.png)

### End of game
![ScreenShot](https://s3-sa-east-1.amazonaws.com/axiomzen-mastermind/game-view.png)


## Running Locally

Make sure you have [Ruby](http://ruby-lang.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ git clone git@github.com:andresouza/mastermind.git # or clone your own fork
$ cd mastermind
$ bundle install
$ npm install
$ bower install
$ rackup
```

Your app should now be running on [localhost:9292](http://localhost:9292/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## TODO
- Create a real time interaction between the codemaker and codebreaker;
- Create a random game mode;
- Improve the design.
