import express from "express";
import { detail, update, remove } from "../actions/sobremesas";

const router = express.Router();


router.get("/:id", detail);
router.delete("/:id", remove);
router.put("/:id", update);

export default router;