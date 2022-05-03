import React from "react";
import GroupSelect from "../../Components/GroupSelectButton/GroupSelect";
import PageHeader from "../../Components/PageHeader/PageHeader";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import './TaskCreate.css';

function TaskCreate(){
    const ratingChanged = (newRating) => {
        // console.log(newRating);
      };
    return( 
        <div class = "main">
            {/* <PageHeader name="Create/Edit Task"></PageHeader> */}
            <form action="" method="">
            <div class="form-group row">
                <label id="title" for="title-id">Title: </label>
                <input type="text" class="form-control" id="title-id" name="title" placeholder="Add Title"></input>
                <button type="button" class="save">Save</button>
                <button type="button" class="cancel">Cancel</button>
            </div>
            <div class="form-group row">
                <label id="member" for="member-id">Member: </label>
                <input type="text" class="form-control" id="member-id" name="member" placeholder="Add Member"></input>
            </div>
            <div class="form-group row">
                <label id="dated" for="date-id">Due Date: </label>
                <input type="date" class="form-control" id="date-id" name="date"></input>
            </div>
            <div class="form-group row">
                <label for="description-id">Description: </label>
            </div>
            <div class="form-group-row">
                <input type="text" class="form-control" id="description-id" name="description" placeholder="Add Description" align="left"></input>
            </div>
            <div class="form-group row">
                <label id="difficulty" for="difficulty-id">Difficulty: </label>
                <label>



                </label>
                render(
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                />,
                );
                <button type="button" class="delete">Delete Task</button>
            </div>

            </form>
        </div>
    )
}

export default TaskCreate;