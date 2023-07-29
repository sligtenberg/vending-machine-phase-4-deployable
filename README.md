# README

# VendVille introduction

VendVille is a deployable remake of my phase 4 project with the FlatIron School. It is a social network of vending machines. Users may create vending machines and populate them with snacks. Users can browse and shop from other users' vending machines.

# Instructions

Start by creating an account or logging in. The home page contains instructions  for using the app.

# Local Implementation

Repo: https://github.com/sligtenberg/vending-machine-phase-4-deployable
Live app: https://vending-machine-phase-4-deployable-app.onrender.com/

Ruby 2.7.4
Rails 7.0.6
Node v16.17

To install and run Vendville locally, first clone the repository to your local environment. From the project root directory, run the following commands:

$ bundle install
$ rails db:create
$ rails db:migrate
$ rails db:seed
$ rails s

These commands install dependencies, create and seed the database, and start the local backend server at localhost:3000. In another terminal window, run:

$ npm start --prefix client

# Notes and plans

At the moment, when a snack is purchased, all that happens is a change in the inventory quantity. The next step for Vendville is to implement a money tracking scheme, whereby users have a wallet with money in it, use the money to buy snacks, and earn money when snacks are bought from their machines. This will require a database with money denominations, and it will require vending machines to calculate and make change. My other vending machine project - Stevo's Snack Samplere - exhibits some of these functionalities: 

Stevo's Snack Sampler repo: https://github.com/sligtenberg/vending-machine-phase-1-deployable
Stevo's Snack Sampler live app: https://vending-machine-phase-1-deployable-app.onrender.com