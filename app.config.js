import * as dotenv from 'dotenv';

// initialize dotenv
dotenv.config();

export default ({ config }) => ({
    ...config,
    hooks:{
      postPublish: [
        {
          file: "sentry-expo/upload-sourcemaps",
          config: {
            organization: process.env.SENTRY_ORG,
            project: process.env.SENTRY_PROJECT
          }
        }
      ]
    },
   
  });