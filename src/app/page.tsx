'use client';

import { useMutation } from 'convex/react';
import { useState } from 'react';
import { createTodo } from './../../convex/todos';
import { api } from '../../convex/_generated/api';

export default function Index() {
  const [text, setText] = useState('');
  const createTodo = useMutation(api.todos.createTodo);

  return (
    <>
      <h1>Home Page</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createTodo({ text });
        }}
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="text-black"
        />
        <button>Create</button>
      </form>
    </>
  );
}
