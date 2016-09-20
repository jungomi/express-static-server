# Express static server

A simple express server to server static content.

## Usage

The default `hostname` is `localhost` and the default `port` is `2323`.
These can be changed with the environment variables `HOSTNAME` and `PORT`
respectively.

```sh
npm install            # installs dependencies
npm start              # serves the current directory
npm start $(pwd)/dist/ # serves the directory ./dist/ (requires an absolute path)
PORT=8080 npm start    # serves current directory on port 8080
```
