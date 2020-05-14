# DND Master

## Overview

The idea for this app is to build components a dnd master can use to plan and play in a campaign.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- Node: 12.13.1
- Dev Keys: Can be requested from Jordan

### Installing

```bash
npm install
```

### Running environment

```bash
# Runs the server for the apis (auto reloads the api server)
npm run server
```

## Deployment

The following process is high level understanding of updating the server.

- The code pushed to `master` branch will also be pushed to Heroku (simultaneously when configured or manually for first deployment).
- Heroku installs server depedencies.

### Server Configuration

The `engines` property is responsible in the `package.json` is used to determine the version of `node` and `npm`.

### First Time Deployment

1. Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
2. After install, login. `heroku login`
3. Link heroku repository. `heroku git:remote -a dndmaster-prod`

### Subsequent Manual Deployment

1. All deployments are done from `master` (i.e. when a commit is pushed to master branch)
2. `git push heroku`
