
import React, { useState, useEffect } from "react";
import axios from "../config/axios";
import NewTask from "./NewTask";
import TasksList from "./TaskList";
import {Card} from '../Dashboard/Card';

export default function Modal() {
    const [newTask, setNewTask] = useState({title: null, description: null, completed: false});
    const [allTasks, setAllTasks] = useState([]);
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        axios.get("api/task-list/")
        .then((response) => { 
            const result = response.data 
            setAllTasks(result)
        }, (error) => {
            console.log(error)
        })
        setNewTask({})
        return  () => {console.log("unmount")}

    }, [])

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setNewTask((prev) => ({ ...prev, [name]: value}))
    } 
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (edit === false) {
            if (!newTask.title) return;
            axios.post("api/task-create/", {"title": newTask.title, "description": newTask.description, "completed": false})
            .then((response) => { 
            console.log(response);
            axios.get("api/task-list/")
            .then((response) => { 
                const result = response.data 
                setAllTasks(result)
            }, (error) => {
                console.log(error)
            })
            }, (error) => {
                console.log(error);
            })
            setNewTask({});
        }
        if (edit === true){
            axios.post(`api/task-update/${newTask.id}/`, {"title": newTask.title, "description": newTask.description, "completed": false})
            .then((response) => { 
            console.log(response);
            axios.get("api/task-list/")
            .then((response) => { 
                const result = response.data 
                setAllTasks(result)
                setEdit(false);
            }, (error) => {
                console.log(error)
            })  
            setNewTask({}); 
            }, (error) => {
                console.log(error);
            })  
        }
           
    }
 
    const handleDelete = (taskIdToRemove) => {
        axios.delete(`api/task-delete/${taskIdToRemove}/`)
        .then((response) => { 
           console.log(response);
        }, (error) => {
            console.log(error);
        })
        setAllTasks((prev) => prev.filter((task) => task.id !== taskIdToRemove));
      };

    const handleEdit = (taskToEdit) => {
        setEdit(true)
        setNewTask({id: taskToEdit.id, title: taskToEdit.title, description: taskToEdit.description})
    };
          
        
  
    return (
        <main>
            <Card height={180} style={{backgroundColor: 'darkturquoise'}}>
            <NewTask
             newTask={newTask}
             handleChange={handleChange}
             handleSubmit={handleSubmit}
            />
            </Card>
            <Card height={800} style={{backgroundColor: 'skyblue'}}>
            <TasksList
             allTasks={allTasks}
             handleDelete={handleDelete}
             handleEdit={handleEdit}
            />
            </Card>
        </main>
    ); 
}

