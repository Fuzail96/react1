import React from "react";

export default function TasksList({ allTasks, handleDelete, handleEdit }) {
    return (
        <div className="container">
               {allTasks.length > 0 ? (
                   <div>
                       <ul className="list-group">
                           {allTasks.map(allTask => (
                            <li key={allTask.id} className="list-group-item list-group-item-info" style={{margin: '6px 0 0 0'}}>
                                <div>
                                <h2 style={{display: 'inline-block'}}>{allTask.title}</h2>
                                <span className="" style={{float: 'right', margin: '3px 5px'}}>
                                    <button onClick={() => handleDelete(allTask.id)} className="btn btn-sm btn-outline-dark delete">x</button>
                                </span>
                                <span className="" style={{float: 'right', margin: '0px 5px'}}>
                                    <button type='button' className="btn btn-primary" onClick={() => handleEdit(allTask)}>Edit</button>
                                </span>
                                </div>
                                {!allTask.description ? null : <p>{allTask.description}</p>}
                                
                            </li>
                           ))}
                        </ul>
                    </div>    
               ) : (
                   <div> null </div>
               )}
           </div>
    )
}