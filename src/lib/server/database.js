// In a real app, this data would live in a database,
// rather than in memory. But for now, we cheat.

// NB!!!
// On production memory doesn't last long,
// sometimes it gets cleared.

const users = new Map();

const mapUserResult = (user) => ({
  telegramId: user.telegramId,
  createdAt: user.createdAt,
})

export const getUser = (telegramId) => {
  const user = users.get(telegramId);

  return user ? mapUserResult(user) : undefined;
}

export const getUserWithPassword = ({ telegramId, password }) => {
  const user = users.get(telegramId);

  if (user?.password !== password) {
    return undefined;
  }

  return mapUserResult(user);
}

export const hasUser = (id) => users.has(id);

export const saveUser = ({ telegramId, password, token }) => {
  const newUser = {
    telegramId,
    password,
    token,
    createdAt: new Date(),
  }

  users.set(telegramId, newUser);

  return token;
}

export const validateUserToken = ({ telegramId, token }) => {
  const user = users.get(telegramId);

  return user?.token === token;
}
