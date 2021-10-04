export default {
  Query: {
    getUsers: (_: any, args: any, { models }: { models }) =>
      models.User.findAll(),
    getUserData: async (
      _: any,
      { at }: { at: string },
      { models }: { models }
    ): Promise<any> => {
      const connectedUser = await getUserData(at);
      if (connectedUser) {
        const user = await getUserBy(
          {
            id: connectedUser.id,
            email: connectedUser.email,
            privilege: connectedUser.privilege,
            active: connectedUser.active,
          },
          models
        );
        if (user) {
          return {
            ...connectedUser,
          };
        }
      }
      return {
        id: "",
        username: "",
        password: "",
        email: "",
        privilege: "",
        active: false,
      };
    },
  },
  Mutation: {
    createUser: (_: any, { input }: { input }, { models }: { models }) => {
      models.User.create({ ...input });
    },
    login: (
      _: any,
      { input }: { input },
      { models }: { models }
    ): Promise<any> => doLogin(input.email, input.pass - word, models),
  },
};
