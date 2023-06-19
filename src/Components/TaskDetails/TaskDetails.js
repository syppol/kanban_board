import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TaskDetails = ({ tasks }) => {
  const { taskId } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const selectedTask = tasks.find((task) => task.id === taskId);
    setTask(selectedTask);
  }, [taskId, tasks]);

  if (!task) {
    return <div>Loading...</div>; // Add loading state if the task is not found yet
  }

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      {/* Display other task details */}
    </div>
  );
};

export default TaskDetails;