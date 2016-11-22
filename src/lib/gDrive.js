import googleDrive from "google-drive";
import getAuthToken from "./auth";

const PROJECT_FOLDER_ID = '0B4UHQ-MIK1dseHRqM1IxWFh4a00';

export const generateProjectDirString = ({
  client,
  project
}) => {
  return `Project : ${client} : ${project}`
};

export const createDriveDirectory = ({
  token,
  client,
  project
}) => {

  const meta = {
    title: generateProjectDirString({client, project}),
    description: `Project directory for the ${project} project with${client}`,
    mimeType: 'application/vnd.google-apps.folder',
    parents: [{
      id: PROJECT_FOLDER_ID
    }]
  };

  const params = {};

  return new Promise((resolve, reject) => {

    googleDrive(token)
      .files()
      .insert(
        meta,
        params,
        (err, response, body) => {
          if (err) {
            return reject(err);
          }
          return resolve(JSON.parse(body));
        }
      );

  });

};

export const scaffold = ({
  client,
  project
}) => {

  const getparams = new Promise(resolve => {
    return getAuthToken().then(token => {
      resolve({
        token,
        client,
        project
      })
    });
  });

  getparams
    .then(createDriveDirectory);

};

export default scaffold;
