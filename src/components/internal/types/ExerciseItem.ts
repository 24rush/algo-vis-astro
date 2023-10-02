export default class ExerciseItem {
    desc: string;
    solution: string;
    code: string;
    id : string;

    constructor(id: string, desc: string, solution: string, code: string) {
        this.id = id;
        this.desc = desc;
        this.code = code;
        this.solution = solution;        
    }
}