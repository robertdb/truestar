export const parseProjectById = (projects) => {
  const bachProject = projects.splice(0, 25);
  return bachProject.map(({ id }) => id);
};

export const splitToChunks = (array, parts) => {
  let result = [];
  for (let i = parts; i > 0; i--) {
    result.push(array.splice(0, Math.ceil(array.length / i)));
  }
  return result;
};

const stripHtml = (str) => str.replace(/<\/?[^>]+(>|$)/g, "");

export const parseProjects = (projects) => {
  return projects.map(
    ({ project: { id, lastUpdated, startDate, description, title } }) => ({
      id,
      lastUpdated,
      startDate,
      description: stripHtml(description),
      title: stripHtml(title),
      favorite: false,
      selected: false,
      url: `https://techport.nasa.gov/view/${id}`,
    })
  );
};
