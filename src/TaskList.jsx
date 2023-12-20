function TaskList({ tasks, removeTask, editTask, doneTask }) {
  if (tasks.length === 0) {
    return <></>;
  }
  return (
    <>
      <div className="p-3 mt-5 border rounded bg-light">
        <h4 className="">Görevler: </h4>
        <ul className="list-group my-3">
          {tasks.map((item) => (
            <li className={`list-group-item ${tasks.isDone}`} key={item.uuid}>
              {item.task}
              <div className="btn-group float-end" role="group">
                <button
                  className="btn btn-sm btn-success"
                  onClick={() => doneTask(item.uuid)}
                >
                  Bitti
                </button>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => editTask(item.uuid)}
                >
                  Düzenle
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => removeTask(item.uuid)}
                >
                  Sil
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TaskList;
