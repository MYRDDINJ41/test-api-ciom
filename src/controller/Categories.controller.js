import { db } from "../model/Storage.js";

export const getCategories = async (req, res) => {
    try {
      const [rows] = await db.query("SELECT * FROM category_solution");
      res.json(rows);
    } catch (error) {
      return res.status(500).json({ message: "Something went wrong" });
    }
};

export const getCategoryId = async (req, res) => {
  try {
    const id = [req.params.id]
    const [rows] = await db.query("SELECT * FROM category_solution WHERE id_category = ?", [id])
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const createCategory = async (req, res) => {
    try {
      const [ rows ] = await db.query("SELECT * FROM solution_ciom WHERE id_solution = ?", [ req.params.id ] )
      if(rows.length > 0) {

        const id_solution = req.params.id;

        const { name_category, tittle_category, description_category, img_category, date_create, date_update } = req.body;

        const result = await db.query(
          "INSERT INTO category_solution (name_category, tittle_category, description_category, img_category, id_solution, date_create,    date_update) VALUES (?, ?, ?, ?, ?, UNIX_TIMESTAMP(), UNIX_TIMESTAMP())",
          [ name_category, tittle_category, description_category, img_category, id_solution, date_create, date_update ]
        );

        const affectedRows = result[0].affectedRows;
        res.send({ affectedRows });

      } else { return res.send({message: "Solution not found"}); }
      
    } catch (error) {
      return res.status(500).send(error.message || error);
    }
  };

  export const deleteCategory = async (req, res) => {
    try {
      const solution_id = req.params.id;
      const result = await db.query(
        "DELETE FROM category_solution WHERE solution_id = ?",
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

  export const updateCategory = async (req, res) => {
    try {
      const { id } = req.params;
      const { name_solution, tittle_solution, description_solution } = req.body;
      const result = await db.query(
        "UPDATE category_solution SET name_category = IFNULL(?, name_category), tittle_category = IFNULL(?, tittle_category), description_category = IFNULL(?, description_category), img_category = IFNULL(?, img_category), id_solution = IFNULL(?, id_solution) date_update = UNIX_TIMESTAMP() WHERE solution_id = ?",
        [name_solution, tittle_solution, description_solution, id]
      );
      const [rows] = await db.query(
        "SELECT * FROM category_solution WHERE id_category = ?", [id]
      );
  
      res.json(rows[0]);
  
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Solution no Found" });
    } catch (error) {
      return res.status(500).send(error.message || error);
    }
  };