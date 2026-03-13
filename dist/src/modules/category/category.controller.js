import { categoryService } from "./category.service";
const createCategory = async (req, res) => {
    try {
        const data = req.body;
        const result = await categoryService.createCategory(data);
        res.status(201).json({
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            error: "Category creation failed!!",
            message: error instanceof Error ? error.message : "Unknown error",
        });
    }
};
const getCategory = async (req, res) => {
    try {
        const user = req.user;
        const result = await categoryService.getCategory();
        res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(404).json({
            error: "Category fetch failed!!",
            message: error instanceof Error ? error.message : "Unknown error",
        });
    }
};
const deleteCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await categoryService.deleteCategory(id);
        res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(404).json({
            error: "Category fetch failed!!",
            message: error instanceof Error ? error.message : "Unknown error",
        });
    }
};
export const categoryController = {
    createCategory,
    getCategory,
    deleteCategory,
};
//# sourceMappingURL=category.controller.js.map