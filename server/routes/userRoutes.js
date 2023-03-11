import express from "express"
const router = express.Router()

// import controllers
import {createUser,getUser,login,deleteUser,addReviews,addClothes,getClothes} from "../controllers/userController.js"

router.route("/createUser").post(createUser);
router.route("/login").post(login);
router.route("/getUser").get(getUser);
router.route("/getclothes").post(getClothes);
router.route("/delete").delete(deleteUser);
router.route("/add").post(addReviews);
router.route("/add1").post(addClothes);
export default router;