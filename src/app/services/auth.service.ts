export class AuthService {
  users = [];
  constructor() {}

  save(user) {
    this.users.push(user);
  }

  edit(user,id) {
    this.users[id] = user;
  }

  delete(id) {
    this.users[id] = null;
  }
}
