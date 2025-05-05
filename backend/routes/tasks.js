const express = require('express');
const router = express.Router();
const db  = require('../db');

router.get('/',async (req,res)=>{
    try{
        const [tasks]  = await db.query('SELECT * FROM tasks');
        res.json(tasks);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }

    
});

router.post('/' , async (req,res)=>{
    try{
        const { title, description} = req.body;

        if(!title){
            return res.status(400).json({error: 'Title is required'});

        }

        const  [result] = await db.query(
            'INSERT INTO tasks (title, description) VALUES (?, ?)',
            [title, description || '']
        );
        res.status(201).json({
            id: result.insertId,
            title,
            description: description || '',
            is_completed: 0,
            created_at: new Date()
        });
    } catch(error){
        res.status(500).json({error: error.message});
    }
});

router.put('/:id/complete', async (req,res)=> {
    try{
        const { id }  = req.params;
        const [result] = await db.query(
            'UPDATE tasks SET is_completed = 1 WHERE id = ?',
            [id]
        );

        if(result.affectedRows === 0){
            return res.status(404).json({ error : 'task not found'});
        }

        res.json({ message: "task marked as completed"});

    }catch(error){
        res.status(500).json({error: error.message});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        const [result] = await db.query('DELETE FROM tasks WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Task not found' });
        }
        
        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

module.exports = router;