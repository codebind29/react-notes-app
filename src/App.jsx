import React, { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ title, details });

    setTask(copyTask);

    settitle("");
    setDetails("");
  };


  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1)

    setTask(copyTask)
  }


  return (
    <div className="notes-app min-h-screen bg-[#08090d] text-white lg:flex">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="notes-form flex flex-col items-start gap-4 p-6 sm:p-10 lg:w-1/2 lg:min-h-screen lg:justify-center lg:px-[8%]"
      >
        <div className="mb-4">
          <p className="eyebrow">Personal workspace</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">Add notes</h1>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">Capture the thoughts, tasks, and small details worth keeping close.</p>
        </div>

        <input
          type="text"
          placeholder="Enter Notes heading"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
          className="note-input w-full rounded-xl px-5 py-3 font-medium outline-none"
        />

        <textarea
          type="text"
          placeholder="Write Details"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          className="note-input min-h-36 w-full resize-y rounded-xl px-5 py-3 font-medium outline-none"
        />

        <button className="add-button w-full rounded-xl px-5 py-3 font-semibold outline-none active:scale-[.98]">
          Add note <span aria-hidden="true">+</span>
        </button>
      </form>

      <div className="notes-panel border-t border-white/10 p-6 sm:p-10 lg:w-1/2 lg:border-l lg:border-t-0 lg:px-[6%] lg:py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Your collection</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">Recent notes</h1>
          </div>
          <span className="note-count">{task.length}</span>
        </div>
        <div className="notes-grid mt-8 flex min-h-[22rem] flex-wrap content-start items-start justify-start gap-5 overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="note-card flex h-56 w-full flex-col items-start justify-between overflow-hidden rounded-2xl px-5 pb-5 pt-6 text-slate-100 sm:w-44"
              >
                <div>
                  <h3 className="break-words text-lg font-semibold leading-tight">
                    {elem.title}
                  </h3>
                  <p className="mt-3 break-words text-xs font-medium leading-5 text-slate-400">
                  {elem.details}
                  </p>
                </div>
                <button onClick={() => {
                  deleteNote(idx)
                }} className="delete-button w-full cursor-pointer rounded-lg py-2 text-xs font-semibold active:scale-[.98]">Delete note</button>
              </div>
              
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
