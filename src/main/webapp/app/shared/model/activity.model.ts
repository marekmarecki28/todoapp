export interface IActivity {
    id?: number;
    text?: string;
}

export class Activity implements IActivity {
    constructor(public id?: number, public text?: string) {}
}
