import { Router } from "express";
import {
  requestContact,
  acceptRequset,
  declineRequest,
  cancelRequest,
  deleteContact,
} from "../controllers/contactRequestController";
import { isAuthenticatedUser } from "../middlewares/auth";

const router = Router();

router.route("/request").post(isAuthenticatedUser, requestContact);
router.route("/accept").post(isAuthenticatedUser, acceptRequset);
router.route("/decline").post(isAuthenticatedUser, declineRequest);
router.route("/cancel").post(isAuthenticatedUser, cancelRequest);
router.route("/delete").post(isAuthenticatedUser, deleteContact);

export default router;
