import React from "react";
import GroupSelect from "../Components/GroupSelectButton/GroupSelect"
import PageHeader from "../Components/PageHeader/PageHeader"
import './TaskCreate.css';

function TaskCreate(){
    return(
        <div class = "main">
            <form action="" method="">
            <div class="form-group row">
                <label id="title" for="title-id">Title: </label>
                <input type="text" class="form-control" id="title-id" name="title" placeholder="Add Title"></input>
                <button type="button" class="save">Save</button>
                <button type="button" class="cancel">Cancel</button>
            </div>
            <div class="form-group row">
                <label for="member-id">Member: </label>
                <input type="text" class="form-control" id="member-id" name="member" placeholder="Add Member"></input>
            </div>
            <div class="form-group row">
                <label for="date-id">Due Date: </label>
                <input type="date" class="form-control" id="date-id" name="date"></input>
            </div>
            <div class="form-group row">
                <label for="description-id">Description: </label>
            </div>
            <div class="form-group-row">
                <input type="text" class="form-control" id="description-id" name="description" placeholder="Add Description"></input>
            </div>
            <div class="form-group row">
                <label for="difficulty-id">Difficulty: Stars? </label>
                <button type="button" class="delete">Delete Task</button>
            </div>

            </form>
        </div>
    )
}

export default TaskCreate;