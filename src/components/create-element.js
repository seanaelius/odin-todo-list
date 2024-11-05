export default function create_element(type, classList, text) {
    //########################### CREATE ELEMENT ###########################
    let ele = document.createElement(`${type}`)

    //########################### ADD CLASS NAMES ###########################
    if ( classList != null ) {
        for (let className in classList){
            ele.classList.add(classList[className]);
        }
    }
    //########################### ADD TEXT TO ELEMENT ###########################
    if (text != null) ele.textContent = text

    return ele;
}
