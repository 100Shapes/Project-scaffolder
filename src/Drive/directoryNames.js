export const generateName = ({
  prefix,
  client,
  project
}) => {
  return `${prefix} : ${client} : ${project}`
};

export default generateName;