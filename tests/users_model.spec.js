const mockDb = require('mock-knex');
const knex = require('knex')({client: 'pg'});
const userModel = require('../users/users_model');
const { query } = require('express');

const tracker = require('mock-knex').getTracker();
tracker.install();
tracker.on('query', (query)=>{
    query.response([{
        id: 4,
        first_name: "Jerry",
        last_name: "Smith",
        username: "Job4Jer",
        password: 'password123',
        email: 'getajob@jerfakemail.com'
    }])
})

test('users find', async()=>{
    const res = await userModel.find();
    expect(res).toHaveLength(3);
})

test('users findById', async()=>{
    const res = await userModel.findById(3);
    expect(res).toHaveProperty('id');
})

test.skip('users findBy', async()=>{
    const res = await userModel.findBy(2,{username: 'EmCNerd'});
    expect(res[2]).toHaveProperty('username');
})

test.skip('users update', async()=>{
    const res = await userModel.update(3, {first_name: 'Sleepy'});
    expect(res).toHaveProperty('first_name');
})
