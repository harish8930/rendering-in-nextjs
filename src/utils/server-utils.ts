import "server-only";

export const serverSideFunction = () => {
  console.log(`use Multiple Library,
    use environment variables,
    interact with database,
    process confidential information`);
  return "Server Result";
};
