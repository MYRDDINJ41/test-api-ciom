import { db } from "../model/Storage.js";

export const getSolutions = async (req, res) => {
  try {
    //throw new Error('Demo Error');
    const [rows] = await db.query("SELECT * FROM solution_ciom");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getCategories = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM category_solution");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getStorageCategories = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM storage_category");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const createSolution = async (req, res) => {
  try {
    const { name_solution, tittle_solution, description_solution } = req.body;
    const result = await db.query(
      "INSERT INTO solution_ciom (name_solution, tittle_solution, description_solution, date_create, date_update) VALUES (?, ?, ?, UNIX_TIMESTAMP(), UNIX_TIMESTAMP())",
      [name_solution, tittle_solution, description_solution]
    );

    const affectedRows = result[0].affectedRows;
    res.send({ affectedRows });
  } catch (error) {
    return res.status(500).send(error.message || error);
  }
};

export const deleteSolution = async (req, res) => {
  try {
    const solution_id = req.params.id;
    const result = await db.query(
      "DELETE FROM solution_ciom WHERE solution_id = ?",
      [solution_id]
    );

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Solution no found",
      });

    res.sendStatus(204).json({
      message: "Solution deleted",
    });
  } catch (error) {
    return res.status(500).send(error.message || error);
  }
};

export const updateSolution = async (req, res) => {
  try {
    const { id } = req.params;
    const { name_solution, tittle_solution, description_solution } = req.body;
    const result = await db.query(
      "UPDATE solution_ciom SET name_solution = IFNULL(?, name_solution), tittle_solution = IFNULL(?, tittle_solution), description_solution = IFNULL(?, description_solution), date_update = UNIX_TIMESTAMP() WHERE solution_id = ?",
      [name_solution, tittle_solution, description_solution, id]
    );
    const [rows] = await db.query(
      "SELECT * FROM solution_ciom WHERE solution_id = ?",
      [id]
    );

    res.json(rows[0]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Solution no Found" });
  } catch (error) {
    return res.status(500).send(error.message || error);
  }
};

export const updataSubCategory = async (req, res) =>{
  try {
    const {id}  = req.params;
    const {name_sub_category, tittle_sub_category, description_sub_category, route_img, main_category_id} = req.body;
    const result = await db.query(
      "UPDATE sub_category SET name_sub_category = IFNULL(?, name_sub_category), tittle_sub_category = IFNULL(?, tittle_sub_category), description_sub_category = IFNULL(?, description_sub_category), route_img = IFNULL(?, route_img), main_category_id = IFNULL(?, main_category_id), date_update = UNIX_TIMESTAMP() WHERE sub_category_id =?", [name_sub_category, tittle_sub_category, description_sub_category, route_img, main_category_id, id]
    )
  } catch (error) {
    
  }
}