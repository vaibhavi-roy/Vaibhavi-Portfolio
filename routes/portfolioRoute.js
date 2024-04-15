const router = require("express").Router();
const {
    Intro,
    About,
    Project,
    Contact,
    Experience,
    Education,
} = require("../models/portfolioModel");
const { User } = require("../models/userModel");

// get all portfolio data
router.get("/get-portfolio-data", async (req, res) => {
    try {
        const intros = await Intro.find();
        const abouts = await About.find();
        const projects = await Project.find();
        const contacts = await Contact.find();
        const experiences = await Experience.find();
        const education = await Education.find();

        res.status(200).send({
            intro: intros[0],
            about: abouts[0],
            projects: projects,
            contact: contacts[0],
            experiences: experiences,
            education: education,
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

//update intro
router.post('/update-intro', async (req, res) => {
    try {
        const intro = await Intro.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: Intro,
            success: true,
            message: "Intro updated successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
})

//update about
router.post('/update-about', async (req, res) => {
    try {
        const about = await About.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: about,
            success: true,
            message: "About updated successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
})


//add-education
router.post('/add-education', async (req, res) => {
    try {
        const education = new Education(req.body);
        await education.save();
        res.status(200).send({
            data: education,
            success: true,
            message: "Education added successfully",
        })
    } catch (error) {
        res.status(500).send(error);
    }
})

//update education
router.post('/update-education', async (req, res) => {
    try {
        const education = await Education.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: Education,
            success: true,
            message: "Education updated successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
})

//delete education
router.post('/delete-education', async (req, res) => {
    try {
        const education = await Education.findOneAndDelete({ _id: req.body._id });
        res.status(200).send({
            data: education,
            success: true,
            message: "Education Deleted successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
})

//add-experience
router.post('/add-experience', async (req, res) => {
    try {
        const experience = new Experience(req.body);
        await experience.save();
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience added successfully",
        })
    } catch (error) {
        res.status(500).send(error);
    }
})

//update experience
router.post('/update-experience', async (req, res) => {
    try {
        const experience = await Experience.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: Experience,
            success: true,
            message: "Experience updated successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
})

//delete experience
router.post('/delete-experience', async (req, res) => {
    try {
        const experience = await Experience.findOneAndDelete({ _id: req.body._id });
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience Deleted successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
})

// add project
router.post("/add-project", async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(200).send({
            data: project,
            success: true,
            message: "Project added successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// update project
router.post("/update-project", async (req, res) => {
    try {
        const project = await Project.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: project,
            success: true,
            message: "Project updated successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// delete project

router.post("/delete-project", async (req, res) => {
    try {
        const project = await Project.findOneAndDelete({ _id: req.body._id });
        res.status(200).send({
            data: project,
            success: true,
            message: "Project deleted successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// update contact
router.post("/update-contact", async (req, res) => {
    try {
        const contact = await Contact.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: contact,
            success: true,
            message: "Contact updated successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// admin-login
router.post('/admin-login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username, password: req.body.password });
        user.password = "";
        if (user) {
            res.status(200).send({
                data: user,
                success: true,
                message: "Login successful",
            });
        }
        else {
            res.status(200).send({
                data: user,
                success: false,
                message: "Invalid Username or Password",
            })
        }
    } catch (error) {
        res.status(500).send(error);
    }

})

module.exports = router;