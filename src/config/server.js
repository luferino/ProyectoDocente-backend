import {createApp} from '../app.js';

export function startServer() {
    const app = createApp();
    const port = process.env.PORT || 3000;
    
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}