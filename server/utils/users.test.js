const expect = require('expect');

const {Users} = require('./users');

beforeEach('User',()=>{
    users = new Users();
    users.users =[{
        id : '1',
        name: 'Vishal',
        room: 'pmec'
    },
    {
        id : '2',
        name: 'Ashutosh',
        room: 'cse'
    },
    {
        id : '3',
        name: 'Sangharsh',
        room: 'pmec'
    }]
});

describe('Users',()=>{
    it('should add new user',()=>{
        var users = new Users();
        var user ={
            id: '345',
            name: 'vishal',
            room: 'pmec'
        };
        var resUser = users.addUser(user.id,user.name,user.room);
        expect(users.users).toEqual([user]);
    });
    it('should return names for pmec',()=>{
        var userList = users.getUserList('pmec');
        expect(userList).toEqual(['Vishal','Sangharsh']);
    });
    it('should return names for cse',()=>{
        var userList = users.getUserList('cse');
        expect(userList).toEqual(['Ashutosh']);
    });
    it('should remove a user ',()=>{
        var userId='3';
        var user = users.removeUser(userId);
        var removed = users.getUser(userId);
        expect(removed).toBeUndefined();
      
    });
    it('should not remove user ',()=>{
        var userId='3';
        var user = users.removeUser(userId);
        var removed = users.getUser('1');
        expect(removed).toBeTruthy();
    });
    it('should find user',()=>{
        var userId = '3';
        var user = users.getUser(userId);
        expect(user.id).toEqual(userId);
    });
    it('should not find user',()=>{
        var userId = '4';
        var user = users.getUser(userId);
        expect(user).toBeUndefined();
    });
});