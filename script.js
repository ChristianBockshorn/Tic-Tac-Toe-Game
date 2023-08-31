let fields = [];
let currentShape = 'cross';

function fillShape(id) {
    if (currentShape == 'cross') {
        currentShape = 'circle'
    } else {
        currentShape = 'cross'
    }
    
    fields[id] = currentShape;
    console.log(fields);
}