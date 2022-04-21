export class pageElement{
    constructor(tag, className ='', innerHTML ='', id = ''){
        this.className = className;
        this.innerHTML = innerHTML;
        this.id = id;
        this.div = document.createElement(tag);
    }
    #setClassName(){
        this.className != '' ? this.div.classList.add(this.className) : null;
    }
    #setInnerHTML(){
        this.innerHTML != '' ? this.div.innerHTML = this.innerHTML : null;
    }
    #setId(){
        this.id != '' ? this.div.id = this.id : null;
    }
    setInnerHTML(text){
        this.innerHTML = text;
    }
    get get(){
        this.#setClassName();
        this.#setInnerHTML();
        this.#setId();
        return this.div;
    }
}