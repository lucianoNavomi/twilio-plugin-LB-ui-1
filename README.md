# Your custom Twilio Flex Plugin

Twilio Flex Plugins allow you to customize the appearance and behavior of [Twilio Flex](https://www.twilio.com/flex). If you want to learn more about the capabilities and how to use the API, check out our [Flex documentation](https://www.twilio.com/docs/flex).

## Setup

Make sure you have [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com) installed.

Afterwards, install the dependencies by running `npm install`:

```bash
cd 

# If you use npm
npm install
```

## Development

In order to develop locally, you can use the Webpack Dev Server by running:

```bash
twilio flex:plugins:start

 » Could not find profile.
 » To create the profile, run:

  twilio profiles:create

Alternatively, twilio-cli can use credentials stored in environment variables:

# OPTION 1 (recommended)
export TWILIO_ACCOUNT_SID=your Account SID from twil.io/console
export TWILIO_API_KEY=an API Key created at twil.io/get-api-key
export TWILIO_API_SECRET=the secret for the API Key

# OPTION 2
export TWILIO_ACCOUNT_SID=your Account SID from twil.io/console
export TWILIO_AUTH_TOKEN=your Auth Token from twil.io/console

Once these environment variables are set, a twilio-cli profile is not required and you may skip the "login" step.
```

This will automatically start up the Webpack Dev Server and open the browser for you. Your app will run on `http://localhost:3000`. If you want to change that you can do this by setting the `PORT` environment variable:

```bash
PORT=3001 npm start
```

When you make changes to your code, the browser window will be automatically refreshed.

## Deploy

When you are ready to deploy your plugin, in your terminal run:

```bash
twilio flex:plugins:deploy --major --changelog "Adding Bing as search engine" --description "First Plugin on Flex"
```

This will publish your plugin as a Private Asset that is accessible by the Functions & Assets API. If you want to deploy your plugin as a Public Asset, you may pass --public to your deploy command:

```bash
twilio flex:plugins:deploy --major  --public --changelog "Adding Bing as search engine" --description "First Plugin on Flex"
```

## Release

WInorder to enable your plugin, run:

```bash
twilio flex:plugins:release --name "First Plugin Release" --description "Enabling Plugin Sample"--plugin plugin-sample@1.0.0
```


For more details on deploying your plugin, refer to the [deploying your plugin guide](https://www.twilio.com/docs/flex/plugins#deploying-your-plugin).

Note: Common packages like `React`, `ReactDOM`, `Redux` and `ReactRedux` are not bundled with the build because they are treated as external dependencies so the plugin will depend on Flex to provide them globally.