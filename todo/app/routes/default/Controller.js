import { Controller } from "cx/ui";
import defaultData from "../../mock/data.json";
import {post} from "../../apis/rest";
import {EndPoints} from "../../apis/end-points";

export default class extends Controller {
    onInit() {
        this.store.init("todo", defaultData.defaultTodo);
        this.store.init("allTodos", defaultData.defaultTodoList);
    }
    saveNote() {
        let { allTodos, todo } = this.store.getData();
        allTodos.push(todo);
        this.store.set("todo", defaultData.defaultTodo);
        this.store.set("allTodos", allTodos);
        console.log(allTodos);
        //Save Note API
        post(EndPoints.appointments,todo);
    }
}
