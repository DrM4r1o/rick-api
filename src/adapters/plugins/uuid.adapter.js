import { v4 as uuidv4 } from 'uuid';

const uuidAdapter = () => {
    const id = uuidv4()
    return id.split("-")[0]
}

export default uuidAdapter