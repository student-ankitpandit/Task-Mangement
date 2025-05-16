const express = import('express');
const cors = import('cors');
const { createClient } = import('@supabase/supabase-js');
import('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(import.meta.process.env.SUPABASE_URL, import.meta.process.env.SUPABASE_KEY);

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', service: 'Task Manager API with Supabase' });
});

// Get all tasks
app.get('/api/tasks', async (req, res) => {
  const { data, error } = await supabase
    .from('tasks')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// Create a task
app.post('/api/tasks', async (req, res) => {
  const { title, completed = false, priority = 'normal' } = req.body;

  const { data, error } = await supabase
    .from('tasks')
    .insert([{ title, completed, priority }])
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
});

// Update a task
app.put('/api/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { title, completed, priority } = req.body;

  const { data, error } = await supabase
    .from('tasks')
    .update({ title, completed, priority })
    .eq('id', id)
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  if (!data) return res.status(404).json({ error: 'Task not found' });

  res.json(data);
});

// Delete a task
app.delete('/api/tasks/:id', async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase
    .from('tasks')
    .delete()
    .eq('id', id);

  if (error) return res.status(400).json({ error: error.message });
  res.status(204).end();
});

// Start server
const PORT = import.meta.process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
