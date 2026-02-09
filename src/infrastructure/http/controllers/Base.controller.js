export class BaseController {
    handle(method) {
        return (req, res, next) => {
            Promise.resolve(method.call(this, req, res, next))
                .catch(next);
        }
    }
}