import React from 'react';
import ReactDOM from 'react-dom';

import Done from "./components/Check-component"
import TodoList from "./components/TODO-component"
import Footer from "./components/Footer-component"

const data =[
    {text:"Wake Up", some:true},
    {text:"Try to take over the world!", some:false},
    {text:"I didn’t stupid with Gennady on the phones all night while going to the bar", some: true},
    {text:"Went to sleep", some: false}
]

const dataType=[
    {text: "Wake Up"},
    {text: "Try to take over the world!"},
    {text: "I didn’t stupid with Gennady on the phones all night while going to the bar"},
    {text:"Went to sleep"}
]

const el = (
    <div>
        <h1 id="title">My todo list</h1>
        <div class="d-flex justify-content-around">
            <TodoList dataTodo={data}/>
            <Done dataType={dataType} />
        </div>

        <Footer/>
    </div>
);
ReactDOM.render(el, document.getElementById("root"))
