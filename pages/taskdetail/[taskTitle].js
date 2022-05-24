import React from "react";
import TaskPage from "../../components/TaskPage";
import { useRouter } from "next/router";

function taskTitle() {
  const router = useRouter();
  const Title = router.query.taskTitle;

  return (
    <>
      <TaskPage title={Title} />
    </>
  );
}

export default taskTitle;
