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
    const id = [req.params.id];
    const [rows] = await db.query(
      "SELECT * FROM category_solution WHERE id = ?", [id]
    )
    res.json(rows);

  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getCategoriesByIdSolution = async (req, res) => {
  try{
    const [result] = await db.query("SELECT * FROM solution_ciom WHERE id = ?", [req.params.id])
    if (result.length > 0){
      const idSolution = [req.params.id]
      const [rows] = await db.query("SELECT * FROM category_solution WHERE id_s = ? ", [idSolution]);
      res.json(rows);
    }else{
      return res.send({ message: "Solution not found" });
    }
    
  }catch (error) { 
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const createCategory = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM solution_ciom WHERE id = ?", [req.params.id]
    );
    if (rows.length > 0) {
      const id_s = req.params.id;
      const {tittle_c, description_c, img_c,
      } = req.body;

      const result = await db.query(
        "INSERT INTO category_solution (tittle_c, description_c, img_c, active_NoActive, id_s, date_create, date_update) VALUES (?, ?, ?, ?, 0, ?, UNIX_TIMESTAMP(), UNIX_TIMESTAMP())",
        [tittle_c, description_c, img_c, id_s
        ]
      );

      const affectedRows = result[0].affectedRows;
      res.send({ affectedRows });
    } else {
      return res.send({ message: "Solution not found" });
    }
  } catch (error) {
    return res.status(500).send(error.message || error);
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const id_c = req.params.id;
    const result = await db.query(
      "DELETE FROM category_solution WHERE id = ?",
      [id_c]
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
    const {tittle_c, description_c, img_c, id_s, active_NoActive
    } = req.body;
    const result = await db.query(
      "UPDATE category_solution SET tittle_c = IFNULL(?, tittle_c), description_c = IFNULL(?, description_c), img_c = IFNULL(?, img_c), id_s = IFNULL(?, id_s), active_NoActive = IFNULL(?, active_NoActive), date_update = UNIX_TIMESTAMP() WHERE id = ?",
      [tittle_c, description_c, img_c, id_s, active_NoActive, id]
    );
    const [rows] = await db.query(
      "SELECT * FROM category_solution WHERE id = ?",
      [id]
    );

    res.json(rows[0]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Solution no Found" });
  } catch (error) {
    return res.status(500).send(error.message || error);
  }
};
