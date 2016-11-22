import generateName from "./directoryNames";
import createDirectory from "./createDirectory";

const PROJECT_FOLDER_ID = '0B4UHQ-MIK1dseHRqM1IxWFh4a00';
// const OPSBOT_PERMISSION = '17132856681646759014';

export const createProjectDirectory = ({
  client,
  project
}) => {

  const meta = {
    title: generateName({prefix: 'Project', client, project}),
    description: `Design directory for the ${project} project with ${client}.`,
    parents: [{
      id: PROJECT_FOLDER_ID
    }]
  };

  const params = {
    fields: `id,permissions(id,role)`
  };

  return createDirectory({
    meta,
    params,
    cb({id}) {
      return {
        parent: id,
        client,
        project
      }
    }
  })

};

export const createDesignDirectory = ({
  client,
  project,
  parent
}) => {

  const meta = {
    title: generateName({prefix: 'Design', client, project}),
    description: `Design directory for the ${project} project with ${client}.`,
    parents: [{
      id: parent
    }]
  };

  return createDirectory({
    meta
  })

};

export const scaffold = params => {

  createProjectDirectory(params)
    .then(createDesignDirectory);

};

export default scaffold;
