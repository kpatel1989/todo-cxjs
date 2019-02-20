import { Controller } from "cx/ui";
import defaultData from "../../mock/data.json";
import {get} from "../../apis/rest";
import {EndPoints} from "../../apis/end-points";

export default class extends Controller {
    onInit() {
        // this.store.init("allTodos", defaultData.defaultTodoList);
        get(EndPoints.appointments).then(({data}) => {
            console.log(data);
            this.store.set('allTodos', data.body);
        })
    }
}
