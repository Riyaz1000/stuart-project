import express from "express";

import {
  movieCreate,
  movieDelete,
  movieDetail,
  movieRead,
  movieUpdate,
} from "../controllers/instagram.controller.js";

const router = express.Router();

// create
router.post("/", movieCreate);

// detail movie (individual showing)
router.get("/:id", movieDetail);

// read
router.get("/", movieRead);

// update
router.put("/:id", movieUpdate);

// delete
router.delete("/:id", movieDelete);

export default router;

// hriyaz1412
// Nn5VsVGsAW7wurxy
// mongodb+srv://hriyaz1412:<db_password>@cluster0.wiqiy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
