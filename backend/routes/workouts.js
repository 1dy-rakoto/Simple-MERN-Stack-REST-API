const express=require('express');
const {
    getAllWorkouts,
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
}=require('../controllers/workoutController')
const router=express.Router();

//GET all workouts
router.get('/',getAllWorkouts);

//GET a single workout
router.get('/:id',getWorkout)

//POST a new workout
router.post('/',createWorkout)

//DELETE a single workout
router.delete('/:id',deleteWorkout)

//UPDATE a  workout
router.patch('/:id',updateWorkout)

module.exports=router