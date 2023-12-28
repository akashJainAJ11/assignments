const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    User.create({
        username,
        password
    })
    res.json({
        message: "User created successfully"
    })
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});
    res.json({
        course: response
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const  courseId = req.params.courseId;
    const username = req.body.username;
    try{
        await User.updateOne({
            username: username
        }, {
            "$push":{
                purchasedCourses: courseId
            }
        })
    }catch(e){
        console.log(e)
    };
    res.json({
        message: 'purchased complete'
})
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    });
    const course = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });
    res.json({
        course: course
    })
});

module.exports = router