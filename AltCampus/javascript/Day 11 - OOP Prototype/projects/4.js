/*
# Object Creation

User

## Create in all 4 formats

- Using function to create object
- Using Object.create
- Using Pseudoclassical Way
- Using Class

* properties (data) -
  name
  id
  password
  noOfProjects
* methods -
  getUsername -> return username
  getPassword -> returns password
  getProjects -> return number of project
  changeUsername -> returns old username
  changePassword -> returns old password
  incrementProject -> returns updated number of projects
  decrementProject -> returns updated number of projects
*/
// ANS:
// USING FUNCTION TO CREATE OBJECT
function createUser0(name, id, password, noOfProjects){
  let user = {};
  user.name = name;
  user.id = id;
  user.password = password;
  user.noOfProjects = noOfProjects;
  user.getUsername = function(){
    return this.name;
  };
  user.getPassword = function(){
    return this.password;
  };
  user.getProjects = function(){
    return this.noOfProjects;
  };
  user.changeUsername = function(){
    let oldName = this.name;
    this.name = prompt("Enter the new username: ");
    return oldName;
  };
  user.changePassword = function(){
    let oldPass = this.password;
    this.password = prompt("Enter new password: ");
    return oldPass;
  };
  user.incrementProject = function(){
    return this.noOfProjects++;
  };
  user.decrementProject = function(){
    return this.noOfProjects--;
  };
  return user;
}

let user0 = createUser0("user0", 1, "user0", 1);
user0.incrementProject();
user0.incrementProject();
user0.decrementProject();
console.log(user0);
console.log(user0.getUsername());
console.log(user0.getPassword());
console.log(user0.getProjects());
console.log("\n\n");

// USING OBJECT.CREATE
let userMethods = {
  getUsername: function(){
    return this.name;
  },
  getPassword: function(){
    return this.password;
  },
  getProjects: function(){
    return this.noOfProjects;
  },
  changeUsername: function(){
    let oldName = this.name;
    this.name = prompt("Enter the new username: ");
    return oldName;
  },
  changePassword: function(){
    let oldPass = this.password;
    this.password = prompt("Enter new password: ");
    return oldPass;
  },
  incrementProject: function(){
    return this.noOfProjects++;
  },
  decrementProject: function(){
    return this.noOfProjects--;
  },
};

function createUser(name, id, password, noOfProjects){
  let user = Object.create(userMethods);
  user.name = name;
  user.id = id;
  user.password = password;
  user.noOfProjects = noOfProjects;
  return user;
}

let user1 = createUser("user1", 1, "user1", 1);
user1.incrementProject();
user1.incrementProject();
user1.decrementProject();
console.log(user1);
console.log(user1.getUsername());
console.log(user1.getPassword());
console.log(user1.getProjects());
console.log("\n\n");

// USING PSEUDOCLASSICAL WAY
function User(name, id, password, noOfProjects){
  this.name = name;
  this.id = id;
  this.password = password;
  this.noOfProjects = noOfProjects;
}

User.prototype.getUsername = function(){
  return this.name;
};
User.prototype.getPassword = function(){
  return this.password;
};
User.prototype.getProjects = function(){
  return this.noOfProjects;
};
User.prototype.changeUsername = function(){
  let oldName = this.name;
  this.name = prompt("Enter the new username: ");
  return oldName;
};
User.prototype.changePassword = function(){
  let oldPass = this.password;
  this.password = prompt("Enter new password: ");
  return oldPass;
};
User.prototype.incrementProject = function(){
  return this.noOfProjects++;
};
User.prototype.decrementProject = function(){
  return this.noOfProjects--;
};

let user2 = new User("user2", 1, "user2", 1);
user2.incrementProject();
user2.incrementProject();
user2.decrementProject();
console.log(user2);
console.log(user2.getUsername());
console.log(user2.getPassword());
console.log(user2.getProjects());
console.log("\n\n");


// USING CLASS
class User1{
  constructor(name, id, password, noOfProjects){
    this.name = name;
    this.id = id;
    this.password = password;
    this.noOfProjects = noOfProjects;
  }
  getUsername(){
    return this.name;
  }
  getPassword(){
    return this.password;
  }
  getProjects(){
    return this.noOfProjects;
  }
  changeUsername(){
    let oldName = this.name;
    this.name = prompt("Enter the new username: ");
    return oldName;
  }
  changePassword(){
    let oldPass = this.password;
    this.password = prompt("Enter new password: ");
    return oldPass;
  }
  incrementProject(){
    return this.noOfProjects++;
  }
  decrementProject(){
    return this.noOfProjects--;
  }
};

let user3 = new User1("user3", 1, "user3", 1);
user3.incrementProject();
user3.incrementProject();
user3.decrementProject();
console.log(user3);
console.log(user3.getUsername());
console.log(user3.getPassword());
console.log(user3.getProjects());
console.log("\n\n");
