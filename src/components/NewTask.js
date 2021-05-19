import React from 'react';

export default function NewTask({ newTask, handleChange, handleSubmit }) {
    
    return (
        <form  onSubmit={handleSubmit}>
            <div className="form-group" style={{display: 'inline'}}>
                <input 
                  type="text" 
                  className="form-control" 
                  id="exampleInputEmail1" 
                  aria-describedby="emailHelp"
                  name='title'
                  placeholder="New Task"
                  value={newTask.title || ""}
                  onChange={handleChange}
                  />
            </div>
            {!newTask.title ? null : (
                <>
                  <textarea
                    name="description"
                    className="form-control"
                    placeholder="Details.."
                    value={newTask.description || ""}
                    onChange={handleChange}
                    />
                    <button type="submit" className="btn btn-primary" style={{margin: '10px 0px 0px 0px'}}>Add Task</button>
                </>
            )}
        </form>
    )
}