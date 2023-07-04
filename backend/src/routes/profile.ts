import express from "express";
import { detail, create, update, remove } from "../actions/profile";

const router = express.Router();


router.get("/:id", detail);
router.post("", create);
router.delete("/:id", remove);
router.put("/:id", update);

export default router;