class ForcastCard extends HTMLElement{
    static observedAttributes = ["high", "low", "current", "condition","city"];

    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'})
        shadowRoot.innerHTML = `
        <div>
            <span id='city'>Loading</span>
            <span id='low'>Loading</span>
            <span id='high'>Loading</span>
            <span id='current'>Loading</span>
            <span id='condition'>Loading</span>
        </div>`;

    }

    attributeChangedCallback(name, oldValue, newValue){

        console.log(`Atrribute ${name} changed from ${oldValue} to ${newValue}`)

        const target = this.shadowRoot.getElementById(name);
        if(!target){
            return;
        }

        switch (name){
            case 'high':
            case 'low':
            case 'current':
                if(isNaN(newValue)) {
                    target.innerText = 'N/A';
                } else {
                    target.innerText = `${newValue}°`;
                }
                break;
            default:
                target.innerText = newValue;
        }

        // if( name === 'condition'){
        //     target.innerText = `${newValue}`;
        // }
        // else if( name === 'city'){
        //     target.innerText = `${newValue}`;
        // }
        
    }
}

customElements.define('forcast-card', ForcastCard);