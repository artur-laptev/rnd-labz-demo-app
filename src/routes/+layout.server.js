export const load = ({ locals }) => {
  const { user } = locals;

  return {
    isAuthenticated: !!user
  };
};
