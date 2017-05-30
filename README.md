# Lee Reamsnyders's code test for Validic

> A Vue.js project

## How to run this

Unfortunately I can't just slap the static files onto any old server; you need to be running a server with a proxy to be able to access the Github jobs API when you're cross-origin.

Here's how to get it running locally:

1. If you don't have it already, install `node`. If you're on a Mac and using homebrew already, `brew install node` is the way to go. Otherwise, you can [use the official installer](https://nodejs.org/en/).
1. After `node` is installed, update the included version of `npm`:

    ```bash
    npm install -g npm
    ```

1. Navigate to this project's directory
1. Install all dependencies, which will take a little while:

    ```bash
    npm install
    ```

1. Run the application:

    ```bash
    npm start
    ```

1. Once the server starts up (you should see "`> Listening at http://localhost:8080`" in the console), your browser should automatically open. If it doesn't for some reason, try [http://localhost:8080](http://localhost:8080)
1. Run unit tests with `npm test`

Thanks!
