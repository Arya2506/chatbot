import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.models.js';

dotenv.config();

const users = [
    { name: "Alice", email: "alice@example.com", password: "password123" },
    { name: "Bob", email: "bob@example.com", password: "password123" },
    { name: "Charlie", email: "charlie@example.com", password: "password123" },
    { name: "David", email: "david@example.com", password: "password123" },
    { name: "Eve", email: "eve@example.com", password: "password123" },
    { name: "Frank", email: "frank@example.com", password: "password123" },
    { name: "Grace", email: "grace@example.com", password: "password123" },
    { name: "Hank", email: "hank@example.com", password: "password123" },
    { name: "Ivy", email: "ivy@example.com", password: "password123" },
    { name: "Jack", email: "jack@example.com", password: "password123" }
];

export const seedUsers = async () => {
    try {
        console.log('🔄 Seeding users...');
        await User.insertMany(users);
        console.log('✅ Users seeded successfully.');
    } catch (error) {
        console.error('❌ Error seeding users:', error);
    }
};

//this data is used to seed the database with some initial data(user's information)