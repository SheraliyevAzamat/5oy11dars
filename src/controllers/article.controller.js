import { Article } from "../models/index.js";
import { BaseController } from "./base.controller.js";

class ArticleController extends BaseController {
	constructor() {
		super(Article);
	}
}

export const articleController = new ArticleController();