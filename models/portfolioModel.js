const mongoose = require('mongoose');

const introSchema = new mongoose.Schema({
    welcomeText: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const aboutSchema = new mongoose.Schema({
    description1: {
        type: String,
        required: true,
    },
    description2: {
        type: String,
        required: true,
    },
    skills: {
        type: Array,
        required: true,
    }
});

const educationSchema = new mongoose.Schema({
    institute: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    period: {
        type: String,
        required: true,
    },
    score: {
        type: String,
        required: true,
    },
})

const experienceSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    period: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const projectsSchema = new mongoose.Schema({
    technologies: {
        type: Array,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
});

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
});

module.exports = {
    Intro: mongoose.model("intros", introSchema),
    About: mongoose.model("abouts", aboutSchema),
    Experience: mongoose.model("experiences", experienceSchema),
    Project: mongoose.model("projects", projectsSchema),
    Education: mongoose.model("education", educationSchema),
    Contact: mongoose.model("contacts", contactSchema),
};