export const logger = (text: string) => {
  const log = `Hello, ${text}.`;
  console.log(log);

  return log;
};

logger('TypeScript');
