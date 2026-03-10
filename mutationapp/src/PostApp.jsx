import { useQuery, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { PlusCircle, Loader2, FileText, Send } from "lucide-react";

const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  if(!response.ok) throw new Error('네트워크 응답에 문제가 발생했습니다...⏱️');
  return response.json();
}

const createPost = async ({ title, body }) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({ title, body, userId: 1 }),
    headers: { 'Content-Type' : 'application/json; charset=UTF-8' }
  });
  return response.json();
}