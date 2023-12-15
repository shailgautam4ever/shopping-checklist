// Helper function
let retry = 0;

export const getUniqueId = (list) => {
  const randomId = Math.round(Math.random() * 10);

  const index = list.findIndex((v) => v.id == randomId);

  if (index == -1) {
    return randomId;
  }
  console.log('recursive function', retry++);

  if (retry > 15) {
    throw new Error('It might end up infinately');
  }
  return getUniqueId(list);
};
