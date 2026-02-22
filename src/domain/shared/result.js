export class Result {
    constructor(isSuccess, value, error) {
        this.isSuccess = isSuccess;
        this.isfailure = !isSuccess;
        this.error = error;
        this.value = value;

        Object.freeze(this);
    }

    static ok(value) {
        return new Result(true, value, null);
    }
    
    static fail(error) {
        return new Result(false, null, error);
    }   
}