import { db } from "../model/Storage.js";

export const getUsers = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM user_landing")
        res.json(rows);    
    } catch (error) {
        res.json({message: error.message});
    }
};
export const createUser = async (req, res) => {
    const {name_u, mail_u, pass_u} = req.body
    try {
        const result = await db.query("INSERT INTO user_landing VALUES (?,?,?, 0, 0, UNIX_TIMESTAMP(), UNIX_TIMESTAMP())",[name_u, mail_u, pass_u])
        const affectedRows = result.rows;
    } catch (error) {
        res.json({message: error.message})
    }
};
export const deleteUser = async (req, res) => {
    try {
        const result = await db.query("DELETE FROM user_landing WHERE id = ?", [req.params.id])
        const affectedRows = result.rows
    } catch (error) {
        res.json({message: error.message})
    }
};

export const updateUser = async(req, res) => {
    
    const id_u = req.params.id;

    const result = await db.query("SELECT * FROM user_landing WHERE id = ?", [id_u])

    const {name_u, mail_u, pass_u, activate_NoActive} = req.body 

    if (result.length > 0) {
        await db.query("UPDATE user_landing SET name_u = IFNULL(?, name_u), mail_u = IFNULL(?, mail_u), pass_u = IFNULL(?, pass_u), email_u = IFNULL(?, email_u), active_NoActive = IFNULL(?, active_NoActive), date_update = UNIX_TIMESTAMP() WHERE id = ?", [name_u, mail_u, pass_u, activate_NoActive, id_u])
        const [rows] = await db.query("SELECT * FROM user_landing WHERE id = ?", [id_u])
        res.json(rows[0]);
    } else {
        res.json({message: res.json(error.message)})
    }
};