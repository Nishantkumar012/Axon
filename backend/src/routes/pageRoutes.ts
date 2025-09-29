import { Router } from "express";
import {
  createPageHandler,
  updatePageHandler,
  getPageByIdHandler,
  deletePageHandler,
  getUserPagesHandler,
} from "../controllers/pageController";

import {authMiddleware} from "../middleware/authMiddleware";

// import authmiddleware

const router = Router();

// all routes protected with auth
router.post("/", authMiddleware, createPageHandler);          // create page
router.get("/", authMiddleware, getUserPagesHandler);         // get all pages of user
router.get("/:pageId", authMiddleware, getPageByIdHandler);   // get page by id
router.patch("/:pageId", authMiddleware, updatePageHandler);  // update page
router.delete("/:pageId", authMiddleware, deletePageHandler); // delete page

export default router;
