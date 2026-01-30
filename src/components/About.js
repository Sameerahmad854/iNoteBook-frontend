import React from "react";

const About = () => {
  return (
    <div className="container my-4">
      <h1 className="mb-3">About iNoteBook</h1>
      <p>
        <strong>iNoteBook</strong> is a modern note-taking web application that
        helps you organize your thoughts, tasks, and important information
        efficiently.
      </p>
      <h3 className="mt-4">Key Features:</h3>
      <ul>
        <li>
          <strong>Add Notes:</strong> Quickly add new notes with title,
          description, and tags.
        </li>
        <li>
          <strong>Edit Notes:</strong> Update your existing notes anytime.
        </li>
        <li>
          <strong>Delete Notes:</strong> Remove notes you no longer need.
        </li>
        <li>
          <strong>Secure Access:</strong> Only registered users can access and
          manage their notes.
        </li>
        <li>
          <strong>Account Management:</strong> Keep your notes safe under your
          personal account.
        </li>
      </ul>
      <h3 className="mt-4">Why Use iNoteBook?</h3>
      <p>
        iNoteBook is lightweight, user-friendly, and works in real-time to
        ensure your notes are always up-to-date. Whether you are a student,
        professional, or someone who likes to stay organized, iNoteBook is
        designed to make your life easier.
      </p>
    </div>
  );
};

export default About;
