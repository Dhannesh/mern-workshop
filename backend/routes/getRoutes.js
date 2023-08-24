import express from "express";
import {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} from "../controllers/goalsController.js";

const router = express.Router();

// router.get("/", getGoals);
// router.post("/", setGoals);
router.route("/").get(getGoals).post(setGoals);
//update
router.put("/:id", updateGoals);
router.delete("/:id", deleteGoals);
// router.route("/:id").delete(deleteGoals).put(updateGoals)
export default router;
