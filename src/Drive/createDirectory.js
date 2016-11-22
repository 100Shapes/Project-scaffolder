import googleDrive from "google-drive";
import getAuthToken from "./auth";

export const createDirectory = ({
  meta,
  params = {},
  cb = body => body
}) => {

  const defaultMeta = {
    mimeType: 'application/vnd.google-apps.folder'
  };

  const defaultParams = {
    fields: `id,permissions(id,role)`
  };

  return getAuthToken().then(token => {
    return new Promise((resolve, reject) => {
      return googleDrive(token)
        .files()
        .insert(
          {
            ...defaultMeta,
            ...meta
          },
          {
            ...defaultParams,
            params
          },
          (err, response, body) => {
            if (err) {
              return reject(err);
            }
            const result = cb(JSON.parse(body));
            return resolve(result);
          }
        );
    });
  })
};

export default createDirectory;