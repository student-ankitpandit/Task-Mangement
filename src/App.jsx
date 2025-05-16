import { useEffect, useState } from 'react';
import ListTask from './components/ListAllTask';
import AddTask from './components/AddTask';
import supabase from './utils/supabase';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks on mount
  useEffect(() => {
    const getData = async () => {
      await fetchTasks();
    }
    getData();
  }, []);

  // Fetch tasks from Supabase
  const fetchTasks = async () => {
    const { data, error } = await supabase.from('tasks').select('*');
    if (error) console.error('Error fetching tasks:', error);
    else setTasks(data);
  };

  // Add task to Supabase
  const addTask = async (title) => {
    const { data, error } = await supabase
      .from('tasks')
      .insert([{ title, completed: false }])
      .select();

    if (error) console.error('Error adding task:', error);
    else setTasks(prev => [...prev, ...data]);
  };

  // Toggle task completion
  const toggleTask = async (id, currentStatus) => {
    const { error } = await supabase
      .from('tasks')
      .update({ completed: !currentStatus })
      .eq('id', id);

    if (error) console.error('Error toggling task:', error);
    else fetchTasks(); // Refresh tasks
  };

  // Delete a task
  const deleteTask = async (id) => {
    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', id);

    if (error) console.error('Error deleting task:', error);
    else fetchTasks(); // Refresh tasks
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        
        <h1 className="text-3xl font-bold text-center mb-8">
          Manage Your Tasks Efficiently
        </h1>
        <AddTask onAdd={addTask} />
        <ListTask 
          tasks={tasks} 
          onToggle={(id) => {
            const task = tasks.find(t => t.id === id);
            toggleTask(id, task.completed);
          }}
          onDelete={deleteTask}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;


//   // initializing tasks from local storage if available

// // const savedItems = localStorage.getItem('tasks');
//   // return savedItems ? JSON.parse(savedItems) : []};

//   // saving taks to local storage whenever they change

//   // useEffect(() => {
//   //   localStorage.setItem('tasks', JSON.stringify(tasks));
//   // }, [tasks])