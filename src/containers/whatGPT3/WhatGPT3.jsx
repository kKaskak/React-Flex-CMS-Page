import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3" text="GPT-3 is an advanced natural language processing model developed by OpenAI. It is capable of generating human-like language and performing a variety of language tasks. Its capabilities have made it a popular tool among developers and businesses."/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="Chatbots simulate human-like conversations with users and are used in customer service, marketing, and other industries."/>
        <Feature title="Knowledgebase" text="The ChatGPT knowledgebase is a repository of information about a wide range of topics, accessible through natural language conversation. "/>
        <Feature title="Education" text="ChatGPT can support education by providing quick answers and explanations, personalized learning, and language practice opportunities."/>
      </div>
    </div>
  )
}

export default WhatGPT3